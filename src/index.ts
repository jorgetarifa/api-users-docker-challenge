import express from "express"
import morgan from "morgan"
import * as dotenv from "dotenv"
dotenv.config()
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { connectToDatabase } from "./services/data.service"
import { userRouter } from "./routes/users.routes" 
import { authRouter } from "./routes/auth.routes" 


const app = express()
const PORT = process.env.PORT || 7100 // default port to listen


//Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Users',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    }, 
    apis: ['./dist/docs/*.js']
}




const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


connectToDatabase()
    .then(() => {
        // send all calls to /users to our usersRouter
        app.use(morgan('dev'))
        app.use(express.json())
        app.use(express.static(`${__dirname}/statics`))
        
        app.get('/', (req,res) => {
        res.sendFile(`${__dirname}/statics/views/welcome.html`)
         })
       
         app.get('/login', (req,res) => {
            res.sendFile(`${__dirname}/statics/views/index.html`)
             })
           
          
        app.use( '/users', userRouter )
        app.use( '/auth',  authRouter )        
                      

        // start the Express server
        app.listen( PORT, () => console.log( `Server started at http://localhost:${PORT}` )
        )
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error)
        process.exit();
    })