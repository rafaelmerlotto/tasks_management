import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import { board } from "./routes/board";
import { tasks } from "./routes/tasks";

configDotenv();
const server = express();

server.use(express.json());
server.use(cors());
server.use("/board", board)
server.use("/tasks", tasks)

server.get("/", async (req, res) => {
    return res.status(200).send("Server is running 🚀");
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`server started at 🚀 http://localhost:${PORT}`);
})