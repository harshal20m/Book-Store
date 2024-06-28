import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
import data from "./data.js";
import Book from "./model/book.model.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
try {
	mongoose.connect(URI);
	console.log("Connected to mongoDB");
} catch (error) {
	console.log("Error: ", error);
}

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

const initDB = async () => {
	await Book.deleteMany({});
	await Book.insertMany(data);
	console.log("data was initialized");
};
initDB();
