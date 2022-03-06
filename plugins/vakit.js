const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

// CMD_HELP
const adzan = "ezan vakitlerini gösterir."
const usage = ".vakit <şehir>"

const butuh = "```şehir ismi giriniz!```"
const renek = "```şehir bulunamadı!```"


        Asena.addCommand({pattern: 'vakit ?(.*)', desc: adzan, usage: usage, fromMe: true}, async (message, match) => {

	    if (match[1] === '') return await message.reply(butuh);
	    const url = `https://api.pray.zone/v2/times/today.json?city=${match[1]}`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  '*Jadwal Sholat*:\n' +
                    '📅 ```' + json.results.datetime[0].date.gregorian + ' | ' + json.results.location.timezone + '```\n' +
                    '🌏 ```' + json.results.location.city + ' | ' + json.results.location.country + '```\n\n' +
		    '```Imsak   :``` *' + json.results.datetime[0].times.Imsak + '*\n' + 
		    '```Sabah   :``` *' + json.results.datetime[0].times.Fajr + '*\n' +
		    '```Öğlen   :``` *' + json.results.datetime[0].times.Dhuhr + '*\n' + 
		    '```İkindi  :``` *' + json.results.datetime[0].times.Asr + '*\n' + 
		    '```Akşam   :``` *' + json.results.datetime[0].times.Maghrib + '*\n' +
        '```Isha    :``` *' + json.results.datetime[0].times.Isha + '*\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, renek, MessageType.text);
	    }
    });
