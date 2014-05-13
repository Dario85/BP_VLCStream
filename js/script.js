var n = 1;
var m = 3;
$( document ).ready(function() {
	loadData();
	showNews();
	//$('#ch1').click(function(){channel(1)});
	//$('#ch2').click(function(){channel(2)});
});
/*
function sideBarTop(){
	setInterval(function(){
	if(n==1){n=2;}else{n=1;}
	$('#sideBarTop img').attr("src","src/imgBannerTop/"+n+".jpg")},6000);
}
function sideBarBottom(){
	setInterval(function(){
	if(m==3){m=4;}else{m=3;}
	$('#sideBarBottom img').attr("src","src/imgBannerBottom/"+m+".jpg")},6000);
}
*/
//Carica sia il testo a scorrimento di <marquee> sia i testi e le icone delle news a comparsa. I dati sono salvati in config/data.json
function loadData(){
	$.ajax({
		url: "config/data.json",
		dataType: "json",
		success: function(data){
			//recupera e inserisce il testo del marquee
			$('#bannerTop marquee p').text(data.marquee);
			//recupera e inserisce le news 
			$.each(data.news, function(k) {
				switch(data.news[k].iconType){
					case "food":
						$('#bannerBottom ul').append("<li><img src='src/food_icon.png'>"+ data.news[k].text);
					break;
					default:
						$('#bannerBottom ul').append("<li>"+ data.news[k].text);
					break;
				}
   		 	});
   		 	$.each(data.imgBannerTop, function(k){
   		 		var url = [];
   		 		url[k] = data.imgBannerTop[k].url;
   		 		sideBarTop(url);
   		 	});
   		 	$.each(data.imgBannerBottom, function(k){
   		 		var url = [];
   		 		url[k] = data.imgBannerBottom[k].url;
   		 		sideBarBottom(url);
   		 	});
		}
	});
}

//Cambia periodicamente le img di SideBarTop. Gli url sono caricati da loadData()
function sideBarTop(url){
	var i=0;
	setInterval(function(){
	$('#sideBarTop img').attr("src",url[i]);
	i++;
	if (i>url.length){i=0}
	},6000);
}
//Cambia periodicamente le img di SideBarBottom. Gli url sono caricati da loadData()
function sideBarBottom(url){
	var i=0;
	console.log(url[i]);
	setInterval(function(){
	$('#sideBarBottom img').attr("src",url[i]);
	i++;
	if (i>url.length){i=0}
	},6000);
}


function showNews() {
     var ani = false;
       var ele = window.setInterval(
           function () {
               if ( ! ani ) {
                   ani = true;
                   $("#bannerBottom ul li:first").slideUp(
                       "normal"
                       , function () {
                           $(this).appendTo("#bannerBottom ul").slideDown();
                           ani = false;
                       }
                   );
               }
           }
           , 6000
      );
}



//FUNZIONE PER CAMBIARE CANALE. USARE PLAYLIST VLC
/*function channel(num){
	var channel = "";
	switch(num){
		case 1:
			var id = vlc.playlist.add("dvb-t://frequency=786000000");
			vlc.playlist.playItem(id);
		break;
		case 2:
			var id = vlc.playlist.add("dvb-t://frequency=682000000");
			vlc.playlist.playItem(id);
		break;
	}
	$('#vlc').attr("target",channel);
}
*/