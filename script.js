const second = document.querySelector(".second")
const minute = document.querySelector(".minute")
const hour = document.querySelector(".hour")


setInterval(() => {
  document.querySelector(".fullTime").textContent = new Date().toUTCString().slice(5, 16)


  let clockHours = new Date().getHours().toString().padStart("2", 0)

  let clockMinutes = new Date().getMinutes().toString().padStart("2", 0)

  let clockSeconds = new Date().getSeconds().toString().padStart("2", 0)

  document.querySelector(".buttomHour").textContent = clockHours
  document.querySelector(".buttomMinute").textContent = clockMinutes
  document.querySelector(".buttomSecond").textContent = clockSeconds


  let degForSec = -90 + (new Date().getSeconds() * 6)
  let degForMin = -90 + (new Date().getMinutes() * 6)
  let degForHour = -90 + ((new Date().getHours() * 30) + (new Date().getMinutes() / 2))


  second.setAttribute("style", `rotate: ${degForSec}deg;`)
  minute.setAttribute("style", `rotate: ${degForMin}deg;`)
  hour.setAttribute("style", `rotate: ${degForHour}deg;`)

}, 1000);

