
  $(document).ready(function(){
    var now = moment().format("MMMM Do YYYY");
    let displayTime = document.getElementById("currentDay");
    displayTime.innerHTML = now;
    var currentHour = moment().format("HH");


  $("#clearFieldsBtn").click(function(now){
    now.preventDefault,

  $("textarea").val(""),
  localStorage.clear()}),

  $(".time-div").each(function(){
    var now = $(this).attr("id").split("-")[1];

    currentHour == now? ($(this).addClass("present"),
        $(this).children(".description").addClass("white-text")):

    currentHour < now? ($(this).removeClass("present"),
        $(this).addClass("future")):
        
    now < currentHour && ($(this).removeClass("future"),
        $(this).addClass("past"))}),

  $(".saveBtn").click(function(now){
    now.preventDefault();
    var displayTime = $(this).siblings(".time-block").val(),
    now = $(this).parent().attr("id").split("-")[1];
    
    localStorage.setItem(now,displayTime)}),
    $("#hour-09 .time-block").val(localStorage.getItem("09")),
    $("#hour-10 .time-block").val(localStorage.getItem("10")),
    $("#hour-11 .time-block").val(localStorage.getItem("11")),
    $("#hour-12 .time-block").val(localStorage.getItem("12")),
    $("#hour-01 .time-block").val(localStorage.getItem("01")),
    $("#hour-02 .time-block").val(localStorage.getItem("02")),
    $("#hour-03 .time-block").val(localStorage.getItem("03")),
    $("#hour-04 .time-block").val(localStorage.getItem("04")),
    $("#hour-05 .time-block").val(localStorage.getItem("05"))
});