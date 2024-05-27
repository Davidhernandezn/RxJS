import { displayLog } from "./utils";
import { from, fromEvent } from "rxjs"; //PARA CREAR OBSERVABLE PARA EVENTOS CLICK
//import { mapTo } from 'rxjs/operators'
import { map, filter} from 'rxjs/operators'//obtener posicion del click y mostrarlo en array

export default () => {
/**
 * MAP TO = OPERADOR DE TRANSFORMACION, CADA EVENTO QUE INGRESA DEVUELVE EL MISMO VALOR
 *          PODEMOS USARLA EN UN MENU, AL SER SELECCIONADA UNA OPCION EJECUTAR UNA ACCIÓN
 * 
 * FILTER = PERMITIR VALORES QUE CUMPLEN CONDICION (TRUE)
 */

    /**Start coding */
    const grid = document.getElementById('grid'); //INGRESAMOS AL ELEMENTO POR EL DOM


    //MAP TO AHORA SE USA POR PIPE
    const click$ = fromEvent(grid, 'click').pipe(
        //mapTo('CLICK'));//OBSERVABLE QUE DEVUELVE EVENTOS (SE TRANSFORMA A CLICK))
        //map(val => [val.offsetX, val.offsetY])

        map(val => [//DEVOLVER LA CASILLA (50 X 50 PX DIVIDIRLO PARA OBTENERLO) MATRIZ
            Math.floor(val.offsetX / 50),
            Math.floor(val.offsetY / 50)
        ]),
        //FILTRAR PARA IMPAR
        filter( val => (val[0] + val[1] % 2 != 0))
        ); 
       //OBSERVABLE

    //SUBSCRIBE
    const subscription = click$.subscribe(data => displayLog(data));

    //OFFSET X y Y DA LA POSICION RELATIVA DEL CLICK DENTRO DEL GRID



    /**END CODE*/
} 