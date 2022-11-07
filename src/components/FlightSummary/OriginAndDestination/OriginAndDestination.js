import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { arrowRight } from '../../../assets/icons';
import { styles } from './OriginAndDestination.styles';

import DestinationLocationMap from '../DestinationLocationMap';
import { useState } from 'react';

const OriginAndDestination = ({ testID, from, to, departureTime, arrivalTime }) => {
  const [location, setLocation] = useState();
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);

  const onFromLocationPress = () => {
    setLocation({ longitude: from.longitude, longitude: from.longitude });
  };

  const onToLocationPress = () => {
    setLocation({ longitude: to.longitude, longitude: to.longitude });
  };

  const onCloseLocationModal = () => {
    setLocation();
    setLocationModalOpen(false);
  };

  return (
    <View testID={testID} style={styles.container}>
      {location && (
        <DestinationLocationMap
          latitude={location?.latitude}
          longitude={location?.longitude}
          onClose={onCloseLocationModal}
        />
      )}

      <View style={styles.itemContainer}>
        <Pressable onPress={onFromLocationPress}>
          <Text style={styles.fromAndTo}>{from}</Text>
        </Pressable>
        <Text style={styles.times}>{departureTime}</Text>
      </View>
      <Image style={styles.arrow} source={arrowRight} />
      <View style={styles.itemContainer}>
        <Pressable onPress={onToLocationPress}>
          <Text style={styles.fromAndTo}>{to}</Text>
        </Pressable>
        <Text style={styles.times}>{arrivalTime}</Text>
      </View>
    </View>
  );
};

OriginAndDestination.propTypes = {
  testID: PropTypes.string,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
};

OriginAndDestination.defaultProps = {
  testID: 'originAndDestination-Component',
};

export default OriginAndDestination;
