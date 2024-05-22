const express = require('express');

//express app
const app = express();

//listen for request
const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening to the Port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.use((req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})


