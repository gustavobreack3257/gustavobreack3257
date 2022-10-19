import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import {Tasks} from '../../components/Tasks'

import { styles } from "./styles";

export function Home() {
  const [tasksList, setTasksList] = useState<string[]>([])
  const [tasksListName, setTasksListName] = useState('')
  function tasksAdd(){
    if(tasksList.includes(tasksListName)){
      return Alert.alert("Tarefa existe", "Essa tarefa ja existe!!")
    }
    setTasksList(prevState => [...prevState, tasksListName])
    setTasksListName('')
  }

  function tasksRemove( name: string){
    Alert.alert("Remover", `Deseja remover a tarefa ${name}?`,[
      {
        text: "Sim",
        onPress: () => setTasksList(prevState => prevState.filter(tasksList => tasksList !== name))
      },
      {
        text: "Não",
        style: 'cancel'

      }
    ])
    console.log(`Excluir ${ name }`)
  }
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Tasks List</Text>
        <View style={styles.form}>
          <TextInput style={styles.Input}
          placeholder='Tarefas'
          placeholderTextColor='black'
          onChangeText={setTasksListName}
          value={tasksListName}/>

          <TouchableOpacity style={styles.btn} onPress={tasksAdd}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.completed}>
          <Text style={styles.completedText}>Concluidas:</Text>
          <TextInput style={styles.inputCamp}></TextInput>
        </View>
        <FlatList
        data={tasksList}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Tasks
          name={item}
          key={item}
          onRemove={() => tasksRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyTask}>Nenhuma tarefa existente? Adicione uma tarefas.</Text>
        )}

        />

      </View>

    )
  }