function showTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);