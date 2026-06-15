
import express from "express";
import appRouter from "./app";

const app = express();
const port = 3300;

app.use(express.json());
app.use(appRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});