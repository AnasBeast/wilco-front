import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View, ViewPropTypes } from 'react-native';
import RemoveImageButton from './components/RemoveImageButton';
import { imageStyles } from './RemovableImage.styles';
import VideoPlayer from 'react-native-video-controls';

const RemovableImage = ({ source, testID, size, tintColor, style, resizeMode, removeOnPress, isVideo }) =>
  isVideo ? (
    <View style={{ position: 'relative' }}>
      <VideoPlayer
        muted
        paused
        disableBack
        disableFullscreen
        disableVolume
        source={source}
        style={{ width: '100%', aspectRatio: 4 / 5 }}
      />
      <RemoveImageButton onPress={removeOnPress} />
    </View>
  ) : (
    <ImageBackground
      testID={testID}
      style={{ ...imageStyles({ size, tintColor }).image, ...style }}
      resizeMode={resizeMode}
      source={source}
    >
      <RemoveImageButton onPress={removeOnPress} />
    </ImageBackground>
  );

RemovableImage.propTypes = {
  source: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.number]).isRequired,
  testID: PropTypes.string,
  isVideo: PropTypes.boolean,
  size: PropTypes.number,
  tintColor: PropTypes.string,
  style: ViewPropTypes.style,
  resizeMode: PropTypes.string,
  removeOnPress: PropTypes.func.isRequired,
};

RemovableImage.defaultProps = {
  testID: 'image',
  size: 32,
  tintColor: null,
  style: {},
  resizeMode: 'cover',
};

export default RemovableImage;
