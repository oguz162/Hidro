*/const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Asena.addCommand({pattern: 'buton', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'sahib ✅️', description: "Zlose founder-Dev.\n\n\n *Zlose* \n\Wa me : *https://wa.me/+905516491871* ", rowId:" rowid1"},
        {title: 'Tam Liste', description: "●▬▬▬ *WhatsAsena Dev-founder* ▬▬▬●\n\n\n\n*🛠 Komut:* ```.help ```*💬 Açıklama:* ```Yardım menüsünden botu kullanım hakkında bilgi verir.``` \n*🛠 Komut:* ```.fotoedit```\n\n*🛠 Komut:* ```.install ```\n*💬 Açıklama:* ```Plugin yükler.⌨️ Örnek: .install https://gist.github.com/phaticusthiccy/d41dd4428faf34ab8cfd4c392501c62e``` \n\n*🛠 Komut:* ```.plugin```\n*💬 Açıklama:* ```Yüklediğiniz pluginleri gösterir.``` \n\n*🛠 Komut:* ```.remove```\n*💬 Açıklama:* ```Plugin kaldırır.``` \n\n*🛠 Komut:* ```.ban ```\n*💬 Açıklama:* ```Gruptan kişi banlar. Yanıt verin ya da komutun yanına kişiyi etiketleyin.``` \n\n*🛠 Komut:* ```.add```\n*💬 Açıklama:* ```Gruba kişi ekler.⌨️ Örnek: .add 9055xxxxxxxx``` \n\n*🛠 Komut:* ```.promote ```\n*💬 Açıklama:* ```Herhangi bir kişiyi admin yapar.``` \n\n*🛠 Komut:* ```.demote ```\n*💬 Açıklama:* ```Herhangi bir adminden yetkisini düşürür.``` \n\n*🛠 Komut:* ```.mute ```\n*💬 Açıklama:* ```Grubu sohbetini kapatır. Yalnızca adminler mesaj gönderebilir.⌨️ Örnek: .mute & .mute 5m vs``` \n\n*🛠 Komut:* ```.unmute ```\n*💬 Açıklama:* ```Grubu sohbetini açar. Herkes mesaj gönderebilir.``` \n\n*🛠 Komut:* ```.invite ```\n*💬 Açıklama:* ```Grubun davet linkini getirir.``` \n\n*🛠 Komut:* ```.afk ```\n*💬 Açıklama:* ```Sizi AFK yapar.``` \n\n*🛠 Komut:* ```.carbon```\n*💬 Açıklama:* ```Yazdığınız metni carbon.sh ile fotoğrafa çevirir.``` \n*⚠️ Uyarı:* ```Lütfen sadece tr ve en dilinde yazın!```\n\n*🛠 Komut:* ```.mp4audio```\n*💬 Açıklama:* ```Videoyu ses kaydına çevirir.``` \n\n*🛠 Komut:* ```.imagesticker```\n*💬 Açıklama:* ```Resim stickeri fotoğrafa çevirir.``` \n\n*🛠 Komut:* ```.videosticker```\n*💬 Açıklama:* ```Animasyonlu sticker'i videoya çevirir.``` \n\n*🛠 Komut:* ```.deepai```\n*💬 Açıklama:* ```Yapay sinir ağlarını kullanarak en güçlü yapay zeka araçlarını çalıştırır.``` \n\n*🛠 Komut:* ```.term```\n*💬 Açıklama:* ```Sunucuda shellinde komut çalıştırmanıza imkan tanır.⌨️ Örnek: .term ls``` \n\n*🛠 Komut:* ```.ffmpeg ```\n*💬 Açıklama:* ```Videoya istenilen ffmpeg filtresini uygular.⌨️ Örnek: .ffmpeg fade=in:0:30``` \n\n*🛠 Komut:* ```.filter ```\n*💬 Açıklama:* ```Filtre ekler. Yazdığınız filtreyi birisi yazarsa yazdığınıı cevabı gönderir. Eğer sadece filter yazarsanız eklediğiniz filtreleri getirir.⌨️ Örnek: .filter ”merhaba” ”merhaba#nasılsın?”``` \n\n*🛠 Komut:* ```.stop ```\n*💬 Açıklama:* ```Ekledğiniz filtreyi durdurur.⌨️ Örnek: .stop ”merhaba”``` \n\n*🛠 Komut:* ```.snip ```\n*💬 Açıklama:* ```Snip ayarlar``` \n\n*🛠 Komut:* ```.getsnip```\n*💬 Açıklama:* ```Kayıtlı snip'leri gösterir.``` \n\n*🛠 Komut:* ```.delsnip ```\n*💬 Açıklama:* ```Snip siler``` \n\n*🛠 Komut:* ```.```\n*💬 Açıklama:* ```Ğ Gönderir.⌨️ Örnek: .ğ 🌈``` \n\n*🛠 Komut:* ```.x ```\n*💬 Açıklama:* ```X Gönderir.``` \n\n*🛠 Komut:* ```.welcome```\n*💬 Açıklama:* ```Hoşgeldin mesajı ayarlar. Eğer mesaj yazmazsanız hoşgeldin mesajını getirir.``` \n\n*🛠 Komut:* ```.goodbye```\n*💬 Açıklama:* ```Görüşürüz mesajı ayarlar. Eğer mesaj yazmazsanız görüşürüz mesajını getirir.``` \n\n*🛠 Komut:* ```.degis ```\n*💬 Açıklama:* ```Alive, afk gibi modüllerin metinlerini değiştirir.``` \n\n*🛠 Komut:* ```.restart```\n*💬 Açıklama:* ```WhatsAsena'yı yeniden başlatın``` \n\n*🛠 Komut:* ```.shutdown```\n*💬 Açıklama:* ```WhatsAsena'yı kapatır.``` \n\n*🛠 Komut:* ```.dyno```\n*💬 Açıklama:* ```Heroku dyno kullanımını kontrol edin``` \n\n*🛠 Komut:* ```.setvar ```\n*💬 Açıklama:* ```Heroku'da kısa yolla config var ayarlar.⌨️ Örnek: .setvar SUDO:true``` \n\n*🛠 Komut:* ```.delvar ```\n*💬 Açıklama:* ```Heroku config var siler.``` \n\n*🛠 Komut:* ```.getvar ```\n*💬 Açıklama:* ```Heroku config var getirir.``` \n\n*🛠 Komut:* ```.igphoto ```\n*💬 Açıklama:* ```Instagramdan fotoğraf indirir.``` \n\n*🛠 Komut:* ```.igtv ```\n*💬 Açıklama:* ```IGTV üzerinden video indirir.``` \n\n*🛠 Komut:* ```.github ```\n*💬 Açıklama:* ```Github profilini gösterir.``` \n\n*🛠 Komut:* ```.insta ```\n*💬 Açıklama:* ```İnstagram'dan video veya fotoğraf indirir.``` \n\n*🛠 Komut:* ```.locate```\n*💬 Açıklama:* ```Konumunuzu gönderir.``` \n*⚠️ Uyarı:* ```Kullanmadan önce konumunuzu açın!```\n\n*🛠 Komut:* ```.log```\n*💬 Açıklama:* ```Yanıtladığınız mesajı özel numaranıza kaydeder``` \n*⚠️ Uyarı:* ```Hareketli stickerleri desteklemez!```\n\n*🛠 Komut:* ```.meme ```\n*💬 Açıklama:* ```Yanıt verdiğiniz fotoğrafa yazdığınız yazıyı ekler.⌨️ Örnek: .meme TEST;YAPIYOR``` \n\n*🛠 Komut:* ```.neko```\n*💬 Açıklama:* ```Cevaplanan mesajlar nekobin.com'a eklenecektir.``` \n\n*🛠 Komut:* ```.notes```\n*💬 Açıklama:* ```Varolan tüm notlarınızı gösterir.``` \n\n*🛠 Komut:* ```.save ```\n*💬 Açıklama:* ```Yanıtladığınız mesajı yada resmi nota kaydeder.``` \n\n*🛠 Komut:* ```.deleteNotes```\n*💬 Açıklama:* ```Kaydettiğiniz *tüm* notlarınızı siler.``` \n\n*🛠 Komut:* ```.ocr ```\n*💬 Açıklama:* ```Yanıt verdiğiniz fotoğraftaki yazıları okur.⌨️ Örnek: .ocr tr``` \n\n*🛠 Komut:* ```.approve```\n*💬 Açıklama:* ```PM Permit iznini açar.``` \n\n*🛠 Komut:* ```.disapprove```\n*💬 Açıklama:* ```PM Permit iznini kapatır.``` \n\n*🛠 Komut:* ```.kickme```\n*💬 Açıklama:* ```Yazdığınız gruptan sizi çıkarır.``` \n\n*🛠 Komut:* ```.pp```\n*💬 Açıklama:* ```Yanıt verdiğiniz fotoğrafı profil fotoğrafınız yapar.``` \n\n*🛠 Komut:* ```.block ```\n*💬 Açıklama:* ```Belirttiğiniz kullanıcıyı engeller.``` \n\n*🛠 Komut:* ```.unblock ```\n*💬 Açıklama:* ```Belirttiğiniz kullanıcının engelini kaldırır.``` \n\n*🛠 Komut:* ```.jid ```\n*💬 Açıklama:* ```Kullanıcının JID verir.``` \n\n*🛠 Komut:* ```.removebg ```\n*💬 Açıklama:* ```Fotoğrafın arka-planını siler.``` \n\n*🛠 Komut:* ```.tiktok ```\n*💬 Açıklama:* ```Tiktokdan video indirir, profil bulur.``` \n\n*🛠 Komut:* ```.scam ```\n*💬 Açıklama:* ```5 dakikalık sahte eylemler oluşturur.``` \n\n*🛠 Komut:* ```.trt```\n*💬 Açıklama:* ```Google çeviri ile çeviri yapar. Bir mesaja yanıt vermeniz gerekmektedir.⌨️ Örnek: .trt tr en``` \n\n*🛠 Komut:* ```.currency```\n*🛠 Komut:* ```.tts ```\n*💬 Açıklama:* ```Yazıyı sese çevirir.``` \n\n*🛠 Komut:* ```.song ```\n*💬 Açıklama:* ```Yazdığınız şarkıyı yükler.``` \n\n*🛠 Komut:* ```.video ```\n*💬 Açıklama:* ```Youtubedan video indirir.``` \n\n*🛠 Komut:* ```.yt ```\n*💬 Açıklama:* ```Youtubeda arama yapar.``` \n\n*🛠 Komut:* ```.wiki ```\n*💬 Açıklama:* ```Wikipedia'da arama yapar.``` \n\n*🛠 Komut:* ```.img ```\n*💬 Açıklama:* ```Google resimler fotoğraf çeker.``` \n\n*🛠 Komut:* ```.store ```\n*💬 Açıklama:* ```Plugin mağazasında arama yapar.``` \n\n*🛠 Komut:* ```.shazam```\n*💬 Açıklama:* ```Yanıtlanan ses dosyasının içindeki müziği bulur.``` \n\n*🛠 Komut:* ```.ss```\n*💬 Açıklama:* ```Verilen linkteki sayfadan ekran görüntüsü alır.``` \n\n*🛠 Komut:* ```.animesay ```\n*💬 Açıklama:* ```Yazıyı anime kızının tuttuğu pankartın içine yazar.``` \n\n*🛠 Komut:* ```.changesay ```\n*💬 Açıklama:* ```Yazıyı change my mind posterine çevirir.``` \n\n*🛠 Komut:* ```.trumpsay ```\n*💬 Açıklama:* ```Yazıyı trump’ın tweetine çevirir.``` \n\n*🛠 Komut:* ```.audio spam```\n*💬 Açıklama:* ```Yanıtlanan sesi spam olarak gönderir.``` \n\n*🛠 Komut:* ```.foto spam```\n*💬 Açıklama:* ```Yanıtlanan fotoğrafı spam olarak gönderir.```\n\n*🛠 Komut:* ```.sticker spam```\n*💬 Açıklama:* ```Yanıtlanan fotoğrafı veya videoyu stickera dönüştürüp spam olarak gönderir.``` \n\n*🛠 Komut:* ```.killspam```\n*💬 Açıklama:* ```Spam komutunu durdurur.``` \n\n*🛠 Komut:* ```.spam ```\n*💬 Açıklama:* ```Siz durdurana kadar spam yapar.⌨️ Örnek: .spam test``` \n\n*🛠 Komut:* ```.vid spam```\n*💬 Açıklama:* ```Yanıtlanan videoyu spam olarak gönderir.``` \n\n*🛠 Komut:* ```.sticker```\n*💬 Açıklama:* ```Yanıt verdiğiniz fotoğraf veya videoyu sticker yapın.``` \n\n*🛠 Komut:* ```.ouz```\n*💬 Açıklama:* ```Bot çalışıyor mu?``` \n\n*🛠 Komut:* ```.sysd```\n*💬 Açıklama:* ```Sistem özelliklerini söyler.``` \n\n*🛠 Komut:* ```.tagall ```\n*💬 Açıklama:* ```Gruptaki herkesi etiketler. Hidetag atmak için mesajı yanıtlayın yada kelime girin.``` \n\n*🛠 Komut:* ```.scan ```\n*💬 Açıklama:* ```Girilen numaranın WhatApp'ta kayıtlı olup olmadığını kontrol eder.``` \n\n*🛠 Komut:* ```.tagadmin```\n*💬 Açıklama:* ```Grup adminlerini etiketler.``` \n\n*🛠 Komut:* ```.report ```\n*💬 Açıklama:* ```Grup adminlerine rapor gönderir.``` \n\n*🛠 Komut:* ```.tblend ```\n*💬 Açıklama:* ```Videolara seçilen TBlend efektini uygular.```\n *🛠 Komut:* ```.ttp ```\n*💬 Açıklama:* ```Yazıyı sade resme dönüştürür.``` \n\n*🛠 Komut:* ```.animettp ```\n*💬 Açıklama:* ```Anime banner gönderir.``` \n\n*🛠 Komut:* ```.attp ```\n*💬 Açıklama:* ```Yazıyı renkli stickera dönüştürür.``` \n\n*🛠 Komut:* ```.firettp ```\n\n*🛠 Komut:* ```.neonttp ```\n\n*🛠 Komut:* ```.avengersttp ```\n\n*🛠 Komut:* ```.smokettp ```\n*💬 Açıklama:* ```Yazıyı renkli dumana çevirir.``` \n\n*🛠 Komut:* ```.colorttp ```\n*💬 Açıklama:* ```Yazıyı renkli videoya çevirir.``` \n\n*🛠 Komut:* ```.leafttp ```\n\n*🛠 Komut:* ```.harryttp ```\n\n*🛠 Komut:* ```.metalttp ```\n\n*🛠 Komut:* ```.glowttp ```\n*💬 Açıklama:* ```Yazıyı dark neon fotoğrafına çevirir.``` \n\n*🛠 Komut:* ```.unvoice```\n*💬 Açıklama:* ```Müzik dosyasını sesli mesaja çevirir.``` \n\n*🛠 Komut:* ```.update```\n*💬 Açıklama:* ```Güncelleme denetler.``` \n\n*🛠 Komut:* ```.pmsend```\n*💬 Açıklama:* ```Yanıt verdiğiniz kişiye grup üzerinden mesaj gönderir.``` \n*⌨️ Örnek:* ```.pmsend Selam```\n\n*🛠 Komut:* ```.numsend```\n*💬 Açıklama:* ```Yanıtladığınız mesajı girdiğiniz numaraya gönderir.``` \n*⌨️ Örnek:* ```.pmsend Selam```\n\n*🛠 Komut:* ```.short ```\n*💬 Açıklama:* ```Uzun linkleri kısaltır.``` \n\n*🛠 Komut:* ```.playstore ```\n*💬 Açıklama:* ```Playstore'den uygulama bilgisini gösterir.``` \n\n*🛠 Komut:* ```.lyric ```\n*💬 Açıklama:* ```Şarkı sözlerini bulur.``` \n\n*🛠 Komut:* ```.search ```\n*💬 Açıklama:* ```Googlede arama yapar.``` \n\n*🛠 Komut:* ```.insta ```\n*💬 Açıklama:* ```İnstagram'dan video veya fotoğraf indirir.``` \n\n*🛠 Komut:* ```.vef ```\n*💬 Açıklama:* ```Türkçe ses efektlerini gönderir.``` \n\n*🛠 Komut:* ```.voicy```\n*💬 Açıklama:* ```Sesteki cümleleri yazıya çevirir.``` \n\n*🛠 Komut:* ```.wallpaper```\n*💬 Açıklama:* ```Birbirinden farklı, yüksek çözünürlüklü duvar kağıdı gönderir.``` \n\n*🛠 Komut:* ```.weather ```\n*💬 Açıklama:* ```Hava durumu getirir.⌨️ Örnek: .weather bakü``` \n\n*🛠 Komut:* ```.calc ```\n*💬 Açıklama:* ```Basit matematik işlemleri için hesap makinesi.``` \n\n*🛠 Komut:* ```.speedtest```\n*💬 Açıklama:* ```İndirme ve Yükleme hızını ölçer.``` \n\n*🛠 Komut:* ```.ping```\n*💬 Açıklama:* ```Pinginizi ölçer.``` \n\n*🛠 Komut:* ```.whois```\n*💬 Açıklama:* ```Grup veya kişinin metadata verisini gösterir.```", rowId:" rowid2"},
        {title: '💚 Xmedia', description: "XMEDİA KOMUTLARI\n\n\n\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc: 🇹🇷 Videnun kalitesini artırır.\n\n💻Usage: *.interp*\nℹ️Desc: 🇹🇷 Videonun FPS değerini arttırır.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇹🇷 Ağır çekim olmayan videolara true-slowmo uygular.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 4 kat düşürür.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 2 kat düşürür.\n\n💻Usage: *.gif*\nℹ️Desc: 🇹🇷 Videoyu gif’e çevirir.\n\n💻Usage: *.agif*\nℹ️Desc: 🇹🇷 Videoyu sesli gif’e çevirir.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇹🇷 Video arka planını bulanıklaştırır.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇹🇷 Videonun titreşimini azaltır.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇹🇷 Videoya gökkuşağı efekti uygular.\n\n💻Usage: *.mp4ephi*\nℹ️Desc: 🇹🇷 Videoya rgb değişim efekti uygular.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇹🇷 Videonun renklerini daha canlı ve çekici yapar.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇹🇷 Videoya çizim efekti uygular.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇹🇷 Videoya negatif renk filtresi uygular.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇹🇷 Videoya nostaji efekti uygular.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇹🇷 Videoya monochrome efekti uygular.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇹🇷 Videoyu tersten oynatır.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇹🇷 Videoya edge efekti uygular.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇹🇷 Fotoğrafı 5 saniyelik videoya çevirir.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇹🇷 Sesin spektrum görüntüsünü video yapar.\n\n💻Usage: *.waves*\nℹ️Desc: 🇹🇷 Sesin dalga aralığını videoya çevirir.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇹🇷 Sesin frekans aralığını videoya çevirir.\n\n💻Usage: *.avec*\nℹ️Desc: 🇹🇷 Sesin farklı bir histogramını videoya çevirir.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇹🇷 Sesin Desibel Değerini Videoya Dönüştürür.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇹🇷 Ses CQT değerini videoya çevirir.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇹🇷 Sesi kristal berraklık düzeyinde ayarlar.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇹🇷 Sesi bozar ve gülünç hale getirir.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇹🇷 Sesi Tersen Oynatır.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇹🇷 Sesi inceltir ve hızlandırır.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇹🇷 Sesi kalınlaştırır ve yavaşlatır.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇹🇷 Sesi 2 kat hızlandırır.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.", rowId:" rowid3"},
        {title: 'yükleyici Komutları', description: "_*Eklenilecek.*_ ", rowId:"rowid4"},
        {title: 'Tarayıcı Komutları', description: "eklenilecek", rowId:" rowid5"},
        {title: 'ttp komutları', description: "_*Düzeltilecek*_ ", rowId:" rowid6"}
       ]
       
       const sections = [{title: " *WhatsAsena*  ", rows: rows}]
       
       const button = {
        buttonText: 'LİSTE İÇİN TIKLA',
        description: "*spektral komut listesi\nZlose*",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.buttonMessage)
    
    }));
/*
