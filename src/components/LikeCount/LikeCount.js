import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { thumbsUp } from '../../assets/icons';
import { likedStyle, unlikedStyle } from './LikeCount.styles';

const LikeCount = ({ testID, count, liked, onPress, hasText = true, isDislike = false, hasCount = true }) => {
  const styles = liked ? likedStyle : unlikedStyle;
  const text = hasText ? (count === 1 ? ' like' : ' likes') : '';
  const extraStyles = { transform: [{ rotate: isDislike ? '180deg' : '0deg' }, { scaleX: isDislike ? -1 : 1 }] };

  return (
    <Pressable onPress={onPress}>
      <View testID={testID} style={[styles.likeCountContainer]}>
        <Image testID="like-count-image" style={[styles.likeIcon, extraStyles]} source={thumbsUp} />
        {hasCount && (
          <Text testID="like-count-text" style={styles.likes}>
            {`${count}${text}`}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

LikeCount.propTypes = {
  testID: PropTypes.string,
  count: PropTypes.number,
  liked: PropTypes.bool,
  onPress: PropTypes.func,
};

LikeCount.defaultProps = {
  testID: 'likeCount-component',
  count: 0,
  liked: false,
  onPress: () => {},
};

export default LikeCount;
