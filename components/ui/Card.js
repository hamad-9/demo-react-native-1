import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';
function Card({ children }) {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    );
}
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, //only for android 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});


export default Card;