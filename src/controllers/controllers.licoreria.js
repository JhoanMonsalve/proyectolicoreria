export const principal = (req, res) => {
    res.render("views.index.ejs");
};
export const productos = (req, res) => {
    res.render("views.productos.ejs")
}
export const cervezas = (req, res) => {
    res.render ("views.cervezas.ejs")
}
export const aguardiente = (req, res) => {
    res.render("views.aguardiente.ejs")
}
export const ron = (req, res) => {
    res.render("views.ron.ejs")
}
export const granizados = (req, res) => {
    res.render("views.granizados.ejs")
}
export const micheladas = (req, res) => {
    res.render("views.michelada.ejs")
}
export const bebidas = (req, res) => {
    res.render("views.bebidas.ejs")
}