// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// npm install jsonwebtoken
// npm i @types/jsonwebtoken --save-dev
// TO CHECK THE TOKEN GENERATED: https://jwt.io/
import jwt from "jsonwebtoken";
const KEY = "whateverkey.youwant";

// http://localhost:3000/api/login
export default async (req, res) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end("ERROR! No body!");
    return;
  }

  console.log("REQUEST BODY: ", req.body);
  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "maxwilson" && password === "pass123",
      },
      KEY
    ),
  });
};
