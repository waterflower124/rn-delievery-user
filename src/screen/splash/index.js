import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';
import {checkPermission, requestPermission} from 'react-native-android-permissions';
import AsyncStorage from '@react-native-community/async-storage';



class SplashScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id :'',
      nombres  :"",
      email  :"",
      token:""
    }
  }
  async retrieveSessionToken() {
    try {
      const token = await AsyncStorage.getItem('@gadeli:token');
      const usuario_id = await AsyncStorage.getItem('@gadeli:usuario_id');
      const nombres = await AsyncStorage.getItem('@gadeli:nombres');
      const email = await AsyncStorage.getItem('@gadeli:email');
      if (token != null || token!="") {
        this.setState({user_id:usuario_id,nombres:nombres,email:email,token:token});
       
        //this.setState({user_id:token})
        return token;
      }
     } catch (error) {
       console.log("Error while storing the token");
     }
  }
  
    // async requestPermmmison(){
    //   await request_location_runtime_permission()
    // } 
        componentDidMount() {
            this.retrieveSessionToken().then(val =>{
                if(val== null || val =='' || val == undefined){
                  //global.usuario_id=this.state.user_id
                  this.props.navigation.navigate('LoginPage')
                  console.log("sesion error",this.props);
                }else{
                  this.props.navigation.navigate('HomePage');
                  }
               });
//           checkPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
//             console.log("Already Granted!");
//             this.retrieveSessionToken().then(val =>{
//               if(val== null || val =='' || val == undefined){
//                 //global.usuario_id=this.state.user_id;
//                 this.props.navigation.navigate('LoginPage')
//                 console.log("sesion error",this.props);
//               }else{
//                 this.props.navigation.navigate('HomePage');
//                 }
//              });

//   }, (result) => {
//             console.log("permis","Not Granted!");
//             console.log("permis",result);
          
//             setTimeout(() => {
//               //,"android.permission.ACCESS_FINE_LOCATION",
//            //   "android.permission.WRITE_EXTERNAL_STORAGE","android.permission.READ_EXTERNAL_STORAGE","android.permission.CAMERA","android.permission.CALL_PHONE"
//               requestPermission("android.permission.ACCESS_COARSE_LOCATION").then((result) => {
//                 console.log("Granted!", result);
//                 // now you can set the listenner to watch the user geo location
  
//                 requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
//                   console.log("Granted!", result);
//                   // now you can set the listenner to watch the user geo location
//                   requestPermission("android.permission.WRITE_EXTERNAL_STORAGE").then((result) => {
//                     console.log("Granted!", result);
//                     // now you can set the listenner to watch the user geo location
//                     requestPermission("android.permission.READ_EXTERNAL_STORAGE").then((result) => {
//                       console.log("Granted!", result);
//                       // now you can set the listenner to watch the user geo location
//                       requestPermission("android.permission.CAMERA").then((result) => {
//                         console.log("Granted!", result);
//                         // now you can set the listenner to watch the user geo location
//                         requestPermission("android.permission.CALL_PHONE").then((result) => {
//                           console.log("Granted!", result);
//                           this.retrieveSessionToken().then(val =>{
//                             if(val== null || val =='' || val == undefined){
//                               //global.usuario_id=this.state.user_id
//                               this.props.navigation.navigate('LoginPage')
//                               console.log("sesion error",this.props);
//                             }else{
//                               this.props.navigation.navigate('HomePage');
//                               }
//                            });
//                         }, (result) => {
//                           console.log("Not Granted!");
//                           console.log(result);
//                         });
//                       }, (result) => {
//                         console.log("Not Granted!");
//                         console.log(result);
//                       });
//                     }, (result) => {
//                       console.log("Not Granted!");
//                       console.log(result);
//                     });
//                   }, (result) => {
//                     console.log("Not Granted!");
//                     console.log(result);
//                   });
//                 }, (result) => {
//                   console.log("Not Granted!");
//                   console.log(result);
//                 });
                
//               }, (result) => {
//                 console.log("Not Granted!");
//                 console.log(result);
//               });
//             }, 0);
//           });
        }
  render(){
     return(
<Container >
    <View>
    <ImageBackground  source={require("../../assets/bg.png")} style={{  width: '100%',
        height: '100%',
    }} resizeMode="stretch">
    <View style={{width: '100%',backgroundColor:"#000",opacity:0.5,
          height: '100%',justifyContent:'center'}}>
              <Image source={require("../../assets/logo.png")} style={{width:150,height:150,resizeMode:'contain',alignSelf:'center'}}></Image>
    </View>
    <View style={{width: '100%',backgroundColor:"#000",opacity:0.5,
          height: '100%',justifyContent:'center'}}>
    </View>
        </ImageBackground>
    </View>
</Container>
     );

    }

}


export default SplashScreen;