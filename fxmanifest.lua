fx_version 'cerulean'
game 'gta5'

author 'TheBossman'

version '0.0.1'

shared_script '@es_extended/imports.lua'

client_scripts {
    'config.lua',
    'client/*.lua',
}

ui_page {
     'ui/build/index.html',
}

files {
    'ui/build/index.html',
    'ui/build/**',
}

server_scripts {
    'config.lua',
    'server/server.lua',
}

escrow_ignore {
	'config.lua',
}
