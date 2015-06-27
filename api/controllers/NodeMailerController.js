/**
 * NodeMailerController
 *
 * @description :: Server-side logic for managing Nodemailers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodeValidator = require('node-validator');
module.exports = {
	send:function(req,res){
		var check = nodeValidator.isObject(req.param('user'))
									.withRequired('name',nodeValidator.isString())
									.withRequired('email',nodeValidator.isString())

		if(check){
			NodeMailerService(req.param('user'),function(err,result){
				res.json({err:err,response:result})
			});
		}else{
			res.send('bad params')
		}
	}
};



		