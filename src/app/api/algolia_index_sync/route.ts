import { algoliasearch } from 'algoliasearch';

import { db } from '@/lib/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const appId = process.env.NEXT_PUBLIC_APP_ID!;
const adminKey = process.env.ADMIN_API_KEY!;

// Example to push product:
export async function POST() {
  const client = algoliasearch(appId, adminKey);
  
  try {
    const snapshot = await getDocs(collection(db, 'products'));
  const records = snapshot.docs.map(doc => ({
    objectID: doc.id,
    ...doc.data()
  }));
    
    await client.saveObjects({ indexName: "products", objects: records });
    return NextResponse.json({ message: "Products synced to Algolia." });

  } catch (error) {
    console.error("Sync error:", error);
    return NextResponse.json({ error: "Failed to sync products" }, { status: 500 });
  }

}