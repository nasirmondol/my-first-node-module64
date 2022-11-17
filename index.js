const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('I am practice node from the morning.')
})

const users = [
    {id: 1, name: 'Hariken', job: 'student', salary: 14000},
    {id: 2, name: 'Tripadi', job: 'student', salary: 14000},
    {id: 3, name: 'Joakim low', job: 'student', salary: 14000},
    {id: 4, name: 'Harris bulger', job: 'student', salary: 14000},
    {id: 5, name: 'Harris bulger', job: 'student', salary: 14000},
    {id: 6, name: 'Harris bulger', job: 'student', salary: 14000},
]

app.get('/users', (req, res) =>{

    // search query filter by query parameter.
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else{
        res.send(users)
    }
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) =>{
    res.send('jackfruit', 'mango', 'banana', 'liches', 'blackberries',)
})

app.listen(port, () =>{
    console.log('Listening to port on', port)
})