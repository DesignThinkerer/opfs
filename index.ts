import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);

        // return index.html for root path
        if (url.pathname === "/"){
            return new Response(Bun.file("index.html"), {
                headers: {
                    "Content-Type": "text/html",
                },
            });
        }


        const body = figlet.textSync(`Not found --- Bun v${Bun.version}`);
        return new Response(body, { status: 404 });
    },
});

console.log(Bun.version);

console.log(`Listening on http://localhost:${server.port} ...`);