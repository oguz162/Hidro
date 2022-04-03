const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');
const dil = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'ouz', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/media/gif/_thefunmarvel on Instagram_ _Var mı daha haşmetlisi ------__CUK2rmEgSSb(MP4).mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: "```WhatsAsena Founder Zlose İçin Çalışıyor!```\n\n*Version:* ```0.25.2 - Dev```\n*Grade:* ```Founder```\n*AI Packages:* ```Xteam / Eva / DeepAI / WhatsAsena / RTDA```\n*DeepAI Version:* ```1.0.17```\n*XTeam Verison:* ```4.4```" }
        )
    }
    else {
        const payload = Config.ALIVEMSG
        const status = await message.client.getStatus()
        const ppUrl = await message.client.getProfilePicture() 
        const resim = await dil.get(ppUrl, {responseType: 'arraybuffer'})

        if (!payload.includes('{pp}')) {
            await message.client.sendMessage(message.jid,payload.replace('{user}', message.client.user.name).replace('{version}', Config.VERSION).replace('{info}', `${status.status}`), MessageType.text);
        }
        else if (payload.includes('{pp}')) {
            await message.sendMessage(Buffer.from(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`) });
        }
    }
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
