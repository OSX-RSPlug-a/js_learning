

Bun.serve({

    port: 3001,
    
    routes: {
  
        "/":
            new Response("Hello from Bun API side!"),


        "/api/status": new Response("OK"),

  
        "/users/:id": req => {
        return new Response(`Hello User ${req.params.id}!`);
        },

  
        "/api/posts": {
        GET: () => new Response("List posts"),
        POST: async req => {
            const body = await req.json();
            return Response.json({ created: true, ...body });
        },
        },

  
        "/api/*": Response.json({ message: "Not found" }, { status: 404 }),

  
        "/blog/hello": Response.redirect("/blog/hello/world"),

  
    },

  
    fetch(req) {
        return new Response("Not Found", { status: 404 });
    },
});


console.log("Bun server listening on:  http://localhost:3001 ");