import React from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { FlatList, Pressable, View } from 'react-native';
import { styles } from './communities.styles';
import CheckboxComponent from '../../../components/Checkbox/Checkbox.component';
import usePreferencesWireframe from '../../../wireframes/usePreferencesWireframe';
import { HorizontalPadding } from '../../../components/HorizontalPadding';
import { NavigationBar } from '../../../components/NavigationBar';
import BaseScreen from '../../BaseScreen/BaseScreen';
import { useHardwareBackPress } from '../../../hooks/useHardwareBackPress';
import CommunitiesBottomButtonsComponent from './Components/CommunitiesBottomButtons.component';
import { palette } from '../../../Theme';

const Communities = ( { testID } ) => {
	const presenter = usePreferencesWireframe();

	useHardwareBackPress( presenter?.onBackArrowPressed );
	const CheckBoxes = ['Collier Airpar','Country Air Estates','COPA','Lincoln Village Airpart','Lloyd Streaman Field','Morrilla Airpark','Ridgely Airpark','Santa Monica Airpark','Town & Country Airpark'];
	return (
		<BaseScreen testID={testID} isLoading={presenter.isLoading}>
			<HorizontalPadding>
				<NavigationBar
					testID="preferences-navigation-bar-testID"
					title={'Communities'}
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
						Select up to 3 communites related to this post
					</Text>
				</View>
              
			   <FlatList
			   data={CheckBoxes}
			   renderItem={({item}) => (
				<CheckboxComponent
				title={item}
				/>
			   )}
			   />
			   <CheckboxComponent
				title={'Other'}
				/>
				
				<View />
               
                
              

			</HorizontalPadding>
            <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:'5%',justifyContent:'space-evenly',alignSelf:'center'}}>
                    <CommunitiesBottomButtonsComponent
                    title={'Apply'}
                    textColor='white'
                    bgColor={palette.primary.darkCyan}
                    />
                     <CommunitiesBottomButtonsComponent
                    title={'Clear'}
                    textColor='black'
                    buttonStyles={{
                        borderColor:'black',
                        borderWidth:1
                    }}
                    />
                </View>
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
