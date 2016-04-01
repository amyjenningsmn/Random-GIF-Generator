
$(function() {


 $("button").on("click", function(){
   $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg').done(function(response){
     var printGif = response;
     console.log(printGif);
    //  $(".gifHere").append("put the gif here");
    $(".gifHere").html("<img src=\"" + printGif.data.image_url + "\">");
   })

})
})


// Joel's notes from lecture:
// $(function(){
// ​
//   var movieData = {};
//   var banannaSandwich = {};
// ​
// ​
// ​
//   $(".getMeWarwick").on("click", function(){
//     $(".getMeRickyGervais").on("click", function(){
//       console.log('Blah blah blah');
//     })
//   })
// ​
// ​
//   function getWarwick(){
//     $.get('http://www.omdbapi.com/?t=Willow&y=&plot=short&r=json').done(function(response){
//       console.log(response);
//       banannaSandwich = response;
//       beginProcessingBanannaSandwich();
//     })
// ​
//     $.ajax({
//       url: 'http://www.omdbapi.com/?t=Willow&y=&plot=short&r=json',
//       type: 'GET'
//     }).done(function(response){
//       console.log(response);
//       banannaSandwich = response;
//       beginProcessingBanannaSandwich();
//     })
//   }
// ​
// ​
//   function beginProcessingBanannaSandwich(){
//     $("body").append("<p> " + banannaSandwich.Title + " was made in " + banannaSandwich.Year + "</p>");
//   }
// ​
// ​
// ​
//   //kill some time
//   for(var x = 0; x < 1000; x++){
// ​
//   }
// ​
//   banannaSandwich.thing = 2;
// ​
// ​
// ​
//   movieData.dateCreated = 'Friday';
// ​
// ​
// ​
// ​
// ​
// })
