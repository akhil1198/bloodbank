import { Request, Response } from 'express'
import Units from '../models/units'

// Get all Units from the db
export const getAllUnits = async (req: Request, res: Response): Promise<void> => {

    try {
        const units = await Units.findAll();
        res.json(units)
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Units.")
    }

}

// Get units by their id
export const getUnitsByID = async (req: Request, res: Response): Promise<void> => {

    try {
        const units = await Units.findByPk(req.body.id);
        if (units){
            res.json(units)
        } else {
            res.status(400).send("Unit does not exist.")
        }
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Unit.")
    }

}

// Creating new Units
export const createUnits = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, email, phone, bloodGroup, age } = req.body
        await Units.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("Units Created!")
        }).catch((err) => {
            res.status(400).send("Unable to create units!")
        })
    } catch (error) {
        console.error('Error creating units:', error);
        res.status(500).send('Error creating units');
    }
}