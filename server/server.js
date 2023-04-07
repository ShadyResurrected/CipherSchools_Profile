import { app } from "./app.js";
import { db } from "./database/db.js";

db();

app.listen(8000, () => {
  console.log("Server is running");
});
