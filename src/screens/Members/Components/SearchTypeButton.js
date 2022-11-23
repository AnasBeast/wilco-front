import React from "react";
import { TouchableOpacity, View,Text } from 'react-native';
import { palette } from "../../../Theme";
import {styles} from '../Members.styles';
export default SearchTypeButton = ({ type }) => {
    return (
        <TouchableOpacity style={styles.searchTypeButton}>
            <Text style={styles.searchTypeButtonText}>{type}</Text>
        </TouchableOpacity>
    )
}