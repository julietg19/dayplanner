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

// rowTime = document.getElementById("time1").innerHTML;

// moment(currentHour).isSame(rowTime, "hour");
