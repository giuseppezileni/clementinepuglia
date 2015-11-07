(function($) {
	
	var feed = new Instafeed({
		get: 'tagged',
		clientId: 'e5a7b6eb745641d083d7913334ac1c79',
	  	userId: 21045094,
	  	target: 'instagram_work',
	  	accessToken: '21045094.e5a7b6e.ca8b85484ee94770af7ccf3e2f84846b',
	  	sortby: 'most-recent',
	  	tagName: 'clementinesanfilippo',
	  	limit: 4,
	  	filter: function(image) {
	    	return image.tags.indexOf('clementinedipuglia') >= 0;
	  	},
	  	before: function() {
	  		
	  	},
	  	success: function(data) {
	  		appendWorks(data.data, 3, '#instagram_work');
	  	},
	  	mock: true
	  	//template: templateHTML
	});
	feed.run();

	var feedPortofolio = new Instafeed({
		get: 'tagged',
		clientId: 'e5a7b6eb745641d083d7913334ac1c79',
	  	userId: 21045094,
	  	target: 'instagram_work',
	  	accessToken: '21045094.e5a7b6e.ca8b85484ee94770af7ccf3e2f84846b',
	  	sortby: 'most-recent',
	  	tagName: 'clementinesanfilippo',
	  	limit: 20,
	  	filter: function(image) {
	    	return image.tags.indexOf('clementinedipuglia') >= 0;
	  	},
	  	before: function() {
	  		
	  	},
	  	success: function(data) {
	  		appendWorks(data.data, 0, '#instagram_portfolio');
	  	},
	  	mock: true
	  	//template: templateHTML
	});
	feedPortofolio.run();

	function appendWorks(data, limit, element) {

		$(element).empty();
	  	console.log('Images n.' + _.size(data));

  		var i = 0;
  			
  		async.each(data, function (image, callback) {
  			
  			console.log('----------------------');
  			
  			/*
  			var image_ok = _.find(image.tags, function (item) {
  				console.log()
  				return item == 'clementinedipuglia' || 
  					   item == 'clementinesanfilippo';
  			});
			*/

			/*
			var image_ok = _.find(image, function (item) {
  				console.log('found my image')
  				return item.user.id == "21045094";
  			});
*/
			
  			var isOk = true;

  			if (limit > 0) {
  				isOk = i <= limit;
  			};

			//if (typeof image_ok !== 'undefined' && isOk) {

				console.log(JSON.stringify(image));

				var location = ''
				if (image.location != null) {
					location = image.location.name;
				};

  				var templateHTML = '<li class="' + location + '">' +
				   '<a href="' + image.link + '" target="_blank">' +
				   '<img alt="" src="' + image.images.standard_resolution.url + '" />' +
				   '		<div class="overlay">' +
				   '			<div class="thumb-info">' +
				   '				<h3>' + location + '</h3>' +
				   '				<p>' + image.caption.text + '</p>' +
				   '			</div>' +
				   '		</div>' +
				   '	</a>' +
				   '</li>';

  				$(element).append(templateHTML);
  				i++;
  			//};

  			callback();

  		}, function (err) {
  			if (err) {
  				console.log('error to append image from instagram');
  			} else {
  				console.log('append image ok');
  			}
  		});

	};

	/*

	{
		"attribution":null,
		"tags":["radici","internazionalizzazione","inclusionesociale","egovernance","unimpegnoincomune"],
		"type":"image",
		"location":{
			"latitude":40.79540762,
			"name":"Via Roma - Gioia Del Colle",
			"longitude":16.922587226,
			"id":602021174
		},
		"comments":{
			"count":0,
			"data":[]
		},
		"filter":"Gingham",
		"created_time":"1443303829",
		"link":"https://instagram.com/p/8G_0xZAX_i/",
		"likes":{
			"count":1,
			"data":[
				{
					"username":"francesco_resta",
					"profile_picture":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-19/11348406_969052889812879_1784035847_a.jpg",
					"id":"325444527",
					"full_name":"francesco paolo resta"
				}
			]
		},
		"images":{
			"low_resolution":{
				"url":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e35/11950586_136225476729121_2131950212_n.jpg",
				"width":320,
				"height":320
			},
			"thumbnail":{
				"url":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e35/11950586_136225476729121_2131950212_n.jpg",
				"width":150,
				"height":150
			},
			"standard_resolution":{
				"url":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11950586_136225476729121_2131950212_n.jpg",
				"width":640,
				"height":640
			}
		},
		"users_in_photo":[],
		"caption":{
		"created_time":"1443303829",
		"text":"#unimpegnoincomune #internazionalizzazione #radici #egovernance #inclusionesociale",
					"from":{"username":"gzileni","profile_picture":"https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11906313_993399217369522_1993587044_a.jpg","id":"21045094","full_name":"Giuseppe Zileni"},"id":"1082833465818316550"},"user_has_liked":false,"id":"1082833463805050850_21045094","user":{"username":"gzileni","profile_picture":"https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11906313_993399217369522_1993587044_a.jpg","id":"21045094","full_name":"Giuseppe Zileni"}} 
	*/
})(jQuery);
