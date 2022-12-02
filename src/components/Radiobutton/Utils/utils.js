import { palette } from "../../../Theme"


export const _getBoxColor = (isSelected) => {
    if(isSelected) return palette.primary.darkCyan
    if(!isSelected) return 'transparent'
}

export const _getBorderColor = (isSelected) => {
    if(isSelected) return palette.primary.darkCyan
    if(!isSelected) return palette.grayscale.aluminum
}