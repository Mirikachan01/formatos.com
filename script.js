let servicioActual = "";
let dispositivos = "";
let usuario = "";

const plantillas = {

HBO: (correo, pass, nombre, clave, vencimiento) => `*🎬 𝐇𝐁𝐎 𝐌𝐀𝐗 🎥*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
👤: ${nombre}   🔐: ${clave}
📅: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐧𝐨𝐦𝐛𝐞 𝐧𝐢 𝐏𝐢𝐧 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥. 
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐞𝐧 𝟐 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐬𝐢𝐦𝐮𝐥𝐭á𝐧𝐞𝐚𝐦𝐞𝐧𝐭𝐞. 
🚫 𝐍𝐨 𝐞𝐧𝐭𝐫𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐧𝐢 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚. 

*_🔒 La Cuenta es monitoreada, si se detecta uso en 2 dispositivos será suspendida._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`,



NETFLIX: (correo, pass, nombre, clave, vencimiento) => `*📺 𝐍𝐄𝐓𝐅𝐋𝐈𝐗 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 📱*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
👤: ${nombre}   🔐: ${clave}
📅: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐥𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐞𝐧 𝟐 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐚𝐥 𝐦𝐢𝐬𝐦𝐨 𝐭𝐢𝐞𝐦𝐩𝐨.
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐢 𝐏𝐈𝐍 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥.
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬.

*_🔒 La cuenta es monitoreada. Si se detecta uso en 2 dispositivos será suspendida sin derecho a reclamo._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`,



DISNEY: (correo, pass, nombre, clave, vencimiento) => `*🎬 𝐃𝐈𝐒𝐍𝐄𝐘+ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ✨*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
👤: ${nombre}   🔐: ${clave}
📅: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
▫️ 𝐁𝐨𝐫𝐫𝐚 𝐜𝐚𝐜𝐡é 𝐝𝐞 𝐥𝐚 𝐚𝐩𝐥𝐢𝐜𝐚𝐜𝐢ó𝐧 𝐚𝐧𝐭𝐞𝐬 𝐝𝐞 𝐢𝐧𝐢𝐜𝐢𝐚𝐫 𝐬𝐞𝐬𝐢ó𝐧.
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐢 𝐏𝐈𝐍 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥.
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐞𝐧 𝟐 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨𝐬 𝐚𝐥 𝐦𝐢𝐬𝐦𝐨 𝐭𝐢𝐞𝐦𝐩𝐨.
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐥𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬.
🚫 𝐍𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.

*_🔒 La cuenta es monitoreada. Si se detecta uso en 2 dispositivos será suspendida sin derecho a reclamo._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`,



CRUNCHYROLL: (correo, pass, nombre, clave, vencimiento) => `*🔥 𝐂𝐑𝐔𝐍𝐂𝐇𝐘𝐑𝐎𝐋𝐋 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🍥*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
👤: ${nombre}   🔐: ${clave}
📅: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨.
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬.
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐢 𝐩𝐢𝐧 𝐝𝐞𝐥 𝐩𝐞𝐫𝐟𝐢𝐥.
🚫 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐧ú𝐦𝐞𝐫𝐨 𝐝𝐞 𝐜𝐞𝐥𝐮𝐥𝐚𝐫.
🚫 𝐍𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.

*_🔒 La cuenta es monitoreada. Si se detecta incumplimiento de las reglas será suspendida sin derecho a devolución._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇɴᴛᴀ, ᴇꜱᴄʀíʙᴇᴍᴇ.`,



PARAMOUNT: (correo, pass, nombre, clave, vencimiento) => `*🎬 𝐏𝐀𝐑𝐀𝐌𝐎𝐔𝐍𝐓+ 𝐏𝐋𝐔𝐒 ⛰️*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
👤: ${nombre}
📅: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨 𝐟𝐢𝐣𝐨.
🚫 𝐍𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐜𝐨𝐫𝐫𝐞𝐨 𝐧𝐢 𝐥𝐚 𝐜𝐨𝐧𝐭𝐫𝐚𝐬𝐞ñ𝐚.
🚫 𝐍𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐧𝐢 𝐞𝐧𝐭𝐫𝐚𝐫 𝐚 𝐩𝐞𝐫𝐟𝐢𝐥𝐞𝐬 𝐝𝐞 𝐨𝐭𝐫𝐨𝐬.
🚫 𝐍𝐨 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚.

*_🔒 La cuenta es monitoreada. Si se detecta incumplimiento de las reglas será suspendida sin derecho a reclamo._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜᴇ𝐧𝐭𝐚, ᴇꜱᴄʀíʙᴇᴍᴇ.`,



PRIME: (correo, pass, nombre, clave, vencimiento) => `*🎬 𝐏𝐑𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 🍿*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
👤: ${nombre}   🔐: ${clave}
📅: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
*⚠️ Leer las Reglas:*
🚫 𝐍𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐚 𝐚𝐦𝐚𝐳𝐨𝐧.𝐜𝐨𝐦
🚫 𝐍𝐨 𝐮𝐬𝐚𝐫 𝐀𝐦𝐚𝐳𝐨𝐧 𝐌𝐮𝐬𝐢𝐜
🚫 𝐍𝐨 𝐚𝐥𝐪𝐮𝐢𝐥𝐚𝐫 𝐩𝐞𝐥í𝐜𝐮𝐥𝐚𝐬 𝐨 𝐬𝐞𝐫𝐢𝐞𝐬
🚫 𝐍𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚
🚫 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝟏 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨 𝐟𝐢𝐣𝐨

*_🔒 El incumplimiento de alguna regla puede causar la suspensión del servicio sin reembolso._*

💬 ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢúɴ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ʟᴀ ᴄᴜ𝐞𝐧𝐭𝐚, ᴇꜱᴄʀíʙᴇᴍᴇ.`

};


// ABRIR FORMULARIO

function abrirFormulario(servicio){

// cerrar IPTV si está abierto
document.getElementById("panelIPTV").style.display = "none";

servicioActual = servicio;

document.getElementById("panelGenerador").style.display = "flex";

document.getElementById("tituloServicio").innerText = servicio;

}


// GENERAR

function generarTexto(){

let correo = document.getElementById("correo").value;
let pass = document.getElementById("pass").value;
let nombre = document.getElementById("nombre").value;
let clave = document.getElementById("clave").value;
let vencimiento = document.getElementById("vencimiento").value;



if(!plantillas[servicioActual]){
alert("Selecciona un servicio");
return;
}

let mensaje = plantillas[servicioActual](correo, pass, nombre, clave, vencimiento);

document.getElementById("resultado").value = mensaje;

}


// COPIAR

function copiarTexto(){

let texto = document.getElementById("resultado").value;

navigator.clipboard.writeText(texto);

alert("Mensaje copiado");

}


// CERRAR

function cerrarFormulario(){

document.getElementById("panelGenerador").style.display = "none";

}



function seleccionarDispositivo(num){

dispositivos = num;

}









let servicioIPTV = ""

function abrirIPTV(servicio){

// cerrar formulario normal
document.getElementById("panelGenerador").style.display = "none";

servicioIPTV = servicio;

document.getElementById("panelIPTV").style.display = "flex";

document.getElementById("tituloIPTV").innerText = servicio;

}

function cerrarIPTV(){

document.getElementById("panelIPTV").style.display="none"

}

function generarIPTV(){

let usuario = document.getElementById("usuarioIPTV").value
let pass = document.getElementById("passIPTV").value
let dispositivos = document.getElementById("dispositivosIPTV").value
let vencimiento = document.getElementById("vencimientoIPTV").value

let mensaje = ""

if(servicioIPTV==="IPTV"){

mensaje=`*IPTV SMARTERS PRO 🇧🇴🇨🇱🇺🇲🔓*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
👤nombre: Coloque cualquiera
💂usuario: ${usuario}
🔑 Contraseña: ${pass}
url: https://zona593movie.com:8443
📱Dispositivos: ${dispositivos}
📆 Vence: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
⚠️ Ocupar en la cantidad de dispositivo indicado
⚠️ No cambiar la contraseña
🔊Si no cumple las reglas se le quitará el acceso a la cuenta sin derecho a reembolso`

}

if(servicioIPTV==="MASTV"){

mensaje=`📺✨ MASTV
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
👤 Usuario: ${usuario}
🔐 Contraseña: ${pass}
📱 Dispositivos: ${dispositivos}
📆 Vence: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
❌ Prohibido cambiar la contraseña
❌ Usar solo en la cantidad de dispositivos indicados
⚠️ Si se detecta uso indebido se retirará el acceso`

}

if(servicioIPTV==="OLEADA"){

mensaje=`🌊📺 OLEADA TV
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
👤 Usuario: ${usuario}
🔐 Contraseña: ${pass}
📱 Dispositivos: ${dispositivos}
📆 Vence: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
❌ Prohibido cambiar la contraseña
❌ Usar solo en la cantidad de dispositivos indicados
⚠️ Si se detecta uso indebido se retirará el acceso`

}

if(servicioIPTV==="MICAPLAY"){

mensaje=`🎬 MICAPLAY TV
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
👤 Usuario: ${usuario}
🔐 Contraseña: ${pass}
📱 Dispositivos: ${dispositivos}
📅 Vence: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
❌ PROHIBIDO cambiar la contraseña
❌ Usar solo en la cantidad indicada`

}

if(servicioIPTV==="FLUJO"){

mensaje=`📡 FLUJO TV
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
🧑‍💻Usuario: ${usuario}
🗝️Contraseña: ${pass}
📺 Dispositivos: ${dispositivos}
📆 Vence: ${vencimiento}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
🚫 PROHIBIDO cambiar la contraseña
🚫 Usar solo en la cantidad indicada`

}

document.getElementById("resultadoIPTV").value = mensaje

}

function copiarIPTV(){

let texto = document.getElementById("resultadoIPTV")

texto.select()

document.execCommand("copy")

}







let servicioCuenta = ""

function abrirCuentas(servicio){

cerrarTodo()

servicioCuenta = servicio

document.getElementById("panelCuentas").style.display="flex"

document.getElementById("tituloCuentas").innerText=servicio

}


function cerrarCuentas(){

document.getElementById("panelCuentas").style.display="none"

}



function generarCuentas(){

let correo = document.getElementById("correoCuenta").value
let pass = document.getElementById("passCuenta").value
let dispositivo = document.getElementById("dispositivoCuenta").value
let vence = document.getElementById("venceCuenta").value

let mensaje = ""



/* CHATGPT */

if(servicioCuenta==="CHATGPT" && dispositivo==="pc"){

mensaje=`*📲💻CHAT GPT PLUS🤖*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
🔌 𝐃𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨: PC
⏰ 𝐕𝐞𝐧𝐜𝐞: ${vence}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
👨‍💻 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐚𝐯í𝐬𝐚𝐧𝐨𝐬 𝐚𝐧𝐭𝐞𝐬 𝐝𝐞 𝐢𝐧𝐢𝐜𝐢𝐚𝐫 𝐬𝐞𝐬𝐢ó𝐧.

*💻𝐈𝐧𝐢𝐜𝐢𝐚𝐫 𝐜𝐞𝐬𝐢ó𝐧 𝐞𝐧 𝐏𝐂*
1️⃣ https://chat.openai.com
2️⃣ Iniciar sesión
3️⃣ Ingresar correo
4️⃣ Si pide código enviar captura

🔒𝐑𝐄𝐆𝐋𝐀𝐒
Solo 1 dispositivo
No cerrar sesión
No modificar facturación
No eliminar proyectos
No eliminar la cuenta`

}



if(servicioCuenta==="CHATGPT" && dispositivo==="movil"){

mensaje=`*📲💻CHAT GPT PLUS🤖*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
🔌 𝐃𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨: Movil
⏰ 𝐕𝐞𝐧𝐜𝐞: ${vence}
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

*📲𝐈𝐧𝐢𝐜𝐢𝐚𝐫 𝐜𝐞𝐬𝐢ó𝐧 𝐞𝐧 𝐌𝐎𝐕𝐈𝐋*
1️⃣ Instalar app oficial
2️⃣ Iniciar sesión
3️⃣ Ingresar correo
4️⃣ Si pide código enviar captura

🔒𝐑𝐄𝐆𝐋𝐀𝐒
Solo 1 dispositivo
No cerrar sesión
No modificar facturación
No eliminar proyectos`

}



/* CAPCUT */

if(servicioCuenta==="CAPCUT" && dispositivo==="movil"){

mensaje=`*📽️ 𝘾𝘼𝙋𝘾𝙐𝙏 𝙋𝙍𝙊 📸*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
📅 Vence: ${vence}
📱Dispositivo: Movil
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

🔓 ¿Cómo iniciar sesión?
1. Abre la app CapCut
2. Elegir correo electrónico
3. Ingresar datos
4. Verificar datos

🚨 IMPORTANTE
No vincular con TikTok
Usar solo en 1 dispositivo
No compartir cuenta`

}



if(servicioCuenta==="CAPCUT" && dispositivo==="pc"){

mensaje=`*📽️ 𝘾𝘼𝙋𝘾𝙐𝙏 𝙋𝙍𝙊 📸*
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
📧: ${correo}
🔑: ${pass}
📅 Vence: ${vence}
💻Dispositivo: PC
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

💻 Usar en PC
1. Iniciar sesión primero en celular
2. Abrir CapCut en PC
3. Escanear código QR
4. Cerrar sesión en celular

🚨 IMPORTANTE
No vincular con TikTok
Usar solo en 1 dispositivo
No compartir cuenta`

}


document.getElementById("resultadoCuentas").value = mensaje

}



function copiarCuentas(){

let texto = document.getElementById("resultadoCuentas")

texto.select()

document.execCommand("copy")

}