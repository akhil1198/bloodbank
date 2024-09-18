import { Request, Response } from 'express'
import Users from '../models/user'
import bcrypt from 'bcryptjs'

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
    } catch (err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving Users.")
    }

}

// Get user by their id
export const getUserByID = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = await Users.findByPk(req.body.id);
        if (user) {
            res.json(user)
        } else {
            res.status(400).send("User does not exist.")
        }
    } catch (err) {
        console.log("Error: ", err)
        res.status(500).send("Error Retrieving User.")
    }

}

// Creating new users
export const createUser = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, email, phone, bloodGroup, age, password } = req.body
        console.log(req.body)

        const userExists = await Users.findOne({
            where: {
                email: email
            }
        })
        console.log(email, "response -> ", userExists)
        if (userExists) {
            res.status(400).send("User already exists!")
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(password, salt)

            await Users.create({ name, email, phone, bloodGroup, age, password: hashedPass }).then(() => {
                res.status(200).send("User Created!")
            }).catch((err) => {
                console.log("Unable to create user!", err)
                res.status(400).send("Unable to create user!")
            })
        }

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({
                message: "Please provide all the required details."
            })
        }

        const userExists = await Users.findOne({
            where: {
                email: email
            }
        })
        console.log(email, "response -> ", userExists)

        if (userExists) {
            console.log("login user -> ", userExists.dataValues.password)
            const validatePass = await bcrypt.compare(password, userExists.dataValues.password)
            if (!validatePass) {
                res.status(400).json({
                    message: "Invalid Password"
                })
            } else {
                res.status(200).json({
                    message: "User Logged In!",
                    user: {
                        data: userExists.dataValues
                    }
                })
            }
        } else {
            res.status(400).send("User does not exist!")
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}