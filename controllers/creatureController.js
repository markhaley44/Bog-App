const Creature = require('../models/Creature')

const creatureController = {
    index: (req, res) => {
        Creature.find({}).then(creature => {
            res.send({ creature });

        })
    }
}
module.exports = creatureController