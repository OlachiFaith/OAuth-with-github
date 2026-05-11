const pregnancyModel = require('../models/pregnancy')
const axios = require("axios")
require('dotenv').config()

exports.userPregnancy = async (req, res, next) => {
    try {

        const {lastPeriod, cycleLength} = req.body
        const apiUrl = `https://api.apiverve.com/v1/duedatecalculator?last_period=${lastPeriod}&cycle_length=${cycleLength}`;

        const response = await axios.get(apiUrl, {
            headers: {
                'x-api-key': process.env.Pregnancy_Key,
                'Accept': 'application/json'
            }
        });

        const actualData = response.data;

        console.log(actualData)

        const period = {
            last: lastPeriod,
            cycle: cycleLength,
            currentProgress: actualData.data.currentProgress,
            timeUntilDue: actualData.data.timeUntilDue,
            upcomingMilestones: actualData.data.upcomingMilestones,
            userId: req.user.id
        };
        
                const data = await pregnancyModel.create(period)
                res.status(200).json({
                    message: "Pregnancy data gotten successfully",
                    data: data
                })

    } catch (error) {
        next({
                message: error.message,
                statusCode: 500
            })
    }
}

