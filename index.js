console.log ("iniciado");
var Informacion= {"nombre":"hola"}
//var Datainfo = JSON.parse(Informacion);
console.log ("el nombre "+ Informacion.nombre);
console.log ("el nombre " + Informacion["nombre"]);

var fs = require("fs");

var Archivo = fs.readFileSync("data.json");
var DataArchivo = JSON.parse(Archivo);
console.log ("el correo es: " + DataArchivo.correo);
DataArchivo.edad = 12;
DataArchivo["sexo"] = "M";
var GuardarArchivo = JSON.stringify(DataArchivo);
fs.writeFileSync ('data.json',GuardarArchivo);
