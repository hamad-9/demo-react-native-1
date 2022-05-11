import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';



function InstructionText({ children, extraStyle }) {
    return (
        <Text style={[extraStyle, styles.instructionText]}> {children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: Colors.accent500,
    },
})

export default InstructionText;