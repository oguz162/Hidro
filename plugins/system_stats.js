const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');
const dil = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'ouz', fromMe: true, desc: Lang.system_stats}, (async (message, match) => {

var plk_say = new Date().toLocaleString('tr', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
const get_localized_date = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Saat :' + plk_say + '```\n\n ```📅 Tarih :' + plk_here + '```'
    
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/media/gif/_thefunmarvel on Instagram_ _Var mı daha haşmetlisi ------__CUK2rmEgSSb(MP4).mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "𝑯𝑬𝒀 𝑼𝑺𝑬𝑹 🧚‍♂️ \n ' + wish + '\n```𝔅𝔬𝔱 İ𝔰𝔪𝔦:``` *'+Config.BOT+'*\n```𝔅𝔬𝔱 𝔖𝔞𝔥𝔦𝔟𝔦:``` *'+Config.OWNER+'*\n\n⏱ 𝔖𝔞𝔞𝔱   : ```' + plk_say + '```\n📅 𝔗𝔞𝔯𝔦𝔥 : ```' + plk_here + '```" }
        )
    }
    else if (Config.ALIVEMSG == 'SELO') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/VID-20210228-WA0022.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "𝑯𝑬𝒀 𝑼𝑺𝑬𝑹 🧚‍♂️ \n ' + wish + '\n```𝔅𝔬𝔱 İ𝔰𝔪𝔦:``` *'+Config.BOT+'*\n```𝔅𝔬𝔱 𝔖𝔞𝔥𝔦𝔟𝔦:``` *'+Config.OWNER+'*\n\n⏱ 𝔖𝔞𝔞𝔱   : ```' + plk_say + '```\n📅 𝔗𝔞𝔯𝔦𝔥 : ```' + plk_here + '```" }
        
        )
    }
    else if (Config.ALIVEMSG == 'slo') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/ezgif-7-0bd4f49fd28c.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "```Bu Kalp Birtek Sana Atıyor 🖤```" }
        )
    }

    else if (Config.ALIVEMSG == 'AŞKIM') {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/VID-20210919-WA0048.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "```Melek yüzlü güzel yâr’im.\nEda’sı ile doldu kalbim.\nLâl olmuş konuşmaz dilim.\nEy yâr gel benim ol derim.\nKalbimin nadide gülü sevgili meleğim…```" }
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
