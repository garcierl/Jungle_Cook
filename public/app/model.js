var MODEL = (function(){
    function _route(navID, callback){
    
        let hashTag = window.location.hash;
        let pageID = hashTag.replace("#/", "");
    
        if (!pageID){
            navToPage("home");
        } else {
            navToPage(pageID);
        }
    
        if (callback){
            callback(pageID);
        }
    }
    
 function navToPage(pageName){
        $.get(`./pages/${pageName}/${pageName}.html`, function(data){
            console.log(data);
            $("#app").html(data);
        });
    }
    
    return {
        route: _route
    }
    })();