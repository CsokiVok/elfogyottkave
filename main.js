import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.css'

const uzenetBe = document.getElementById('uzenet');
const csuszkaBe = document.getElementById('csuszka');
function updateMessage() {
  const severity = csuszkaBe.value;
  uzenetBe.classList.remove('alert-info', 'alert-warning', 'alert-danger');
  if (severity == 0) {
    uzenetBe.classList.add('alert-info');
    uzenetBe.textContent = 'Televan!';
  } else if (severity == 1) {
    uzenetBe.classList.add('alert-warning');
    uzenetBe.textContent = 'Újratöltés szükséges hamarosan!';
  } else if (severity == 2) {
    uzenetBe.classList.add('alert-danger');
    uzenetBe.textContent = 'Kritikus!';
  }
}

csuszkaBe.addEventListener('input', updateMessage);