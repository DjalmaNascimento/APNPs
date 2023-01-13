const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Acessado")
})

app.listen(3000,function(){
    console.log("Conexao Inicializada na porta 3000")
})