# Guia MongoDB en Docker
## Docker
Se obtiene la última versión de la base de datos de MongoDB.
```shell
docker pull mongo
```
Se crea el docker que tendrá la base de datos, para ello se indica los puertos, nombre, imagen y autenticación.
```shell
docker run -d -p 27018:27017 --name smart_bed mongo:latest --auth
```
Con el docker creado, se accede a su consola.
```shell
docker exec -it smart_bed bash
```
### Guardar y cargar docker (Una vez terminado todo)



## MongoDB
Abrir shell de mongo
```shell
mongo
```
## Crear usuarios
### Se usa la base de datos de admin
```shell
use admin
```
### Crear admin
Se creara como un superuser (root).
```js
db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [ { role: "root", db: "admin" }]
  }
)
```
### Reinicio del sistema
```js
db.adminCommand( { shutdown: 1 } )
```
### Autenticacion en la base de datos
Se ha de conectarse indicando el usuario y contraseña, junto a la opción --authenticationDatabase \<base de datos>.
```shell
mongo --authenticationDatabase "admin" -u "admin" -p "admin"
```
### Mostrar bases de datos
```shell
show dbs
```
### Crear nueva base de datos
```shell
use smart_bed
```
### Crear colecciones dentro de la base de datos
```js
db.createCollection("user")
db.createCollection("temperature")
db.createCollection("humidity")
db.createCollection("weight")
db.createCollection("flex")
db.createCollection("noise")

db.createCollection("position")
db.createCollection("habits")
db.createCollection("alarms")
```
### Mostrar colecciones
```shell
show collections
```
### Crear roles y usuarios
El usuario sensor_user puede leer y escribir sobre todas las colecciones de datos.

```js
db.createUser(
  {
    user: "sensor_user",
    pwd: "sensor",
    roles: [
       { role: "readWrite", db: "smart_bed" }
    ]
  }
)
```
El usuario web_user puede leer todas las colecciones de datos y solo puede realizar operaciones CRUD sobre las colecciones de positions, habits y alarms.
```js
db.createRole(
   {
     role: "webRole",
	privileges: [
	{ resource: { db: "smart_bed", collection: "position" }, actions: [  "find", "update", "insert", "remove" ] },
	{ resource: { db: "smart_bed", collection: "habits" },  actions: [  "find", "update", "insert", "remove" ] },
	{ resource: { db: "smart_bed", collection: "alarms" }, actions: [  "find", "update", "insert", "remove" ] }
	],
    roles: [
       { role: "read", db: "smart_bed" }
       ]
   }
)

db.createUser(
  {
    user: "web_user",
    pwd: "web",
    roles: [
       { role: "webRole", db: "smart_bed" }
    ]
  }
)
```
### Autenticarse con usuarios nuevos
Autenticación de un usuario sobre la base de datos de smartbed
```shell
mongo --authenticationDatabase "smart_bed" -u "sensor_server" -p "sensor"
```
