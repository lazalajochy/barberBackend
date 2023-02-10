import express from 'express'
import { addService, getServices, editService, getService, deleteService } from "../controller/serviceController.js";
import {addCustomerService, getCustomerService, deleteCustomer} from "../controller/customerController.js"
import { getComments, addComment } from '../controller/commentController.js';
    
const router = express.Router();

router.post('/', addService);
router.get('/',getServices)
router.put('/editService/:id', editService)
router.get('/getService/:id', getService)
router.delete('/deleteService/:id', deleteService)
router.post('/addCustomerService', addCustomerService)
router.get('/getCustomerService', getCustomerService)
router.get('/getComments', getComments);
router.post('/addComment', addComment);
router.delete('/deleteCustomer/:id',deleteCustomer)

export default router;
