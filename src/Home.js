import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

/**
 * Home screen
 */
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.containerButton}>
                <Button
                    title="Mobil Mogok"
                    onPress={() => navigate(
                        'MobilMogok'
                    )}
                />
                </View>
                <View style={styles.containerButton}>
                <Button
                    title="Ban Kempis"
                    onPress={() => navigate(
                        'Profile'
                    )}
                />
                </View>
                <View style={styles.containerButton}>
                <Button
                    title="Temperatur Naik"
                    onPress={() => navigate(
                        'Profile'
                    )}
                />
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    containerButton: {
        paddingTop: 20
    },
});