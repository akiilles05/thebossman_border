fx_version 'cerulean'
game 'gta5'
author 'TheBossman'


shared_script '@es_extended/imports.lua'

client_scripts {
    'config.lua',
    'client/*.lua',
}

ui_page {
	'html/index.html',
}

files {
    'html/index.html',
    'html/css/style.css',
    'html/js/script.js',
    'html/img/logo.png',
}

server_scripts {
    'config.lua',
    'server/server.lua',
}

escrow_ignore {
	'config.lua',
}
