/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// function greet(time=""){
//   if (time < '11:59'){
//     return "Good Morning";
//   }
//   else if (time >= '12:00' && time < '17:00'){
//     return "Good Afternoon";
//   } else if (time > '17:01' && time < '24:00'){
//     return "Good Evening";
//   }

// }
function greet(timeStr){
  let nowTime = timeStr.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour<12){
    return "Good Morning";
  } else if (nowHour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}


function displayMessage(display){
  document.getElementById('greeting').innerText = display
}