import { interval, timer } from 'rxjs'
import { displayLog } from './utils'

export default() =>{
/*INTERVAL: SECUENCIAS DE VALORES CADA CIERTO INTERVALO.
            * NO ACABA NUNCA POR LO QUE HAY QUE FINALIZARLO (SUSCRIPCION)
            * SE REPITEN CADA CIERTO TIEMPO
            * 
TIMER ejecutar algo despues de cierto tiempo


*/

const source = interval(500); //crear onservable apartir de medio seg
const subscription = source.subscribe(data => displayLog(data));//MOSTRAR EN PANTALLA (ME SUSCRIBO)

//setTimeout(() => subscription.unsubscribe(),3000); //TERMINA A LOS 3 SEG

//TIMER RXJS, cancelamos suscriotion depues de 3seg
//podemos crear intervalos
timer(3000).subscribe(()=> subscription.unsubscribe());

//NUEVO OBSERVABLE
const source2 = timer (4000, 100);//INICIA EN 4 SEG Y SE REPITE CADA 100 MIILISEGUNDOS
//suscribe
const subscription2 = source2.subscribe(data => displayLog('SUB 2',data))
//CANCELAMOS OBSERVABLE
timer(6000).subscribe(() => subscription2.unsubscribe());
}