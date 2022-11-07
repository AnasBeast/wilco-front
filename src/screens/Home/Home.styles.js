import { StyleSheet } from 'react-native';

import { palette, fonts } from '../../Theme';

export const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 122,
    marginTop: 12,
    marginBottom: 8,
  },
  separatorView: {
    height: 24,
    backgroundColor: palette.grayscale.aliceBlue,
  },
  headerView: {
    height: 44,
    flexDirection: 'row',
  },
  userAvatarView: {
    backgroundColor: palette.grayscale.aluminum,
    height: '100%',
    aspectRatio: 1,
    borderRadius: 22,
    justifyContent: 'center',
  },
  userAvatar: {
    tintColor: palette.grayscale.white,
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  userNameView: {
    marginLeft: 10,
    marginVertical: 2,
    flex: 1,
  },
  userName: {
    ...fonts.tabs,
    height: 20,
    color: palette.secondary.default,
  },
  postDate: {
    ...fonts.caption,
    height: 16,
    color: palette.grayscale.shutterGrey,
    marginTop: 4,
  },
  title: {
    ...fonts.tabs,
    color: palette.grayscale.black,
    marginVertical: 8,
  },
  text: {
    ...fonts.body,
    color: palette.grayscale.black,
  },
  footerFlatList: {
    position: 'relative',
    paddingVertical: 0,
    marginTop: 0,
    marginBottom: 30,
  },
  loadingPost: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    backgroundColor: palette.grayscale.aliceBlue,
    height: '100%',
    width: '100%',
    flex: 1,
  },
  activityIndicatorContainer: {
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: { flexDirection: 'row' },
  headerRightContainer: {
    flex: 0.3,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 8,
  },
  headerLeftContainer: {
    flex: 0.7,
    alignSelf: 'center',
    marginLeft: 20,
  },
  rightLogo: {
    width: 24,
    height: 24,
  },
  filterLogo: {
    marginRight: 12,
  },
  filterItemsContainer: {
    backgroundColor: palette.grayscale.aliceBlue,
    marginBottom: -8,
    minWidth: '100%',
  },
  tabIndicator: {
    display: 'none',
  },
  tabItemTitle: {
    ...fonts.tabs,
    textTransform: 'none',
  },
  tabItemContainer: {
    maxWidth: 177,
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomWidth: 2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  tabButton: {},
  tabsWrapper: {
    backgroundColor: palette.grayscale.aliceBlue,
  },
  tabViewItemContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  tabContainerActive: {
    borderColor: palette.primary.default,
  },
  tabActive: { color: palette.primary.default, borderBottomWidth: 2, borderColor: palette.primary.default },
  tabInactive: {
    ...fonts.tabsMedium,
    color: palette.grayscale.black,
  },
});
