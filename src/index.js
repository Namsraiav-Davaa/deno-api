addEventListener("fetch", (event) => {
    const response = new Response ("Hello world GG", {
        headers: {'content-type': 'text/plain'},
    });
    event.respondWith(response);
});