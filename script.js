let form = document.getElementsByTagName('form')[0]
let emailInput = document.getElementById('email')
let emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
let data = {}

function validateEmail() {
  let isValid = emailRegx.test(emailInput.value)
  form.classList.toggle('error-state', !isValid)
  return isValid
}
if (form && emailInput) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!validateEmail()) return

    data = Object.fromEntries(new FormData(e.target))
    console.log(data)

    window.localStorage.setItem('email', data['email'])
    window.location.href = 'success-page.html'
  })
  form.addEventListener('submit', validateEmail)
}

let strongEle = document.getElementsByTagName('strong')[0]
let dismissBtn = document.getElementById('dismiss')
if (strongEle) {
  strongEle.textContent = window.localStorage.getItem('email')
}
if (dismissBtn) {
  dismissBtn.addEventListener('click', () => {
    window.history.back()
    window.localStorage.removeItem('email')
  })
}
