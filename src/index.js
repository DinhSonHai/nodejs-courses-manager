require('dotenv').config();
const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

//Với các file tĩnh sẽ đi theo đường dẫn này
app.use(express.static(path.join(__dirname, 'public')));

//Middleware xử lý dữ liệu từ form submit lên
app.use(
    express.urlencoded({
        extended: true,
    }),
);

//Middleware xử lý dữ liệu gửi từ client lên server bằng XMLHttpRequest, fetch, axios, ajax (jquery)
app.use(express.json());

app.use(methodOverride('_method'));

//Custom Middlewares
app.use(SortMiddleware);

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];
                return `<a href="?_sort&column=${field}&type=${type}">
                    <span class="${icon}"></span>
                  </a>`;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log(path.join(__dirname, 'resources\\views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log(process.env.SESSION_SECRET);
});
