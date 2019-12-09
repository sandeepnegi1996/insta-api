const express = require('express');

const app = express();

app.use(express.json()) //this is used for middleware which

app.get('/', (req, res) => {
    console.log("inside the get request");
    res.send({
        sub: 'hello world'
    });
})

app.post('/api/login', (req, res) => {

    const loginObj = {
        user_name: req.body.user,
        password_input: req.body.pass

    };


    console.log(userObj);

    res.send(userObj);

});

app.post('/api/signup', (req, res) => {
    //username
    //email
    //password

    const signupObj = {
        user: req.body.user,
        email: req.body.email,
        password: req.body.password

    };
    console.log(signupObj);

    res.send(signupObj);

});
const PORT = 5000;

app.listen(PORT, () => { console.log('listening on port ' + PORT) })