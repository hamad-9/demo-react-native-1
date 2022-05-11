import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../../constants/colors';
function PrimaryButton({ children, onPressPrimaryButton }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPressPrimaryButton}
                android_ripple={{ color: Colors.primary600 }}
                style={({ pressed }) => pressed ?
                    [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,

        paddingVertical: 8,
        paddingHorizontal: 16,

        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    },
    pressed: {
        opacity: 0.75,

    }
});


export default PrimaryButton;