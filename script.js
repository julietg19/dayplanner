$(document).ready(function () {
  document.getElementById("date-today").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm"
  );

  var currentHour = moment().format("h");

  for (i = 1; i <= 10; i++) {
    rowTime = document.getElementById("time" + i).innerHTML;
    // if currenttime is = rowtime : make row red
    console.log(currentHour, rowTime);

    if (moment().isSame(moment(rowTime, "h a"), "hour")) {
      document.getElementById("text-entry" + i).style.backgroundColor = "red";
    }

    // if currenttime is < row time : make row green

    if (moment().isBefore(moment(rowTime, "h a"), "hour")) {
      document.getElementById("text-entry" + i).style.backgroundColor = "green";
    }

    // if currenttime is > rowtime : make row grey

    if (moment().isAfter(moment(rowTime, "h a"), "hour")) {
      document.getElementById("text-entry" + i).style.backgroundColor = "grey";
    }
  }

  // // text input needs to save to local storage
  // document.getElementById("")

  $(".save").on("click", function () {
    var key = $(this).attr("id");

    var value = $(this).siblings(".todo").val();

    localStorage.setItem(key, value);
  });

  // copy for every hour block by changing id

  $("#time1").siblings(".todo").val(localStorage.getItem("hour8"));

  $("#time2").siblings(".todo").val(localStorage.getItem("hour9"));

  $("#time3").siblings(".todo").val(localStorage.getItem("hour10"));

  $("#time4").siblings(".todo").val(localStorage.getItem("hour2"));

  $("#time5").siblings(".todo").val(localStorage.getItem("hour1"));

  $("#time6").siblings(".todo").val(localStorage.getItem("hour6"));

  $("#time7").siblings(".todo").val(localStorage.getItem("hour7"));

  $("#time8").siblings(".todo").val(localStorage.getItem("hour3"));

  $("#time9").siblings(".todo").val(localStorage.getItem("hour4"));

  $("#time10").siblings(".todo").val(localStorage.getItem("hour5"));
});
