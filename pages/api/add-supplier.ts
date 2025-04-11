import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { supplierName, supplierEmail } = req.body;

    // For now, just return the data (you can later save this to Supabase)
    res.status(200).json({ message: 'Supplier added', data: { supplierName, supplierEmail } });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

