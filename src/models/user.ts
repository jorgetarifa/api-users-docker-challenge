import { ObjectId } from "mongodb";

export default interface Users {
    name: string;
    username: string;
    email: string;
    id?: ObjectId;
}