var express = require("express");
var router = express.Router();

var comentarioController = require("../../controllers/comentario/comentarioController");

router.post("/comentar/:idUsuario", function (req, res) {
    comentarioController.comentar(req, res);
});

router.get("/desativar/:idUsuario", function (req, res) {
    comentarioController.desativar(req, res);
});

module.exports = router;