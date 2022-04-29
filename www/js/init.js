(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs({"swipeable":true});
    $('.fixed-action-btn').floatingActionButton();

    $('#downloadButton').click( function() {

      $('#llista_principal').empty();

      $.ajax({
        method: "GET",
        url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=5",
        dataType: "json",
        
      }).done(function (data) {

        for(let item in data) {
          console.log(data[item]["title"]);
          let newElement = $("<a id='listelement' class='collection-item' href='#!'>" + data[item]["title"] + "</a>");
          
          newElement.click( function() {
            
            //Creacio de objectes grafics
            let newh1 = $("<h1>" + data[item]["title"] + "</h1>");
            let newsummary = $("<p>" + data[item]["summary"] + "</p>");
            let newimage = $("<img src='" + data[item]["imageUrl"] + "'></img>");
            
            //Buida el div de la pagina 2 i afegeix objectes grafics
            $('#test-swipe-2').empty();
            
            $('#test-swipe-2').append(newh1);
            $('#test-swipe-2').append(newsummary);
            $('#test-swipe-2').append(newimage);
            
            //Salt a pag 2
            $('.tabs').tabs("select", "test-swipe-2");
          })

          //Afegeix nou element
          $('#llista_principal').append(newElement);
        };
      }).fail(function () {
        alert("ERROR");
      });

  });

  });
})(jQuery);

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}