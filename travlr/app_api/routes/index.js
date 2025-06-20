const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");
const authenticateJWT = require("../middleware/authenticateJWT");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

router
    .route("/trips")
    .get(tripsController.tripsList) //GET Method routes tripList.
    .post(authenticateJWT, tripsController.tripsAddTrip); //POST Method adds a trip.

//GET method routes tripFindByCode - requires parameter
//PUT method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;