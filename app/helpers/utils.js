import { app } from 'config/constants'

export function errorMsg(msg,error){
  let errorDiv = app.querySelector('#error')

  if(errorDiv === null){
    errorDiv = document.createElement('div')
    errorDiv.id = 'error'
    app.appendChild(errorDiv)
  }

  errorDiv.innerHTML = `<p>${msg}</p>`
  console.error(error)
}