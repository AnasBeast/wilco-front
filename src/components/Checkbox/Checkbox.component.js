import React, { useState } from "react";
import {View,Text,Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { palette } from "../../Theme";
import {styles} from './Checkbox.styles';
import { _getBoxColor } from "./Utils/utils";
export default CheckBox = ({title}) => {
    const [isSelected,setIsSelected] = useState(false);
   
    return (
        <Pressable 
        onPress={() => setIsSelected(prev => !prev)}
        style={styles.checkboxContainer}>
            <View 
            
            style={{
                ...styles.tickBox,
                backgroundColor:_getBoxColor(isSelected)
            }}>
                {
                    isSelected ? 
                    <Entypo name='check' color={palette.grayscale.white} size={18}/> 
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