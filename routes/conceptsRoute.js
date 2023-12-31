const Router = require("express");
const { getConcepts, createConcepts, getConceptsById,getConceptsByParams} = require("../controllers/conceptsController");

const router = Router();

router.route("/")
.get(getConcepts)
.post(createConcepts)


router.route("/search")
.get(getConceptsByParams)

router.route("/:id")
 .get(getConceptsById) 



module.exports = router;