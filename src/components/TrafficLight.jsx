import React, { useEffect, useState } from 'react';

function TrafficLight() {
    const [estado, setEstado] = useState('rojo');
    const [tiempo, setTiempo] = useState(5);
    const [numero, setNumero] = useState(5);

    useEffect(() => {

        let intervalHandler;
        // console.log(this);
        let intervalFuncion;
        let i;

        const counter = (t) => {
            i = t;
            intervalFuncion = setInterval(() => {
                if (i === 0) {
                    // setTiempo(i--)
                    setNumero(t);
                    clearInterval(intervalFuncion);
                } else {
                    setTiempo(i--)
                    setNumero(i);
                }
                // console.log(i);
            }, 1000);
        }
        switch (estado) {
            case 'rojo':
                counter(6);
                intervalHandler = setInterval(() => {
                    setEstado('amarillo');
                    setTiempo(3);
                    setNumero(3)
                }, 6000);
                break;

            case 'amarillo':
                counter(3)
                intervalHandler = setInterval(() => {
                    setEstado('verde');
                    setTiempo(7);
                    setNumero(7);
                }, 3000);
                // console.log(intervalHandler);
                break;

            case 'verde':
                counter(7);
                intervalHandler = setInterval(() => {
                    setEstado('rojo');
                    setTiempo(6);
                    setNumero(6);
                }, 7000);
                // console.log(intervalHandler);
                break;

            default:
                setEstado('rojo');
                break;
        }

        return () => {
            clearInterval(intervalHandler);
            clearInterval(intervalFuncion);
        }

    }, [estado])


    return (
        <div className='flex w-full mx-auto justify-center'>
            <div className="border-2 border-black w-36 flex flex-col items-center justify-center py-3 bg-gray-800">
                <div
                    className={`flex justify-center items-center border-2 h-20 w-20 rounded-full ${estado === 'rojo' ? 'bg-red-500 shadow-lg shadow-red-400' : 'bg-red-200'}`}
                >
                    {estado === 'rojo' && <p className='text-white font-bold top-0 left-0 right-0 text-3xl'>{numero}</p>}
                </div>
                <div
                    className={`flex justify-center items-center border-2 h-20 w-20 rounded-full mt-4 ${estado === 'amarillo' ? 'bg-amber-400 shadow-lg shadow-amber-300' : 'bg-amber-200'}`}
                >
                    {estado === 'amarillo' && <p className='text-white font-bold top-0 left-0 right-0 text-3xl'>{numero}</p>}
                </div>
                <div
                    className={`flex justify-center items-center border-2 h-20 w-20 rounded-full mt-4 ${estado === 'verde' ? 'bg-green-500 shadow-lg shadow-green-400' : 'bg-green-200'}`}
                >
                    {estado === 'verde' && <p className='text-white font-bold top-0 left-0 right-0 text-3xl'>{numero}</p>}
                </div>
            </div>
        </div>
    );
}

export default TrafficLight;