import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

const CadastroComodo = ({navigation, route}) => {
    const [comodo, setComodo] = useState({
        nome: route.params?.comodo.nome,
        id: route.params?.comodo.id,
        imovel_id: route.params?.comodo.imovel_id
    });

    const salvarComodo = () => {
        if(!comodo.id) {
            axios.post(`http://localhost:8081/comodo`, comodo)
            .then(response => {
                alert('Comodo cadastrado com sucesso!!');
                navigation.navigate('Home');
            }) 
            .catch(e => {
                alert('Erro, informe um id de imovel valido')
            })
        }else {
            axios.put(`http://localhost:8081/comodo/${comodo.id}`, comodo)
                .then(response => {
                    alert('Comodo atualizado com sucesso!!');
                    navigation.navigate('Home');
                }) 
                .catch(e => {
                    console.log(JSON.stringify(e))
                })
        }
    }

    return (
        <View style={styles.center}>

            <View style={styles.width30}>
                <Text style={styles.margin_12}>Nome</Text>
                <TextInput 
                    onChangeText={nome => setComodo({...comodo, nome})}
                    style={styles.input} 
                    value={comodo.nome}
                    placeholder="Informe o nome do comodo" />
            </View>

            <View style={styles.width30}>
                <Text style={styles.margin_12}>Id do imovel</Text>
                <TextInput 
                    onChangeText={imovel_id => setComodo({...comodo, imovel_id})}
                    style={styles.input} 
                    value={comodo.imovel_id}
                    placeholder="Informe id do imovel" />
            </View>

            <View style={styles.width30}>
                <Button mode="contained" onPress={() => salvarComodo()} style={styles.marginTop1} buttonColor="#e3e3e3" textColor="black">
                    {comodo.id ? 'Atualizar': 'Cadastrar'}
                </Button>
                <Button mode="contained" onPress={() => navigation.navigate('Home')} style={{marginTop: '10px'}} buttonColor="#e3e3e3" textColor="black">
                    Voltar
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: '#C7C7C7',
      padding: 10,
      borderRadius: 10
    },
    margin_12: {
      marginLeft: 12,
      marginBottom: -5
    },
    width30: {
        width: '30%'
    }, 
    center: {
        alignItems: 'center'
    }
})

export default CadastroComodo;