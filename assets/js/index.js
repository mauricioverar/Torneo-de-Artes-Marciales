import { Saiyajin, Humano} from "./clases/Razas.js";


let participantes = []

document.getElementById("btnRegistrar").addEventListener("click",()=>{
    let nombre = document.getElementById("nombre")
    let raza = document.getElementById("raza")
    let previewElement = document.getElementById("preview")
    let imagenSrcBg = previewElement.style.backgroundImage
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2)
    let ki = document.getElementById("poderPelea")

    let nuevoParticipante

    if(raza.value == "Saiyajin"){
        nuevoParticipante = new Saiyajin(
            nombre.value, 
            imgSrc, 
            ki.value,
            raza.value// tambn tenia I
        )

    } else if (raza.value == "Humano"){
        nuevoParticipante = new Humano(nombre.value,imgSrc,ki.value,raza.value);// ojo tenia valueI
    }

    if (raza.value && nombre.value && ki.value && imagenSrcBg) {//exito
        participantes.push(nuevoParticipante)
        console.log(participantes)
        nombre.selectedIndex = 0// decidimos q esa es la opcion q esta activada en este momento
        raza.selectedIndex = 0
        previewElement.style.backgroundImage = "none"
        imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0"
        ki.value = ""
        reloadTable()
    } else {
        alert("falta dato")
    }


})

const reloadTable = () => {
    const participantesTemplate = document.getElementById("Participantes")
    participantesTemplate.innerHTML = ""
    participantes.forEach((p,i)=>{
        participantesTemplate.innerHTML+=`
        <div class="px-3 pb-2 participante" data-fighter="${p.getNombre()}">
            <div class="card">
                <img 
                src="${p.getImg()}"
                class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${p.getNombre()}</h4>
                    <hr class="w-50 mx-auto">
                    <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                    <h6 class="card-text">Poder de pelea: <span class="text-danger"> ${p.getPoder()}</span></h6>
                    <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')"> Habilidad Especial</button>
                </div>
            </div>
        </div>
        `
    })
}
// no funcionaría con ES5 o ES6 , por eso se usa window
window.activarHabilidad = (i) => {
    const participante = participantes[i]
    if (participante.getRaza() == "Saiyajin") {
        participante.Transformacion()
    } else if (participante.getRaza() == "Humano") {
        participante.Coraje()
    }
    reloadTable()//refrescar
}

document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a,b)=> b.getPoder() - a.getPoder())[0]
    const nombre = masFuerte.getNombre()

    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0 0 5px 1px yellow"
})