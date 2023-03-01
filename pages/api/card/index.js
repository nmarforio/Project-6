import dbConnect from "../../../db/connect";
import Card from "../../../components/Card";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const cardData = request.body;
      const card = new Card(cardData);
      await card.save();
      console.log(card);
      return response.status(201).json({ status: " Card created" });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
