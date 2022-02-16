const express = require('express');
const rootRouter = require('./routers');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors({
    origin: '*'
}))


const PORT = process.env.PORT || 3000;

app.use('/api', rootRouter);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})

