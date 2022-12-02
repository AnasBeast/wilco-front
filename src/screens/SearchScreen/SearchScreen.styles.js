import { StyleSheet } from 'react-native';
import { fonts, palette } from '../../Theme';

export const styles = StyleSheet.create({
	separatorItems: {
		marginBottom: 20
	},
	screenHeader: {
		marginBottom: 5
	},
	flatListHeader: {
		height: 32
	},
	flatListFooter: {
		position: 'relative',
		paddingVertical: 0,
		marginTop: 0,
		marginBottom: 30
	},
	tabIndicator: {
		backgroundColor: palette.primary.default,
		height: 2
	},
	tabItemTitle: {
		...fonts.tabs,
		textTransform: 'none'
	},
	tabItemContainer: {
		backgroundColor: palette.grayscale.white
	},
	tabViewItemContainer: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: palette.grayscale.white
	},
	tabActive: { color: palette.primary.default },
	tabInactive: {
		...fonts.tabsMedium,
		color: palette.grayscale.black
	},
	headerSearch: {
		width: '95%',
		alignSelf: 'center',
		height: 44,
		backgroundColor: 'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
		borderRadius: 2,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		marginVertical: 5
	},
	headerSearchInput: {
		flex: 1,
		paddingLeft: 10,
		...fonts.bodySmall
	},
	searchTypeButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1.3,
		borderRadius: 30,
		minWidth: 100,
		marginLeft: 5,
		paddingVertical: 8,
	},
	selectTypesText: {
		...fonts.title,
		marginBottom: 12,
		color: palette.primary.darkCyan
	},
	flatListContainer: { right: 5, marginTop: 5, marginBottom: 10 },
	searchTypeButtonText:{
		...fonts.bodySmall
	}
});
