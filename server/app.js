import express from 'express';
import cors from 'cors';

import connectToMongoDB from "./src/database/connectToMongoDB.js";
import router from './routes.js';

const PORT_URL = 31111;
const REACT_URL = 'http://localhost:5173';

const app = express();

app.use(express.json());
app.use(cors({
    origin: REACT_URL
}));
app.use('/', router);


const server = async () => {
    try {
        await connectToMongoDB();

        app.listen(PORT_URL, () => {
            console.log(`Server is running on port http://localhost:${PORT_URL}...`);
        });

    } catch (error) {
        console.log("Failed to start to server...", error.message)
        process.exit(1);
    }
}

server();