const express = require("express");
const readerRouter = require("../router/reader");
const bookRouter = require("../router/book");

const app = express();

app.use(express.json());
app.use("/readers", readerRouter);
app.use("/books", bookRouter);

module.exports = app;
