import Personajes from "./Consulta.js";
 
document.getElementById("buttonImages").addEventListener("click", async () => {
    const {personajes} = await Personajes.getData();
    console.log('personajes' ,personajes);
    const pj = document.getElementById("nombre").value;
    console.log('pj ' ,pj);

    const imagenesPjTemplate = personajes.find((p) => p.name == pj).imagenes.map((k) => `<img width="200" src="/assets/imgs/${pj}/${k}" />`).join("");

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate

    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (e) => {
            $("#imagenesModal").modal("toggle")
            const imagenSrc = e.target.src
            //alert(imagenSrc)
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})` 
        })
    })
})