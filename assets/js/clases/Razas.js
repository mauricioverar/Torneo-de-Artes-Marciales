import Personaje from "./Personaje.js";

class Saiyajin extends Personaje{
    constructor(nombre,img,poder,raza){
        super(nombre, img, poder, raza)
    }

    Transformacion(){
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 3.1))
    }
}

class Humano extends Personaje{
    constructor(nombre,img,poder,raza){
        super(nombre, img, poder, raza)
    }

    Coraje(){
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 2.1))
    }
}

export { Saiyajin, Humano}
console.log(new Humano("krilin","...",12345,"..."))