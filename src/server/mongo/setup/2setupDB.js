
db.createCollection("user")
db.createCollection("temperature")
db.createCollection("humidity")
db.createCollection("weight")
db.createCollection("flex")
db.createCollection("noise")

db.createCollection("position")
db.createCollection("habits")
db.createCollection("alarms")

db.createUser({
  user: "sensor_user",
  pwd: "sensor",
  roles: [
      { role: "readWrite", db: "smart_bed" }
  ]
})

db.createRole({
  role: "webRole",
	privileges: [
    { resource: { db: "smart_bed", collection: "position" }, actions: [  "find", "update", "insert", "remove" ] },
    { resource: { db: "smart_bed", collection: "habits" },  actions: [  "find", "update", "insert", "remove" ] },
    { resource: { db: "smart_bed", collection: "alarms" }, actions: [  "find", "update", "insert", "remove" ] }
	],
  roles: [
    { role: "read", db: "smart_bed" }
  ]
})

db.createUser({
  user: "web_user",
  pwd: "web",
  roles: [
      { role: "webRole", db: "smart_bed" }
  ]
})
