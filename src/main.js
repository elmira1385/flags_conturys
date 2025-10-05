import './style.css'
const btm=document.getElementById("showhide")
const moonEl=document.getElementById("moon1")
const moonEl2=document.getElementById("moon2")
const darkEl=document.getElementById("darkMode")
const lightEl=document.getElementById("lightMode")
const container=document.getElementById("container")
 
const getCountries=async()=>{
  const respond=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3")
  const Countries=await respond.json()
  console.log(Countries);
  Countries.forEach((country)=>{
  container.innerHTML+=`
  
  <li
          class="flex flex-col rounded-[6px] overflow-hidden hover:scale-105 dark:bg-[#2B3945]"
        >
          <img class="w-[260px] h-[160px]" src=${country.flags.png} />
          <div class="flex flex-col gap-3 p-7">
            <div class="dark:text-white text-[18px] font-medium"> ${country.name.common}</div>
            <div class="flex flex-col gap-1">
              <p class="dark:text-white text-[14px]">
                Population:<span> ${country.population}</span>
              </p>
              <p class="dark:text-white text-[14px]">
                Region:<span> ${country.region}</span>
              </p>
              <p class="dark:text-white text-[14px]">
                Capital:<span> ${country.capital}</span>
              </p>
            </div>
          </div>
        </li>
  `
  })
}
getCountries()

btm.addEventListener("click",()=>{
  document.documentElement.classList.toggle("dark")
  moonEl.classList.toggle("hide")
  moonEl2.classList.toggle("show")
  moonEl.classList.toggle("show")
  darkEl.classList.toggle("show")
  lightEl.classList.toggle("hide")
  darkEl.classList.toggle("hide")
})



