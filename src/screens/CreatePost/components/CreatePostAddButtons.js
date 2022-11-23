import { Text } from 'react-native-elements';
import React from 'react';
import { styles } from '../CreatePost.styles';
import { Dimensions, Pressable, TouchableOpacity, View } from 'react-native';
import { palette } from '../../../Theme';

const CreatePostAddButton = ({ icon,title,onHandle }) => (
    <Pressable
    onPress={onHandle}
    style={styles.createPostAddButtonContainer}>
        <TouchableOpacity
        onPress={onHandle}
        style={styles.createPostAddButton}>
            {icon}
        </TouchableOpacity>
        <Text style={styles.createPostAddButtonTitle}>{title}</Text>
    </Pressable>
);

export default CreatePostAddButton;
