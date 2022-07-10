# SORTE DE HOJE

## :exclamation: Prévia

Me chamo Bárbara Baron, tenho 29 anos e estou finalizando meu curso de desenvolvimento back-end nas stacks de NodeJs com JavaScript. Como uma boa cria dos anos 90 tive o prazer de conhecer e usufruir de uma das melhores redes sociais já inventadas - o Orkut. Infelizmente nosso querido amigo não durou para sempre e foi erradicado da internet. 

Com o objetivo de deixar pelo menos um pedacinho dele vivo, e também matar um pouco da saudade, desenvolvi esta API de Sorte do Dia, resgatando algumas das frases motivacionais que o Orkut nos agraciava diariamente.

<br>

## :wrench: Ferramentas Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
| `Postman` | Interface gráfica para realizar os testes|

 <br>

## :file_folder: Arquitetura do Projeto

   📁 sorte-de-hoje  
   |  
   |-  📁 src    
   |    |- 📄 app.js
   | 
   |    |
   |    |- 📁 database  
   |         |- 📄 mongooseConnect.js  
   |
   |    |- 📁 controllers  
   |         |- 📄 sorteDeHojeController.js  
   |  
   |    |- 📁 models  
   |         |- 📄 sorteDeHoje.js  
   |  
   |    |- 📁 routes  
   |         |- 📄 sorteDeHojeRoutes.js      
   |
   |- 📄 .env
   |- 📄 .gitignore  
   |- 📄 package-lock.json  
   |- 📄 pakage.json
   |- 📄 server.js







