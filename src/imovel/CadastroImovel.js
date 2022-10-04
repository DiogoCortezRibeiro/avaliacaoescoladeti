import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

const CadastroImovel = ({navigation, route}) => {
    const [imovel, setImovel] = useState({
        descricao: route.params?.imovel.descricao,
        id: route.params?.imovel.id,
        datacompra: route.params?.imovel.datacompra,
        endereco: route.params?.imovel.endereco
    });

    const salvarImovel = () => {
        if(!imovel.id) {
            axios.post(`http://localhost:8081/imovel`, imovel)
            .then(response => {
                alert('Imovel cadastrado com sucesso!!');
                navigation.navigate('Home');
            }) 
            .catch(e => {
                console.log(JSON.stringify(e))
            })
        }else {
            axios.put(`http://localhost:8081/imovel/${imovel.id}`, imovel)
                .then(response => {
                    alert('Imovel atualizado com sucesso!!');
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
                <Text style={styles.margin_12}>Descrição</Text>
                <TextInput 
                    onChangeText={descricao => setImovel({...imovel, descricao})}
                    style={styles.input} 
                    value={imovel.descricao}
                    placeholder="Informe a descrição do imovel" />
            </View>

            <View style={styles.width30}>
                <Text style={styles.margin_12}>Data compra</Text>
                <TextInput 
                    onChangeText={datacompra => setImovel({...imovel, datacompra})}
                    style={styles.input} 
                    value={imovel.datacompra}
                    placeholder="AAAA-MM-DD" />
            </View>

            <View style={styles.width30}>
                <Text style={styles.margin_12}>Endereço</Text>
                <TextInput 
                    onChangeText={endereco => setImovel({...imovel, endereco})}
                    style={styles.input} 
                    value={imovel.endereco}
                    placeholder="Informe o endereço do imovel" />
            </View>

            <View style={styles.width30}>
                <Button mode="contained" onPress={() => salvarImovel()} style={styles.marginTop1} buttonColor="#e3e3e3" textColor="black">
                    {imovel.id ? 'Atualizar': 'Cadastrar'}
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

export default CadastroImovel;