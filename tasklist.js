const http =require("http");
const port = 3000;
const host = "127.0.0.1";

const taskList = [
    {
        id:1,
        taskName:"Go to the supermarket",
        description: "buy: eggs, rice, oil",
        state: true,
    },
    {
        id:2,
        taskName:"Study for the exam",
        description: "History of the French revolution",
        state: false,
    },
    {
        id:3,
        taskName:"Send an email",
        description: "Mr.Thompson",
        state: true,
    }
];

const server = http.createServer ((req,res)=>{
    if (req.method === "GET" && req.url === "/tasks") {
        res.setHeader ("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(taskList));

    } else {
        res.statusCode = 400;
        res.end ();
    }
});

server.listen (port , host, () => {
    console.log("Servidor funcionando en:" , host, port);
});
