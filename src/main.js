import './style.css'
const btm=document.getElementById("showhide")
const container=document.getElementById("container")
btm.addEventListener("click",()=>{
  document.documentElement.classList.toggle("dark")
})

//https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3
