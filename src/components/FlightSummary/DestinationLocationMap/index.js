import React from 'react';
import { Modal, View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import MapView from 'react-native-maps';

import { styles } from './index.style';

const DestinationLocationMap = ({ longitude, latitude, onClose }) => {
  return (
    <Modal animated animationType="slide" visible={longitude && latitude} onRequestClose={onClose}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.closeButtonContainer} onPress={onClose}>
            <Text styles={styles.closeButtonText}>&#10005;</Text>
          </Pressable>
          <Pressable onPress={onClose}></Pressable>
          <Text style={styles.title}>Airport Location</Text>
        </View>
        <MapView
          style={styles.map}
          zoomControlEnabled
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4,
          }}
        ></MapView>
      </SafeAreaView>
    </Modal>
  );
};

export default DestinationLocationMap;
