import express from 'express'
import { addService, getServices, editService, getService, deleteService } from "../controller/serviceController.js";

const router = express.Router();

router.post('/', addService);
router.get('/',getServices)
router.put('/editService/:id', editService)
router.get('/getService/:id', getService)
router.delete('/deleteService/:id', deleteService)

export default router;
