import figlet from "figlet";

const server = Bun.serve({
    fetch() {
        const body = figlet.textSync(`Bun v${Bun.version}`);
        return new Response(body);
    },
    port: 3000,
});

console.log(Bun.version);

console.log(`Listening on http://localhost:${server.port} ...`);