import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(
  import.meta?.url
);
const __dirname = dirname(__filename);
const app = express();

app.get("/", (req, res) => {
  res.sendFile(
    __dirname + "/index.html"
  );
});

app.get("/getData", (req, res) => {
  const date = new Date();
  res.json({
    data:
      "this is content " +
      date.getMinutes() +
      " : " +
      date.getSeconds(),
  });
});

app.listen(8080, () => {
  console.log(
    "Server is running on port 8080"
  );
});
