window.onload = function() {
  // Set countdown timer on home page
  if (document.getElementById("timer") != null) {
    const endDate = new Date("July 12, 2025 5:30:00").getTime();
    setInterval(function() {
      const now = new Date().getTime();
      const t = endDate - now;
          
      if (t >= 0) {       
        const countdown = {
          "days": Math.floor(t / (1000 * 60 * 60 * 24)),
          "hours": Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 
          "minutes": Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)), 
          "seconds": Math.floor((t % (1000 * 60)) / 1000)
        }
  
        for (const [key, value] of Object.entries(countdown)) {
          label = `${key}`
          const slice = (value.toString().length) * -1;
          document.getElementById(`timer-${key}`).innerHTML = ("0" + value).slice(slice);
          document.getElementById(`label-${key}`).innerHTML = `${label}`;
        }
      } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
      }
    }, 1000);
  }
}




