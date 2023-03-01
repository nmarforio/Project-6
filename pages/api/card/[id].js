import Card from "../../../db/model/Card"
import dbConnect from "../../../db/connect";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "DELETE") {
        const {id} = req.query;
        const cardToDelete = await Card.findByIdAndDelete(id);
        return res.status(200).json(cardToDelete)
    }
}



    