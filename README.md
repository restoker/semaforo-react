# semaforo-react

descarga el proyecto luego intalalo con el comando 

## npm i

finalmente usa el comando para correr el poyecto

## npm run dev


parte visual:

![1](https://user-images.githubusercontent.com/32400065/229644505-e4efcb38-6ca4-4c78-8e10-c016cbe56f95.JPG)
![2](https://user-images.githubusercontent.com/32400065/229644556-fa54ca4d-439f-40c0-ad53-086035c9e64d.JPG)
![3](https://user-images.githubusercontent.com/32400065/229644562-fdb62866-3ac8-4ede-bcf6-03cb6aaa3343.JPG)


## explicación

en el componente TrafficLight.js

existen 2 estados 

el primero controla el cambio de color de las luces
el segundo el tiempo de duracion de cada luz

la logica se coloca dentro de un useeffect el cual escucha el cambio del primer estado, el cual es la dependencia del efecto


se crea la funcion counter la cual tiene dentro un setinterval que disminuye cada segundo el tiempo de duracion de cada luz, restado en 1 el segundo estado

finalmente se agrega un switch para definir la siguiente accion que se realizara, en el caso que sea rojo el contador se pondra en 6 segundo y se agregara un setinterval el cual permitira pasados 6 segundos cambiar de color y establecer el contador para dicho color
