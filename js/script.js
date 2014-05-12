var n = 1;
var m = 3;
$( document ).ready(function() {
	sideBarTop();
	sideBarBottom();
	showNews();
	$('#ch1').click(function(){channel(1)});
	$('#ch2').click(function(){channel(2)});
});

function sideBarTop(){
	setInterval(function(){
	if(n==1){n=2;}else{n=1;}
	$('#sideBarTop img').attr("src","src/"+n+".jpg")},6000);
}
function sideBarBottom(){
	setInterval(function(){
	if(m==3){m=4;}else{m=3;}
	$('#sideBarBottom img').attr("src","src/"+m+".jpg")},6000);
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