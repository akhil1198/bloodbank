import { Request, Response } from 'express'
import Units from '../models/units'

// Get all Units from the db
export const getAllUnits = async (req: Request, res: Response): Promise<void> => {

    try {
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10

        const startInd = (page - 1) * limit
        const endInd = page * limit

        const units = await Units.findAll();
        const totalUnits = units.length
        const paginatedUnits = units.slice(startInd, endInd)

        res.json({
            paginatedUnits,
            page,
            limit,
            totalPages: Math.ceil(totalUnits / limit),
            totalUnits
        })
    } catch (err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Units.")
    }

}

// Get units by their id
export const getUnitsByID = async (req: Request, res: Response): Promise<void> => {

    try {
        const units = await Units.findByPk(req.body.id);
        if (units) {
            res.json(units)
        } else {
            res.status(400).send("Unit does not exist.")
        }
    } catch (err) {
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