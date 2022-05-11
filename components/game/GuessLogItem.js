import { Text, View, StyleSheet } from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Colors from '../../constants/colors';
function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem} >
            <Text style={styles.itemText}> #{roundNumber} </Text>
            <Text style={styles.itemText}> Opponent's Guess: {guess} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        marginVertical: 8,
        padding: 12,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
});
export default GuessLogItem;