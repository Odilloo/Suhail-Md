const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254704942561";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254704942561,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_05_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJkNEdpY2tZRmE3c1FNek1GQi8xeHMrdFNkQ2xPVDVmWFBuYkg1eUxYdzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndGZjd3X2VxUURPQUxqWDJMSVRIX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGE1YmQ4ZDAtOTdmZS00Yzc1LWEyMzktZTMzNzI2OWMxZmVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE5NixcbiAgICAgIDY1LFxuICAgICAgODEsXG4gICAgICAxMTQsXG4gICAgICAxNTYsXG4gICAgICAxMjcsXG4gICAgICA5OSxcbiAgICAgIDgzLFxuICAgICAgMTI3LFxuICAgICAgMTg1LFxuICAgICAgMjI5LFxuICAgICAgMTE0LFxuICAgICAgODIsXG4gICAgICA2MSxcbiAgICAgIDI0MCxcbiAgICAgIDE0NixcbiAgICAgIDE1MixcbiAgICAgIDg2LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDI1NSxcbiAgICAgIDkyLFxuICAgICAgMTI0LFxuICAgICAgMTM2LFxuICAgICAgMTc3LFxuICAgICAgMTYxLFxuICAgICAgMTI5LFxuICAgICAgNSxcbiAgICAgIDIxMSxcbiAgICAgIDE0MCxcbiAgICAgIDExMixcbiAgICAgIDgxLFxuICAgICAgMTA3LFxuICAgICAgMTI5LFxuICAgICAgMjM1LFxuICAgICAgMTE0LFxuICAgICAgMjMxLFxuICAgICAgMTQ3LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlQ5eHFBRUVPT1V2N1FHR0NFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQK0d5KzZXbzBMNmFSSy9BeDl0N3hYbDlNbGVLbGxRbSt5b2NQd2owMlFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImx1dG1MNFpKMlZqQm82eXBZY3lMMWNvUVkrUWN3K1BKUzMzK1VqUk5tWktmSFY2dUF4V2s2SS80Uk5CWEd0dHhWT2pMZEFEa3RpUHVXSWNSTEpVSUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNUcVNJZWIxRUQxK1JOakU3NmlUTCt5TmdQSXY3a0ZnNTQ5YURkTDZOc3ZpNFlsNGpwaDVuRFBid2FzejMxZm14bjB5WDdHMTAzNUhOSVJaQlFhU0RBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA0OTQyNTYxOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Y6+4oWF4oSQ4oSS4oSS4Y6+4Y6+XCIsXG4gICAgXCJsaWRcIjogXCIyNTY3NzA4MTE0MjUwMDQ6NDBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDQ5NDI1NjE6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY5OTQ5NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "odilloo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
