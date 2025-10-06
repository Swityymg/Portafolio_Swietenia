import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

export default function Home({ navigation }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPost(data.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                console.log("detalles error", error);
                setLoading(false);
            });
    }, []);

    const renderPost = ({ item }) => (
        // agregué lo de tarjeta post containet
        <TouchableOpacity
            style={styles.tarjetaPostContainer}
            onPress={() => navigation.navigate('Post', { post: item })}
        >
            <View style={styles.tarjetaPostContent}>
                <Text style={styles.tituloPost}>{item.title}</Text>
                <Text style={styles.descripcionPost} numberOfLines={2}>{item.body}</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#f483f4ff" />
                <Text style={styles.loadingText}>Cargando contenido...</Text>
            </View>
        );
    }

    return (
        <View style={styles.contenedor}>
            <FlatList
                data={post}
                renderItem={renderPost}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 15, 
        backgroundColor: '#f5f5f5', 
    },
    
    tarjetaPostContainer: {
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 12, 
        // Sombra 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    tarjetaPostContent: {
        padding: 18,
    },

    tituloPost: {
        color: '#f483f4ff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    descripcionPost: {
        fontSize: 14,
        color: '#666', 
        lineHeight: 20,
    },
    
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#f483f4ff',
    },
});