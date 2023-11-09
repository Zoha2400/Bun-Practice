import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname == "/") {
      return new Response("Main Page");
    } else if (url.pathname == "/hello") {
      const body = figlet.textSync("Hello World!");

      return new Response(body);
    }

    return new Response("404 Not Found");
  },
});

console.log(`Server is working on ${server.port}`);
