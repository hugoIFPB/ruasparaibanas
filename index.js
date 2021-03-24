require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');

const Cidade = require('./model/Cidade');
const Bairro = require('./model/Bairro');
const Rua = require('./model/Rua');
const Pergunta = require('./model/Pergunta');
const Entrevista = require('./model/Entrevista');
const Podcast = require('./model/Podcast');
const HQ = require('./model/HQ')
const Administrador = require('./model/Administrador');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.json({ message: 'Ruas do Agreste Paraibano' })
});

app.get("/Rua", async (req, res) => {
  let Rua = await Rua.findAll(); 
  res.json(Rua);
});

app.get("/Rua/:id", async (req, res) => {
  let Rua = await Rua.findByPk(req.params.id); 
  res.json(Rua);
});

Route("/Cidade",app, new Service(Cidade));
Route("/Bairro",app, new Service(Bairro));
Route("/Rua",app, new Service(Rua));
Route("/Pergunta",app, new Service(Pergunta));
Route("/Entrevista",app, new Service(Entrevista));
Route("/Podcast",app, new Service(Podcast));
Route("/HQ",app, new Service(HQ));
Route("/Administrador",app, new Service(Administrador));


app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})