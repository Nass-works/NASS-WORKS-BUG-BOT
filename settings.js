//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "263719929859"
global.ownername = "🦄 T.TECH DON"
global.ytname = "YT: NASSWORKS"
global.socialm = "Github: NASS-WORKS"
global.location = "NIGERIA,FCT"

global.ownernumber = '263719929859'  //creator number
global.ownername = 'T.TECH DON //owner name
global.botname = 'BOT:ⁿT.TECH BUG BOT //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'T.TECH DON\n\nContact: +263719929859'
//console view/theme
global.themeemoji = '🪀'
global.wm = "T.TECH DON Bot Inc."

//theme link
global.link = 'wa.me//263719929859'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
