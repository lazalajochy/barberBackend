import Customer from "../models/customerModel.js";


export const addCustomerSerService = async(req, res) => {
    const {serviceName, servicePrice, serviceDescription, customerName} = req.body;
    try {
        await Customer.create({
            serviceName:serviceName,
            servicePrice:servicePrice,
            serviceDescription:serviceDescription,
            customerName:customerName
        });
        res.json("Customer has been added successfully")
    } catch (error) {
        console.log(error)
        
    }
}

export const getCustomerService = async (req, res) => {
    try {
        const customerService = await Customer.findAll()
        res.json(customerService)
    } catch (error) {
        console.log(error)
        
    }
}