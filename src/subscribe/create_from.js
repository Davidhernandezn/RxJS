import { from } from "rxjs";
import { displayLog } from "./utils";

export default() =>{
    //CREA OBSERVABLES APARTIR DE ARRAYS, PROMISES Y OPERQADORES

    const myArray = [1,2,3,4,5]; 
    const myString = "HELLO WORLD";

    //const observable = from(myArray); //PARA CREAR OBSERVABLE
    const observable = from(myString); //PARA CREAR OBSERVABLE
    //suscription
    const suscripcion = observable.subscribe(val => displayLog(val));

    //FROM PERMITE CONVERTIR PROMISE EN OBSERVABLE AL IGUAL QUE SECUENCIAS OBSERVABLES APARTIR DE ARRAYS
    const myPromise = new Promise (resolve => setTimeout(() =>{
        resolve('Hello Word');
    },2000));

    //UN EVENTO CON RESULTADO DE LA PROMISE
    const observableMyPromise = from (myPromise);
    const subsMyPromise = observableMyPromise.subscribe(val => displayLog(val));

    //PROMISE SOLO PERMITE EMITIR UN EVENTO (NO PE)
    //OBSERVALBE PERMITE FLUJO DE DATOS, SE PUEDE CANCELAR  (ESPECIAL PARA CANELAR PETICIONES )
}