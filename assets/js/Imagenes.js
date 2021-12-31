import Personajes from "./Consulta.js";
 
buttonImages.addEventListener("click", async() => {
    
    const { personajes } = await Personajes.getData();
    console.log('personajes' ,personajes);
    const personaje = document.getElementById("nombre").value; // tiene q ser value para nombre
    //alert('personaje ' ,personaje);

    const imagenesPjTemplate = personajes.find((item) => item.name == personaje).imagenes.map((foto) => `<img width="200" src="./assets/imgs/${personaje}/${foto}" />`).join("");

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate

    // ubicar en cuadro
    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (e) => {
            $("#imagenesModal").modal("toggle")
            const imagenSrc = e.target.src
            //alert(imagenSrc)
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})` 
        })
    })
})