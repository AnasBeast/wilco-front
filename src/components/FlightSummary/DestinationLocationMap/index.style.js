import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  closeButtonText: {
    lineHeight: 33,
    height: 25,
  },
  closeButtonContainer: {
    height: 25,
    width: 25,
    padding: 5,
    left: 20,
    bottom: 20,
    position: 'absolute',
  },
  header: {
    width: '100%',
    height: 76,
    borderColor: 'red',
    borderWidth: 1,
    position: 'relative',
    alignItems: 'center',
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 24,
  },
  mapWrapper: {},
  map: {
    flex: 1,
    padding: 25,
    height: '100%',
    margin: 25,
    width: Dimensions.get('screen').width - 50,
  },
});
