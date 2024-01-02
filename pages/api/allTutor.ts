import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in your environment variables');
    }
    const uri: string = process.env.MONGODB_URI;

    if (!uri) {
        res.status(500).json({ message: 'Database connection string is not set' });
        return;
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to database successfully");
        const collection = client.db("allTutors").collection("tutors");

        // Fetch all tutors
        const tutors = await collection.find({}).toArray();

        if (tutors.length > 0) {
            res.status(200).json(tutors);
        } else {
            res.status(404).json({ message: 'No tutors found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).json({ message: 'Error fetching data', error: error.message });
        } else {
            console.error('An unknown error occurred');
            res.status(500).json({ message: 'Error fetching data', error: 'An unknown error occurred' });
        }
    } finally {
        await client.close();
    }
}
