import React from 'react';
import { Button, View, Alert } from 'react-native';

export const Bottom = () => {
	return (
		<View>
			<Button
				title="Press me"
				onPress={() => Alert.alert('Simple Button pressed')}
			/>
		</View>
	);
};
