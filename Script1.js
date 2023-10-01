// JavaScript source code blah blah blah
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    gameData = savegame
}

var gameData = {
    water: 0,
    energy: 0,
    nutrients: 0,
    mana: 0,
    ascensions: 0,
    manaPerClick: 5,
    nutrientsPerClick: 5,
    waterPerClick: 5,
    energyPerClick: 5,
    growCost: 100,
    efficientLeavesCost: 100, 
    thickerRootsCost: 100,
    ascensionCost: 1000,
    /*
    trueManaPerClick: manaPerClick * ascensions,
    trueNutrientsPerClick: nutrientsPerClick * ascensions,
    trueWaterPerClick: waterPerClick * ascensions,
    trueEnergyPerClick: energyPerClick * ascensions
    */
}
updateResources()
function absorbMana() {
    gameData.mana += gameData.manaPerClick
    document.getElementById("Mana").innerHTML = gameData.mana + " mana Obtained"
}
function absorbNutrients() {
    gameData.nutrients += gameData.nutrientsPerClick
    document.getElementById("Nutrients").innerHTML = gameData.nutrients + " Nutrients Collected"
}

function absorbWater() {
    gameData.water += gameData.waterPerClick
    document.getElementById("Water").innerHTML = gameData.water + " Water Collected"
}
function absorbSun() {
    gameData.energy += gameData.energyPerClick
    document.getElementById("Energy").innerHTML = gameData.energy + " Energy Collected"
}
function updateResources() {
    document.getElementById("Energy").innerHTML = gameData.energy + " Energy Collected"
    document.getElementById("Water").innerHTML = gameData.water + " Water Collected"
    document.getElementById("Nutrients").innerHTML = gameData.nutrients + " Nutrients Collected"
    document.getElementById("Mana").innerHTML = gameData.mana + " mana Obtained"
    document.getElementById("growTree").innerHTML = "Grow the World Tree(Current Stage Seed) Cost:" + gameData.growCost + " water,nutrients,energy,and mana, and unlocks new features and increases all resource generation."
    document.getElementById("thickerRoots").innerHTML = "Strengthen the roots (Current Stage Twig) Cost:" + gameData.thickerRootsCost + " water,nutrients,energy,and mana, and increases water and nutrient generation."
    document.getElementById("efficientLeaves").innerHTML = "Make the leaves more efficient (Current Stage Paper) Cost:" + gameData.efficientLeavesCost + " water,nutrients,energy,and mana, and increases energy and mana generation."
}
function growTree() {
    if (gameData.water >= gameData.growCost && gameData.nutrients >= gameData.growCost && gameData.energy >= gameData.growCost) {
        gameData.water -= gameData.growCost
        gameData.nutrients -= gameData.growCost
        gameData.energy -= gameData.growCost
        gameData.energyPerClick *= 2
        gameData.ManaPerClick *= 2
        gameData.waterPerClick *= 2
        gameData.nutrientsPerClick *= 2
        gameData.growCost *= 4
        updateResources()
    } else { }
}
function thickerRoots() {
    if (gameData.water >= gameData.thickerRootsCost && gameData.nutrients >= gameData.thickerRootsCost && gameData.energy >= gameData.thickerRootsCost) {
        gameData.water -= gameData.growCost
        gameData.nutrients -= gameData.growCost
        gameData.energy -= gameData.growCost
        gameData.waterPerClick *= 2
        gameData.nutrientsPerClick *= 2
        gameData.thickerRootsCost *= 4
        updateResources()
    } else { }
}
function efficientLeaves() {
    if (gameData.water >= gameData.efficientLeavesCost && gameData.nutrients >= gameData.efficientLeavesCost && gameData.energy >= gameData.efficientLeavesCost) {
        gameData.water -= gameData.growCost
        gameData.nutrients -= gameData.growCost
        gameData.energy -= gameData.growCost
        gameData.energyPerClick *= 2
        gameData.ManaPerClick *= 2
        gameData.efficientLeavesCost *= 4
        updateResources()
    } else { }
}
function ascension() {
    if (gameData.water >= gameData.ascensionCost && gameData.nutrients >= gameData.ascensionCost && gameData.energy >= gameData.ascensionCost) {
        gameData.water = 0
        gameData.mana = 0
        gameData.nutrients = 0
        gameData.energy = 0
        gameData.waterPerClick = 0
        gameData.thickerRootsCost = 0
        gameData.efficientLeavesCost = 0
        gameData.growCost = 0
        ascensions = ascensions + 1
    }
}
    var mainGameLoop = window.setInterval(function () {
        absorbMana()
        absorbNutrients()
        absorbSun()
        absorbWater()
}, 1000)

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

