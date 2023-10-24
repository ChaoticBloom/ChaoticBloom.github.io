// JavaScript source code blah blah blah
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    gameData = savegame
}
var i, tabcontent, tablinks, screencolor;
var sciNo = 0;
var gameData = {
    water: 0,
    energy: 0,
    nutrients: 0,
    mana: 0,
    ascensions: 1,
    manaPerClick: 5,
    nutrientsPerClick: 5,
    waterPerClick: 5,
    energyPerClick: 5,
    growCost: 100,
    efficientLeavesCost: 100, 
    thickerRootsCost: 100,
    ascensionCost: 1000,
    trueManaPerClick:5,
    trueNutrientsPerClick:5,
    trueWaterPerClick:5,
    trueEnergyPerClick:5
}
function darkMode() {
    if (document.body.className != "screencolor") {
        document.body.classList.toggle("screencolor");
    }
}
function lightMode() {
    if (document.body.className == "screencolor") {
        document.body.classList.toggle("screencolor");
        
    }
}
function changeBackground(color) {
    document.body.style.background = color;
}
/*
    } else {
    
        for (i = 0; i < screencolor.length; i++) {
            document.documentElement.className -= "screencolor";
        }
    }
}
*/
function changeTab(evt, tabName) {
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function sciNot(num) {
    if (num == 1) {
        sciNo = 1
    } else {
        sciNo = 0
    }  
}
function absorbMana() {
    gameData.mana += gameData.trueManaPerClick
    
}
function absorbNutrients() {
    gameData.nutrients += gameData.trueNutrientsPerClick
    
}

function absorbWater() {
    gameData.water += gameData.trueWaterPerClick
   
}
function absorbSun() {
    gameData.energy += gameData.trueEnergyPerClick
    
}
function updateResources(sci) {
    if (sci == 1) {
        document.getElementById("Mana").innerHTML = gameData.mana.toExponential() + " Mana Obtained"
        document.getElementById("Energy").innerHTML = gameData.energy.toExponential() + " Energy Collected"
        document.getElementById("Water").innerHTML = gameData.water.toExponential() + " Water Collected"
        document.getElementById("Nutrients").innerHTML = gameData.nutrients.toExponential() + " Nutrients Collected"
        document.getElementById("growTree").innerHTML = "Grow the World Tree(Current Stage Seed) Cost:" + gameData.growCost.toExponential() + " water,nutrients,energy,and mana, and unlocks new features and increases all resource generation."
        document.getElementById("thickerRoots").innerHTML = "Strengthen the roots (Current Stage Twig) Cost:" + gameData.thickerRootsCost.toExponential() + " water,nutrients,energy,and mana, and increases water and nutrient generation."
        document.getElementById("efficientLeaves").innerHTML = "Make the leaves more efficient (Current Stage Paper) Cost:" + gameData.efficientLeavesCost.toExponential() + " water,nutrients,energy,and mana, and increases energy and mana generation."
        document.getElementById("ascension").innerHTML = "Rebirth the World Tree(Current Stage normal tree) Cost:" + gameData.ascensionCost.toExponential() + "of each resource"
    } else { 
    document.getElementById("Mana").innerHTML = gameData.mana + " Mana Obtained"
    document.getElementById("Energy").innerHTML = gameData.energy + " Energy Collected"
    document.getElementById("Water").innerHTML = gameData.water + " Water Collected"
    document.getElementById("Nutrients").innerHTML = gameData.nutrients + " Nutrients Collected"
    document.getElementById("growTree").innerHTML = "Grow the World Tree(Current Stage Seed) Cost:" + gameData.growCost + " water,nutrients,energy,and mana, and unlocks new features and increases all resource generation."
    document.getElementById("thickerRoots").innerHTML = "Strengthen the roots (Current Stage Twig) Cost:" + gameData.thickerRootsCost + " water,nutrients,energy,and mana, and increases water and nutrient generation."
    document.getElementById("efficientLeaves").innerHTML = "Make the leaves more efficient (Current Stage Paper) Cost:" + gameData.efficientLeavesCost + " water,nutrients,energy,and mana, and increases energy and mana generation."
    document.getElementById("ascension").innerHTML = "Rebirth the World Tree(Current Stage normal tree) Cost:" + gameData.ascensionCost + "of each resource"
}
}
function growTree() {
    if (gameData.water >= gameData.growCost && gameData.nutrients >= gameData.growCost && gameData.energy >= gameData.growCost) {
        gameData.water -= gameData.growCost
        gameData.nutrients -= gameData.growCost
        gameData.energy -= gameData.growCost
        gameData.energyPerClick *= 2
        gameData.manaPerClick *= 2
        gameData.waterPerClick *= 2
        gameData.nutrientsPerClick *= 2
        gameData.growCost *= 4
        updateTrueValue()  
        updateResources()
    } else { }
}
function thickerRoots() {
    if (gameData.water >= gameData.thickerRootsCost && gameData.nutrients >= gameData.thickerRootsCost && gameData.energy >= gameData.thickerRootsCost) {
        gameData.water -= gameData.thickerRootsCost
        gameData.nutrients -= gameData.thickerRootsCost
        gameData.energy -= gameData.thickerRootsCost
        gameData.waterPerClick *= 2
        gameData.nutrientsPerClick *= 2
        gameData.thickerRootsCost *= 4
        updateTrueValue()  
        updateResources()
    } else { }
}
function efficientLeaves() {
    if (gameData.water >= gameData.efficientLeavesCost && gameData.nutrients >= gameData.efficientLeavesCost && gameData.energy >= gameData.efficientLeavesCost) {
        gameData.water -= gameData.efficientLeavesCost
        gameData.nutrients -= gameData.efficientLeavesCost
        gameData.energy -= gameData.efficientLeavesCost
        gameData.energyPerClick *= 2
        gameData.manaPerClick *= 2
        gameData.efficientLeavesCost *= 4
        updateTrueValue()  
        updateResources()
    } else { }
}
function updateTrueValue() {
        gameData.trueManaPerClick = (gameData.manaPerClick * gameData.ascensions)
        gameData.trueWaterPerClick = (gameData.waterPerClick * gameData.ascensions)
        gameData.trueEnergyPerClick = (gameData.energyPerClick * gameData.ascensions)
        gameData.trueNutrientsPerClick = (gameData.nutrientsPerClick * gameData.ascensions)    
}
function ascension() {3
    if (gameData.water >= gameData.ascensionCost && gameData.nutrients >= gameData.ascensionCost && gameData.energy >= gameData.ascensionCost) {
        gameData.water = 0
        gameData.mana = 0
        gameData.nutrients = 0
        gameData.energy = 0
        gameData.waterPerClick = 5
        gameData.manaPerClick = 5
        gameData.nutrientsPerClick = 5
        gameData.energyPerClick = 5
        gameData.thickerRootsCost = 100
        gameData.efficientLeavesCost = 100
        gameData.growCost = 100
        gameData.ascensions += 1
        gameData.ascensionCost *= 10
        updateTrueValue()
    }
}
var mainGameLoop = window.setInterval(function () {
        updateTrueValue()
        updateResources(sciNo)
        absorbMana()
        absorbNutrients()
        absorbSun()
        absorbWater()
}, 100)

/*
var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("worldTreeSave", JSON.stringify(gameData))
}, 15000)
savegame = JSON.parse(localStorage.getItem("worldTreeSave"))
}

if (typeof savegame !== undefined) {
gameData = savegame
                
}
*/

