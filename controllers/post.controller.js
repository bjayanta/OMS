function index(request, response) {
    const posts = "Posts list."
    response.send(posts)
}

module.exports = {
    index: index
}