import React from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { FlatList, Pressable, View } from 'react-native';
import BaseScreen from '../BaseScreen/BaseScreen';
import { NavigationBar } from '../../components/NavigationBar';
import HorizontalPadding from '../../components/HorizontalPadding/HorizontalPadding';
import usePreferencesWireframe from '../../wireframes/usePreferencesWireframe';
import { styles } from './SetPreferences.styles';
import AirportInput from '../../components/AirportInput/AirportInput';
import HomeAirport from './components/HomeAirport';
import PreferredAirports from './components/PreferredAirports';
import { useHardwareBackPress } from '../../hooks/useHardwareBackPress';
import { fonts, palette } from '../../Theme';
import CheckBox from './components/CheckBox';

const Preferences = ( { testID } ) => {
	const presenter = usePreferencesWireframe();

	useHardwareBackPress( presenter?.onBackArrowPressed );
	const CheckBoxes = ['Pilot','Mechanic','Air Traffic Controller','Airport Manager / Employee','FBO Manager / Employee','Flight School Manager / Employee','Aircraft Management'];
	return (
		<BaseScreen testID={testID} isLoading={presenter.isLoading}>
			<HorizontalPadding>
				<NavigationBar
					testID="preferences-navigation-bar-testID"
					title={presenter.headerTitleText}
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
						{presenter.subHeaderText}
					</Text>
				</View>
					
			   <FlatList
			   data={CheckBoxes}
			   renderItem={({item}) => (
				<CheckBox
				title={item}
				/>
			   )}
			   />
			   <CheckBox
				title={'Other'}
				/>
				{/* <AirportInput
					containerStyle={{ height: 80 }}
					testID="airport-input-testID"
					placeholder={presenter.placeholderText}
					onSubmit={presenter.preferredAirportsPresenter.addNewPreferredAirport}
					error="The ICAO code must have between 3-4 characters."
					hasError={presenter.preferredAirportsPresenter.hasError}
					onChange={presenter.preferredAirportsPresenter.onInputChange}
				/> */}
				<View />

				{/* <HomeAirport
					pilotHasHomeAirport={presenter.pilotHasHomeAirport}
					pilotHomeAirport={presenter.pilotHomeAirport}
				/> */}

				{/* <PreferredAirports preferredAirportsPresenter={presenter.preferredAirportsPresenter} /> */}

			</HorizontalPadding>
		</BaseScreen>
	);
};

Preferences.propTypes = {
	testID: PropTypes.string
};

Preferences.defaultProps = {
	testID: 'preferences-screen'
};

export default observer( Preferences );
