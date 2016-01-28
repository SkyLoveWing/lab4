exports.viewProject = function(req, res){
	// controller codes goes here
	
	var name = req.params.name;
	console.log("The project name is: " + name);
	res.render('project', {
		'projectName':name
	});
}