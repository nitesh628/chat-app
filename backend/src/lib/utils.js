import jwt from "jsonwebtoken";

export const generateToken = (userId , res) => {

    // generating jwt token

    const token  = jwt.sign({userId} , process.env.JWT_TOKEN, {
        expiresIn:"7d",
    });

    // sending jwt in cookies

    res.cookie("jwt" , token, {
        maxAge : 7 * 24 * 60 * 60 * 1000, // Millisecond
        httpOnly : true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict",  // CSRF attacks cross-site request forgery attacks
        secure : process.env.NODE_ENV != "development",
    });

    return token;
}