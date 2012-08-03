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
                        window.plugins.childBrowser.openExternal("http://www.myttpro.com",true);        
                    }
                    catch (err)
                    {
                        alert(err);
                    }
        }
    })();
});
