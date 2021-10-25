function showContent(pageID){
    console.log(pageID);
}

function mobile(){
  console.log("hello");
  $(".mobile-nav").css("display" , "flex");

}

function disappear(){
  console.log("hide");
  $(".mobile-nav").css("display" , "none");
}


function initListeners(){
    $(window).on("hashchange", function(e){
        let navID = e.currentTarget.id;
        MODEL.route(navID, showContent);
    })
    $(".fas").on("click", mobile);
    $(".mobile-nav").on("click", disappear);
}


$(document).ready(function(){
  initListeners();
  MODEL.route("home", showContent);
  // MODEL.route("home", showContent);
})