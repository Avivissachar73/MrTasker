const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);
const {setSocket, connectSockets} = require('./api/socket.service.js');
setSocket(io);
connectSockets(io);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'some secret shit',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));


if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:8081', 'http://localhost:8081'],
        credentials: true
    };
    app.use(cors(corsOptions));
} else app.use(express.static(path.resolve(__dirname, 'public')));

const taskRoutes = require('./api/task/task.route.js');
app.use('/api/task', taskRoutes);

// const connectSockets = require('./api/socket.service.js');
// connectSockets(io);

const port = process.env.PORT || 3030;

http.listen(port, () => console.log('Listening to port: ', port, `\nhttp://localhost:3030/api/task`,
                                                                  `\nhttp://localhost:3030/api/user`));