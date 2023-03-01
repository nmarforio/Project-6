import Card from "../../../db/model/Card";
import dbConnect from "../../../db/connect";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  //   console.log(req.query);
  //   console.log("id", id);

  if (req.method === "DELETE") {
    const cardToDelete = await Card.findByIdAndDelete(id);
    return res.status(200).json(cardToDelete);
    // return res.status(200).json({status: "Product successfully deleted." });
  }
}
