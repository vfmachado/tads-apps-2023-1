import { StyleSheet } from "react-native";

export const GStyles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: '4px',
      borderColor: 'gray'
    },
    container2: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderWidth: '4px',
      borderColor: 'pink'
    },
    mb10: {
      marginBottom: 10
    },
    hyperButton: {
      padding: '50px',
      margin: '50px',
      backgroundColor: '#FFF',
      // borderRadius: '1rem',
      // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    input: {
      borderColor: 'gray',
      borderWidth: '1px',
      fontSize: '16px',
      height: '30px'
    }
  });
  