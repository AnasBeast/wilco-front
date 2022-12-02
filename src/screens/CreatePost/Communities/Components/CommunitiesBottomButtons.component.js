import React from "react";
import { Pressable,Text } from 'react-native';
import { fonts } from "../../../../Theme";

export default FooterButtons = ({

    title,
    bgColor,
    buttonStyles,
    textColor,
    textStyles

}) => {
    return (
        <Pressable style={{
            width:'45%',
            height:50,
            justifyContent:'center',alignItems:'center',
            borderRadius:30,
            backgroundColor:bgColor?bgColor:'transparent',
            ...buttonStyles
        }}> 
            <Text style={{
                color:textColor ? textColor : 'black',
                ...textStyles,
                ...fonts.bodyFocus
            }}>{title}</Text>
        </Pressable>
    )
}