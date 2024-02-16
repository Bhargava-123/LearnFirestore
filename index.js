import express from 'express';
import cors from 'cors';
import session from 'express-session';
import {router} from "./routers/authRouter.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use(
    session({
        secret: "super-secret-key",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(router);


app.listen(4000, () => console.log("App started on port 4000"));