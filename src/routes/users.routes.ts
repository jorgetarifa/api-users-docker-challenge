import express from "express";
import usersSchema from '../schemas-joi/users.schema'
import { validator } from '../utilities/joiValidator'
import { decodeToken } from "../firebase/handleToken";
import {
    
    rootRoute,
    listUsersById, 
    postUsersRoute,
    putUsersRoute,
    deleteUsersRoute

} from '../controllers/controllers'

export const userRouter = express.Router()



//Routes
userRouter.get( "/", decodeToken,  rootRoute )

userRouter.get( "/:id", listUsersById )

userRouter.post( "/", validator.body(usersSchema), postUsersRoute )

userRouter.put( "/:id",  putUsersRoute )

userRouter.delete("/:id",  deleteUsersRoute)