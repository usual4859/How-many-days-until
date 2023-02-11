      // Get the input field
      var input = document.getElementById("dateInput");
      // Execute a function when the user releases a key on the keyboard
      input.addEventListener("change", function(event) {
          // Calculate the number of days until the given date
          var date1 = new Date();
          var date2 = new Date(input.value);
          var timeDiff = Math.abs(date2.getTime() - date1.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          
          // Update the DOM with the number of days
          document.getElementById("days").textContent = diffDays;
      });
