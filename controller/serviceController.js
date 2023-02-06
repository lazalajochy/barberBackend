import Service from "../models/serviceModel.js";


export const addService = async(req, res) => {
    const {serviceName, servicePrice, serviceDescription} = req.body;
    try {
        await Service.create({
            serviceName:serviceName,
            servicePrice :servicePrice,
            serviceDescription :serviceDescription
        });
        res.json("Service has been added successfully")
    } catch (error) {
        console.log("erro")
        
    }
}

export const getServices = async(req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services)
    } catch (error) {
        console.log(error)        
    }
}

export const editService = async (req, res) => {
    try {
        await Service.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json("Service has been updated successfully")
    } catch (error) {
        res.json(error)
        
    }
}

export const getService = async (req, res) => {
    try {
        const service = await Service.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(service)
    } catch (error) {
        res.json(error)
    }
}


export const deleteService = async (req, res) => {
    try {
        await Service.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json("Service has been deleted")
    } catch (error) {
        res.json(error)
    }
}