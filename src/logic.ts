let capsL = false;
let shiftClick = false;
let shiftClicked = false;
let capsAndShiftClicked = false
let currentString: string = ''
let storageHandler : StorageProvider;


const startKeyboard = (storageProvider : StorageProvider) => {
    storageHandler = storageProvider
    if(storageHandler.getData() !== null) {
        currentString = storageProvider.getData()
    } 
    else {
        currentString = ''
    }

    console.log('storageHandlerProvider 1 ' + storageProvider.getData())
}

// const windoIsOnload = () => {
//         if(storageHandler) {
//             currentString = storageHandler.getData()
//             return currentString
//         }
//         else {
//             return ''
//         }
// }

// const windoIsOnload = () => {
//     const storageToCheck = storageHandler.getData()
//     if(storageToCheck !== null) {
//         currentString = storageToCheck;
//     }   

//     return currentString;
// }

const getCurrentString = (): string => {
    return currentString;
}

const addSpace = (text: string) => {
    currentString = text + '\xa0';
    storageHandler.setData(currentString);
    //  return(text + '\xa0')
} 

const addEnter = (text: string) => {
    currentString = text + '\n';
    storageHandler.setData(currentString);
    // return(text + '\n')
}

const delCharacter = () => {
    currentString = currentString.slice(0, -1);
    storageHandler.setData(currentString);
    // return(text.slice(0, -1))
}

const addTab = (text: string) => {
    currentString = text + '\t';
    storageHandler.setData(currentString);
    // return(text + '\t')
} 
  
const addRegularChar = (text: string, char: string) => {  
    currentString = text + char;
    storageHandler.setData(currentString);      
    // return(text + char)
}

const toggleCapsLock = () => {
    capsL = !capsL
}

const toggleShift = () => {
    shiftClicked = !shiftClicked;
}

const changeCharactersToCapsLock = (normalCharacters: string[]): string[] => {
        const changedArray = normalCharacters.map(character =>  (capsL || shiftClicked) && !(capsL && shiftClicked) ?
        character.toUpperCase() :
        character.toLowerCase()) 

        return changedArray
}

const IfShiftIsOn = () => {
    if (shiftClicked) {
        shiftClicked = false;
        return true;
    }
    return false;
}

const deleteFirstChar = (chsracters: string) => {
    chsracters = chsracters.replace(/\s/g,'')
    if (chsracters.length === 2) {
        chsracters = chsracters.slice(1)
    }

    currentString += chsracters;
    storageHandler.setData(currentString);
    // localStorageManagment.setData(currentString);
}

const deleteSecondChar = (chsracters: string) => {
    chsracters = chsracters.replace(/\s/g,'')
    if (chsracters.length === 2) {
        chsracters = chsracters.slice(0, 1)
    }

    currentString += chsracters;
    storageHandler.setData(currentString);
    // localStorageManagment.setData(currentString);
}
