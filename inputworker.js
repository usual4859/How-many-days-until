var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    $('#dateInput').attr('min',today);

function updateCountdown() {
      var dateInput = document.getElementById("dateInput").value;
      var currentDate = new Date();
      var inputDate = new Date(dateInput);

      var timeDifference = inputDate.getTime() - currentDate.getTime();

      if (timeDifference < 0) {
        document.getElementById("countdownText").innerHTML = "Please enter a date in the future.";
      } else {
        var daysUntil = Math.ceil(timeDifference / (1000 * 3600 * 24));
        document.getElementById("countdownText").innerHTML = daysUntil + " days until " + inputDate.toDateString();
      }
    }