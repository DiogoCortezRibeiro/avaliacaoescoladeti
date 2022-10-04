import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-paper";

const Home = ({navigation}) => {
    return (
        <View style={styles.center}>
            <View style={styles.width30}>
                <View style={styles.marginTop1}>
                    <Text>Imoveis</Text>
                </View>
               <View>
                    <Button mode="contained" buttonColor="#e3e3e3" textColor="black" onPress={() => navigation.navigate('CadastroImovel')}>
                            <Text>Cadastrar Imovel</Text>
                    </Button>

                    <Button mode="contained" style={styles.marginTop1} buttonColor="#e3e3e3" textColor="black" onPress={() => navigation.navigate('ListaImovel')}>
                            <Text>Listar Imoveis</Text>
                    </Button>
               </View>
            </View>

            <View style={[styles.width30, styles.marginTop1]}>
                <View>
                    <Text>Comodos</Text>
                </View>
               <View>
                    <Button mode="contained" buttonColor="#e3e3e3" textColor="black" onPress={() => navigation.navigate('CadastroComodo')}>
                            <Text>Cadastrar Comodos</Text>
                    </Button>

                    <Button mode="contained" style={styles.marginTop1} buttonColor="#e3e3e3" textColor="black" onPress={() => navigation.navigate('ListaComodo')}>
                            <Text>Listar Comodos</Text>
                    </Button>
               </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    width30: {
        width: '30%'
    },
    marginTop1: {
        marginTop: '1em'
    },  
    center: {
        alignItems: 'center'
    }
})

export default Home;