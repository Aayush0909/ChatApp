import express from "express";
import { sendMessage ,getMessage} from "../controller/message.controller.js";
import secureRoute from "../Middleware/secureRoute.js";

// this used to store the msg data into database, when hit post req.

const router = express.Router();

router.post("/send/:id",secureRoute ,sendMessage);
router.get("/get/:id",secureRoute ,getMessage);

export default router;