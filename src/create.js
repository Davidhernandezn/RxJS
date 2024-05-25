import { displayLog } from './utils';
import { Observable } from 'rxjs';//
//CREAR OBSERVABLE PARA EMITIR EVENTOS HELLOW  
export default () => {
    /** start coding */
    /**NEXT ENVIA PUSH DE VALORES DESDE OBSERVABLE AL OBSERVER*/
    //SUSCRIBIRSE A LA SECUENCIA DE EVENTOS
//    const hello = Observable.create(function(observer){
    
   const hello = new Observable((observer) => {
        observer.next("Hello");
        observer.next("Word");
        observer.complete(); // Finalizar la emisión de eventos
    });

 // Suscribirse a la secuencia de eventos y mostrar los datos en el HTML
 const subscription = hello.subscribe({
    next: (evt) => displayLog(evt),
    error: (err) => console.error('Error: ', err),
    complete: () => console.log('Observable completado')
});}

    //suscripcion al observavble
    //hrllo al ser observable puede llamar al metodo suscribe
    //displayLog MUESTRA RESULTADO EN PANTALLA
    //DESCRIBIR QUE HARÁ LA FUNCIÓN NEXT
    //const subscribe = hello.subscribe(evt => displayLog(evt));//CADA EVENTO RECIBIDO LO MUESTRAS POR PANTALLA
    
    

    /*const src1 = interval(300);
    const src2 = "Hello World!";
    zip(src1, src2).subscribe(x =>displayLog(x[1]));**/
    /** end coding */

/** 
    static create: Function = <T>(subscribe?: (subscriber: Subscriber<T>) => TeardownLogic) => {
        return new Observable<T>(subscribe); 
 }**/

