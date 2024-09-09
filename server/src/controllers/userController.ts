import { Request, Response } from 'express'
import Users from '../models/user'

// Get all users from the db
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {
        
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10

        const startInd = (page - 1) * limit
        const endInd = page * limit
        
        const user = await Users.findAll();
        const paginatedUser = user.slice(startInd, endInd)
        console.log("data: ", paginatedUser)
        res.json({
            paginatedUser, 
            page, 
            limit, 
            totalPages: Math.ceil(paginatedUser.length / limit), 
            totalItems: paginatedUser.length
        })
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Users.")
    }

}

// Get user by their id
export const getUserByID = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = await Users.findByPk(req.body.id);
        if (user){
            res.json(user)
        } else {
            res.status(400).send("User does not exist.")
        }
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving User.")
    }

}

// Creating new users
export const createUser = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, email, phone, bloodGroup, age } = req.body
        await Users.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("User Created!")
        }).catch((err) => {
            res.status(400).send("Unable to create user!")
        })
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
}