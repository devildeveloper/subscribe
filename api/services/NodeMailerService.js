var MailChimpAPI =  require('mailchimp').MailChimpAPI;
module.exports=function(mail,cb){
		var api = new MailChimpAPI(sails.config.Keys.MailChimp, { version : '2.0' });
		var data = {
			id:'c780404096',//list id
			email:{email:mail.email},
			merge_vars:{
				EMAIL:mail.email,
				FNAME:mail.name,
				LNAME:' '
			}
		}
		api.call('lists', 'subscribe', data, function (error, data) {
		    if (error)
		        cb(error.message,data)
		    	
		    else
		        cb(null,data); // Do something with your data!*/

		    console.log('error')
		});		
}