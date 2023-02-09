import express from 'express'
import { addService, getServices, editService, getService, deleteService } from "../controller/serviceController.js";
import {addCustomerSerService, getCustomerService} from "../controller/customerController.js"
    
const router = express.Router();

router.post('/', addService);
router.get('/',getServices)
router.put('/editService/:id', editService)
router.get('/getService/:id', getService)
router.delete('/deleteService/:id', deleteService)
router.post('/addCustomerSerService', addCustomerSerService)
router.get('/getCustomerService', getCustomerService)

export default router;
