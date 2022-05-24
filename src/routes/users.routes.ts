import express, { Request, Response } from "express";
import { collections } from "../services/data.service"
import { ObjectId } from "mongodb"
import { createValidator } from "express-joi-validation"
import usersSchema from '../schemas-joi/users.schema'
import { validator } from '../utilities/joiValidator'
import {
    
    rootRoute,
    listUsersById, 
    postUsersRoute,
    putUsersRoute,
    deleteUsersRoute

} from '../controllers/controllers'

export const userRouter = express.Router()



//Routes
userRouter.get( "/", rootRoute )

userRouter.get( "/:id", listUsersById )

userRouter.post( "/", validator.body(usersSchema), postUsersRoute )

userRouter.put( "/:id",  putUsersRoute )

userRouter.delete("/:id",  deleteUsersRoute)