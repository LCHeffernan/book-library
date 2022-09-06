const crudHelper = require("./helper");

exports.createGenre = async (req, res) => {
  crudHelper.createEntries(req, res, "genre");
};

exports.findAllGenres = async (_, res) => {
  crudHelper.findAllEntries(res, "genre");
};

exports.findGenreById = async (req, res) => {
  crudHelper.findEntryById(req.params.genreId, res, "genre");
};

exports.updateGenre = async (req, res) => {

  crudHelper.updateDetails(req.params.genreId, req, res, "genre");
};

exports.deleteGenre = async (req, res) => {
  crudHelper.deleteEntry(req.params.genreId, res, "genre");
};
