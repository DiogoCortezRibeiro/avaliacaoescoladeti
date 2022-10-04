import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

const ListaImovel = ({navigation}) => {
    const [listaImovel, setListaImovel] = useState([]);
 
    const buscarImoveis = () => {
        axios.get(`http://localhost:8081/imovel`)
             .then(response => {
                setListaImovel(response.data);
             })
    }

    useEffect(buscarImoveis, []);

    const possuiComodos = (imovel) => {
        if(imovel.comodos) {
            return (
                imovel.comodos.map(comodo => {
                    return (
                        <View key={comodo.id} style={styles.borderBottom}>
                            <Text style={styles.padding02}>Id: {comodo.id}</Text>
                            <Text style={styles.padding02}>Nome: {comodo.nome}</Text>
                        </View>
                    )
                })
            )
        }

        return <Text style={styles.padding02}>Imovel não possui comodos</Text>
    }

    const deletarImovel = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8081/imovel/${id}`)
             .then(response => {
                alert('Imovel deletado com sucesso!');
                navigation.navigate('Home');
             })
             .catch(e => {
                console.log(JSON.stringify(e));
            })
    }

    const editarImovel = (imovel) => {
        navigation.navigate('CadastroImovel', {imovel})
    }

    const listarImoveis = () => {
        if(listaImovel.length > 0) {
            return (
                listaImovel.map(imovel => {
                    return (
                        <View key={imovel.id} style={[styles.borderBottom, styles.marginBottom05]}>
                            <View>
                                <Text style={styles.padding02} >Id: {imovel.id}</Text>
                                <Text style={styles.padding02}>Descrição: {imovel.descricao}</Text>
                                <Text style={styles.padding02}>Data Compra: {imovel.datacompra}</Text>
                                <Text style={styles.padding02}>Endereco: {imovel.endereco}</Text>
                            </View>

                            <Text style={styles.padding02}>Comodos: </Text>
                            {possuiComodos(imovel)}
                            <View style={styles.botoes}>
                                <Button mode="contained" onPress={() => deletarImovel(imovel.id)} style={styles.botao} buttonColor="#ff4141" textColor="black">
                                    Deletar
                                </Button>
                                <Button mode="contained" onPress={() => editarImovel(imovel)} style={styles.botao} buttonColor="#5691fd" textColor="black">
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
            <Text>Lista de imoveis</Text>
            {listarImoveis()}
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
        width: '250px'
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

export default ListaImovel;