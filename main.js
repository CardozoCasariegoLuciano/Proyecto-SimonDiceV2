const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')

const btn = document.getElementById("btn")

const dificultad = document.getElementById("dificultad")

const nombre = document.getElementById("nombre")

const GameConfigs = document.getElementById("gameConfig")



function empezarJuego(){
    var juego = new Juego()
}


class Juego{    

    constructor(){

        this.inicializar= this.inicializar.bind(this)        

        this.inicializar()
        this.generarSecuencia()

        setTimeout(()=>{
            this.siguienteNivel()
        }, 500)
    }

    inicializar(){        

        this.hideGameConfig()
        this.ULTIMO_NIVEL = this.seleccionarDificultad()

        this.nivel = 1

        this.boxes = {
            box1,
            box2,
            box3, 
            box4, 
            box5, 
            box6, 
            box7,
            box8, 
            box9 
        }

        this.dificultad = dificultad
    }

    seleccionarDificultad(){

        switch(dificultad.value){
            case "facil" :
                return 10
            case "media":
                return 15
            case "dificil":
                return 20
            default:
                return 20
        }  

    }

    hideGameConfig(){        

        if(GameConfigs.classList.contains('ocultar')){
            GameConfigs.classList.remove('ocultar')
        }else{
            GameConfigs.classList.add('ocultar')
        }
       
    }

    generarSecuencia(){
        this.secuencia = new Array(this.ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 9))

        console.log(this.secuencia)
    }

    siguienteNivel(){

        this.subnivel= 0
        this.ilumunarSecuencia()
        this.agregarEventosClic()
    }

    transformarBoxANumero(box){

        switch(box){

            case box1:
                return 0
                
            case box2:
                return 1        
                
            case box3:
                return 2
        
            case box4:
                return 3
        
            case box5:
                return 4
        
            case box6:
                return 5
        
            case box7:
                return 6
        
            case box8:
                return 7
        
            case box9:
                return 8 
        }
    }

    transformarNumeroABox(numero){

        switch(numero){

            case 0:
                return "box1"
                
            case 1:
                return "box2"     
                
            case 2:
                return "box3"
        
            case 3:
                return "box4"
        
            case 4:
                return "box5"
        
            case 5:
                return "box6"
        
            case 6:
                return "box7"
        
            case 7:
                return "box8"
        
            case 8:
                return "box9"
        }

    }

    ilumunarSecuencia(){

        for(let i = 0; i<this.nivel ; i++){

            let aBox = this.transformarNumeroABox(this.secuencia[i])

            console.log(aBox)

            setTimeout( ()=> this.ilumnarBox(aBox) , 1000 * i)
        }
    }

    ilumnarBox(aBox){ 

        this.boxes[aBox].classList.add('iluminar')

        setTimeout( ()=>{
            this.apagarBox(aBox)
        }, 500)

    }

    apagarBox(aBox){
        this.boxes[aBox].classList.remove('iluminar')
    }


    agregarEventosClic(){

    }




}
