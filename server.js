const express = require('express');

//express app
const app = express();

//register view

app.set('view engine', 'ejs');

//listen for request
const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening to the Port ${port}`);
});

app.get('/', (req, res) => {

    const blogs = [ 

    ];
    res.render('index', { title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about' , { title: 'About' });
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', { title: 'Create New Blog' });
});

app.use((req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})


