import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#f0f8ff',
      padding: 24
    },
    header:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#b8860b',
      margin: '30%',
    },
    Input:{
      flex: 1,
      backgroundColor: '#b8860b',
      height: 58,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      padding: 18,
      color: 'black',
      marginRight: 12,

    },
    btnText:{
      fontSize: 20,
      color: '#FFF',
    },
    btn: {
      height: 56,
      width: 56,
      borderRadius: 5,
      backgroundColor: '#20b2aa',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 20
    },
    ListEmptyTask:{
      marginTop: 20,
      marginLeft: 35,
      color: 'black',
      fontSize: 20
    },
    completed:{
      flexDirection: 'row',
      height: 30,
      marginLeft: 5,
    },
    completedText:{
      fontSize: 15,
      fontWeight: 'bold'
    },
    inputCamp:{
      height: 16,
      marginTop: 3,
      marginLeft: 3,
      backgroundColor: 'black'
    }
  })