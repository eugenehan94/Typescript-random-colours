const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn") as HTMLButtonElement
const btnTitle = document.getElementById("btn-title") as HTMLButtonElement
const color = document.querySelector<HTMLSpanElement>(".color")
const title = document.getElementById("title") as HTMLElement
const titleColor = document.querySelector<HTMLSpanElement>(".title-color")

btn.addEventListener("click", ()=> {
  let hexColor = "#"
  for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
  }
  color!.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

btnTitle.addEventListener("click", () => {
  let hexColor = "#"
  for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
  }
  titleColor!.textContent = hexColor;
  title.style.color = hexColor;
})

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * hex.length)
}


export {}