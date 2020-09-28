
let users = [
    {id: 1,
     name: 'Anna',
    bio: 'Full Stack Web Developer'},
    
    {id: 2,
    name: 'Ian',
    bio: 'Animation, director of photography'},
    
    {id: 3,
    name: 'Candice',
    bio: 'Teacher'
    }
]

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({hello: 'server working'})
})

server.get('/users', (req, res) => {
    res.status(200).json({data: users})
})

let nextId = 4;

server.post('/users', (req, res) => {
    const data = req.body
    users.push({id: nextId++, ...data})
    res.status(201).json({data: users})
})


const port = 3000

server.listen(port, () => console.log('server running!'))