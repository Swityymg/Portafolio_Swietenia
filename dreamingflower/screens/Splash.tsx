import { useEffect } from "react"
import {View,Text, StyleSheet, Image} from "react-native"

export default function Splash({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        },3000)
    },[])
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Bienvenidos</Text>
            <Image source={{uri:'https://pluspng.com/img-png/flower-png-flower-png-image-17956-700.png'}}style={styles.logo}/>
        </View>
    )
}


const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fbcefbff'
    },
    logo:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:20,
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        marginBottom:10,
    }
})