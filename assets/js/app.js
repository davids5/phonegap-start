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
                    phoneGapReady.innerHTML = "Please Wait...";
                    window.plugins.childBrowser.showWebPage(url);
                    }
                    catch (err)
                    {
                        alert(err);
                    }
        }
    })();
});
