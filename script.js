const inputLogin = document.querySelector('#login');
const rightEye = document.querySelector('.right-eye');
const leftEye = document.querySelector('.left-eye');
const MAX = 31;

inputLogin.addEventListener('input', () => {
  const valueLength = inputLogin.value.length;
  console.log(valueLength);
  if (valueLength < MAX) {
    let percentValue = (inputLogin.value.length / 31) * 100;
    rightEye.style.transform = `translateX(${percentValue * 1.2}%)`
    leftEye.style.transform = `translateX(${percentValue * 1.2}%)`
  }
});
