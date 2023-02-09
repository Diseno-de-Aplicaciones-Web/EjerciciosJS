/**
 * true and false are the data for logical operators.
 * "and" operator:
 * - true && true 👉 true
 * - false && true 👉 false
 * - true && false 👉 false
 * - false && false 👉 false
 * "or" operator:
 * - true || true 👉 true
 * - false || true 👉 true
 * - true || false 👉 true
 * - false || false 👉 false
 * "not" operator:
 * - ! true 👉 false
 * - ! false 👉 true
 * 
 * Example 1:
 * let iAmHungry = true
 * let iHaveFood = true
 * let iEat = iAmHungry && iHaveFood
 * 
 * Example 2:
 * let iAmHungry = true
 * let iHaveFood = false
 * let iHaveMoney = true
 * let itsWeekday = true
 * let iEat = iAmHungry && ( iHaveFood || (iHaveMoney && itsWeekday) )
 // TODO: Exemplo paso a paso
 * let podoComprar = iHaveMoney && itsWeekday
 * let tenhoAccesoAComida = iHaveFood || podoComprar
 * let iEat = iAmHungry && tenhoAccesoAComida
 * 
 * Exercise:
 * - Set the variable values to get to go to the beach
 */

let itsSunny = false
let imOnHolidays = false
let iLikeBeach = false
let iSurf = false
let thereAreWaves = false
let beachIsCloseEnough = false
let thereAreNoSharks = false
let iGoToTheBeach = ( 
        (
            itsSunny &&
            imOnHolidays &&
            iLikeBeach &&
            beachIsCloseEnough
        ) || (
            iSurf && thereAreWaves
        )
    ) && thereAreNoSharks

/**
 * Don't to change next lines.
 */
module.exports = { iGoToTheBeach }