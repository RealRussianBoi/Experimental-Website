const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route("/trips")
    .get(tripsController.tripsList) //GET Method routes tripList.
    .post(tripsController.tripsAddTrip); //POST Method adds a trip.

//GET method routes tripFindByCode - requires parameter
//PUT method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;