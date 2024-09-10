import { Request, Response } from 'express'
import Requests from '../models/requests'

// Get all Requests from the db
export const getAllRequests = async (req: Request, res: Response): Promise<void> => {

    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const startInd = (page - 1) * limit;
        const endInd = page * limit;

        const requests = await Requests.findAll(); // Fetch all the requests
        const totalItems = requests.length; // Get total number of requests
        const paginatedRequests = requests.slice(startInd, endInd); // Slice the data based on page and limit

        res.json({
            paginatedRequests,
            page,
            limit,
            totalPages: Math.ceil(totalItems / limit), // Calculate total pages based on total items
            totalItems // Return the total number of requests
        });
    } catch (err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Requests.")
    }

}

// Get requests by their id
export const getRequestsByID = async (req: Request, res: Response): Promise<void> => {

    try {
        const requests = await Requests.findByPk(req.body.id);
        if (requests) {
            res.json(requests)
        } else {
            res.status(400).send("Unit does not exist.")
        }
    } catch (err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Unit.")
    }

}

// Creating new Requests
export const createRequests = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, email, phone, bloodGroup, age } = req.body
        await Requests.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("Requests Created!")
        }).catch((err) => {
            res.status(400).send("Unable to create requests!")
        })
    } catch (error) {
        console.error('Error creating requests:', error);
        res.status(500).send('Error creating requests');
    }
}