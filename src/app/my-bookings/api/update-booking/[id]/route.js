import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const GET = async (request, { params }) => {
    const db = await connectDB()
    const updateCollection = db.collection('bookings')
    try {
        const resp = await updateCollection.findOne({ _id: new ObjectId(params.id) })
        return Response.json({ massage: 'booking-found', data: resp })
    } catch (error) {
        return Response.json({ massage: 'something went wrong' })
    }
}

export const PATCH = async (request, { params }) => {
    const db = await connectDB()
    const updateCollection = db.collection('bookings')
    const updateDoc = await request.json()
    try {
        const resp = await updateCollection.updateOne({ _id: new ObjectId(params.id) },
        {
            $set: {
            ...updateDoc
        },
    },
    {
        upsert: true
    }
)
return Response.json({ massage: 'update found',response: resp })
        
    } catch (error) {
        return Response.json({ massage: 'something went wrong' })
    }
}



