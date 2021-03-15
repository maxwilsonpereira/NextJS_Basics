// API folder is basically a REST API endpoint!
// Next.js API route support:
// https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/basics
export default async (req, res) => {
  console.log("REQUEST BODY: ", req.body);
  console.log("REQUEST BODY username: ", req.body.username);
  console.log("QUERY PARAMS: ", req.query);
  console.log("URL: ", req.url);

  res.setHeader("X-Custom-Header", "We are open to hire people!");
  res.setHeader("Set-Cookie", "areyouprogrammer=true");
  res.statusCode = 200;
  res.json({ username: "John Doe", num: Math.random() * 10 });
};

// YOU CAN RUN THESE FETCH ON CONSOLE, emulating a frontend:
// The results will be shown on the backend console!
fetch("http://localhost:3000/api/basics", {
  method: "POST",
  body: "Fetching with body from console!",
});

fetch("http://localhost:3000/api/basics?username=Max%20Wilson", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "Max Wilson Body",
    password: "admin",
  }),
});
