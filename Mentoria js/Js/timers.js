
// setTimeOut 

// let timer = setTimeout(() => {
//   alert("Hola te estoy saludando");
// }, 3000);

// clearTimeout(timer);


// // setInterval()

const timer = () => {
  console.log("hola");
}

let timer2 = setInterval(() => {
  timer();
}, 2000);


document.querySelector(".btn").addEventListener("click",function(){
  clearInterval(timer2);
});