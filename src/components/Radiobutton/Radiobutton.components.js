import React, { useState } from "react";
import {View,Text,Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { palette } from "../../Theme";
import {styles} from './Radiobutton.styles';
import { _getBorderColor, _getBoxColor } from "./Utils/utils";
export default RadioButton = ({title}) => {
    const [isSelected,setIsSelected] = useState(false);
   
    return (
        <Pressable 
        onPress={() => setIsSelected(prev => !prev)}
        style={styles.radioButtonContainer}>
            <View 
            
            style={{
                ...styles.tickCircle,
                backgroundColor:isSelected? palette.grayscale.white : 'transparent',
                borderWidth:2,
                borderColor:_getBorderColor(isSelected)
            }}>
                {
                    isSelected ? 
                    <View
                    style={{
                        width:15,
                        height:15,
                        backgroundColor:_getBoxColor(isSelected),
                        borderRadius:20/2
                    }}
                    />
                    :
                    null
                }
            </View>
            <Text style={{
                ...styles.checkboxTitle,
                fontWeight:isSelected ? 'bold' : 'normal'
            }}>{title}</Text>
        </Pressable>
    )
}