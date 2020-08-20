const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;


//Với các file tĩnh sẽ đi theo đường dẫn này
app.use(express.static(path.join(__dirname, 'public')));

//Middleware xử lý dữ liệu từ form submit lên
app.use(express.urlencoded({
  extended: true
}));

//Middleware xử lý dữ liệu gửi từ client lên server bằng XMLHttpRequest, fetch, axios, ajax (jquery)
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log(path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})