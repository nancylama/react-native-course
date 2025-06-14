import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button
 } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) { 
    setCourseGoals(currentCourseGoals => [ // updating course goals
      ...courseGoals, // with old course goals
      { text: enteredGoalText, id: Math.random().toString() }, // & appending a new goal
    ]); 
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); // returns new array w/o items we filtered out
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color='#a065ec'
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          onAddGoal={addGoalHandler} 
          visible={modalIsVisible} 
          onCancel={endAddGoalHandler} 
        />
        <View style={styles.goalsContanier}>
          <FlatList 
            data={courseGoals} 
            renderItem={itemData => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler} 
                />
              );
            }} 
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} 
          />
        </View>
      </View>
    </>
  );
}

// styles don't cascade like they do on the web with CSS - no style inheritance
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },
  goalsContanier: {
    flex: 5,
  },
});

