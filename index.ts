import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync("Hello World!");

    return new Response(body);
  },
});

console.log(`Server is working on ${server.port}`);
