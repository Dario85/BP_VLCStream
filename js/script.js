$( document ).ready(function() {
	getData();
	showNews();
	setInterval(function(){checkSpecialContent()},5000);
});

function checkSpecialContent(){
	$.ajax({
		url: "config/specialContent.json",
		dataType:"json",
		success: function(data){
			console.log(data.specialContentUrl);
			if(data.specialContentUrl != "none"){
				$.ajax({
					url:"config/specialContent.php",
					data:"request=0",
					success: function(){window.location = data.specialContentUrl;}
				});
			}
		},
		statusCode:{300: console.log("jj")} 
	});
}

//Carica sia il testo a scorrimento di <marquee> sia i testi e le icone delle news a comparsa. I dati sono salvati in config/data.json
function getData(){	
	$.ajax({
		url: "config/result.json",
		dataType: "json",
		success: function(data){
			//recupera e inserisce il testo del marquee
			$('#bannerTop marquee p').text(data.marquee);
			//recupera e inserisce le news, ma prima cancella gli <li> già presenti
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
	//console.log(url[i]);
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