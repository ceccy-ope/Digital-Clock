function startTime() {
    let hours = document.querySelector("#hour");
    let minutes = document.querySelector("#min");
    let seconds = document.querySelector("#sec");
     

    let hour = hours.innerHTML
    let min = minutes.innerHTML
    let sec = seconds.innerHTML

    let time = new Date();
    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
    
    let meridian = document.querySelector("#meridian")
    if (hour >= 12) {
        meridian.innerHTML = "pm"
    }
    if(hour > 12){
       hour = hour-12
       hours.innerHTML = hour
    }
    if(sec< 10){
        seconds.innerHTML = "0" + seconds.innerHTML
    }
 
    if(min< 10){
        minutes.innerHTML = "0" + minutes.innerHTML
    }

    if(hour< 10){
        hours.innerHTML = "0" + hours.innerHTML
    }
    }



setInterval(startTime, 100)
