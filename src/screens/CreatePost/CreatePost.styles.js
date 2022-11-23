import { Dimensions, StyleSheet } from 'react-native';
import { fonts, palette } from '../../Theme';

export const styles = StyleSheet.create({
	postBarContainer: {
		marginTop: 24,
		marginBottom: 10,
		minHeight: 72,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		alignSelf: 'center',
		marginTop: 8,
		marginBottom: 10
	},
	postTitleTextInput: {
		marginVertical: 16
	},
	postMessageTextInput: {
		marginTop: 16,
		marginBottom: 24
	},
	imagesTitle: {
		marginTop: 16,
		marginBottom: 4
	},
	separatorViewAircraftSelection: {
		height: 25
	},
	separatorView: {
		height: 16
	},
	titleSeparatorView: {
		height: 24
	},
	finalSeparatorView: {
		height: 36
	},
	communityTagSection: {
		zIndex: 1,
		paddingTop: 16
	},
	visibilityContainer: {
		marginTop: 16,
		marginBottom: 0
	},
	container: {
		backgroundColor: palette.grayscale.aliceBlue
	},
	sectionBackground: {
		backgroundColor: palette.grayscale.white
	},
	communityInputContainer: {
		backgroundColor: palette.grayscale.white,
		marginBottom: 36
	},
	selectedAircraft: {
		...fonts.bodyFocus,
		marginBottom: 10
	},
	flightInfoAircraft: {
		width: 24,
		height: 24,
		marginRight: 10
	},
	aircraftMakeAndModel: {
		...fonts.body,
		color: palette.grayscale.shutterGrey
	},
	aircraftTailNumber: {
		...fonts.body,
		color: palette.grayscale.black
	},
	flightInfoDivisorLine: {
		height: 1,
		backgroundColor: palette.grayscale.mercury,
		marginVertical: 16
	},
	flightInfoContainer: {
		flexDirection: 'row',
		height: 40,
		alignItems: 'center',
		marginLeft: 10
	},
	flightInfoMapImage: {
		width: 24,
		height: 24,
		marginRight: 10,
		marginTop: 5
	},
	selectedFlightContainer: { marginBottom: 20 },
	selectedFlightInnerContainer: { flexDirection: 'row', marginLeft: 10 },
	createPostAddButtonContainer: {
		// width: Dimensions.get('screen').width / 3.8,
	},
	createPostAddButton: {
		width: Dimensions.get('screen').width / 3.8,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: palette.primary.background,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		
		elevation: 7,
	},
	createPostAddButtonTitle:{
		color:palette.secondary.default,
		textAlign:'center',
		marginVertical:10,
		minHeight:20
	},
	tabButtonContainer:{
		width:'100%',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		paddingHorizontal:15
	},
	tabButtonInneraligner:{
		flexDirection:'row',
		alignItems:'center'
	},
	tabButtonTitle:{
		fontWeight:'bold',
		paddingLeft:7
	}
});

