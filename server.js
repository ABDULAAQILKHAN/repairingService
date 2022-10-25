import express from 'express';
import cors from 'cors';
const server = express();
import path from 'path';
import {fileURLToPath} from 'url';
server.use(express.json());
server.use (express.urlencoded({
    extended: true
}));
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
server.use(cors());

const PORT = process.env.PORT || 9000;
if (process.env.NODE_ENV === "production") {
    server.use(express.static("app/build"));
    
    server.get('/', function (req, res) {
        //res.send("<h1>hellow world</h1>");
        res.sendFile(path.join(__dirname,'app','build', 'index.html'));
    });
}
else {
    server.use(express.static("app/build"));
    server.get('/', function (req, res) {

        //res.send("<h1>hellow world</h1>");
        res.sendFile(path.join(__dirname,'app','build', 'index.html'));
    });
    
}


server.post('/serviceform',(req,res)=>{
    const {naame , address, number} = req.body;
    console.log(naame, address, number);
    res.send({message: "sent"})
})

server.post('/thank',(req,res)=>{
    res.send({name: naame})
})


server.listen(PORT,()=>{
    console.log("server running");
})