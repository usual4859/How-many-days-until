function updateCountdown()
{
  var date =        document.getElementById('dateInput').value;
              
            var inpDate = new Date(date);
            var currDate = new Date();
              
            if(inpDate.setHours(0, 0, 0, 0) == 
                    currDate.setHours(0, 0, 0, 0))
            {
               document.getElementById("countdownText").innerText = "The input date is today's date. Please enter another date.";
            }
else
{                let inputDate = new Date(document.getElementById("dateInput").value);
                let currentDate = new Date();
                let diff = inputDate.getTime() - currentDate.getTime();
                let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let countdownText = `${days} days and ${hours} hours until ${inputDate.toString()}`;
                document.getElementById("countdownText").innerText = countdownText;
}}
function clearCountdown()
    {
document.getElementById("countdownText").innerText = "0 days and 0 hours";
document.getElementById("dateInput").value = "";
    }