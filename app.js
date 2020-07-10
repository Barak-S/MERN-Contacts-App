const express = require('express')
const app = express()

const Contact = require("./models/Contact")

const PORT = 5000;
// [
const bodyParser= require('body-parser')
// ^^ must be before CRUD handlers
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// ]
var cors = require('cors');
app.use(cors())

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://baraksaidoff:Chaingunman510@cluster0-oajzo.mongodb.net/contacts-mern-app?retryWrites=true&w=majority', {
    useUnifiedTopology: true })
  .then(client => {
    console.log("connected to Mongo DB!!!")
    const db = client.db('contacts-mern-app')
    const contactsCollection = db.collection('contacts')

    app.get('/contacts', (req,res)=>{
        db.collection('contacts').find().toArray()
        .then(results => {
            res.send(results)
        })
        .catch(error => console.error(error))
    
    })

    app.get('/contacts/:id', (req,res)=>{
        Contact.findById(req.params.id, (err, contact) => {
            if (err) throw err;
            res.json({ contact });
        })
    })

    app.post('/contacts', (req, res) => {
        const contact = new Contact({
            name: req.body.name,
            number: req.body.number
        });
        
        contactsCollection.insertOne(contact)
        .then(result => {
            res.send(result.ops)
        })
        .catch(error => console.error(error))

    })

    app.put('/contacts', (req,res)=>{
        const foundContact = Contact.findById(req.body._id)
        foundContact? console.log("found in db", foundContact): console.log("didnt find:(")
        foundContact.update({name: req.body.name, number: req.body.number})
    })

    app.delete('/contacts', (req, res) => {
        console.log('trying to remove', req.body.name, req.body.number)
        contactsCollection.deleteOne({ name: req.body.name, number: req.body.number })
    })
    // .then(result => {
    //     if (result.deletedCount === 0) {
    //       return res.json('No quote to delete')
    //     }
    //     res.json(`Deleted Darth Vadar's quote`)
    // })
    // .catch(error => console.error(error))

  })
  .catch(error => console.error(error))


app.listen(PORT,()=> {
    console.log(`server started on ${PORT}`)
})