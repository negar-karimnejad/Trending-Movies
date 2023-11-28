import commentsModel from "@/models/comment";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "GET") {
    const comments = await commentsModel.find({}).populate("comment");
    return res.json(comments);
  } else if (req.method === "POST") {
    try {
      const { body } = req.body;
      if (!body.trim()) {
        return res.status(422).json({ message: "Body is not valid !!" });
      }

      await commentsModel.create({ body });
      return res
        .status(201)
        .json({ message: "Comment created successfully :))" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "UnKnown internal server error !!", error: err });
    }
  }
};

export default handler;
