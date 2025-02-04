import mongoose from "mongoose";
import chalk from "chalk"
import { dbName } from "../constants.js";

export const DBConnection = async ()=>{

    try {

        console.log(chalk.yellow("\t\t\t Data Base Connecting..... "));
        const db = await mongoose.connect(`${process.env.DB_URI}/${dbName}`);
        console.log(chalk.bgGreen("** Data Base Connection Success Fully !!"));
        console.log("Host : " , db.connection.host );
        console.log("Name : " , db.connection.name );

    } catch (error) {

        console.log(chalk.bgRed(":) Data Base Connection Failed :)") , error);
    
    }
}