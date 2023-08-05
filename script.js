const adId = document.getElementById("ad-id");
const adContainer = document.getElementById("ad-container");
const adViceBTN = document.getElementById("advice-btn")
async function genAdvice(){
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json()
    adHTML(data.slip)
}

function adHTML({id,advice}){
    return adContainer.innerHTML = `
    <p id="ad-id">Advice #${id}</p>
      <p id="advice-text"><i class="fa-solid fa-quote-left"></i>${advice}<i class="fa-solid fa-quote-right"></i></p>
      <img src="./images/pattern-divider-desktop.svg" class ="divider" alt="divider-img">
    `
}
// eventListener
adViceBTN.addEventListener('click', genAdvice)