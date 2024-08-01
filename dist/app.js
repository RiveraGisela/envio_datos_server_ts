"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)()
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 10101;
// . Cree una ruta que reciba los datos del registro de una persona de la siguiente manera y consúmala con
// un cliente rest:
// Parámetros en la ruta:
// ● domicilio
// Parámetros de consulta(string query):
// ● cc
// ● nombres
// ● apellidos
// método: POST
app.post('/parametros-ruta/:domicilio', function (request, response) {
    let domicilio = request.params.domicilio;
    let cc = request.query.cc;
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    return response.status(201).json({
        "status": "ok params",
        nombres: nombres, apellidos: apellidos
    });
});
// Cree una ruta que reciba los datos del registro de un artículo de la siguiente manera y consúmala con un
// cliente rest::
// Parámetros en la ruta:
// ● id
// ● peso
// Json con propiedades:
// ● ancho
// ● alto
// método: POST
app.post('/parametros-ruta/:id/:peso', function (request, response) {
    let id = request.params.id;
    let peso = request.params.peso;
    let ancho = request.body.ancho;
    let alto = request.body.alto;
    return response.status(201).json({
        "status": "ok params",
        alto: alto, ancho: ancho
    });
});
// Cree una ruta que reciba los datos del borrado de un usuario de la siguiente manera y consúmala con un
// cliente rest::
// Parámetros de consulta(string query):
// ● cc
// Json con propiedades:
// ● motivo
// Cabeceras con:
// ● id
// método: DELETE
app.delete('/parametros-consulta', function (request, response) {
    let cc = request.query.cc;
    let motivo = request.body.motivo;
    let id = request.header("Authorization");
    return response.status(200).json({
        "status": "usuario eliminado",
        motivo: motivo, id: id
    });
});
//  Cree una ruta que reciba los datos de la actualización del registro de un usuario de la siguiente manera y
// consúmala con un cliente rest::
// Parámetros de consulta(string query):
// ● cc
// Json con propiedades:
// ● apellidos
// Cabeceras con:
// ● domicilio
// método: PUT
app.put('/parametro-consulta/', function (request, response) {
    let cc = request.query.cc;
    let apellidos = request.body.apellidos;
    let domicilio = request.header("Authorization");
    return response.status(200).json({
        "status": "usuario actualizado",
        domicilio: domicilio,
        cc: cc,
        apellidos: apellidos
    });
});
// 5. Cree una ruta que reciba los datos de la actualización del registro de un usuario de la siguiente manera y
// consúmala con un cliente rest::
// Parámetros de consulta(string query):
// ● precio
// Parámetros en la ruta:
// ● cantidad
// ● marca
// Cabeceras con:
// ● domicilio
// método: GET
app.get('/parametros-consulta/:cantidad/:marca/', function (request, response) {
    let precio = request.query.precio;
    let cantidad = request.params.cantidad;
    let marca = request.params.marca;
    let domicilio = request.header("Authorization");
    return response.status(200).json({
        "status": "ok",
        precio: precio,
        cantidad: cantidad,
        marca: marca,
        domicilio: domicilio
    });
});
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
