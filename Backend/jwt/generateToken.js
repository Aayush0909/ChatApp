import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId, res) =>{
   const token = jwt.sign({userId}, process.env.JWT_TOKEN,{
    expiresIn: "5d",
   }) ;
   res.cookie("jwt", token,{
    httpOnly: true, //  It prevents attacks where malicious code tries to steal the cookie (XSS attack).
    secure: true,  //  Ensures the cookie is sent only over HTTPS (a secure connection).
    samesite : "strict", // Ensures the cookie is sent only with requests from the same website.
   });
}
export default createTokenAndSaveCookie;


// *  This is a custom function to generate a token for a user and save it as a cookie in their browser
// Useful because: Tokens help verify user identity without needing to send passwords with each request.