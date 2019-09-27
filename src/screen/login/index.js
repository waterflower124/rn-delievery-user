
import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer, Text } from 'native-base';
import { Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import ProgressDialog from '../../utility/progessdialog';

import AsyncStorage from "@react-native-community/async-storage";
import { AccessToken, LoginManager,LoginButton } from 'react-native-fbsdk';
// import firebase from 'react-native-firebase'

// import GetLocation from 'react-native-get-location';
import { SOCIAL_LOGIN_URL, LOGIN_URL } from '../../utility/AppConstant';


export async function facebookLogin() {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      // handle this however suites the flow of your app
      throw new Error('Usuario cancelo la petición'); 
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      // handle this however suites the flow of your app
      throw new Error('Something went wrong obtaining the users access token');
    }

    // // create a new firebase credential with the token
    // const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // // login with credential
    // const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    // console.log("FacebookData",JSON.stringify(firebaseUserCredential.user.toJSON()))
  } catch (e) {
    console.error(e);
  }
}


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading : false,
      lat:'',
      long:'',
      fcm_token:'',
      user_id:""
    };
  }

  componentDidMount(){
//     GetLocation.getCurrentPosition({
//       enableHighAccuracy: true,
//       timeout: 15000,
//   })
//   .then(location => {
//       console.log("Location========================>",location);
//       this.setState({lat:location.latitude,long:location.longitude})
//       firebase.messaging().getToken()
//         .then(fcmToken => {
//           if (fcmToken) {
//             console.log("Fcm_token====>",fcmToken)
//             this.setState({fcm_token:fcmToken.toString()})
//             // user has a device token
//           } else {
//             // user doesn't have a device token yet
//           } 
//         });
      
//   })
//   .catch(error => {
//       const { code, message } = error;
//       console.warn(code, message);
//   })
  }

 
  initUser(token) {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      console.log("facebook=======>",json)
      this.setState({isLoading :true})    
      this.dofacebookLogin(this.state.email,json.name,json.id)
   })
    .catch(() => {
      // reject('ERROR GETTING DATA FROM FACEBOOK')
      this.setState({isLoading :false})    
    })
  }
  dofacebookLogin(email,name,social_id){
    console.log("request_facebook",)
    fetch(SOCIAL_LOGIN_URL+'first_name='+name+'&dni=&address=&email='+email+'&password=&mobile=&varification_code=1230&register_id='+this.state.fcm_token+'&ios_register_id=&social_id='+social_id)
    .then((response) => response.json())
    .then((json) => {
      console.log("facebook=======>",json)
      
      this.setState({isLoading :false})    
             if(json.status == '1'){
               this.props.navigation.navigate('HomePage', { username: "Demo",email: "demo@gmail.com",})

      this.storeSessionToken(json.id)      

     Toast.show("Sucessfully Login",Toast.LONG);
    }
       
    })
    .catch(() => {
      this.setState({isLoading :false})     
    })
  }

  handleEmailChange = email => {
    this.setState({ email });
  };
  
  handlePasswordChange = password => {
    this.setState({ password });
  };



  loginRequest() {
    if (this.state.username == null || this.state.username == '') {
      Toast.show('Ingrese un email valido', Toast.LONG);
    } else if (this.state.Password == '' || this.state.Password == '') {
      Toast.show('Ingrese un password valido', Toast.LONG);
    } else {
      const email = this.state.email;
      const pass = this.state.password;
            fetch(LOGIN_URL, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            email:this.state.username,
            passwords:this.state.Password,
          })
        })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.token!=""){
            //AsyncStorage.setItem('@gadeli', JSON.stringify(responseJson));
            this.setValue(responseJson).then(() =>{
              global.usuario_id=responseJson.id;
              this.props.navigation.navigate('HomePage');
            })
          }
          else{
            alert(responseJson.mensaje);
          }
        })
        .catch(error => {
            console.log(error);
          });


    }
  };
   async setValue(data)  {
    try {
      await AsyncStorage.setItem('@gadeli:token', data.token);
      await AsyncStorage.setItem('@gadeli:usuario_id',data.id);
      await AsyncStorage.setItem('@gadeli:nombres',data.nombres);
      await AsyncStorage.setItem('@gadeli:email',data.email);
     
    } catch(e) {
      // save error
      alert(e);
    }
  
    console.log('Done.')
  }


  render() {
    const { loginData } = this.state
    return (

      <Container style={styles.container}>


        <Content padder>
          <Image source={require("../../assets/screen_logo.png")} style={{ width: 200, height: 160, alignSelf: 'center', marginTop: 20 }} resizeMode='contain'></Image>


          <View>


            <Text style={{ textAlign: 'center', fontSize: 19, marginTop: 20, color: '#000000', fontWeight: 'bold' }}>Datos de Ingreso</Text>


            <View style={{ marginLeft: 20, marginRight: 20 }}>

              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 50, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Email/Numero Telefónico"
                placeholderTextColor='#888888'
                onChangeText={(text) => this.setState({ username:text})}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />
        <ProgressDialog visible={this.state.isLoading} />
              <TextInput
                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Password"
                placeholderTextColor='#888888'
                secureTextEntry={true}

                onChangeText={(text) => this.setState({ Password:text})}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

            </View>
            <View style={[{ width: "70%", alignSelf: 'center', marginTop: 30 }]}>
              <Button
                onPress={() => this.loginRequest()}
                title="Login"
                titleStyle={{ color: "white" }}
                type="clear"
                containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgotPasswordPage')}
            >
               <Text style={{ textAlign: 'center', marginTop: 30 }}> Olvide mi contraseña </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 15 }}>
              <Image source={require("../../assets/line.png")} style={{ width: "45%", height: "1.5%", alignSelf: 'center' }}></Image>
              <Image source={require("../../assets/line.png")} style={{ width: "45%", height: "1.5%", alignSelf: 'center' }}></Image>

            </View>

            {/* <Text style={{textAlign:'center',marginLeft:30,marginRight:30,marginTop:30}}>--------------------------------OR--------------------------------</Text> */}
          
            <View style={[{width:"70%", alignSelf:'center', marginTop:30 }]}>
            <Button
            onPress={() => this.props.navigation.navigate('Policy')}
              title="Registrarse"
              titleStyle={{color:"white"}}
              type="clear"
              containerStyle={{backgroundColor:"#1f4b70",borderRadius:5}}
            />
            </View>



            <View>



            </View>


          </View>
        </Content>

        <Footer style={{ backgroundColor: "#fff" }}>
          <Text style={{ textAlign: 'center', marginTop: 30 }}>Version :1.0.0</Text>


        </Footer>

      </Container>

    )

  };

}

export default LoginPage;