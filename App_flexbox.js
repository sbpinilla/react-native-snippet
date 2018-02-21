/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D ',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component < Props > {
       
    render() {
        return (

            <View style = { styles.container } >

                <View style = { [styles.box, styles.red] } ></View>
                <View style = { [styles.box, styles.green] } ></View>
                <View style = { [styles.box, styles.blue] } ></View> 
            </View>

        );
    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,  // toma todo el espacio posible del contenedor
        
        //flexDirection: 'row', // Horizontal
        flexDirection: 'row', // vertical 
        
        //justifyContent: 'center', // alineacion en el eje principal "depende si es row o column"
        //justifyContent: 'space-around', // deja espacios entre los elementos y el borde 
       // justifyContent: 'space-between', // deja espacios entre los elementos (no tiene encuenta el borde los elementos de ubican desde el inicio de la pantalla )

       // alignItems: 'center', //Alineacion de elementos sobre el eje contrario  // si el flexDirection es "row"(horizontal) la propiedad alineara los elementos en colums (vertical)
        
        backgroundColor: '#CCC',
        flexWrap:'wrap' // permite que los elementos que sobrepasen el tamaño del contenedor se bajen automaticamente 
    },  
    box: {
        flexWrap: 'wrap',
        width: 150,
        height: 150,
        backgroundColor: 'black'
    },
    red :{
        //flex:1,
        backgroundColor: 'red',
        //alignSelf: 'flex-end', // alinear solo este elemento (Alineacion sobre el eje contrario)
    },
    green:{
        //flex:2,
        backgroundColor: 'green',
        
    },
    blue:{
        backgroundColor: 'blue',
       // alignSelf: 'flex-start'
       
    }

    //Propiedad Flex
    
    // La propiedad flex :1 asignada todo el espacio disponible en el contenedor a su elemento
    // Si hay mas de un elemento con la propiedad flex 1 ,se le asignara el mismo tamaño a dichos elementos
    // flexbox respetara el tamaño por defecto de los elementos que no contengan la propiedad flex

    // Si el  elemento "A" tiene la propiedad flex : 1 y el elemnto "B" tiene la propiedad flex : 2 , el elemento "B" tendra el doble de tamaño que el elemto "A" 
  
});