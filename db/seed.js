require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Creature = require('../models/Creature')


Creature.remove().then(() => {
    const luke = new Creature({
        name: 'Luke',
        description: 'Jedi'
    })
    return luke.save()
}).then(() => {
    const darth = new Creature({
        name: 'Darth Vader',
        description: 'Father of Luke'
    })
    return darth.save()
})