import { StyleSheet } from 'react-native';
import { fonts } from '../../Theme';

export const styles = StyleSheet.create( {
	radioButtonContainer:{flexDirection:'row',alignItems:'center',marginVertical:10},
	tickCircle:{width:25,height:25,justifyContent:'center',alignItems:'center',borderRadius:25/2},
	checkboxTitle:{
		...fonts.body,
		color:'black',
		paddingLeft:15
	}
} );
