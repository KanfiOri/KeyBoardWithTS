"use strict";
// const dataFromLogic = getCurrentString();
// console.log('dataFromLogic ' + dataFromLogic)
// const windoIsOnload = () => {
//     const storageToCheck = getStorageData()
//     if(storageToCheck !== null) {
//         console.log('it is in')
//         currentString = storageToCheck;
//     }   
//     return currentString;
// }
// const getStorageData = () => {
//     return localStorageManagment.getData()
// }
const localStorageManagment = {
    getData() {
        let updatedData = localStorage.getItem('keyBoardText');
        updatedData = JSON.parse(updatedData);
        return updatedData;
    },
    setData(currentString) {
        localStorage.setItem('keyBoardText', JSON.stringify(currentString));
    }
};
