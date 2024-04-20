ESX.RegisterServerCallback('thebossman_border:canYouPay', function(source, cb, type)
	local xPlayer = ESX.GetPlayerFromId(source)

	if Config.Account == "bank" then	
		local bankBalance = xPlayer.getAccount('bank').money
		if bankBalance >= Config.BorderFee then
			xPlayer.removeAccountMoney('bank', Config.BorderFee)
			TriggerClientEvent('esx:showNotification', source, Config.Translations[Config.Language].borderFeePaid)
			-- cb(true)
		else
			TriggerClientEvent('esx:showNotification', source, Config.Translations[Config.Language].borderFeePaidErrorMessage)
			-- cb(false)
		end
	elseif Config.Account == "money" then
		if  xPlayer.getMoney() >= Config.BorderFee then
			xPlayer.removeMoney(Config.BorderFee)
			TriggerClientEvent('esx:showNotification', source, Config.Translations[Config.Language].borderFeePaid)
			cb(true)
		else
			TriggerClientEvent('esx:showNotification', source, Config.Translations[Config.Language].borderFeePaidErrorMessage)
			cb(false)
		end
	end

end)
