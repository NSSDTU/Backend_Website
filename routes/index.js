const express = require("express");

const router = express.Router();
const homeController = require("../controllers/homeController");

router.get('/',homeController.home);
router.get('/about',homeController.about);
router.get('/initiatives',homeController.initiatives);
router.get('/events',homeController.events);
router.get('/team',homeController.team);
router.get('/contact',homeController.contact);
router.get('/recruitment',homeController.recruitment);

/* 
for any further requests, access from here
router.use('/routerName , require('./routerFile))
*/

module.exports = router;
