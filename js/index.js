//brows
let leftBrow = document.querySelector("#left_eye .brow");
let rightBrow = document.querySelector("#right_eye .brow");
let brows = [leftBrow, rightBrow];
//pupils
let leftPupil = document.querySelector("#left_eye .eye_pupil");
let rightPupil = document.querySelector("#right_eye .eye_pupil");
let pupils = [leftPupil, rightPupil];
//eyes
let leftEye = document.querySelector("#left_eye");
let rightEye = document.querySelector("#right_eye");
let eyes = [leftEye, rightEye];

//clearing functions for face parts
function clearEyes(){
  eyes.forEach((eye) => {
    eye.classList.remove('angry');
    eye.classList.remove('eye_roll');
  });
}

//removig all the classes from the eyebrows
function clearBrows(){
  brows.forEach((brow) =>{
    brow.classList.remove('angry');
    brow.classList.remove('concentration');
    brow.classList.remove('shifty');
  });
}

//removing all of the classes from the pupils
function clearPupils(){
  pupils.forEach( (pupil) => {
    pupil.classList.remove('look_left');
    pupil.classList.remove('look_right');
    pupil.classList.remove('scared');
    pupil.classList.remove('neuralizer');
    pupil.classList.remove('angry');
    pupil.classList.remove('concentration');
    pupil.classList.remove('shifty');
  });
}

function scared(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('scared');
  });
  setTimeout(clearPupils, 600);
}
function eyesLeft(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('look_left');
  });
  setTimeout(clearPupils,600);
}
function eyesRight(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('look_right');
  });
  setTimeout(clearPupils,600);
}
function neuralizer(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('neuralizer');
  });
  setTimeout(clearPupils,600);
}
function angry(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('angry');
  });
  brows.forEach((brow) => {
    brow.classList.add('angry');
  });
  setTimeout(clearPupils,600);
  setTimeout(clearBrows,600);
}

function concentration(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('concentration');
  });
  brows.forEach((brow) => {
    brow.classList.add('concentration');
  });
  setTimeout(clearPupils,600);
  setTimeout(clearBrows,600);
}

function eyeRoll(e){
  e.preventDefault();
  eyes.forEach( (eye) => {
    eye.classList.add('eye_roll');
  });
  setTimeout(clearEyes, 1000);
}

//setting the classes to connect the face part to the right timeline animation
function shifty(e){
  e.preventDefault();
  pupils.forEach( (pupil) => {
    pupil.classList.add('shifty');
  });
  brows.forEach((brow) => {
    brow.classList.add('shifty');
  });
  setTimeout(clearPupils, 3000);
  setTimeout(clearBrows, 3000);
}

//here we connect listeners to a target button and to a function
//looking left and right
document.querySelector("#look_left").addEventListener("click", eyesLeft);
document.querySelector("#look_right").addEventListener("click", eyesRight);
//rolling eyes
document.querySelector("#eye_roll").addEventListener("click", eyeRoll);
//colour change to green
document.querySelector("#scared").addEventListener("click", scared);
//example of skew
document.querySelector("#neuralizer").addEventListener("click", neuralizer);
//angry red eyes
document.querySelector("#angry").addEventListener("click", angry);
//concentrating eyes
document.querySelector("#concentration").addEventListener("click", concentration);
//combination of effects scaling and translating
document.querySelector("#shifty").addEventListener("click", shifty);