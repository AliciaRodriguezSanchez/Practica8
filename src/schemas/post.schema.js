const yup = require("yup");

const categories = [
    "tecnologia",
    "deportes",
    "noticias",
    "cultura",
    "viajes",
    "opinion",
];

const postSchema = yup.object({
    title: yup.string().required("El titulo es requerido"),
    description: yup.string().required("La descripcion es requerida"),
    category: yup
        .string()
        .oneOf(categories, "La categoria no es valida")
        .required("La categoria es requerida"),
    author_id: yup.number().required("El autor es requerido"),
});

module.exports = {
    postSchema,
    categories,
};
