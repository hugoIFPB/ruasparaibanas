require('dotenv').config()
const { Op, Model } = require('sequelize');
let db = require("./db");
const Cidade = require('./model/Disciplina');
const Bairro = require('./model/DisciplinaLivro');
const Rua = require('./model/Edicao');


async function sincronizar() {
    await db.sync({force: true});
}

async function inserir() {
    let cidade = {nome: "Areial", descricao: "Cidade próxima a Esperança"};
     cidade = await Cidade.create(cidade);
   Bairro.create({quantidade: 10, principalId: cidade.id}); 
   Rua.create({quantidade: 104, principalId: Bairro.id}); 
   
   Cidade = await Livro.create({nome: "Esperança", descricao: "Cidade onde o Campus está localizado"});
 Bairro.create({quantidade: 10, principalId: cidade.id}); 
 Rua.create({quantidade: 104, principalId: Bairro.id}); 
 
}

// 
// inserir(a1);

async function consultar() {
    /*let ruas =  await Rua.findAll({
        where: {
            nome: {
                [Op.like]: "Arquitetura%"
            }
        }
    }
    );
    console.log(ruas);
    */
    let rua = await Rua.findOne(
        {
            where: {
                id:4
            }
        }
    );
    //let ed = Bairro.findOne();
    //ed.getRua();
    console.log((await rua.getBairro()));
}
//sincronizar();
inserir();
//consultar();