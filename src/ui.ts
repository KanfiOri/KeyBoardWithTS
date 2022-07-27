const keyboard = document.getElementsByClassName("btn") 
const normalCharacters = document.getElementsByClassName("normal-character") as HTMLCollectionOf<HTMLElement>;;
let text: any = document.getElementById("output")
const capsLock: any = document.getElementById('capsL')
const shiftButton = document.getElementsByClassName('shift')
const defaultOptions = document.getElementsByClassName('default-option');
const secondOptions = document.getElementsByClassName('second-option');
let storageHandlerUI: StorageProvider;

// Constant Variables
const shift = 'shift';
const capsLk = 'capsL';
const space = 'space';
const enter = 'enter';
const del = 'del';
const tab = 'tab';
const highlightClassName = 'highlight'
const lighterfontClassName = 'lighter-font'

const capsLockOrShiftIsClicked = () => {
    const changedCharacters = 
    changeCharactersToCapsLock([...normalCharacters].map(normalCharacter => normalCharacter.innerText));

    for(let i = 0; i < normalCharacters.length; i++) {
        normalCharacters[i].innerText = changedCharacters[i]
    }  
}

const lightUpCapsLock = () => {
    capsL ? capsLock.classList.add(highlightClassName) : capsLock.classList.remove(highlightClassName)
}

const addBoldToSecondOption = () => {
    [...defaultOptions].forEach(defaultOption => defaultOption.classList.add(lighterfontClassName));
    [...secondOptions].forEach(secondOption => secondOption.classList.remove(lighterfontClassName));
}

const addBoldToDefaultOption = () => {
    [...defaultOptions].forEach(defaultOption => defaultOption.classList.remove(lighterfontClassName));
    [...secondOptions].forEach(secondOption => secondOption.classList.add(lighterfontClassName));
}

const lightShift = () => {
    shiftButton[0].classList.add(highlightClassName)
    shiftButton[1].classList.add(highlightClassName)
}

const dowenShift = () => {
    shiftButton[0].classList.remove(highlightClassName)
    shiftButton[1].classList.remove(highlightClassName)
}

const lightUpOrLightDowenShift = () => {
    if(shiftClicked) {
        lightShift()
        addBoldToSecondOption()
    } else {
        dowenShift()
        addBoldToDefaultOption()
    }
}

const lightDowenShift = () => {
    shiftButton[0].classList.remove(highlightClassName)
    shiftButton[1].classList.remove(highlightClassName)
}

const shiftIsOn = (chsracters: string) => {
    capsLockOrShiftIsClicked()
    deleteFirstChar(chsracters)
    text.innerText = getCurrentString()
}
                                                                                                                                                                                                                                                                                                            
const insertValues = (i: number, characters: string) => {
    normalCharacters[i].innerText = characters[i]
}

// if(text.innerText === '') {
//     text.innerText = windoIsOnload()
// }
const startUi = (storageProvider: StorageProvider) => {
    storageHandlerUI = storageProvider;
    if(window.performance) {
        text.innerText = storageHandlerUI.getData()
    }
}

const specialCharactersHandler = (e: any) => {
    switch(e.currentTarget.innerText) {
        case(space): {
            addSpace(text.innerText)
            text.innerText = getCurrentString()

            break;
        }
        case(enter): {
            addEnter(text.innerText)
            text.innerText = getCurrentString()

            break;
        }
        case(del): {
            delCharacter()
            text.innerText = getCurrentString()

            break;
        }
        case(capsLk): {
            toggleCapsLock()
            capsLockOrShiftIsClicked()
            lightUpCapsLock()

            break;
        }
        case(tab): {
            addTab(text.innerText)
            text.innerText = getCurrentString()

            break;
        }
        case(shift): {
            toggleShift();
            capsLockOrShiftIsClicked()
            lightUpOrLightDowenShift()
            
            break;
        }
        default: {
            if (IfShiftIsOn()) {
                shiftIsOn(e.currentTarget.innerText)
                // text.innerText += slicedChar
            } 
            else {
                deleteSecondChar(e.currentTarget.innerText)
                text.innerText = getCurrentString();
            }

            lightUpOrLightDowenShift()

            break;
        }
    }
}

[...keyboard].forEach(character => {
    character.addEventListener('click', specialCharactersHandler)
})