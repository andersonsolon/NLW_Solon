
//função para inserir a listagem dos estados na função select state
function populateUFs(){
  const ufselect = document.querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then(res => res.json() )
  .then( states => {
    for (state of states){
      ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

    }
    
  })
  
}

populateUFs()


function getCities(events) {
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")
  
  const ufvalue = event.target.value
  
  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

  fetch(url)
  .then(res => res.json() )
  .then( cities => {
    for (city of cities){
      citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
    }
    citySelect.disabled=false

    
  })
  
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)



//quando houver uma alteração na listagem ou funções no JS vai aparecer 
//no console do navegador uma mensagem

//document.querySelector("select[name=uf]")
// .addEventListener("change", ()=>{
//  console.log("mudei")
//})