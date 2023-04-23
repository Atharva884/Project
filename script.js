console.log("Hello");

let formation = document.querySelector('#formation')
let muds = document.querySelector('#muds')
let statement = document.querySelector('.statement')
let mudValue;
let formationValue;

formation.addEventListener('change', ()=>{
    formationValue = formation.value;
    if(formation.value == ""){
        alert("Select your formation")
        muds.style.pointerEvents = "none"
    }
    muds.selectedIndex = 0;
    console.log(formation.value);
    muds.disabled = false;
    muds.style.pointerEvents = "auto"
})
muds.addEventListener('change', ()=>{
    mudValue = muds.value;
    console.log(muds.value);

    console.log("values");
    console.log(formationValue);
    console.log(mudValue);
    if(muds.value == ""){
        alert("Select your Mud")
        // muds.disabled = true;
    }else if(mudValue == "waterBasedMud" && formationValue == "shale"){
        statement.innerHTML = `
            <div class="alert alert-info" role="alert">
                Problem that may arises: <strong>Swelling</strong> 
            </div>
        `;
    }
})
