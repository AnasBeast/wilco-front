/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { TITLE, MESSAGE, VISIBILITY } from '../../constants/formFields/postForm';
import useCreatePostWireframe from '../../wireframes/useCreatePostWireframe';
import BaseScreen from '../BaseScreen/BaseScreen';
import { PrimaryButton } from '../../components/PrimaryButton';
import { AddPhotosButton } from '../../components/AddPhotosButton';
import { Title } from '../../components/Title';
import { ImageCarousel } from '../../components/ImageCarousel';
import CreatePostHeader from './components/CreatePostHeader';
import { HorizontalPadding } from '../../components/HorizontalPadding';
import { styles } from './CreatePost.styles';
import { TextArea } from '../../components/TextArea';
import { KeyboardAwareScrollView } from '../../components/KeyboardAwareScrollView';
import { TouchableInput } from '../../components/TouchableInput';
import { CommunityInput } from '../../components/CommunityInput';
import { Tags } from '../../components/Tags';
import MessageTooltipPopover from './components/MessageTooltipPopover';
import { onLayout, scrollTo } from '../../helpers/scroll';
import { useHardwareBackPress } from '../../hooks/useHardwareBackPress';
import { FlightSelection } from '../../components/FlightSelection';
import CreatePostAddButton from './components/CreatePostAddButtons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { palette } from '../../Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabButton from './components/TabButton';
import { useAddPhotosButton } from '../../hooks/useAddPhotosButton';
import { TertiaryButton } from '../../components/TertiaryButton';
import { photoVideo } from '../../assets/icons';
import PlaceholderButton from '../../components/PlaceholderButton/PlaceholderButton';

import Entypo from 'react-native-vector-icons/Entypo';

const CreatePost = ({ route }) => {
  const presenter = useCreatePostWireframe();
  const ref = useRef();
  const [communityTagSectionPositionY, setCommunityTagSectionPositionY] = useState(0);
  const [messageSectionPositionY, setMessageSectionPositionY] = useState(0);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    const newAircraftId = route.params?.newAircraftId;
    if (newAircraftId && presenter) presenter.onAircraftSelected(newAircraftId);

    const flightData = route.params?.flightData;

    if (flightData && presenter) presenter.onAircraftFlightSelected(flightData);
  }, [route.params, presenter]);

  useHardwareBackPress(presenter?.rightHeaderButton.onPress);

  const _fixedBottomContent = () => (
    <View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          testID="post-button"
          title={presenter.buttonTitle}
          size="big"
          disabled={presenter.isPostButtonDisabled}
          onPress={presenter.form.onSubmit}
        />
      </View>
    </View>
  );

  const _removeImage = (item) => {
    presenter.removePhoto(item);
    setSelectedPhotos(selectedPhotos.filter((photo) => photo.path !== item.uri));
  };

  const _photosWereSelected = (_photos) => {
    presenter.photosWereSelected(_photos);
    setSelectedPhotos(_photos);
  };

  const handleGalleryPermission = useAddPhotosButton(_photosWereSelected, 10, selectedPhotos);

  const CreateButtons = [
    {
      title: 'Add Media',
      icon: <MaterialIcons name="perm-media" color={palette.secondary.default} size={24} />,
      key: 1,
      onHandle: handleGalleryPermission,
    },
    {
      title: 'Share a Flight',
      icon: <MaterialIcons name="flight-takeoff" color={palette.secondary.default} size={25} />,
      key: 2,
      onHandle: presenter?.onAddFlightButtonPressed,
    },
    {
      title: 'Add Community',
      icon: <MaterialCommunityIcons name="handshake" color={palette.secondary.default} size={25} />,
      key: 3,
    },
  ];

  return (
    <BaseScreen isLoading={presenter?.isLoading}>
      {!!presenter && (
        <>
          <HorizontalPadding>
            <CreatePostHeader rightButton={presenter.rightHeaderButton} />
          </HorizontalPadding>

          <KeyboardAwareScrollView ref={ref} fixedBottomContent={_fixedBottomContent()} style={styles.container}>
            <View style={styles.titleSeparatorView} />

            <HorizontalPadding style={styles.sectionBackground}>
              <TextArea
                testID="title-input"
                textInputStyle={styles.postTitleTextInput}
                inputProps={presenter.form.$(TITLE).bind()}
                capitalizeFirstLetter
              />
            </HorizontalPadding>

            <View style={styles.separatorView} />

            <View onLayout={(event) => onLayout(event, setMessageSectionPositionY)}>
              <HorizontalPadding style={styles.sectionBackground}>
                <TextArea
                  testID="message-input"
                  textInputStyle={styles.postMessageTextInput}
                  minimumLines={5}
                  inputProps={presenter.form.$(MESSAGE).bind()}
                  supportMention
                  capitalizeFirstLetter
                  popover={<MessageTooltipPopover />}
                  onFocus={() => scrollTo({ ref, positionY: messageSectionPositionY })}
                  bold={false}
                />
              </HorizontalPadding>
            </View>

            <View style={styles.separatorView} />
            {presenter?.selectedFlight ? (
              <FlightSelection
                selectedFlight={presenter.selectedFlight}
                selectedAircraft={presenter.selectedAircraft}
                onAddFlightButtonPressed={presenter.onAddFlightButtonPressed}
                onClearFlightPressed={presenter.onClearFlightPressed}
              />
            ) : null}

            <View style={styles.separatorView} />

            <View style={styles.sectionBackground}>
              {selectedPhotos.length > 0 && (
                <ImageCarousel testID="photo-carousel" previewSources={selectedPhotos} removeImage={_removeImage} />
              )}
            </View>

            <View
              style={{
                backgroundColor: 'white',
                paddingVertical: 10,
                paddingTop: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                {CreateButtons?.map((item) => (
                  <CreatePostAddButton
                    key={item?.key}
                    title={item?.title}
                    icon={item?.icon}
                    onHandle={item?.onHandle}
                  />
                ))}
              </View>
              <View
                style={{
                  marginTop: 10,
                }}
              >
                <TabButton
                  onPress={() => presenter.visibilityInputWasPressed()}
                  rightIcon={<Entypo name="chevron-right" color="black" size={25} />}
                  tabTitle={`Who can see this post? (${presenter.selectedVisibility})`}
                  tabIcon={<MaterialCommunityIcons name="earth" color={palette.secondary.default} size={20} />}
                />
                <View
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    borderWidth: 0.7,
                    marginVertical: 10,
                    borderColor: palette.grayscale.mercury,
                  }}
                />
                <TabButton
                  rightIcon={<Entypo name="chevron-right" color="black" size={25} />}
                  tabTitle={'Select the communites related to this post'}
                  tabIcon={<MaterialIcons name="people" color={palette.secondary.default} size={20} />}
                />
              </View>
            </View>

            <View style={styles.finalSeparatorView} />
          </KeyboardAwareScrollView>
        </>
      )}
    </BaseScreen>
  );
};

CreatePost.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      newAircraftId: PropTypes.number,
      flightData: PropTypes.objectOf(PropTypes.any),
    }),
  }).isRequired,
};

export default observer(CreatePost);
