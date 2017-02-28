import {app} from 'config/constants'
import Table from 'modules/Table'
import {errorMsg} from 'helpers/utils'

let canvas = document.createElement('canvas')
let context = canvas.getContext('2d')
let video = document.createElement('video')
let frame

function preSetup(){
  const devices = navigator.mediaDevices.enumerateDevices()
    .then(devices=>{
      const inputDevices = devices.filter(device=>device.kind==='videoinput')
      if(inputDevices.length === 0){
        errorMsg('no device detected','preSetup')
      }else{
        let deviceSelect = document.createElement('select')
        deviceSelect.onchange = (e)=>handleDeviceChange(e) 
        inputDevices.map(device=>{
          const option = document.createElement('option')
          option.innerHTML = device.deviceId
          deviceSelect.appendChild(option)
        })
        app.appendChild(deviceSelect)
      }
    })
}

function handleDeviceChange(event){
  console.log(event.target.value)
  const constrains = {audio:false,video:{deviceId:event.target.value}}

  navigator.mediaDevices.getUserMedia(constrains)
    .then(stream=>{
      frame = stream
      video.srcObject = stream
      video.onloadedmetadata = (e)=>{video.play()}
        // app.appendChild(videoElement)
      console.log(stream)
      canvas.width = 600
      canvas.height= 400
      app.appendChild(canvas)
      
    })
    .catch(error=>errorMsg(error))

}

function setup(){
}

function draw(){
  window.requestAnimationFrame(draw)
  if(frame!==undefined){
    context.drawImage(video,0,0)
  }
  console.log(context.getImageData(0,0,1,1).data)
}

window.onload = ()=>{
  preSetup()
  setup()
  draw()
}