import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import path from "path";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app , server  } from "./SocketIO/server.js";


dotenv.config();

app.use(express.json());
app.use(cookieParser()); // to-parse the cookie from request headers required for Jwt authentication. cOOKies are stored in browser HTTP only and secure cookies
app.use(cors());

const PORT = process.env.PORT || 5001 ;
const URI = process.env.MONGODB_URI;


try{
    mongoose.connect(URI);
    console.log("MOngodb Connected");
} catch (error){
    console.log(error);
}

app.use("/api/user", userRoute);// middleware
app.use("/api/message", messageRoute);


// --------------- code for deployment --------------------

if (process.env.NODE_ENV === 'production') {
  const dirPath =  path.resolve();
  app.use(express.static("./frontend/dist"));
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(dirPath, './frontend/dist','index.html'));
  });
}

server.listen(PORT, () => {
  console.log(` Server is listening on port ${PORT}`);
});