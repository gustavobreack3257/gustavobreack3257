import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'black',
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
      backgroundColor: '#20abcc',
      height: 58,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#b8860b',
      fontSize: 18,
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
      marginBottom: 42
    },
    ListEmptyTask:{
      color: '#20b2cc',
      fontSize: 20
    }
  })