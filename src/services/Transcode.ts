import { createFFmpeg,fetchFile } from "@ffmpeg/ffmpeg";

export const transcode = async (file:File) => {
    const {name} = file
    console.log(name)
    const ffmpeg = createFFmpeg({
        log:true
      });
  
      await ffmpeg.load()

      let command = `-i ${name} -acodec aac -vcodec copy output.mp4`



        ffmpeg.FS('writeFile',name,await fetchFile(file));
    await ffmpeg.run('-i',name,'-acodec','aac','-segment','5','-vcodec','copy','output.mp4');
     const data = ffmpeg.FS("readFile", "output.mp4");
     console.log(data)
}
