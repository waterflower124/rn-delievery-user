



import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer, Text } from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import { SIGNUP_URL } from '../../utility/AppConstant';
import Moment from 'moment';
import RNGooglePlaces from 'react-native-google-places';
import ProgressDialog from '../../utility/progessdialog';
import DateTimePicker from "react-native-modal-datetime-picker";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      dni: "",
      full_name: "",
      address: "",
      email: "",
      phone_number: "",
      password: "",
      isLoading : false
      
  };
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    Moment.locale('en');
    var dt = date;
    var mData = Moment(dt).format('DD-MM-YYYY').toString();
    console.log("DATE====================>", mData)
    this.setState({ txt_date: mData })
    this.hideDateTimePicker();
  };



   registerRequest(navigate) {

    console.log("that=======>",this.props) 

    if (this.state.dni == null || this.state.dni == '') {
      Toast.show('Ingrese su DNI', Toast.LONG)
    } else if (this.state.full_name == null || this.state.full_name == '') {
      Toast.show('Ingrese su nombre completo', Toast.LONG)
    }else if (this.state.address == null || this.state.address == '') {
    Toast.show('Ingrese su dirección', Toast.LONG)
    } else if (this.state.email == null || this.state.email == '') {
      Toast.show('Ingrese su email', Toast.LONG)
    } else if (this.state.phone_number == null || this.state.phone_number == '') {
      Toast.show('Ingrese su numero telefónico', Toast.LONG)
    } else if (this.state.password == null || this.state.password == '') {
      Toast.show('Ingrese su password', Toast.LONG)
    }  else {
      this.setState({isLoading :true})    
      // cargar api
        //fetch("http://192.168.0.12:8080/gadeli/user_registro.php", {
         fetch("https://aveoperu.com/gadeli11/user_registro.php", {
         method: "POST",
         headers: {
           'Accept': 'application/json',
           "Authorization": "Bearer " + "token",
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           DNI:this.state.dni,
           passwords:this.state.password,
           telefono:this.state.phone_number,
           nombres:this.state.full_name,
           email:this.state.email,
           direccion:this.state.address,
         })
       })
       .then((response) => response.json())
       .then((responseJson) => {
         if(responseJson.mensaje=="Usuario Registrado"){
          this.props.navigation.navigate('LoginPage');
         }
         else{
           alert(responseJson.mensaje);
         }
       })
      .catch(error => {
         console.log(error);
       });
      
    }

   
    }
    
  render() {
   
    return (

      <Container style={styles.container}>
        <Content padder>


          <View>
            <Text style={{ textAlign: 'center', fontSize: 19, marginTop: 20, color: '#000000', fontWeight: 'bold' }}>Registro</Text>


            <View style={{ marginLeft: 20, marginRight: 20 }}>

              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 50, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="DNI"
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                onChangeText={(text) => this.setState({ dni:  text  })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Nombre Completo"
                onChangeText={(text) => this.setState({ full_name:  text  })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />
              <View style={styles.SectionStyle}>
               <TextInput
                  style={{ flex: 1 }}
                  placeholder="Dirección"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.setState({ address: text  })}
                />
                <Image source={require('../../assets/add.png')} style={styles.ImageStyle} resizeMode='contain' />
              </View>
              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Email"
                onChangeText={(text) => this.setState({ email:  text  })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Numero Telefonico"
                onChangeText={(text) => this.setState({ phone_number:  text  })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />
            
              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => this.setState({ password:  text  })}
                underlineColorAndroid="transparent"
              />
            </View>
            
            <View style={[{ width: "70%", alignSelf: 'center', marginTop: 45, backgroundColor: "#fff" }]}>

              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Button
                  title="Registrase"
                  titleStyle={{ color: "white" }}
                  onPress={() => this.registerRequest()}
                  type="clear"
                  containerStyle={{
                    backgroundColor: "#1F4B70", width: "50%"
                    , height: 40, 
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginPage')}
            >
              <Text style={{ textAlign: 'center', marginTop: 30 }}> Ya tengo cuenta aqui ?</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>

    )

  };

}

export default RegisterPage;