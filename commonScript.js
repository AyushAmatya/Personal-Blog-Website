
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("mainHeadding").style.fontSize="0px";
		document.getElementById("info").style.fontSize="0px";
		document.getElementById("profile_pic").style.width="0px";
		document.getElementById("profile_pic").style.height="0px";
		document.getElementById("profile_pic").style.border="0px";
		document.getElementById("header").style.border="0px";
		document.getElementById("header").style.width="0px";
		document.getElementById("header").style.height="0px";
		document.getElementById("header").style.background="none";
		document.getElementById("topBar").style.marginTop="-90px";
		document.getElementById("topBar").style.width="77%";
		document.getElementById("topBar").style.marginLeft="5px";
		document.getElementById("topBar").style.paddingLeft="302px";
		document.getElementById("socialMedia").style.marginTop="-90px";
		document.getElementById("topBar").style.backgroundColor="black";	
		document.getElementById("quotes").style.marginTop="249px";

	  } else {
		document.getElementById("mainHeadding").style.fontSize = "70px";
		document.getElementById("info").style.fontSize="17px";
		document.getElementById("profile_pic").style.width="200px";
		document.getElementById("profile_pic").style.height="200px";
		document.getElementById("profile_pic").style.border="3px solid white";
		document.getElementById("header").style.border="3px solid white";
		document.getElementById("header").style.width="100%";
		document.getElementById("header").style.height="110px";
		document.getElementById("header").style.backgroundImage="url(coverPic.jpg)";
		document.getElementById("header").style.backgroundSize="100% 300%";
		document.getElementById("topBar").style.marginTop="-120px";
		document.getElementById("topBar").style.width="78%";
		document.getElementById("topBar").style.marginLeft="295px";
		document.getElementById("topBar").style.paddingLeft="1px";
		document.getElementById("topBar").style.backgroundColor="#333";
		document.getElementById("socialMedia").style.marginTop="-299px";
		document.getElementById("quotes").style.marginTop="40px";
	  }
	}

				