import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"; 

export default function Post({route}){
    const {post} = route.params;

    return(
        <ScrollView style={styles.contenedor}>
            <View style={styles.cardContainer}>
                
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.identificador}>POST # {post.id}</Text>
                </View>

                <View style={styles.postContent}>
                    <Text style={styles.titulo}>{post.title}</Text>
                    <Text style={styles.descripcion}>{post.body}</Text>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
        padding: 0, 
    },

    cardContainer: {
        margin: 15,
        backgroundColor: 'white', 
        borderRadius: 12,
        overflow: 'hidden',
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8,
    },

    imagePlaceholder: {
        height: 150, 
        backgroundColor: '#f483f4ff', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    identificador: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white', 
        opacity: 0.8,
        letterSpacing: 1,
    },
    
    postContent: {
        padding: 20, 
    },
    titulo: {
        fontSize: 24, 
        fontWeight: '900', 
        marginBottom: 10,
        color: '#333',
    },
    descripcion: {
        fontSize: 16,
        lineHeight: 26, 
        color: '#555', 
        marginTop: 10,
    },
});