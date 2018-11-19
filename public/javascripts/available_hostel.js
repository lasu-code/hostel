// let form = document.getElementById('generated')
// const input = document.createElement('input')
// var att = document.createAttribute("type");
// att.value = "button";                     
// input.setAttributeNode(att);



let picked = () => {
    document.getElementById('form1').removeAttribute('hidden')
}
let handleInactive = (e)=> {
    e.preventDefault()
    document.getElementById('b1f1').disabled = true
}