const services=[

// STREAMING CLASICOS

{
name:"HBO MAX",
fields:["correo","contraseña","nombre","clave","vencimiento"],
template:`*🎬 HBO MAX 🎥*

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
👤 Nombre: {nombre}
🔐 Clave: {clave}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐧𝐨𝐦𝐛𝐞 𝐧𝐢 𝐏𝐢𝐧 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥. 
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐞𝐧 𝟐 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐬𝐢𝐦𝐮𝐥𝐭á𝐧𝐞𝐚𝐦𝐞𝐧𝐭𝐞. 
🚫 𝐍𝐨 𝐞𝐧𝐭𝐫𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐧𝐢 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚. 

*_🔒 La Cuenta es monitoreada, si se detecta uso en 2 dispositivos será suspendida._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.

`

},


{
name:"NETFLIX",
fields:["correo","contraseña","nombre","clave","vencimiento"],
template:`*📺 NETFLIX PREMIUM*

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
👤 Nombre: {nombre}
🔐 Clave: {clave}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐥𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐞𝐧 𝟐 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐚𝐥 𝐦𝐢𝐬𝐦𝐨 𝐭𝐢𝐞𝐦𝐩𝐨.
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐢 𝐏𝐈𝐍 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥.
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬.

*_🔒 La cuenta es monitoreada. Si se detecta uso en 2 dispositivos será suspendida sin derecho a reclamo._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`
},

{
name:"DISNEY+",
fields:["correo","contraseña","nombre","clave","vencimiento"],
template:`*🎬 DISNEY+*

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
👤 Nombre: {nombre}
🔐 Clave: {clave}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
▫️ 𝐁𝐨𝐫𝐫𝐚 𝐜𝐚𝐜𝐡é 𝐝𝐞 𝐥𝐚 𝐚𝐩𝐥𝐢𝐜𝐚𝐜𝐢ó𝐧 𝐚𝐧𝐭𝐞𝐬 𝐝𝐞 𝐢𝐧𝐢𝐜𝐢𝐚𝐫 𝐬𝐞𝐬𝐢ó𝐧.
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐢 𝐏𝐈𝐍 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥.
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐞𝐧 𝟐 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐚𝐥 𝐦𝐢𝐬𝐦𝐨 𝐭𝐢𝐞𝐦𝐩𝐨.
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐥𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬.
🚫 𝐍𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.

*_🔒 La cuenta es monitoreada. Si se detecta uso en 2 dispositivos será suspendida sin derecho a reclamo._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`
},

{
name:"CRUNCHYROLL",
fields:["correo","contraseña","nombre","clave","vencimiento"],
template:`*🔥 CRUNCHYROLL*

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
👤 Nombre: {nombre}
🔐 Clave: {clave}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨.
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬.
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐢 𝐩𝐢𝐧 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥.
🚫 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐧ú𝐦𝐞𝐫𝐨 𝐝𝐞 𝐜𝐞𝐥𝐮𝐥𝐚𝐫.
🚫 𝐍𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.

*_🔒 La cuenta es monitoreada. Si se detecta incumplimiento de las reglas será suspendida sin derecho a devolución._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`
},

{
name:"PARAMOUNT+",
fields:["correo","contraseña","nombre","clave","vencimiento"],
template:`*🎬 PARAMOUNT+*

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
👤 Nombre: {nombre}
🔐 Clave: {clave}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨 𝐟𝐢𝐣𝐨.
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐜𝐨𝐫𝐫𝐞𝐨 𝐧𝐢 𝐥𝐚 𝐜𝐨𝐧𝐭𝐫𝐚𝐬𝐞ñ𝐚.
🚫 𝐍𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐧𝐢 𝐞𝐧𝐭𝐫𝐚𝐫 𝐚 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐝𝐞 𝐨𝐭𝐫𝐨𝐬.
🚫 𝐍𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.

*_🔒 La cuenta es monitoreada. Si se detecta incumplimiento de las reglas será suspendida sin derecho a reclamo._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇ𝐧𝐭𝐚, ᴇꜱᴄʀíʙᴇᴍᴇ.`
},

{
name:"PRIME VIDEO",
fields:["correo","contraseña","nombre","clave","vencimiento"],
template:`*🎬 PRIME VIDEO*

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
👤 Nombre: {nombre}
🔐 Clave: {clave}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐚𝐦𝐚𝐳𝐨𝐧.𝐜𝐨𝐦
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐀𝐦𝐚𝐳𝐨𝐧 𝐌𝐮𝐬𝐢𝐜
🚫 𝐍𝐨 𝐚𝐥𝐪𝐮𝐢𝐥𝐚𝐫 𝐩𝐞𝐥í𝐜𝐮𝐥𝐚𝐬 𝐨 𝐬𝐞𝐫𝐢𝐞𝐬
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚
🚫 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨 𝐟𝐢𝐣𝐨

*_🔒 El incumplimiento de alguna regla puede causar la suspensión del servicio sin reembolso._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜ𝐞𝐧𝐭𝐚, ᴇꜱᴄʀíʙᴇᴍᴇ.
`
},

// IPTV

{
name:"IPTV SMARTERS",
fields:["nombre","usuario","contraseña","dispositivos","vencimiento"],
template:`IPTV SMARTERS

👤 Nombre: {nombre}
👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
📺 Dispositivos: {dispositivos}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
⚠️ Ocupar en la cantidad de dispositivo indicado
⚠️ No cambiar la contraseña
🔊Si no cumple las reglas se le quitará el acceso a la cuenta sin derecho a reembolso`
},

{
name:"MASTV",
fields:["nombre","usuario","contraseña","dispositivos","vencimiento"],
template:`MASTV

👤 Nombre: {nombre}
👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
📺 Dispositivos: {dispositivos}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
❌ Prohibido cambiar la contraseña
❌ Usar solo en la cantidad de dispositivos indicados
⚠️ Si se detecta uso indebido se retirará el acceso`
},

{
name:"OLEADA TV",
fields:["nombre","usuario","contraseña","dispositivos","vencimiento"],
template:`OLEADA TV

👤 Nombre: {nombre}
👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
📺 Dispositivos: {dispositivos}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
❌ Prohibido cambiar la contraseña
❌ Usar solo en la cantidad de dispositivos indicados
⚠️ Si se detecta uso indebido se retirará el acceso`
},

{
name:"MICA PLAY",
fields:["nombre","usuario","contraseña","dispositivos","vencimiento"],
template:`MICA PLAY

👤 Nombre: {nombre}
👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
📺 Dispositivos: {dispositivos}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
❌ PROHIBIDO cambiar la contraseña
❌ Usar solo en la cantidad indicada`
},

{
name:"FLUJO TV",
fields:["nombre","usuario","contraseña","dispositivos","vencimiento"],
template:`FLUJO TV

👤 Nombre: {nombre}
👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
📺 Dispositivos: {dispositivos}
📅 Vencimiento: {vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
🚫 PROHIBIDO cambiar la contraseña
🚫 Usar solo en la cantidad indicada`
},

// APPS

{
name:"CHATGPT PLUS",
fields:["correo","contraseña","dispositivo","vencimiento"],

templates:{
pc:`*📲💻CHAT GPT PLUS🤖*

📧: {correo}
🔑: {contraseña}
🔌 Dispositivo: PC
⏰ Vence: {vencimiento}

💻 Iniciar sesión en PC
1️⃣ https://chat.openai.com
2️⃣ Inicia sesión
3️⃣ Ingresa el correo y contraseña

⚠️ Reglas
• Solo 1 dispositivo
• No cerrar sesión
• No modificar datos
`,

movil:`*📲💻CHAT GPT PLUS🤖*

📧: {correo}
🔑: {contraseña}
🔌 Dispositivo: Móvil
⏰ Vence: {vencimiento}

📲 Iniciar sesión en Móvil
1️⃣ Instalar app oficial
2️⃣ Iniciar sesión
3️⃣ Ingresar correo y contraseña

⚠️ Reglas
• Solo 1 dispositivo
• No cerrar sesión
• No modificar datos
`
}

},





{
name:"CAPCUT PRO",
fields:["correo","contraseña","dispositivo","vencimiento"],

templates:{

movil:`*📽️ CAPCUT PRO 📸*

📧: {correo}
🔑: {contraseña}
📅 Vence: {vencimiento}
📱 Dispositivo: Móvil

🔓 Cómo iniciar sesión
1. Abrir CapCut
2. Elegir correo electrónico
3. Ingresar datos

⚠️ No vincular con TikTok
`,

pc:`*📽️ CAPCUT PRO 📸*

📧: {correo}
🔑: {contraseña}
📅 Vence: {vencimiento}
💻 Dispositivo: PC

💻 Uso en PC
1. Inicia sesión en celular
2. Abre CapCut en PC
3. Escanea QR

⚠️ No vincular con TikTok
`
}

},

// OTROS

{
name:"RAKUTEN PLUS",
fields:["correo","contraseña"],
template:`RAKUTEN PLUS

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐝𝐚𝐭𝐨𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.
🚫 𝐄𝐯𝐢𝐭𝐚𝐫 𝐨𝐜𝐮𝐩𝐚𝐫 𝐦𝐚𝐬 𝐝𝐞 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨.
*💬 𝐂𝐮𝐚𝐥𝐪𝐮𝐢𝐞𝐫 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚 𝐦𝐞 𝐦𝐚𝐧𝐝𝐚𝐬 𝐜𝐚𝐩𝐭𝐮𝐫𝐚 𝐝𝐞 𝐩𝐚𝐧𝐭𝐚𝐥𝐥𝐚.*`
},

{
name:"APPLE TV+",
fields:["correo","contraseña"],
template:`APPLE TV+

📧 Correo: {correo}
🔑 Contraseña: {contraseña}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📵 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐝𝐚𝐭𝐨𝐬 𝐧𝐢 𝐜𝐨𝐧𝐭𝐫𝐚𝐬𝐞ñ𝐚. 
🚫 𝐎𝐜𝐮𝐩𝐚𝐫 𝐞𝐧 𝐮𝐧 𝐬𝐨𝐥𝐨 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚𝐬.`
},

// INVITACIONES

{
name:"YOUTUBE PREMIUM",
fields:["correo"],
template:`Invitación enviada a:

📧 {correo}
1️⃣ Haz clic en *"Aceptar"*.
2️⃣ Luego, selecciona *"Unirse"*.
_🎉 ¡Listo! *YouTube Premium* debería activarse de inmediato._
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📸 *Si después de unirte no ves YouTube Premium activo, envíame una captura de pantalla y con gusto te ayudaré.*

⚠️ *La invitación expira en 24 horas,* así que acéptala cuanto antes.`
},

{
name:"CANVA PRO",
fields:["correo"],
template:`Invitación Canva enviada a:

📧 {correo}
𝟏️⃣ 𝐇𝐚𝐳 𝐜𝐥𝐢𝐜 𝐞𝐧 𝐞𝐥 𝐛𝐨𝐭ó𝐧 *"𝐀𝐜𝐞𝐩𝐭𝐚𝐫 𝐢𝐧𝐯𝐢𝐭𝐚𝐜𝐢ó𝐧"* 𝐝𝐞𝐬𝐝𝐞 𝐞𝐥 𝐜𝐨𝐫𝐫𝐞𝐨.
𝟐️⃣ 𝐋𝐮𝐞𝐠𝐨 𝐬𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 *"𝐔𝐧𝐢𝐫𝐬𝐞 𝐚𝐥 𝐞𝐪𝐮𝐢𝐩𝐨"* 𝐩𝐚𝐫𝐚 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐚𝐫.
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*🎉 ¡Y listo! Canva Pro debería activarse de inmediato. 🥳*`
},

// ADULTOS

{
name:"PORNHUB PREMIUM",
fields:["usuario","contraseña"],
template:`Pornhub Premium

👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
*📅 Vence:* 30 días
*📲 Uso:* 1 dispositivo
🔗 𝐋𝐨𝐠𝐢𝐧: pornhub.com

✅ *Recomendación:* No compartas el acceso para evitar bloqueos.`
},

{
name:"BRAZZERS PREMIUM",
fields:["usuario","contraseña"],
template:`Brazzers Premium

👤 Usuario: {usuario}
🔑 Contraseña: {contraseña}
*📅 Vence:* 30 días
*📲 Uso:* 1 dispositivo
🔗 𝐋𝐨𝐠𝐢𝐧: brazzers.com

✅ *Recomendación:* No compartas el acceso para evitar bloqueos.`
}

]

// CREAR CARDS

const container=document.getElementById("services")

services.forEach((s,i)=>{

let card=document.createElement("div")
card.className="card"
card.innerHTML=`<h3>${s.name}</h3>`
card.onclick=()=>openService(i)

container.appendChild(card)

})

let currentService

function openService(i){

currentService=services[i]

document.querySelector(".services").style.display="none"
document.querySelector(".search-box").style.display="none"

document.getElementById("formSection").classList.remove("hidden")

document.getElementById("serviceTitle").innerText=currentService.name

let form=""

currentService.fields.forEach(f=>{

if(f=="dispositivos"){

form+=`
<select id="${f}">
<option value="1">1 dispositivo</option>
<option value="2">2 dispositivos</option>
<option value="3">3 dispositivos</option>
</select>
`

}

else if(f=="dispositivo"){

form+=`
<select id="${f}">
<option value="PC">PC</option>
<option value="Movil">Movil</option>
</select>
`

}

else{

form+=`<input id="${f}" placeholder="${f}">`

}

})

document.getElementById("dynamicForm").innerHTML=form

}

function generateText(){

let text=""

// si el servicio tiene templates por dispositivo
if(currentService.templates){

let device=document.getElementById("dispositivo").value.toLowerCase()

text=currentService.templates[device]

}else{

text=currentService.template

}

// reemplazar campos
currentService.fields.forEach(f=>{

let val=document.getElementById(f).value

let reg=new RegExp(`{${f}}`,"g")

text=text.replace(reg,val)

})

document.getElementById("result").value=text

}

function copyText(){

let text=document.getElementById("result")

text.select()

document.execCommand("copy")

alert("Mensaje copiado")

}

function goBack(){

location.reload()

}

document.getElementById("search").addEventListener("input",function(){

let term=this.value.toLowerCase()

document.querySelectorAll(".card").forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(term)?"block":"none"

})

})


function openCalculator(){
window.location.href="conversor_bs_usd.html"
}


