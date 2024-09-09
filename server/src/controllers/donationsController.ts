import { Request, Response } from 'express'
import Donations from '../models/donations'

// Get all Donations from the db
export const getAllDonations = async (req: Request, res: Response): Promise<void> => {

    try {
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10

        const startInd = (page - 1) * limit
        const endInd = page * limit
        
        const donations = await Donations.findAll();
        const paginatedDonations = donations.slice(startInd, endInd)
        console.log("data: ", paginatedDonations)
        res.json({
            paginatedDonations, 
            page, 
            limit, 
            totalPages: Math.ceil(paginatedDonations.length / limit), 
            totalItems: paginatedDonations.length
        })
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Donations.")
    }

}

// Get donations by their id
export const getDonationsByID = async (req: Request, res: Response): Promise<void> => {

    try {
        const donations = await Donations.findByPk(req.body.id);
        if (donations){
            res.json(donations)
        } else {
            res.status(400).send("Unit does not exist.")
        }
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Unit.")
    }

}

// Creating new Donations
export const createDonations = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, email, phone, bloodGroup, age } = req.body
        await Donations.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("Donations Created!")
        }).catch((err) => {
            res.status(400).send("Unable to create donations!")
        })
    } catch (error) {
        console.error('Error creating donations:', error);
        res.status(500).send('Error creating donations');
    }
}