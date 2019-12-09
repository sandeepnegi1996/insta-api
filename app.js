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


    console.log(loginObj);

    res.send(loginObj);

});

app.post('/api/signup', (req, res) => {
    //username
    //email
    //password

    const signupObj = {
        user_signup: req.body.user,
        email: req.body.email,
        password: req.body.pass

    };
    console.log(signupObj);

    res.send(signupObj);

});
const PORT = 5000;

app.listen(PORT, () => { console.log('listening on port ' + PORT) })