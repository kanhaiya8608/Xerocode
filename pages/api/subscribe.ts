// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is not defined.');
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as Parameters<typeof mongoose.connect>[1]);

interface Subscription {
  email: string;
}

const subscriptionSchema = new mongoose.Schema<Subscription>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const SubscriptionModel = mongoose.models.Subscription || mongoose.model<Subscription>('Subscription', subscriptionSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body as Subscription;

    try {
      const existingSubscription = await SubscriptionModel.findOne({ email });

      if (existingSubscription) {
        return res.status(200).json({ message: 'You have already been subscribed' });
      }

      const newSubscription = new SubscriptionModel({ email });
      await newSubscription.save();

      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error saving email:', error);
      return res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
