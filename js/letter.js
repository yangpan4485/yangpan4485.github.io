$("#open").click(function(){
	var music = document.getElementById('music2');
	music.play();
	var div1 = document.getElementById("contact");
    // var div2 = document.getElementById("letter_text");
    show_hidden(div1);
    // show_hidden(div2);
	var index=0;
    var word=document.getElementById("letter_text").innerHTML;
    function type(){
        document.getElementById("letter_pre").innerText = word.substring(0,index++);
    }
    setInterval(type, 100);
	setTimeout("javascript:location.href='biaobai.html'", word.length * 100 + 3000);
});

function show_hidden(obj) {
	if (obj.style.display == 'block') {
		obj.style.display = 'none';
	} else {
		obj.style.display = 'block';
	}
}

function play_audio() {
	var music = document.getElementById('music2');
	music.play();
}

window.onload = function () {	
	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');

	setInterval(type, 250);
	
}
