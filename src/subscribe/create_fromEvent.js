import { fromEvent } from 'rxjs';
import { displayLog } from '../utils';

/**
*OBSERVABLE QUE ASOCIADO A UN EVENT TARGET, PARA EMITIR LOS EVENTOS GENERADOS
*CANALIZA EVENTOS DEL DOM 
*O EVENT EMITERS DE NODE
*REACCIONAR A EVENTOS DE LA INTERFAZ  
*/

export default () => {
//REFERENCIAMOS ELEMENTO
    const actionBtn = document.getElementById('action-btn');

//observable apartir de los eventos (target y eventoAEscuchar);
const source = fromEvent(actionBtn, 'click');

//NOS SUSCRIBIMOS AL OBSERVABLE A LOS DATOS (DATOS RECIBIDOS)
//LO QUE HARÉ CON LOS DATOS
source.subscribe(evt => {
    displayLog(`click event at pos (${evt.x}, ${evt.y})`);
})


//NUEVO
fromEvent(document, 'mousemove').subscribe(evt =>{
    console.log(evt);
})} 