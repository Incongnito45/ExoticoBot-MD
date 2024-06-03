export async function before(m,  {conn, participants, isBotAdmin, usedPrefix}) {
    let grupo_completo = participants;
    let administrador = false;
    try{
        for(let u = 0; grupo_completo.length; u++){
            if(m.sender === grupo_completo[u].id){
                if(grupo_completo[u].admin == "admin" || grupo_completo[u].admin == "superadmin"){
                    administrador = true;
                    break;
                }else{
                    break;
                }
            }
        }
    }catch{
    }
    if(m.text.toLowerCase() === usedPrefix+"reset"){
      if(isBotAdmin){
        if(administrador){
          await this.groupInviteCode(m.chat);
          await this.sendMessage(m.chat, {text: "El enlace se ah restablecido con exito"});
        }else{
          await this.sendMessage(m.chat, {text: "No eres un admin!"});
        }
      }else{
        await this.sendMessage(m.chat, {text: "El bot no es un administrador!"});
      }
    }
}
