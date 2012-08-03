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
                        window.plugins.childBrowser.openExternal("http://myttpro.com",0);        
                    }
                    catch (err)
                    {
                        alert(err);
                    }
        }
    })();
});
