// 
//  --- our app behavior logic ---
//

run(function () {
    // immediately invoked on first run
    var init = (function () {
        if (navigator.network.connection.type == Connection.NONE) {
            alert("No internet connection - we won't be able to track your time");
        } else {
		try {
			if (window.localStorage.getItem("first_run") == null) {
			    openExternal('http://myttpro.com/frame.html?m=SignUp',{ showLocationBar: false, showNavigationBar: false, showAddress: false});
			} else {
			    openExternal('http://myttpro.com/frame.html',{ showLocationBar: false, showNavigationBar: false, showAddress: false});
			}
			window.localStorage.setItem("first_run","true");
                    }
                    catch (err)
                    {
                        alert(err);
                    }
        }
    })();
});
