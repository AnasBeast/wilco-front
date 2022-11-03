import React from 'react';
import { Text, View } from 'react-native';

import { LikeCount } from '../../../LikeCount';
import { CommentCount } from '../../../CommentCount';

import { styles } from './index.style';

const CommentActinBar = ({ likes, dislikes, onLike, onDisLike }) => {
  return (
    <View style={styles.container}>
      <LikeCount
        testID="comment-like-count"
        hasText={false}
        count={likes}
        liked={true}
        hasCount={!!likes}
        onPress={onLike}
      />
      <View style={styles.dislikeStyle}>
        <LikeCount
          testID="comment-unlike-count"
          hasText={false}
          count={dislikes}
          liked={false}
          isDislike={true}
          hasCount={!!dislikes}
          onPress={onDisLike}
        />
      </View>
    </View>
  );
};

export default CommentActinBar;
