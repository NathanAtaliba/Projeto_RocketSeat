import { summaryExample } from './utils/summary.js';

export async function summarize(text){
    try{
        console.log("Realizando resumo!")
    const generator = await pipeline(
        "summarization",
        "xenova/distilbart-cnn-12-6"
    )
    const output = await generator(text)

    console.log("Resumo concluido com sucesso!");
    return output[0].summary_text;
}catch(error){
    console.log(error);
    throw new Error(error);
}
}