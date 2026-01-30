import { header, footer } from './templates/template.js'
import darkMode from './utils/darkMode.js'
import getSkills from './utils/skillsList.js'
import menu from './utils/menu.js'
import getCheatsheets from './utils/cheatsheetsList.js'
import { getResources } from './utils/resourcesGenerator.js.js'
import getWeather from './utils/weather.js'

const siteHeader = document.getElementById('site-header')
const siteFooter = document.getElementById('site-footer')

siteHeader.innerHTML = header
siteFooter.innerHTML = footer

darkMode()
menu()
getSkills()
getCheatsheets()
getResources()
getWeather()
