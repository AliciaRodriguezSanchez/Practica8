const yup = require("yup");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const authorSchema = yup.object({
    name: yup.string().required("El nombre es requerido"),
    email: yup.string().matches(emailRegex, "El campo email es incorrecto").required("El email es requerido"),
    image: yup.string("La ruta de la imagen no es un string"),
})


module.exports = {
    authorSchema
}
