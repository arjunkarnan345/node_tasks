import express from 'express'
  

//console.log(express);

const App = express();

const PORT = 3000;
  App.listen(PORT,()=>{
    console.log(`this server is rening http/localhost: ${PORT} `);
    
  })