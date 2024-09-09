import { Request, Response } from 'express'
import Users from '../models/user'

// Get all users from the db
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = await Users.findAll();
        res.json(user)
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