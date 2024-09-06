document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
  document.getElementById('checkbox-card').addEventListener('mouseover', function (e) {
    const greeting = document.getElementById('greeting');
    greeting.classList.remove('red', 'green', 'blue');
    if (e.target.classList.contains('form-check-label')) {
      const elem = document.getElementById(e.target.id);
      greeting.classList.add(elem.id.split("_").pop());
    }
  })
  document.getElementById('checkAll').addEventListener("click", function (e) {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(e => {
      if (e.checked === false) {
        document.getElementById(e.id).click();
      }
    });
  })
  document.getElementById('uncheckAll').addEventListener("click", function (e) {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(e => {
      if (e.checked === true) {
        document.getElementById(e.id).click();
      }
    });
  })
  document.getElementById('submit').addEventListener('click', function (e) {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const numOfCheckedBoxes = 0;
    checkboxes.forEach(e => {
      if (e.checked === true) {
        numOfCheckedBoxes++;
      }
    });
    if(numOfCheckedBoxes == 0){
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  })









  //Random Greeting Attention Seeker
  const chosenAnimation = Math.floor(Math.random() * 12);
  if (chosenAnimation === 0) {
    document.getElementById('greeting').classList.add("animate__bounce");
  }
  if (chosenAnimation === 1) {
    document.getElementById('greeting').classList.add("animate__flash");
  }
  if (chosenAnimation === 2) {
    document.getElementById('greeting').classList.add("animate__pulse");
  }
  if (chosenAnimation === 3) {
    document.getElementById('greeting').classList.add("animate__rubberBand");
  }
  if (chosenAnimation === 4) {
    document.getElementById('greeting').classList.add("animate__shakeX");
  }
  if (chosenAnimation === 5) {
    document.getElementById('greeting').classList.add("animate__shakeY");
  }
  if (chosenAnimation === 6) {
    document.getElementById('greeting').classList.add("animate__headShake");
  }
  if (chosenAnimation === 7) {
    document.getElementById('greeting').classList.add("animate__swing");
  }
  if (chosenAnimation === 8) {
    document.getElementById('greeting').classList.add("animate__tada");
  }
  if (chosenAnimation === 9) {
    document.getElementById('greeting').classList.add("animate__wobble");
  }
  if (chosenAnimation === 10) {
    document.getElementById('greeting').classList.add("animate__jello");
  }
  if (chosenAnimation === 11) {
    document.getElementById('greeting').classList.add("animate__heartBeat");
  }
});