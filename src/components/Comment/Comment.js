import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import CommentHeaderView from '../HeaderView/CommentHeaderView';
import CommentPresenter from '../../presenters/CommentPresenter';
import { styles } from './Comment.styles';
import AutoLink from '../AutoLink/AutoLink';
import ReadMoreText from '../ReadMoreText/ReadMoreText';
import CommentActinBar from './components/CommentActionBar';

const Comment = ({ testID, commentPresenter, showOptions, isPreviewComment, commentWasPressed }) => {
  console.log('CCC commentPresenter ', commentPresenter);

  const { id, likes, dislikes } = commentPresenter.comment;
  const handelLikePress = () => commentPresenter.likeComment.execute(id);
  const handelDisLikePress = () => commentPresenter.unLikeComment.execute(id);

  return (
    <View testID={testID} style={styles.commentContainer}>
      <CommentHeaderView
        testID="pilotsInfo-HeaderView"
        pilotName={commentPresenter.pilotName}
        dateToDisplay={commentPresenter.dateToDisplay}
        optionsOnPress={commentPresenter.commentOptionsWasPressed}
        pilotOnPress={isPreviewComment ? commentWasPressed : commentPresenter.commentPilotWasPressed}
        imageSource={commentPresenter.pilotProfilePictureThumbnailSource}
      />
      {isPreviewComment ? (
        <ReadMoreText
          testID="comment-testID"
          text={commentPresenter.text}
          style={styles.text}
          onPress={commentWasPressed}
        />
      ) : (
        <Text onPress={commentWasPressed} testID="comment-testID">
          <AutoLink testID="text-Text" text={commentPresenter.text} style={styles.text} />
        </Text>
      )}

      <CommentActinBar {...{ likes, dislikes }} onLike={handelLikePress} onDisLike={handelDisLikePress} />
    </View>
  );
};

Comment.propTypes = {
  testID: PropTypes.string,
  commentPresenter: PropTypes.instanceOf(CommentPresenter).isRequired,
  showOptions: PropTypes.bool,
  isPreviewComment: PropTypes.bool,
  commentWasPressed: PropTypes.func,
};

Comment.defaultProps = {
  testID: 'comment-Component',
  showOptions: true,
  isPreviewComment: false,
  commentWasPressed: () => {},
};

export default Comment;
