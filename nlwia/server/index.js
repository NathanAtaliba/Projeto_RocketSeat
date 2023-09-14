import express from 'express';
import cors from 'cors';
import { download } from './download.js'
import { transcribe } from './transcribe.js';
import { summarize } from './summarize.js';
import { convert } from './convert.js';


const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/summary/:id', async (req, res) => {
    try{
        await download(req.params.id);
        const audioConverted = await convert();
        const result = await transcribe(audioConverted);
        return res.json({ result });
    }catch(error){
        console.log(error);
        return response.json({error});
}
})

app.post("/summary", async (req, res) => {
    try{
        const result = await summarize(req.body.text)
        return res.json({ result });
    }
    catch(error){
        console.log(error);
        return response.json({error});
    }
})
app.listen(port,()=>{
    console.log(`Servidor ouvindo na porta ${port}`);

})