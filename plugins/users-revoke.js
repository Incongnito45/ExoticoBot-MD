export async function before(m,  {conn, participants, isBotAdmin}) {
    if(m.text.toLowerCase() === "reset"){
      if(isBotAdmin){
        if(m.isAdmin){
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
