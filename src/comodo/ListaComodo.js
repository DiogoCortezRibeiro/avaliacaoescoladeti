import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

const ListaComodo = ({navigation}) => {
    const [listaComodo, setListaComodo] = useState([]);
 
    const buscarComodos = () => {
        axios.get(`http://localhost:8081/comodo`)
             .then(response => {
                setListaComodo(response.data);
             })
    }

    useEffect(buscarComodos, []);

    const deletarComodo = (id) => {
        axios.delete(`http://localhost:8081/comodo/${id}`)
             .then(response => {
                alert('Comodo deletado com sucesso!');
                navigation.navigate('Home');
             })
             .catch(e => {
                console.log(JSON.stringify(e));
            })
    }

    const editarComodo = (comodo) => {
        navigation.navigate('CadastroComodo', {comodo})
    }

    const listarComodos = () => {
        if(listaComodo.length > 0) {
            return (
                listaComodo.map(comodo => {
                    return (
                        <View key={comodo.id} style={[styles.borderBottom, styles.marginBottom05]}>
                            <View>
                                <Text style={styles.padding02} >Id: {comodo.id}</Text>
                                <Text style={styles.padding02}>Nome: {comodo.nome}</Text>
                            </View>
                            <View style={styles.botoes}>
                                <Button mode="contained" onPress={() => deletarComodo(comodo.id)} style={styles.botao} buttonColor="#ff4141" textColor="black">
                                    Deletar
                                </Button>
                                <Button mode="contained" onPress={() => editarComodo(comodo)} style={styles.botao} buttonColor="#5691fd" textColor="black">
                                    Editar
                                </Button>
                            </View>
                        </View>
                    )
                })
            )
        }
    }

    return (
        <View style={styles.center}>
            <Text>Lista de comodos</Text>
            {listarComodos()}
            <Button mode="contained" onPress={() => navigation.navigate('Home')} style={{marginTop: '10px'}} buttonColor="#e3e3e3" textColor="black">
                Voltar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    marginBottom05: {
      marginBottom: '0.5em'
    },
    width30: {
        width: '30%'
    }, 
    center: {
        alignItems: 'center'
    },
    padding02: {
        padding: '0.2em',
        width: '200px'
    },
    borderBottom: {
        borderBottomColor: 'gray',
        borderBottomWidth: '2px',
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10px'
    },
    botao: {
        justifyContent: 'center',
        marginTop: '5px',
        height: '70%'
    }
})

export default ListaComodo;