import { displayLog } from "./utils";
import { of, range } from 'rxjs'

export default () => {
    /**FUNCIONES AL CREAR OBSERVABLES
     * FUNCIONES PARA CREAR OBSEVABLES EN SECUENCIA DE DATOS.
     * OF: EMITER UN A SECUENCIA VARIABLE DE OBJETOS DE DISTINTA TIPOLOGIA
     * RANGE: secuencia de datos de inicio y numero de valores
     */

    const source = of(1,2,3,4,5,6,7);
    const source2 = of(
        [1,2,3],
        "HELLO!!",
        {
            foo:"bar"
        },
        function sayHello(){
            return "HOLA FUNCTION";
        }
    )

    const source3 = range(3, 10);//MUESTRA RANGO DE NUMEROS INICIANDO DESDE 3 Y QUE TENGA 10 VALORES
    //const suscription = source.subscribe(data => displayLog(data));
    const suscriptionB = source2.subscribe(data => displayLog(data));
    const suscription = source3.subscribe(data => displayLog(data));

}