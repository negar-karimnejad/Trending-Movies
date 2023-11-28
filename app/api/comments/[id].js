import commentsModel from "@/models/comment";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const { id } = req.query;

    const user = await commentsModel.findOne({ id });

    if (user) {
      return res.json(user);
    }
  }
};

export default handler;
