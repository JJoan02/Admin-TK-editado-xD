export function updateUser(sender, message) {
  let user = global.db.data.users[sender] || {};
  
  if (!user.exp) user.exp = 0;
  if (!user.level) user.level = 0;

  global.db.data.users[sender] = { ...user, exp: user.exp + message.exp };
}

export function updateChat(chatId) {
  let chat = global.db.data.chats[chatId] || {};
  
  if (!chat.isBanned) chat.isBanned = false;
  global.db.data.chats[chatId] = { ...chat };
}

export function updateSettings(botId) {
  let settings = global.db.data.settings[botId] || {};

  if (!settings.self) settings.self = false;
  global.db.data.settings[botId] = { ...settings };
}
