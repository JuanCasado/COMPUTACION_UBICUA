"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Connection and configuration.
var app = (0, _express["default"])();
var port = 900;
Mongoose.connect("mongodb://localhost:27018/smart_bed", {
    "user": "sensor_user",
    "pass": "sensor",
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log("Waiting for request ...");
});

//============== MODELS AND SCHEMAS ===============

// Alarm model and schema.
const AlarmModel = Mongoose.model("alarm",{
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
const FlexModel = Mongoose.model("flex",{
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
const HabitModel = Mongoose.model("habit",{
    userId:     {
        type: String,
        required: true
    },
    created:
    {
        type: Date,
        required: true
    }
});

// Humidity model and schema.
const HumidityModel = Mongoose.model("humidity",{
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
const NoiseModel = Mongoose.model("noise",{
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
const PositionModel = Mongoose.model("position",{
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

// Mongoose temperature data model.

const TemperatureModel = Mongoose.model("temperature",{
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
const UserModel = Mongoose.model("user",{
    userId:     {
        type: String,
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
        required: true
    },
    created:
    {
        type: Date,
        required: true
    }
});

// Weights model and schema.
const WeightModel = Mongoose.model("weight",{
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
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/alarms", async (request, response, next) => {
    try {
        var result = await AlarmModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/alarms/:id", async (request, response, next) => {
    try {
        var record = await AlarmModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});


//---------- Flex REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/flex", async (request, response, next) => {
    try {
        var record = new FlexModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/flexes", async (request, response, next) => {
    try {
        var result = await FlexModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/flexes/:id", async (request, response, next) => {
    try {
        var record = await FlexModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

//---------- Habits REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/habit", async (request, response, next) => {
    try {
        var record = new HabitModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/habits", async (request, response, next) => {
    try {
        var result = await HabitModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/habits/:id", async (request, response, next) => {
    try {
        var record = await HabitModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/habit/:id", async (request, response, next) => {
    try {
        var result = await HabitModel.deleteOne({_id: request.params.id}).exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});


//---------- Humidity REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/humidity", async (request, response, next) => {
    try {
        var record = new HumidityModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/humidities", async (request, response, next) => {
    try {
        var result = await HumidityModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/humidities/:id", async (request, response, next) => {
    try {
        var record = await HumidityModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/humidity/:id", async (request, response, next) => {
    try {
        var result = await HumidityModel.deleteOne({_id: request.params.id}).exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

//---------- Noise REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/noise", async (request, response, next) => {
    try {
        var record = new NoiseModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/noises", async (request, response, next) => {
    try {
        var result = await NoiseModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/noises/:id", async (request, response, next) => {
    try {
        var record = await NoiseModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

//---------- Position REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/position", async (request, response, next) => {
    try {
        var record = new PositionModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/positions", async (request, response, next) => {
    try {
        var result = await PositionModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/positions/:id", async (request, response, next) => {
    try {
        var record = await PositionModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/position/:id", async (request, response, next) => {
    try {
        var result = await PositionModel.deleteOne({_id: request.params.id}).exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

//---------- Temperature REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/temperature", async (request, response, next) => {
    try {
        var record = new TemperatureModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/temperatures", async (request, response, next) => {
    try {
        var result = await TemperatureModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/temperatures/:id", async (request, response, next) => {
    try {
        var record = await TemperatureModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

// Delete a record in the database.
app.delete("/temperature/:id", async (request, response, next) => {
    try {
        var result = await TemperatureModel.deleteOne({_id: request.params.id}).exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

//---------- User REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/user", async (request, response, next) => {
    try {
        var record = new UserModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/users", async (request, response, next) => {
    try {
        var result = await UserModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/users/:id", async (request, response, next) => {
    try {
        var record = await UserModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});

//---------- Weight REST API with CRUD. ----------

// Add a new register to the collection.
app.post("/weight", async (request, response, next) => {
    try {
        var record = new WeightModel(request.body);
        if (record.validate()){
            var result = await record.save();
            response.send(result);
        } else {
            response.status(500).send(error);
        }

        
    } catch (error){
        response.status(500).send(error);
    }
});

// Get all the data in the database.
app.get("/weights", async (request, response, next) => {
    try {
        var result = await WeightModel.find().exec();
        response.send(result);
    } catch (error){
        response.status(500).send(error);
    }
});

// Get an special register from the database.
app.get("/weights/:id", async (request, response, next) => {
    try {
        var record = await WeightModel.findById(request.params.id).exec();
        response.send(record);
    } catch (error){
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
    } catch (error){
        response.status(500).send(error);
    }
});
