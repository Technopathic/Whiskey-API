const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

const Alcohol = require('../models/Alcohol');

router.get('/', (req, res) => {
	Alcohol.find({}, (err, alcohol) => {
		if (err) { return res.status(500).send(err); }
		else { return res.status(200).send(alcohol); }
	});	
});

router.post('/', (req, res) => {
	Alcohol.create({
		name: req.body.name,
		image: req.body.image,
		nose: req.body.nose,
		palate: req.body.palate,
		finish: req.body.finish,
		country: req.body.country
	},
	(err, alcohol) => {
		if (err) {return res.status(500).send(err);}
		else { return res.status(200).send(alcohol); }
	});
});

router.put('/:id', (req, res) => {
	Alcohol.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, alcohol) => {
		if (err) { return res.status(500).send(err); }
		else { return res.status(200).send(alcohol); }
	});
});

router.get('/:id', (req, res) => {
	Alcohol.findById(req.params.id, (err, alcohol) => {
		if (err) {return res.status(500).send(err);}
		else { return res.status(200).send(alcohol);}
	});
});

router.delete('/:id', (req, res) => {
	Alcohol.findByIdAndRemove(req.params.id, (err, alcohol) => {
		if (err) {return res.status(500).send(err); }
		else { return res.status(200).send("Deleted Alcohol"); }
	});
});



module.exports = router;
