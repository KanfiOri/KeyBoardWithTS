"use strict";
// const actions = require('./logic')
// const checkCapsLock = () => {
//     let stringBeforeCapsLock = ''
//     stringBeforeCapsLock = addRegularChar(stringBeforeCapsLock, 'h')
//     stringBeforeCapsLock = addRegularChar(stringBeforeCapsLock, 'e')
//     stringBeforeCapsLock = addRegularChar(stringBeforeCapsLock, 'l')
//     stringBeforeCapsLock = addRegularChar(stringBeforeCapsLock, 'l')
//     stringBeforeCapsLock = addRegularChar(stringBeforeCapsLock, 'o')
//     toggleCapsLock();
//     const stringAfterCapsLock = changeCharactersToCapsLock([stringBeforeCapsLock])
//     toggleCapsLock();
//     return stringAfterCapsLock[0];
// }
// test('check CapsLock is working', () => {
//     expect(checkCapsLock()).toBe('HELLO');
//   });
// const checkShift = () => {
//     let stringBeforeShift = ''
//     stringBeforeShift = addRegularChar(stringBeforeShift, 'h')
//     toggleShift()
//     let stringAfterCapsLock = changeCharactersToCapsLock(['e'])
//     stringBeforeShift = addRegularChar(stringBeforeShift, stringAfterCapsLock[0])
//     IfShiftIsOn()
//     stringAfterCapsLock = changeCharactersToCapsLock(['y'])
//     stringBeforeShift = addRegularChar(stringBeforeShift, stringAfterCapsLock[0])
//     return stringBeforeShift;
// }
// test('check shift is working', () => {
//     expect(checkShift()).toBe('hEy');
//   });
// const checkSpace = () => {
//     let stringWithSpace = ''
//     stringWithSpace = addRegularChar(stringWithSpace, 'h')
//     stringWithSpace = addSpace(stringWithSpace)
//     stringWithSpace = addRegularChar(stringWithSpace, 'e')
//     return stringWithSpace;
// }
// test('check if space is added', () => {
//     expect(checkSpace()).toBe('h'+'\xa0'+'e');
//   });
// const checkEnter = () => {
//     let stringWithEnter = ''
//     stringWithEnter = addRegularChar(stringWithEnter, 'h')
//     stringWithEnter = addEnter(stringWithEnter)
//     stringWithEnter = addRegularChar(stringWithEnter, 'e')  
//     return stringWithEnter;
// }
// test('check if enter is added', () => {
//     expect(checkEnter()).toBe('h'+'\n'+'e');
//   });
// const checkDelete = () => {
//     let deletedString = ''
//     deletedString = addRegularChar(deletedString, 'h')
//     deletedString = addRegularChar(deletedString, 'e')
//     deletedString = delCharacter(deletedString)
//     return deletedString;
// }
// test('check if last char is deleted from string', () => {
//     expect(checkDelete()).toBe('h');
//   });
// const checkDeleteEmptyString = () => {
//     let deletedString = ''
//     deletedString = delCharacter(deletedString)
//     return deletedString;
// }
// test('check delete empty string', () => {
//     expect(checkDeleteEmptyString()).toBe('');
// })
// const checkTab = () => {
//     let stringWithTab = ''
//     stringWithTab = addRegularChar(stringWithTab, 'h')
//     stringWithTab = addTab(stringWithTab)
//     stringWithTab = addRegularChar(stringWithTab, 'e')
//     return stringWithTab
// }
// test('check if last tab is added', () => {
//     expect(checkTab()).toBe('h' + '\t' + 'e');
//   });
//   const checkIfSecondCharDeleted = () => {
//     let stringAfterDelete = 'ab'
//     stringAfterDelete = deleteSecondChar(stringAfterDelete)
//     return stringAfterDelete;
//   }
//   test('check if second char is deleted', () => {
//     expect(checkIfSecondCharDeleted()).toBe('a');
//   });
//   const checkIfFirstCharDeleted = () => {
//     let stringAfterDelete = 'ab'
//     stringAfterDelete = deleteFirstChar(stringAfterDelete)
//     return stringAfterDelete;
//   }
//   test('check if first char is deleted', () => {
//     expect(checkIfFirstCharDeleted()).toBe('b');
//   });
