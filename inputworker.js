function updateCountdown() {
                let inputDate = new Date(document.getElementById("dateInput").value);
                let currentDate = new Date();
                let diff = inputDate.getTime() - currentDate.getTime();
                let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let countdownText = `${days} days and ${hours} hours until ${inputDate.toString()}`;
                document.getElementById("countdownText").innerText = countdownText;
            }