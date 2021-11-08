// const mongoose = require("mongoose");

// const url = "mongodb://localhost:27017/test";
// mongoose.connect(url);

// mongoose.connection.on("error", function(e){console.error(e);});

// mongoose.disconnect();

// const mongoose = require("mongoose");

// const url = "mongodb://localhost:27016/test";

// async function conn(url){
//     try{
//         await mongoose.connect(url);
//     }catch (error){
//         console.error(error);
//     }
//     mongoose.disconnect();
// }
// conn(url);

// const mongoose = require("mongoose");

// const url = "mongodb://localhost:27017/test";

// mongoose.connect(url, function(err){
//     if(err) throw err;
//     console.log("Conexión correcta")
// });
// mongoose.disconnect();

// Creación de esquema, de objeto y escribir en la BD
// const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/test";

// mongoose.connect(url, function(err){
//     if(err) throw err;
//     console.log("Conexión correcta")
// });

// const objectSchema = {
//     _id: mongoose.Schema.Types.ObjectId,
//     name: {
//         firstName: String,
//         lastName: String
//     },
//     created: Date,
// };
// const userSchema = mongoose.Schema(objectSchema);

// let User = mongoose.model('User', userSchema);
// let antonio = {
//     _id: new mongoose.Types.ObjectId(),
//     name:{
//         firstName: "Antonio José",
//         lastName: "López de Hoyos"
//     },
//     created: Date.now()
// };
// let userAntonio = new User (antonio);

// userAntonio.save(function(err){
//     if(err) throw err;
//     console.log("Inserción correcta");
//     mongoose.disconnect()
// })

// Validación de datos

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/test";

mongoose.connect(url, function(err){
    if(err) throw err;
    console.log("Conexión correcta")
});

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        firstName: String,
        lastName: String
    },
    created: Date,
    linkedin:{
        type: String,
        validate: {
            validator: function(urlLinkedin){
                return urlLinkedin.indexOf("https://www.linkedin.com/") == 0;
            },
            message: "Linkedin Incorrecto"
        }
    }
};
const userSchema = mongoose.Schema(objectSchema);

let User = mongoose.model('User', userSchema);

//Inserción

// let julio = {
//     _id: new mongoose.Types.ObjectId(),
//     name:{
//         firstName: "Julio",
//         lastName: "Ruiz Mateos"
//     },
//     created: Date.now(),
//     linkedin:"https://www.linkedin.com/julioruizmateos"
// };
// let userJulio = new User (julio);

// userJulio.save(function(err){
//     if(err) throw err;
//     console.log("Inserción correcta");
//     // mongoose.disconnect();
// });

// Búsquedas

// User.findById('618910f11dbc92382877bc45', function (err, user){
//     if(err) throw err;
//     console.log('User con id 618910f11dbc92382877bc45:\n' + user);
//     mongoose.disconnect();
// });

// User.find({
//     linkedin: "https://www.linkedin.com/julioruizmateos"
// }).exec(function(err, res){
//     if(err) throw err;
//     console.log("Users:\n"+res);
//     mongoose.disconnect();
// })

// Sexta parte: Actualizaciones
// User.findById("618910f11dbc92382877bc45", function(err, res){
//     if(err) throw err;
//     res.linkedin = "https://www.linkedin.com/quetepegoleches";
//     res.save(function(err){
//         if(err) throw err;
//         console.log("Actualización correcta");
//         mongoose.disconnect();
//     })
// });

// Septima parte: Borrados

User.findById('61890e68a98b9b78b09c8b7b', function(err, res){
    if(err) throw err;
    res.remove(function(err){
        if(err) throw err;
        console.log("Borrado correcto");
        mongoose.disconnect();
    });
});