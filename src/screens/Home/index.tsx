import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import {Tasks} from '../../components/Tasks'

import { styles } from "./styles";

export function Home() {
  const tasksList = ["lavar a louça", "limpar a casa", "Dentista", "Pagar contas", "Cuidar do cachorro", "Fazer almoço",
  "Tomar banho", "Jogar video game", "Jogar bola"]

  function tasksAdd(){
    if(tasksList.includes("lavar a louça")){
      return Alert.alert("Tarefa existe", "Essa tarefa ja existe!!")
    }

    console.log("Voce adicinou uma tarefa")
  }

  function tasksRemove( name: string){
    Alert.alert("Remover", `Deseja remover a tarefa ${name}?`,[
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado")
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
          placeholderTextColor='black'/>

          <TouchableOpacity style={styles.btn} onPress={tasksAdd}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
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