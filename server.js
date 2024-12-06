// Importing the required 'http' module
const http = require("http");

// Server configuration: port number
const PORT = 3000;

// Creating the HTTP server
const server = http.createServer((req, res) => {
  // Setting the response headers for JSON content
  res.writeHead(200, { "Content-Type": "application/json" });

  // Creating a response object
  const response = {
    message: "Hello! Welcome to our Node.js server.",
    status: "Success",
    timestamp: new Date().toISOString(),
  };

  // Sending the JSON response
  res.end(JSON.stringify(response));
});

// Starting the server and listening on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
