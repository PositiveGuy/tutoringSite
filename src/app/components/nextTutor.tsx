import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if the MongoDB URI is defined
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in your environment variables');
    }

    // Ensure that the URI is a string
    const uri: string = process.env.MONGODB_URI;
    
    if (!uri) {
        res.status(500).json({ message: 'Database connection string is not set' });
        return;
    }

    // Initialize the MongoDB client
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection = client.db("xdsxo8z").collection("allTutors.tutors");

        // Ensure that tutorId is a string
        const tutorId = Array.isArray(req.query.tutorId) ? req.query.tutorId[0] : req.query.tutorId;

        if (!tutorId) {
            res.status(400).json({ message: 'Tutor ID is required' });
            return;
        }
        
        // Assuming you want to find the next tutor by _id in ascending order
        const currentTutorId = new ObjectId(tutorId);
        const nextTutor = await collection.find({ _id: { $gt: currentTutorId } }).sort({ _id: 1 }).limit(1).toArray();

        if (nextTutor.length > 0) {
            res.status(200).json(nextTutor[0]);
        } else {
            res.status(404).json({ message: 'No more tutors found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    } finally {
        await client.close();
    }
}
