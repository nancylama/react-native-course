import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // clear entered text whenever new goal added
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput 
                    placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                /> 
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color='#b180f0'
                        />
                    </View>
                    <View style={styles.button}> 
                        <Button 
                            title='Cancel' 
                            onPress={props.onCancel}
                            color='#f31282'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#311b6b',
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 8,
        color: '#120438',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
       width: 100,
       height: 100, 
       margin: 20,
    }
});