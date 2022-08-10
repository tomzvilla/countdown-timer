const daysEl = document.getElementById("days"), 
hoursEl = document.getElementById("hours"), 
minutesEl = document.getElementById("minutes"), 
secondsEl = document.getElementById("seconds"),
configEl = document.getElementById("config"),
datePickerEl = document.querySelector("input[name='datepicker']"),
datepicker = new Datepicker(datePickerEl, {minDate: new Date()});

datePickerEl.addEventListener("changeDate", alterCalendar);
datePickerEl.addEventListener("changeDate", saveDate);
configEl.addEventListener("click",alterCalendar);


function saveDate(){
    localStorage.setItem("date", new Date(datepicker.dates[0]))
}

function alterCalendar(){
    const divCalendar = document.getElementById("datepicker-wrapper");
    if(divCalendar.classList.contains("show")){
        divCalendar.classList.add("hide");
        divCalendar.classList.remove("show")
    } else{
        divCalendar.classList.remove("hide");
        divCalendar.classList.add("show")
    }
}
function countdown(){
    const currentTime = new Date();
    const selectedDate = new Date(localStorage.getItem("date")) ?? new Date();
    let total_seconds = (selectedDate - currentTime) <= 0 ? 0 : (selectedDate - currentTime) / 1000;

    let days = Math.floor(total_seconds / 3600 / 24 );
    let hours = Math.floor(total_seconds / 3600)  % 24;
    let minutes = Math.floor(total_seconds / 60) % 60;
    let seconds = Math.floor(total_seconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = addZero(hours);
    minutesEl.innerHTML = addZero(minutes);
    secondsEl.innerHTML = addZero(seconds);
}


function addZero(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);