export async function deleteUpdate(message, conn) {
  try {
    const { fromMe, id, participant } = message;
    if (fromMe) return;

    let msg = conn.serializeM(conn.loadMessage(id));
    let chat = global.db.data.chats[msg?.chat] || {};
    if (!chat?.delete) return;
    if (!msg?.isGroup) return;

    const antideleteMessage = `
╭•┈•〘❌ 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 ❌〙•┈• ◊
│❒ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: @${participant.split`@`[0]}
│❒ 𝗔𝗰𝗮𝗯𝗮 𝗱𝗲 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘂𝗻 𝗺𝗲𝗻𝘀𝗮𝗷𝗲
│𝗿𝗲𝗲𝗻𝘃𝗶𝗮𝗻𝗱𝗼... ⏱️
╰•┈•〘❌ 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 ❌〙•┈• ◊`.trim();

    await conn.sendMessage(msg.chat, { text: antideleteMessage, mentions: [participant] }, { quoted: msg });
    conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg));
  } catch (e) {
    console.error(e);
  }
}
