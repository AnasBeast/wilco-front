import React from "react";
import { TouchableOpacity, View,Text,Pressable } from "react-native";
import {styles} from '../CreatePost.styles';
export default TabButton = ({tabIcon,tabTitle,rightIcon,onPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={styles.tabButtonContainer}>
            <View style={styles.tabButtonInneraligner}>

                {tabIcon}
                <Text style={styles.tabButtonTitle}>{tabTitle}</Text>

            </View>
            <TouchableOpacity>
                {rightIcon}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}