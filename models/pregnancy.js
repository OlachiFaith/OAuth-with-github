const mongoose = require('mongoose');

const pregnancySchema = new mongoose.Schema({
    currentProgress: {
        type: String
    },
    timeUntilDue: {
        type: String
    },
    upcomingMilestones: [{
        type: String
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, {timeStamps: true});

const pregnancyModel = mongoose.model('pregnancies', pregnancySchema);

module.exports = pregnancyModel;