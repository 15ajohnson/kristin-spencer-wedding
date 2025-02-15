var endDate = new Date("July 15, 2025 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {       
        const countdown = {
            "days": Math.floor(t / (1000 * 60 * 60 * 24)),
            "hours": Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 
            "minutes": Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)), 
            "seconds": Math.floor((t % (1000 * 60)) / 1000)
        }

        for (const [key, value] of Object.entries(countdown)) {
            if (value == 1) {
                label = `${key.slice(0, -1)}`
            }
            else {
                label = `${key}`
            }

            document.getElementById(`timer-${key}`).innerHTML = ("0" + value).slice(-2);
            document.getElementById(`label-${key}`).innerHTML = `${label}`;
        }
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);