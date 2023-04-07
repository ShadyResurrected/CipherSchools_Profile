import mongoose from "mongoose";

export const db = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.yviwfpu.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "Users",
      }
    )
    .then(() => console.log("Db connected"))
    .catch((e) => console.log(e));
};
