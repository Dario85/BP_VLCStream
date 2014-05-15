$( document ).ready(function() {
	$('#loadData').click(function (){loadData()});
	//showData();
	$('#specialContent').click(function(){specialContent()});
});

function specialContent(){
	$.ajax({
		url: "../config/specialContent.php",
		data: "request=1",
		success: function(){
			console.log("OK");
		}
	});
}

function loadData(){
	var scrollText = $('#scrollText').val();
	var config = {'marquee': scrollText ,'news' : [],'imgBannerTop': [],'imgBannerBottom': []};
	$('.news').each(function(i){
		config.news.push({"text": $(this).val(), "iconType":"food"});
	});
	
	config.imgBannerTop.push({"url": "src/imgBannerTop/1.jpg"});
	config.imgBannerTop.push({"url": "src/imgBannerTop/2.jpg"});
	config.imgBannerBottom.push({"url": "src/imgBannerBottom/3.jpg"});
	config.imgBannerBottom.push({"url": "src/imgBannerBottom/4.jpg"});
	console.log(JSON.stringify(config));
	var configFile = JSON.stringify(config);
	
	$.ajax({
		url: "../config/config.php",
		data: "config="+configFile,
		success: function (data){
			console.log("Chiamata eseguita!");
			console.log(data);
		}
	});
}