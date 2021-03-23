require('dotenv').config()
//const Route = require('./routes/RouteGeneric')
//const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Rua = require('./model/Rua');

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


// Route("/Rua",app, new Service(Rua));


app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})