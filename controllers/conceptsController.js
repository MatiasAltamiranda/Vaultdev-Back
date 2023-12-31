const Concept = require("../models/conceptModel");

exports.getConcepts = async (req, res) => {
    try {
        const concepts = await Concept.find({}); 
        return res.status(200).json({ok: true, concepts : concepts});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Hubo un error al obtener los conceptos" });
    }
};

exports.createConcepts = async (req,res) =>{
    try {
        const newConcept = new Concept({...req.body});
        const savedConcept = await newConcept.save();  
        return res.status(201).json({
            message : "Se creo exitosamente",
            concept : savedConcept
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Hubo un error al crear el concepto"})
    }
}
