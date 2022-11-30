import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { styles } from './ImageCarousel.styles';
import { RemovableImage } from '../RemovableImage';
import { PHOTO_AND_TRACK_ASPECT_RATIO as imageAspectRatio } from '../../constants/images';
import { ImageViewer } from '../ImageViewer';
import { Pagination } from '../Pagination';
import { OwlCarousel } from '../OwlCarousel';
import { ActivityIndicator } from '../ActivityIndicator';
import { ImageWithLoader } from '../ImageWithLoader';
import { palette } from '../../Theme';
import VideoPlayer from 'react-native-video-controls';

const ImageCarousel = ({ testID, previewSources, sources, removeImage }) => {
  const [imageViewerVisible, setImageViewerVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [indexWhenCloseModal, setIndexWhenCloseModal] = useState(0);
  const [imageHeight, setImageHeight] = useState(213);
  const _onCarouselWidthSet = (width) => setImageHeight(Math.round(width / imageAspectRatio));
  const imageStyle = { ...styles.image, height: imageHeight };

  useEffect(() => {
    if (carouselIndex >= previewSources?.length) setCarouselIndex(previewSources?.length - 1);
  }, [previewSources?.length]);

  const renderLoader = () => (
    <ActivityIndicator
      color={palette.grayscale.white}
      containerStyle={[{ height: imageHeight }, styles.renderLoaderContainer]}
    />
  );

  const VIDEO_EXTENSIONS = ['.mov', '.mp4'];
  const isVideo = (uri: string) => VIDEO_EXTENSIONS.some((ext) => uri.endsWith(ext));

  const renderCarouselItem = ({ item }) => {
    const itemProps = { style: imageStyle, resizeMode: 'cover', source: item };

    return removeImage ? (
      <RemovableImage
        isVideo={isVideo(itemProps.source.uri.toLowerCase())}
        {...itemProps}
        removeOnPress={() => removeImage(item)}
      />
    ) : (
      <Pressable onPress={() => setImageViewerVisible(true)}>
        {isVideo(itemProps.source.uri) ? (
          <VideoPlayer
            // source={{
            //   uri: message.data.url,
            // }} // Can be a URL or a local file.
            // ref={player} // Store reference
            paused
            style={{ width: '100%', height: '100%' }}
            disableBack
            disableFullscreen
            disableVolume
            muted
            {...itemProps}
          />
        ) : (
          <ImageWithLoader {...itemProps} renderLoader={renderLoader} />
        )}
      </Pressable>
    );
  };

  const createPaginationView = (dotsLength, activeDotIndex) => (
    <Pagination length={dotsLength} activeIndex={activeDotIndex} />
  );

  const _onClosePress = (index) => {
    setIndexWhenCloseModal(index);
    setImageViewerVisible(false);
  };

  const _imageViewer = () => (
    <ImageViewer
      index={carouselIndex}
      items={sources}
      pagination={createPaginationView}
      visible={imageViewerVisible}
      onClosePress={_onClosePress}
    />
  );

  return (
    <>
      {sources ? _imageViewer() : null}

      <OwlCarousel
        testID={testID}
        items={previewSources}
        renderItem={renderCarouselItem}
        onWidthSet={_onCarouselWidthSet}
        index={carouselIndex}
        setIndex={setCarouselIndex}
        indexWhenCloseViewer={indexWhenCloseModal}
      />
    </>
  );
};

ImageCarousel.propTypes = {
  testID: PropTypes.string,
  previewSources: PropTypes.arrayOf(PropTypes.object).isRequired,
  sources: PropTypes.arrayOf(PropTypes.object),
  removeImage: PropTypes.func,
};

ImageCarousel.defaultProps = {
  testID: 'imageCarousel-component',
  sources: [],
  removeImage: null,
};

export default observer(ImageCarousel);
