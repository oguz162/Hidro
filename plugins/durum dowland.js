const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

    Asena.addCommand({pattern: 'durumv$', fromMe: true, desc: 'Video halindeki Whatsapp durumlarını indirir...'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'Lütfen indirmek istediğiniz durumu yanıtlayınız!', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'*Video durum indiriliyor...*',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('status.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.jid,fs.readFileSync('status.png'), MessageType.image ,{caption: '```Spektral User Bot 🍃```'  , mimetype: Mimetype.jpg, quoted: message.data});
            });
        return 
        }

        ffmpeg(location)
            .save('status.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid,fs.readFileSync('status.mp4'), MessageType.video , {caption: '```Spektral User Bot 🍃```'  , mimetype: Mimetype.mp4, quoted: message.data});
            });
        return 
    }));
    
    
    
   Asena.addCommand({pattern: 'durumf$', fromMe: true, desc: 'Foto halindeki Whatsapp durumlarını indirir'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'Lütfen indirmek istediğiniz Whatsapp durumunu yanıtlayınız!', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'Foto durum indiriliyor...',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === true && message.reply_message.video) {
            ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video ,{caption: '```Spektral User Bot 🍃```'  , mimetype: Mimetype.mp4, quoted: message.data});
            });
        return 
        }

        ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video, {caption: '```Spektral User Bot 🍃```'  , mimetype: Mimetype.mp4, quoted: message.data});
            });
        return 
    }));
