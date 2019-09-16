$( document ).ready(function() {
    console.log( "ready!" );


var searchTerm = "";
var numberRecords = 0;
var startYear = 0;
var endYear = 0;

$(".submit").on("click", function() {
    searchTerm = $("#search").val().trim();

    var newURL = queryURL + "&q=" + searchTerm;


    numberRecords = $("#record").val()


    startYear = $('#startYear').val().trim();
    endYear = $('#endYear').val().trim();

    console.log(searchTerm);
    console.log(numberRecords);

})

$(".clear").on("click", function() {
    searchTerm = $("#search").val("");
    numberRecords = 
    startYear =  $("#startYear").val("");
    endYear =  $("#endYear").val("");
})

});