const Router = require("express");
const { getConcepts, createConcepts } = require("../controllers/conceptsController");

const router = Router();

router.route("/")
.get(getConcepts)
.post(createConcepts)



module.exports = router;