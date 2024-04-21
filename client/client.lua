RegisterNUICallback("getLocale", function(_, cb)
	cb({locale = Config.Language})
end)

function isInAnyZone(playerCoords)
    for zoneName, zone in pairs(Config.Zones) do
        local distance = #(playerCoords - vector3(zone.x, zone.y, zone.z))
        if Config.Debug == true then
            DrawSphere(zone.x, zone.y, zone.z, 1.0, 0, 0, 255, 1.0)
        end
        if distance <= zone.radius then
            return true
        end
    end
    return false
end

function OpenGate()
    ESX.TriggerServerCallback('thebossman_border:canYouPay', function(haveMoney)
        if haveMoney then
            closeNUIPanel()
            TriggerEvent('esx:showNotification', source, Config.Translations[Config.Language].goodbye)
        end
    end)
end

function openNUIPanel()
     SetNuiFocus(true, true)
     SetNuiFocusKeepInput(true)
    SendNUIMessage({action = 'openNUI', borderFee = Config.BorderFee, language = Config.Language , translations = Config.Translations})
end

function closeNUIPanel()
     SetNuiFocus(false, false)
     SetNuiFocusKeepInput(true)
    SendNUIMessage({action = 'closeNUI'})
end


Citizen.CreateThread(function()
    local isPanelOpen = false

    while true do
        Citizen.Wait(500)

        local playerPed = PlayerPedId()
        local playerCoords = GetEntityCoords(playerPed)

        
        if isInAnyZone(playerCoords) then
            if IsPedInAnyVehicle(playerPed, false) and GetPedInVehicleSeat(GetVehiclePedIsIn(playerPed, false), -1) == playerPed then
                if not isPanelOpen then
                    openNUIPanel()
                    isPanelOpen = true
                end
            elseif isPanelOpen and IsPedInAnyVehicle(playerPed, false) and GetPedInVehicleSeat(GetVehiclePedIsIn(playerPed, false), -1) == playerPed then
                closeNUIPanel()
                isPanelOpen = false
            end
        elseif isPanelOpen and not isInAnyZone(playerCoords) then
            closeNUIPanel()
            print("zónán kivül")
            isPanelOpen = false
        end

    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if IsControlJustPressed(0, 322) then
            closeNUIPanel()
        end
    end
end)

-- NUI Callbacks
RegisterNUICallback('payPrice', function(data, cb)
    SetNuiFocus(false, false)
    OpenGate()
end)

RegisterNUICallback('closeNUI', function(data, cb)
    SetNuiFocus(false, false)
end)

