# Proyecto: cama inteligente
Computación Ubicua 2019  
!["cama"](https://media.istockphoto.com/photos/bed-architect-blueprint-isolated-picture-id965401716)
## Arquitectura del sistema propuesto
### Bloque Arduino (Pasivo)
El bloque de arduino será el encargado de la toma de datos de la cama, teniendo una capacidad máxima de 12 sensores analógicos, su funcionamiento será pasivo siendo las Raspberry Pi la parte activa. Se conectará mediante Bluetooth con la Raspberry Pi.
* Sensores de flexibilidad
* Sensores de presión
* Detector de sonido
* Sensor de temperatura y humedad
* Buzzer
### Bloque servidor (Activo)
#### Raspberry (Procesado)
El bloque del servidor es el encargado del procesado de los datos recopilados y las llamadas al arduino por el bloque de arduino, estará implementado en una Raspberry Pi mediante Python y Node.js.
#### Servidor
El servidor se compondrá de dos Docker, uno para la base de datos que se desarrollará en PostgreSQL y se modelará con PgModeller, y otro para el servidor web que se implementará en Flask. Ambos se conectarán entre sí mediante Docker Compose.
## Diagrama de despliegue
!["despliegue"](https://github.com/JuanCasado/COMPUTACION_UBICUA/blob/master/docs/ubicua-despliegue.png)
[Modificar](https://drive.google.com/file/d/10vnE64GIEg94d85AUN2JgCjgdXFPqmgg/view?usp=sharing "Modificar diagrama")
