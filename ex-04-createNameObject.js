/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/


function createNameObject(str) {
    var arrob = str.split(' ')
    var obj = {
      firstName: arrob[0], lastName: arrob[1]
    }
    return obj
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var nameObj1 = createNameObject("Benzo Lorenzo")
console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

var nameObj2 = createNameObject("Felipe Tortuga")
console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

var nameObj3 = createNameObject("Lupe Maria")
console.assert(nameObj3.firstName === 'Lupe')
console.assert(nameObj3.lastName === 'Maria')
