import Card from "../../../models/Card";
import dbConnect from "../../../db/connect";

export default async function handler(req, res) {
  await dbConnect();

  if (request.method === "DELETE") {
    const { id } = req.query;
    const card = await Card.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: card });
  }
}
