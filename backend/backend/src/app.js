const express = require('express');
const authRoute = require('./routes/auth.route')
const projectRoute = require('./routes/project.route')
const clientRoute = require('./routes/client.route')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: [
        "https://reachx-admin-six.vercel.app",
        "https://marketplace.reachxgroup.com",
        "https://www.reachxgroup.com",
    ],
    credentials: true
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Working')
});



app.use('/admin', authRoute);
app.use('/project', projectRoute);
app.use('/client', clientRoute);

module.exports = app;
