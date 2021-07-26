const http = require("http")
/**
 * Post
 *
 * GET /posts
 * GET/posts/:id
 * POST /posts
 */

const server = http.createServer((req, res) => {
  if (req.url === "/posts" && req.method === "GET") {
    res.statusCode = 200
    res.end("List of posts!")
  } else if (
    req.url &&
    /^\/posts\/[a-zA-Z0-9-_]+$/.test(req.url) &&
    req.method === "GET"
  ) {
    res.statusCode = 200
    res.end("some content of the post!")
  } else if (req.url === "/posts" && req.method === "POST") {
    res.statusCode = 200
    res.end("Creating post!")
  } else {
    res.statusCode = 404
    res.end("Not fround.")
  }
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server port = ${PORT}`)
})
