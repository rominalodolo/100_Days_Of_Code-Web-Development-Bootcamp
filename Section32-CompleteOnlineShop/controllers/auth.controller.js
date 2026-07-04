function getSignup(req, res, next) {
    res.send('<form action="/signup" method="POST"><input type="text" name="email"><input type="password" name="password"><button type="submit">Sign Up</button></form>');
}

module.exports = {
    getSignup: getSignup
};