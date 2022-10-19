import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#b8860b',
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    name: {
        flex: 1,
        color: 'black',
        marginLeft: 18,
        fontSize: 17,
        fontWeight: 'bold'
    },
    btnText:{
        fontSize: 20,
        color: '#FFF',
      },
      btn: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#dc143c',
        alignItems: 'center',
        justifyContent: 'center',

      },
})