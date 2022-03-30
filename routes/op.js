const express=require('express');
const opController=require('../controllers/op');

const router=express.Router();

// router.post('/register', function(req, res){
//   authController.register
// });

router.post('/insertClients',opController.insertClients);
router.post('/insertAngajati',opController.insertAngajati);
router.post('/deleteClients',opController.deleteClients);
router.post('/deleteAngajati',opController.deleteAngajati);
router.post('/updateAngajati',opController.updateAngajati);
router.post('/updateClients',opController.updateClients);
router.post('/searchCar',opController.searchCar);
router.post('/verifyCar',opController.verifyCar);




module.exports=router;