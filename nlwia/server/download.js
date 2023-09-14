import ytdl from 'ytdl-core';
import fs from 'fs';

export const download = (videoId) =>
new Promise ((resolve, reject)=>{
    const videoURL = "https://www.youtube.com/shorts/"+ videoId;
    console.log(`Realizando o download do video: ${videoId}!`);
    ytdl(videoURL, { filter: "audioonly"})
    .on("info",
        (info) => {
            const segundos = info.formats[0].approxDurationMs/1000;
            if(segundos > 60){ 
                throw new error("A duração do video é maior que 60s")   
            }
            else{
                console.log("O video é um short de duração: "+ segundos +" s")
            }
    }).on("end",()=>{
        console.log("Download do vídeo finalizado!");
        resolve();
    }).on("error",(error)=>{
        console.log("Não foi possivel fazer o download: ",
        error);
        reject(error);
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"));
})