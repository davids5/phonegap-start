// 
//  --- our app behavior logic ---
//

function initListener() {
      var element = document.getElementsByTagName("iframe");
      for (var i=0; i<element.length; i++) {
	  element[i].onmouseover = processMouseOver;
	  element[i].onmouseout = processMouseOut;
      }
      if (typeof window.attachEvent != 'undefined') {
	  top.attachEvent('onblur', processIFrameClick);
      }
      else if (typeof window.addEventListener != 'undefined') {
	  top.addEventListener('blur', processIFrameClick, false);
      }
  }
run(function () {
    // immediately invoked on first run
    var init = (function () {
        if (navigator.network.connection.type == Connection.NONE) {
            alert("No internet connection - we won't be able to track your time");
        } else {
		try {
			setInterval(function() {
			    log(document.getElementById('frame1').contentDocument.location.href);
			    log(document.getElementById('frame1').src);
			},500);
			initListener();
			openExternal('http://myttpro.com',{ showLocationBar: false, showNavigationBar: false, showAddress: false});     
                    }
                    catch (err)
                    {
                        alert(err);
                    }
        }
    })();
});
