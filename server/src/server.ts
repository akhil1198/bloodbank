import express, {Request, Response} from 'express'
import { Sequelize } from 'sequelize'
import User from './models/user';
import Donations from './models/donations';
import userRoutes from './routes/userRoutes'
import unitRoutes from './routes/unitRoutes'
import requestRoutes from './routes/requestRoutes'
import donationRoutes from './routes/donationRoutes'

const app = express()
const port = 5000

// Configure Sequelize connection
const sequelize = new Sequelize('bloodbank', 'postgres', 'Akhil@1198', {
  host: 'localhost',
  dialect: 'postgres', // or whatever database you're using (e.g., 'mysql', 'sqlite')
});

// Test the Database Connection
sequelize
  .authenticate()
  .then(async () => {
    console.log('Connection to the database has been established successfully.');

    // const results = await Donations.findAll();
    // console.log("Users : ", results)
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/api', userRoutes)
app.use('/api', unitRoutes)
app.use('/api', donationRoutes)
app.use('/api', requestRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log("Server started at port", port)
})