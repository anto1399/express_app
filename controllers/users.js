module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) =>{
        res.render('users', {title: "Users", description: 'This is a simple page passed to the view for magic happendings.'});
    });
}