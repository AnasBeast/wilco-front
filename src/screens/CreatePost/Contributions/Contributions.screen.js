import React from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { FlatList, Pressable, View } from 'react-native';
import { styles } from './Contributions.styles';
import usePreferencesWireframe from '../../../wireframes/usePreferencesWireframe';
import { HorizontalPadding } from '../../../components/HorizontalPadding';
import { NavigationBar } from '../../../components/NavigationBar';
import BaseScreen from '../../BaseScreen/BaseScreen';
import { useHardwareBackPress } from '../../../hooks/useHardwareBackPress';
import Radiobutton from '../../../components/Radiobutton/Radiobutton.components';

const Communities = ( { testID } ) => {
	const presenter = usePreferencesWireframe();

	useHardwareBackPress( presenter?.onBackArrowPressed );
	const CheckBoxes = ['Angel Flight','The Air Car Alliance','Brigade Air, Inc','Emergency Volunteer Air Corp (EVAC)','Fly for the Cure','Pilots and Paws Pet Rescue','The Volunteer Pilots Association','Patient Airlift Services (PALS)','Other'];
	return (
		<BaseScreen testID={testID} isLoading={presenter.isLoading}>
			<HorizontalPadding>
				<NavigationBar
					testID="preferences-navigation-bar-testID"
					title={'Contributions'}
					onBackArrowPress={presenter.onBackArrowPressed}
					rightAction={{
						text: presenter.rightActionHeaderText,
						textStyle: ( presenter.preferredAirportsPresenter.preferredAirportsHaveChanged )
							? null : styles.rightTextDisabled,
						onPress: presenter.onSaveButtonPressed
					}}
				/>
				
				<View style={styles.subHeaderContainer}>
					<Text style={styles.subHeaderText} testID="sub-header-testID">
						Select the type of volunteering or contribution you want to share.
					</Text>
				</View>
              
			   <FlatList
			   data={CheckBoxes}
			   renderItem={({item}) => (
				<Radiobutton
				title={item}
				/>
			   )}
			   />
				<View />
               
                
              

			</HorizontalPadding>
          
		</BaseScreen>
	);
};

Communities.propTypes = {
	testID: PropTypes.string
};

Communities.defaultProps = {
	testID: 'Communities-screen'
};

export default observer( Communities );
