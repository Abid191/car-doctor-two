import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE = async (request, { params }) => {
    const db = await connectDB()
    const deleteCollection = db.collection('bookings')
    try {

     const resp = await deleteCollection.deleteOne({ _id: new ObjectId(params.id)})
        return Response.json({ massage: 'deleted the booking',response : resp })
    } catch (error) {
        return Response.json({ massage: 'something went wrong' })
    }
}