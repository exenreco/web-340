/**
 * Author:        Exenreco Bell
 * Date:          October 29, 2024
 * File Name:     server.js
 * Description:   creates a server with different endpoints
 */
"use strict";

const http = require("http");
const { URL } = require("url");

// TODO: Implement your server here
let character = null;

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && parsedUrl.pathname === "/create-character") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { class: charClass, gender, funFact } = JSON.parse(body);
      character = { class: charClass, gender, funFact }; // Assign to character variable
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Character created successfully" }));
    });
  } else if (
    req.method === "POST" &&
    parsedUrl.pathname === "/confirm-character"
  ) {
    // Logic to confirm the character
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Character confirmed", character }));
  } else if (req.method === "GET" && parsedUrl.pathname === "/view-character") {
    res.writeHead(200, { "Content-Type": "application/json" });

    if (character) {
      res.end(JSON.stringify({ character })); // Return the character object
    } else {
      res.end(JSON.stringify({ message: "No character found" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Start server only if the environment variable is not set to 'test'
if (process.env.NODE_ENV !== "test") {
  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}

module.exports = server;
