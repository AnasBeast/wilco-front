import React from "react";
import { FlatList, View,Text } from 'react-native';
import { palette } from "../../../Theme";
import HeaderSearch from "./HeaderSearch";
import SearchTypeButton from "./SearchTypeButton";
import { styles } from '../SearchScreen.styles';
export default WilcoMembersHeaderBottom = ({pilots,sendSearchDataFunc}) => {
    const Buttons = ['Member','Community','Airport','Aircraft'];

    const handleRenderItem = ({item}) => {
        return <SearchTypeButton type={item}/>
    }

    return (
        <View>
            <Text style={styles.selectTypesText}>Select Types of Search: </Text>
            <FlatList
            horizontal
            contentContainerStyle={styles.flatListContainer}
            data={Buttons}
            renderItem={handleRenderItem}
            />
            <HeaderSearch sendSearchData={sendSearchDataFunc} pilots={pilots}/>
        </View>
    )
}