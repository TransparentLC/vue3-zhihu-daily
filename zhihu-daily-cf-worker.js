addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const path = new URL(request.url).pathname;
    const headers = {
        'access-control-allow-origin': '*',
    };
    if (!path.startsWith('/api/')) {
        return new Response('', {
            status: 404,
            headers,
        });
    }
    const zhihuRequest = await fetch(`https://news-at.zhihu.com${path}`);
    for (const entry of zhihuRequest.headers.entries()) headers[entry[0]] = entry[1];
    delete headers['set-cookie'];
    return new Response(
        await zhihuRequest.text(),
        {
            status: zhihuRequest.status,
            headers,
        }
    );
}