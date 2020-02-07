import React,{useState} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {


  const [enterInput,setGoal]=useState('');

  const setGoalHandlers=(enterInput)=>{


    setGoal(setGoal);
  }


  const addgoalHandler=()=>{

console.log(enterInput)

  }
  return (
    <View style={styles.container}>
      <View

        style={styles.innerContainer}>
      
        <TextInput
          placeholder="open"
          style={{
            borderBottomColor: "red",
            borderBottomWidth: 2,
            paddingLeft: 20,
            marginBottom: 10,
            width: 250
          }}

          onChangeText={setGoalHandlers}

          value={enterInput}
        />
        <Button title="Add" style={{
          
          backgroundColor: "blue" }}
          
          onPress={addgoalHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  innerContainer:{
    flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center"
  }

});
