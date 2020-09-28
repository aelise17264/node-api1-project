
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({hello: 'server working'})
})

const port = 3000

server.listen(port, () => console.log('server running!'))