import { StyleSheet } from 'react-native';
import { fonts, palette } from '../../../Theme';

export const styles = StyleSheet.create( {
	subHeaderContainer: {
		marginTop: 27, marginBottom: 32, justifyContent: 'center', alignItems: 'center',width:'80%',alignSelf:'center'
	},
	subHeaderText: {
		textAlign: 'center',
		...fonts.body,
		color: palette.grayscale.shutterGrey,
		marginHorizontal: '15%'
	},
	subTitle: {
		...fonts.textLink,
		color: palette.grayscale.shutterGrey,
		marginBottom: 4
	},
	placeholder: {
		...fonts.body,
		color: palette.grayscale.shutterGrey,
		marginBottom: 4,
		marginTop: 8
	},
	popover: {
		...fonts.caption,
		color: palette.grayscale.white
	},
	homeAirportTagContainer: {
		marginBottom: -15,
		marginTop: 8
	},
	preferredAirportsHeader: {
		marginTop: 32,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	preferredAirportsCounter: {
		flexDirection: 'row'
	},
	preferredAirportsCountBold: {
		...fonts.bodyFocus
	},
	preferredAirportsCount: {
		...fonts.body,
		color: palette.grayscale.shutterGrey
	},
	rightTextDisabled: {
		color: palette.grayscale.shutterGrey
	},
	checkboxContainer:{flexDirection:'row',alignItems:'center',marginVertical:10},
	tickBox:{width:25,height:25,justifyContent:'center',alignItems:'center',borderRadius:2},
	checkboxTitle:{
		...fonts.body,
		color:'black',
		paddingLeft:15
	}
} );
