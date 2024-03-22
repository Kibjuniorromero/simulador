// import Odometer from 'react-odometerjs';
import { CharTransition } from 'lesca-react-char-transition';
// eslint-disable-next-line react/prop-types
const MesesOdometer = () => {

    
    return (
        <div>
            <h1>Ejemplo de CharTransition</h1>
            <CharTransition
                text="Hola mundo!"
                duration={1000} // Duración de la transición en milisegundos
                charInterval={100} // Intervalo entre cada caracter en milisegundos
                // Opcional: Puedes agregar cualquier propiedades CSS aquí para estilizar el texto.
                style={{ fontSize: '24px', fontWeight: 'bold' }}
            />
        </div>
    );
};

export default MesesOdometer;
