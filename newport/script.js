const toogle = document.querySelector("nav .toogle input");
const nav = document.querySelector("nav ul");

toogle.addEventListener("click", function () {
  console.log(toogle);
  nav.classList.toggle("slide");
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyl3M9ffPU4SvD-zslFxzn7tw6V6EH1oL5ghTFpU7Y6oAGMJKoNUGS2YeyEoLncEg/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Message sent Successfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

  

       