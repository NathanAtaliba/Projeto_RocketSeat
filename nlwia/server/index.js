import express from 'express';
import cors from 'cors';
import { download } from './download.js'
const app = express();
const port = 3000;

app.use(cors());

app.get('/summary/:id',(req, res)=>{
    let id = req.params.id;
    download(id);
    res.json({result: "Download realizado com sucesso!"});
})
app.listen(port,()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
})