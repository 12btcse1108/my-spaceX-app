import express from "express";
import React from "react";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "./../src/App";
import fs from "fs";
import "isomorphic-fetch";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  fetch("https://api.spaceXdata.com/v3/launches?limit=100")
    .then((res) => res.json())
    .then((result) => {
      const clientApp = ReactDOMServer.renderToString(
        <App initialData={result} />
      );
      const indexFile = path.resolve("./build/index.html");
      fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
          console.error("Something went wrong:", err);
          return res.status(500).send("Oops, better luck next time!");
        }
        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${clientApp}</div>`
          )
        );
      });
    });
});
app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
