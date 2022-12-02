import { StyleSheet } from 'react-native';
import { fonts } from '../../Theme';

export const styles = StyleSheet.create( {
	checkboxContainer:{flexDirection:'row',alignItems:'center',marginVertical:10},
	tickBox:{width:25,height:25,justifyContent:'center',alignItems:'center',borderRadius:2},
	checkboxTitle:{
		...fonts.body,
		color:'black',
		paddingLeft:15
	}
} );
