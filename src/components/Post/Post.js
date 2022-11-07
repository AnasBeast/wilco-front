import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import noop from '../../helpers/noop';
import { FlightSummary } from '../FlightSummary';
import { PostActionBar } from '../PostActionBar';
import PostHeaderView from '../HeaderView/PostHeaderView';
import PostPresenter from '../../presenters/PostPresenter';
import { styles } from './Post.styles';
import { ImageCarousel } from '../ImageCarousel';
import { HorizontalPadding } from '../HorizontalPadding';
import { Comment } from '../Comment';
import PreviewComments from './components/PreviewComments';
import TextWithMentions from '../TextWithMentions/TextWithMentions';
import CommunityTags from './components/CommunityTags';
import Airports from './components/Airports';
import getContainerHashtagInfo from './helpers/getContainerHashtagInfo';

const PostComponent = ({
  testID,
  postPresenter,
  commentButtonWasPressed,
  contentWasPressed,
  showPreviewComments,
  showOptionsComments,
  showBackground,
  onHashtagPress,
}) => {
  const [isVisibleComments, setVisibleComments] = useState(false);
  const handelCommentPress = () => setVisibleComments(!isVisibleComments);

  console.log('QQQ postPresenter 1 ', postPresenter);

  const privacy = (
    <Image
      testID={postPresenter.privacy.testID}
      style={postPresenter.privacy.imageStyle}
      source={postPresenter.privacy.image}
    />
  );

  // eslint-disable-next-line react/prop-types
  const _renderPreviewComment = (commentPresenter) => (
    <HorizontalPadding testID="preview-comments-testID">
      <Comment
        testID="comment-Comment"
        commentPresenter={commentPresenter}
        showOptions={showOptionsComments}
        commentWasPressed={commentButtonWasPressed}
        isPreviewComment
      />
    </HorizontalPadding>
  );

  const hashTagInfo = getContainerHashtagInfo(postPresenter.text);

  return (
    <View testID={testID} style={[styles.postContainer, showBackground && styles.background]}>
      <HorizontalPadding
        style={[
          styles.infoContainer,
          hashTagInfo.background && {
            shadowColor: hashTagInfo.background,
            backgroundColor: hashTagInfo.background,
          },
          hashTagInfo.background !== '#fff' && styles.hashTagViewStyles,
        ]}
      >
        {!!hashTagInfo.hashTag && <Text style={styles.tagText}>{hashTagInfo.hashTag}</Text>}
        <PostHeaderView
          testID="headerView-component"
          pilotName={postPresenter.pilotName}
          dateToDisplay={postPresenter.dateToDisplay}
          optionsOnPress={postPresenter.postOptionsWasPressed}
          pilotOnPress={postPresenter.pilotWasPressed}
          imageSource={postPresenter.post.pilot.profilePictureThumbnailSource}
          privacy={privacy}
          edited={postPresenter.isEdited}
          showStar={postPresenter.post.favorite || false}
        />

        <Airports airports={postPresenter.airports} />

        {!!postPresenter.title && ( 
          <Text testID="title-text" style={styles.title} onPress={contentWasPressed}>
            {postPresenter.title}
          </Text>
        )}
        <Pressable onPress={contentWasPressed}>
          <TextWithMentions
            value={postPresenter.text}
            style={styles.text}
            onMentionPress={postPresenter.onMentionPressed}
            onHashtagPress={onHashtagPress}
          />
        </Pressable>
        {!!postPresenter.flightPresenter && (
          <FlightSummary testID="post-flight-presenter" postFlightPresenter={postPresenter.flightPresenter} />
        )}
      </HorizontalPadding>

      {postPresenter.hasImages && (
        <View>
          <ImageCarousel
            testID="image-carousel"
            previewSources={postPresenter.imagePreviewSources}
            sources={postPresenter.imageSources}
          />
        </View>
      )}

      {postPresenter.hasAnyCommunityTag && <CommunityTags communityTags={postPresenter.communityTags} />}

      <PostActionBar
        testID="post-action-bar"
        post={postPresenter.post}
        numberOfLikes={postPresenter.numberOfLikes}
        liked={postPresenter.liked}
        onLikePressed={postPresenter.likeButtonWasPressed}
        onCommentPressed={handelCommentPress}
      />

      {isVisibleComments && (
        <PreviewComments
          postPresenter={postPresenter}
          renderComment={_renderPreviewComment}
          showPreviewComments={showPreviewComments}
          commentButtonWasPressed={commentButtonWasPressed}
        />
      )}
    </View>
  );
};

PostComponent.propTypes = {
  testID: PropTypes.string,
  commentButtonWasPressed: PropTypes.func,
  contentWasPressed: PropTypes.func,
  postPresenter: PropTypes.instanceOf(PostPresenter).isRequired,
  showPreviewComments: PropTypes.bool,
  showOptionsComments: PropTypes.bool,
  showBackground: PropTypes.bool,
  onHashtagPress: PropTypes.func,
};

PostComponent.defaultProps = {
  testID: 'post-component',
  commentButtonWasPressed: noop,
  contentWasPressed: noop,
  showPreviewComments: false,
  showOptionsComments: true,
  showBackground: true,
  onHashtagPress: noop,
};

export default observer(PostComponent);
