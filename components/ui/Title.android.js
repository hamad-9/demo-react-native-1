import { Text, View, StyleSheet, Platform } from 'react-native'


function Title({ children }) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );

};


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%', //Learn3
        width: 300,
    },
});

export default Title;