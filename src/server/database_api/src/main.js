"use strict";

const _express = require("express");
const _mongoose = require("mongoose");
const _bodyParser = require("body-parser");

// Connection and configuration.
var app = _express();
var port = 8080;
_mongoose.connect("mongodb://163.172.80.168:27017/smart_bed", {
    "user": "sensor_user",
    "pass": "sensor",
});

app.use(_bodyParser.json());
app.use(_bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log("database_api => Ready");
});

//============== MODELS AND SCHEMAS ===============

// Alarm model and schema.
const AlarmModel = _mongoose.model("alarm",{
    userId:     {
        type: String,
        required: true
    },
    time: 
    {
        type:  Number,
        required: true
    },
    days: 
    {
        type:  [Number],
        required: true
    },
    decibel: 
    {
        type:  Number,
        required: true
    },
    created:
    {
        type: Date,
        required: true
    }
});

// Flex model and schema.
const FlexModel = _mongoose.model("flex",{
    userId:     {
        type: String,
        required: true
    },
    value: 
    {
        type:  [Number],
        required: true
    },
    captured:
    {
        type: Date,
        required: true
    }
});

// Habit model and schema.
const HabitModel = _mongoose.model("habit",{
    userId:     {
        type: String,
        required: true
    },
    name:     {
        type: String,
        required: true
    },
    value: 
    {
        type:  Number,
        required: true
    },
    created:
    {
        type: Date,
        required: true
    }
});

// Humidity model and schema.
const HumidityModel = _mongoose.model("humidity",{
    userId:     {
        type: String,
        required: true
    },
    value: 
    {
        type: Number,
        required: true
    },
    captured:
    {
        type: Date,
        required: true
    }
});

// Noise model and schema.
const NoiseModel = _mongoose.model("noise",{
    userId:     {
        type: String,
        required: true
    },
    value: 
    {
        type:  Number,
        required: true
    },
    captured:
    {
        type: Date,
        required: true
    }
});

// Position model and schema.
const PositionModel = _mongoose.model("position",{
    userId:     {
        type: String,
        required: true
    },
    position: 
    {
        type:  String,
        required: true
    },
    captured:
    {
        type: Date,
        required: true
    }
});

// _mongoose temperature data model.

const TemperatureModel = _mongoose.model("temperature",{
    userId:     {
        type: String,
        required: true
    },
    value:     {
        type: Number,
        required: true
    },
    captured:
    {
        type: Date,
        required: true
    }
});

// User model and schema
const UserModel = _mongoose.model("user",{
    userId:     {
        type: String,
        unique : true,
        required: true
    },
    name: 
    {
        type:  String,
        required: true
    },
    age:
    {
        type: Number,
        required: true
    },
    mail:
    {
        type: String,
        unique : true,
        required: true
    },
    passw:
    {
        type: String,
        required: true
    },
    created:
    {
        type: Date,
        required: true
    }
});

// Weights model and schema.
const WeightModel = _mongoose.model("weight",{
    userId:     {
        type: String,
        required: true
    },
    value: 
    {
        type: Number,
        required: true
    },
    captured:
    {
        type: Date,
        required: true
    }
});

//============== APIs ===============

//---------- Alarm REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/alarm", async (request, response, next) => {
    try {
        var record = new AlarmModel(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/alarms", async (request, response, next) => {
    try {
        var result = await AlarmModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/alarms/:id", async (request, response, next) => {
    try {
        var record = await AlarmModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});



// Get a register from the database using user.
app.get("/alarms/user/:id", async (request, response, next) => {
    try {
        var record = await AlarmModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/alarm/:id", async (request, response, next) => {
    try {
        var record = await AlarmModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


//---------- Flex REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/flex", async (request, response, next) => {
    try {
        var record = new FlexModel(request.body);
        var result = await record.save();
        response.send(result);

    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/flexes", async (request, response, next) => {
    try {
        var result = await FlexModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/flexes/:id", async (request, response, next) => {
    try {
        var record = await FlexModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/flexes/user/:id", async (request, response, next) => {
    try {
        var record = await FlexModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/flex/:id", async (request, response, next) => {
    try {
        var record = await FlexModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//---------- Habits REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/habit", async (request, response, next) => {
    try {
        var record = new HabitModel(request.body);
        var result = await record.save();
        response.send(result);


    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/habits", async (request, response, next) => {
    try {
        var result = await HabitModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/habits/:id", async (request, response, next) => {
    try {
        var record = await HabitModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/habits/user/:id", async (request, response, next) => {
    try {
        var record = await HabitModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/habit/:id", async (request, response, next) => {
    try {
        var record = await HabitModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/habit/:id", async (request, response, next) => {
    try {
        var result = await HabitModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


//---------- Humidity REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/humidity", async (request, response, next) => {
    try {
        var record = new HumidityModel(request.body);
        var result = await record.save();
        response.send(result);

    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/humidities", async (request, response, next) => {
    try {
        var result = await HumidityModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/humidities/:id", async (request, response, next) => {
    try {
        var record = await HumidityModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/humidities/user/:id", async (request, response, next) => {
    try {
        var record = await HumidityModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/humidity/:id", async (request, response, next) => {
    try {
        var record = await HumidityModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/humidity/:id", async (request, response, next) => {
    try {
        var result = await HumidityModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//---------- Noise REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/noise", async (request, response, next) => {
    try {
        var record = new NoiseModel(request.body);
        var result = await record.save();
        response.send(result);

    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/noises", async (request, response, next) => {
    try {
        var result = await NoiseModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/noises/:id", async (request, response, next) => {
    try {
        var record = await NoiseModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});


// Get a register from the database using user.
app.get("/noises/user/:id", async (request, response, next) => {
    try {
        var record = await NoiseModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/noise/:id", async (request, response, next) => {
    try {
        var record = await NoiseModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//---------- Position REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/position", async (request, response, next) => {
    try {
        var record = new PositionModel(request.body);
        var result = await record.save();
        response.send(result);


    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/positions", async (request, response, next) => {
    try {
        var result = await PositionModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/positions/:id", async (request, response, next) => {
    try {
        var record = await PositionModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/positions/user/:id", async (request, response, next) => {
    try {
        var record = await PositionModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/position/:id", async (request, response, next) => {
    try {
        var record = await PositionModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/position/:id", async (request, response, next) => {
    try {
        var result = await PositionModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//---------- Temperature REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/temperature", async (request, response, next) => {
    try {
        var record = new TemperatureModel(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/temperatures", async (request, response, next) => {
    try {
        var result = await TemperatureModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/temperatures/:id", async (request, response, next) => {
    try {
        var record = await TemperatureModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/temperatures/user/:id", async (request, response, next) => {
    try {
        var record = await TemperatureModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});


// Update a register in the database.
app.put("/temperature/:id", async (request, response, next) => {
    try {
        var record = await TemperatureModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/temperature/:id", async (request, response, next) => {
    try {
        var result = await TemperatureModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//---------- User REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/user", async (request, response, next) => {
    try {
        var record = new UserModel(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/users", async (request, response, next) => {
    try {
        var result = await UserModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/users/:id", async (request, response, next) => {
    try {
        var record = await UserModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/users/user/:id", async (request, response, next) => {
    try {
        var record = await UserModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/user/:id", async (request, response, next) => {
    try {
        var record = await UserModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//---------- Weight REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/weight", async (request, response, next) => {
    try {
        var record = new WeightModel(request.body);
        var result = await record.save();
        response.send(result);

    } catch (error) {
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/weights", async (request, response, next) => {
    try {
        var result = await WeightModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/weights/:id", async (request, response, next) => {
    try {
        var record = await WeightModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get a register from the database using user.
app.get("/weights/user/:id", async (request, response, next) => {
    try {
        var record = await WeightModel.find({userId:request.params.id}).exec();
        response.send(record);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update a register in the database.
app.put("/weight/:id", async (request, response, next) => {
    try {
        var record = await WeightModel.findById(request.params.id).exec();
        record.set(request.body);
        var result = await record.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
