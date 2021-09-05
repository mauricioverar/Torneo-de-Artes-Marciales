class Personaje {
    constructor(nombre, img, poder, raza){

        let Nombre = nombre
        let Img = img
        let Poder = poder
        let Raza = raza

        this.getNombre = () => Nombre
        this.getImg = () => Img
        this.getPoder = () => Poder
        this.getRaza = () => Raza

        this.setPoder = (poder) => (Poder = poder)
    }
    get Nombre() {
        return this.getNombre()
    }
    get Img() {
        return this.getImg()
    }
    get Poder() {
        return this.getPoder()
    }
    get Raza() {
        return this.getRaza()
    }
    get Poder() {
        return this.getPoder(poder)
    }
}
console.log(new Personaje("goku","--",1234, "wewe"))
export default Personaje