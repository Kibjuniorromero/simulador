
// import { useEffect, useState } from 'react';
// import MesesOdometer from './MesesOdometer';
// import MesesOdometer from './MesesOdometer';
import CharTransition from 'lesca-react-char-transition';

function Simulador() {


    return (
        <div>

            <div>
                <p>Ejemplo de CharTransition Meses</p>
                <CharTransition
                    duration={1000}
                    gap={500}
                >
                    <div>
                        ENE
                    </div>
                    <div>
                        2022
                    </div>

                </CharTransition>

                <p>Ejemplo de CharTransition año</p>
                <CharTransition duration={1000} gap={500} preChar='?' pause={false}>
                    2030
                </CharTransition>
            </div>

        </div>


    )
}

export default Simulador
