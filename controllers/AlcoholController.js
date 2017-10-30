var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Alcohol = require('../models/Alcohol');

router.get('/', function (req, res) {
	Alcohol.find({}, function (err, alcohol) {
		if (err) { return res.status(500).send(err); }
		else { return res.status(200).send(alcohol); }
	});
});

router.post('/', function (req, res) {
	Alcohol.create({
		name: req.body.name,
		image: req.body.image,
		nose: req.body.nose,
		palate: req.body.palate,
		finish: req.body.finish,
		country: req.body.country
	},
	function (err, alcohol) {
		if (err) {return res.status(500).send(err);}
		else { return res.status(200).send(alcohol); }
	});
});

router.put('/:id', function (req, res) {
	Alcohol.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, alcohol) {
		if (err) { return res.status(500).send(err); }
		else { return res.status(200).send(alcohol); }
	});
});

router.get('/:id', function (req, res) {
	Alcohol.findById(req.params.id, function (err, alcohol) {
		if (err) {return res.status(500).send(err);}
		else { return res.status(200).send(alcohol);}
	});
});

router.delete('/:id', function (req, res) {
	Alcohol.findByIdAndRemove(req.params.id, function (err, alcohol) {
		if (err) {return res.status(500).send(err); }
		else { return res.status(200).send("Deleted Alcohol"); }
	});
});



module.exports = router;
