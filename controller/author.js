const crudHelper = require("./helper");

exports.createAuthor = async (req, res) => {
  crudHelper.createEntries(req, res, "author");
};

exports.findAllAuthors = async (_, res) => {
  crudHelper.findAllEntries(res, "author");
};

exports.findAuthorById = async (req, res) => {
  crudHelper.findEntryById(req.params.authorId, res, "author");
};

exports.updateAuthor = async (req, res) => {
  crudHelper.updateDetails(req.params.authorId, req, res, "author");
};

exports.deleteAuthor = async (req, res) => {
  crudHelper.deleteEntry(req.params.authorId, res, "author");
};
