import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
      textAlign: "center",
      padding: 10,
      backgroundColor: "#e0e0e0",
      border: '1px solid #bdbdbd'
    },
    text: {
      fontSize: 24
    },
    flex: { 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:20
    },
    title: {
        fontSize: 20
    },
    date: {
        fontSize: 20
    },
    description:{
        padding:20
    }
});