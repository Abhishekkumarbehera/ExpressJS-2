const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/results", (req, res) =>
  res.send([
    [
      {
        results: ["rajesh", "ramesh", "sayali", "sanjana"],
      },
    ],
  ])
);

app.listen(port, () => console.log(`Example app listening on port ${port}`));

const fs = require("fs");

fs.readFile("p.json", function (err, data) {
  if (err) throw err;

  const users = JSON.parse(data);

  console.log(users);
});
