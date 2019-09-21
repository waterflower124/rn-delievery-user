

import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer, Text } from 'native-base';
import { Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import { LOGIN_URL } from '../../utility/AppConstant';


class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }

        this.loginData = []
    }
    state = {
        username: '',
}
    loginRequest() {
        if (this.state.username == null || this.state.username == '') {
            Toast.show('Ingrese un email malido', Toast.LONG);
        } else {
            const email = this.state.username.text;
            fetch("https://aveoperu.com/gadeli11/user_recuperarpwd.php", {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email:email
                })
              })
            .then((response) => response.json())
            .then((responseJson) => {
              if(responseJson!=""){
                  alert("Se envio un Correo Electrónico con su nuevo password");
                  this.props.navigation.navigate('LoginPage');
              }
              else{
                alert(responseJson.mensaje);
              }
            })
            .catch(error => {
                console.error(error);
              });


       }
    };

     render() {
        const { loginData } = this.state
        return (

            <Container style={styles.container}>


                <Content padder>
                    <Image source={require("../../assets/screen_logo.png")} style={{ width: 200, height: 160, alignSelf: 'center', marginTop: 20 }} resizeMode='contain'></Image>


                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 19, marginTop: 20, color: '#000000', fontWeight: 'bold' }}>Recuperar Password</Text>

                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <TextInput
                                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 50, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                                // Adding hint in TextInput using Placeholder option.
                                placeholder="Email/Telefono"
                                placeholderTextColor='#888888'
                                onChangeText={(text) => this.setState({ username: { text } })}
                                //set the value in state.
                                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                                // Making the Under line Transparent.
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={[{ width: "70%", alignSelf: 'center', marginTop: 30 }]}>

                            <Button
                                onPress={() => this.loginRequest()}

                                title="Recuperar"
                                titleStyle={{ color: "white" }}
                                type="clear"
                                containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
                            />
                        </View>

                    </View>
                </Content>

             

            </Container>

        )

    };

}

export default ForgotPasswordPage;