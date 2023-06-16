const usuarios = [];

export default function form(req, res) {
    if (req.method === "POST") {
        post(req, res)
    }
    get(req, res)
}

function post(req, res) {
    const usuario = JSON.parse(req.body)
    usuarios.push(usuario);
    res.status(200).send();
}

function get(req, res) {
    res.status(200).json(usuarios);
}