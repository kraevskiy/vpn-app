import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Bottom } from './src/components/Bottom';
import { VpnTop } from './src/components/VpnTop';
import { RNSO } from './src/components/RNSO'

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			{/*<VpnTop/>*/}
			<RNSO />
			<Bottom/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 40,
		paddingHorizontal: 20
	},
});
