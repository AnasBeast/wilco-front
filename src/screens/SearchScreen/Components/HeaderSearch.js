import React, { useEffect, useState } from "react";
import { TextInput, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import useMembersWireframe from "../../../wireframes/useMembersWireframe";
import { searchFunction } from "../utils/functions";
import { styles } from '../SearchScreen.styles';
import { palette } from "../../../Theme";
export default HeaderSearch = ({ pilots, sendSearchData }) => {
    const [search, setSearch] = useState('');
    const handleSearchData = () => {
        if (search) {
            const searchedData = searchFunction(search, pilots);
            sendSearchData(searchedData);
        }
    }
    const _handleSearchInput = (text) => setSearch(text);
    useEffect(() => {
        handleSearchData();
    }, [pilots, search]);
    return (
        <View style={styles.headerSearch}>
            <MaterialIcons
                name='search'
                color='grey'
                size={20}
            />
            <TextInput
                value={search}
                onChangeText={_handleSearchInput}
                placeholder="Search"
                placeholderTextColor={palette.grayscale.aluminum}
                style={styles.headerSearchInput}

            />
        </View>
    )
}