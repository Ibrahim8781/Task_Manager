const express = require ("express");

const app = express();
app.use(express.json());
PORT = 3000;

const Users = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@gmail.com"
    }
]

const Events = []
const Categories = ["Birthdays", "Weddings", "Funerals", "Graduations"]



app.get("/", (req, res) => {    
    res.send("Welcome to the Event Planner");
});

app.post("/create_user", (req,res) => {
    const {name, email} = req.body;
    const id = Users.length + 1;
    const user = {id, name, email};
    Users.push(user);
    res.status(201).json(user);
});

app.post("/create_event/:userId", (req,res) => {
    const {name, description , date ,time , category } = req.body;
    const user_id = req.params.userId; 
    const event_id = Events.length + 1;
    const event = {event_id, name, description, date, time, category ,user_id};    
    Events.push(event);
    res.status(201).json(event);
  });

app.get("/view_events/:userId",(req,res)=>{
    const user_id = req.params.userId;
    const events = Events.filter(event => event.user_id == user_id);
    res.send(events);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});