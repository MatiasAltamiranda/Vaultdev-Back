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

exports.getConceptsById = async (req, res) => {
    try {
        const {id} = req.params
        const concept = await Concept.findById(id)
        return res.status(200).json({ok: true, concept : concept});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Hubo un error al obtener el concepto id" });
    }
};

exports.getConceptsByParams = async (req, res) => {
    try {
        const title = req.query.q;
        const regex = new RegExp(title, 'i');
        const concepts = await Concept.find({ title: regex });
        return res.status(200).json({ ok: true, concepts: concepts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Hubo un error al obtener los conceptos" });
    }
};