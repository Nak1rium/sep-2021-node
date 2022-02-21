const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

let users = [
    {
        id: 1,
        firstName: 'Artem',
        lastName: 'Maslyak',
        email: 'artem@gmail.com',
        password: 'artem9000',
        age: '19',
        city: 'Lviv'
    }
];

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    res.render('users', {users});
});

app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    let useR = [];
    const user = users.find(user => user.id === +id)
    if (user) {
        useR.push(user);
    } else {
        res.redirect('/notFound');
    }
    res.render('user', {useR});
});

app.post('/user/:id', (req,res)=>{
    const {id} = req.params;
    users = users.filter(user => user.id !== +id);
    res.redirect('/users');
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.post('/login', (req, res) => {
    const user = users.find(user => user.email === req.body.email);
    if (user) {
        res.redirect('/error');
        return
    }
    users.push({...req.body, id: users.length + 1}) && res.redirect('/users');
});

app.get('/singIn', (req, res) => {
    res.render('singIn');
});

app.post('/singIn', (req, res) => {
    const user = users.find(user => user.email === req.body.email && user.password === req.body.password)
    if (user) {
        res.redirect(`/user/${user.id}`);
        return
    }
    res.redirect('notFound');
});

app.use((req, res) => {
    res.render('notFound');
})

app.listen(5200, () => {
    console.log('kk');
});













