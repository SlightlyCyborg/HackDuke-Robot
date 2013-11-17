/*
 * GET home page.
 */


exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.forward = function(req, res){
	console.log('I am moving forward');
};

exports.backward = function(req, res){
	console.log("Going backward!");
};

exports.leftward = function(req, res){
	console.log("Going left!");
};

exports.rightward = function(req, res){
	console.log("Going right!");
};

//greetings, baked, notthedroids, illbeback, demise

exports.greetings = function(req, res){
//	play('../sound/greetings.wav');
//	res.redirect('/');
};

exports.baked = function (req, res){
};

exports.notthedroids = function (req, res){
};

exports.illbeback = function (req, res){
};

exports.demise = function (req, res){
};

