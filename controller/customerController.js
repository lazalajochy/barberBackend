import Customer from "../models/customerModel.js";


export const addCustomerService = async(req, res) => {
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


export const deleteCustomer = async(req, res) => {
    try {
        await Customer.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json("Customer has been deleted!")
    } catch (error) {
        console.log(error)
        
    }
}