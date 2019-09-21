



import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text} from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class ProfilePage extends React.Component{
state={
  nombrecompleto:"",
  telefono:"",
  email:"",
  Paswword:"",
  usuario_id:"",
  token:""
}

ActualiarDatos(){
/*
  fetch("https://aveoperu.com/gadeli11/user_actualizar.php", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      usuario_id:global.usuario_id,
      Paswword:this.state.Paswword,
      nombre:this.state.nombre

    })
    })
  .then((response) => response.json())
  .then((responseJson) => {
    if(responseJson!=""){
      this.setState({ 
        nombrecompleto:responseJson.nombres,
        email:responseJson.email,
        telefono:responseJson.telefono,
      });
    }
    else{
      alert(responseJson.mensaje);
    }
  })
  .catch(error => {
      console.error(error);
    });
    */
}

async ObtenerUsuario_id() {
  try {
    const usuario_id = await AsyncStorage.getItem('@gadeli:usuario_id');
      return usuario_id;
    }
   catch (error) {
     console.log("Error al buscar usuario_id");
   }
};
 
async Cargar_datos(){
  this.ObtenerUsuario_id()
    .then(user_id =>{
      this.setState({usuario_id:user_id});
      fetch("https://aveoperu.com/gadeli11/user_detalle.php", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id:user_id
        })
      })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson!=""){
        this.setState({ 
          nombrecompleto:responseJson.nombres,
          email:responseJson.email,
          telefono:responseJson.telefono,
        });
      }
      else{
        alert(responseJson.mensaje);
      }
    })
    .catch(error => {
        console.error(error);
      });
  }
  )
}
  
componentDidMount() {
  this.Cargar_datos();

}
    render(){
        return(

            <Container  style={styles.container}>
                <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
 <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Datos Personales </Text>

 </View>
 </View>
<Content padder>



<View style={{marginLeft:20,marginRight:20,marginTop:30}}> 

  <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:30,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            placeholder="Nombre Completo"
            value={this.state.nombrecompleto}
            onChangeText={(text) => this.setState({ username:text})}
            underlineColorAndroid="transparent"
          />
            <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            placeholder="Teléfono"
            value={this.state.telefono}
            onChangeText={(text) => this.setState({ telefono:text})}
            underlineColorAndroid="transparent"
          />


<TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            placeholder="Email"
            editable = {false}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email:text})}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            placeholder="Cambiar Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ Paswword:text})}

            underlineColorAndroid="transparent"
          />
          </View>
</Content>

<Footer style={{backgroundColor:'white'}}>
<View style={[{width:"70%", alignSelf:'center', marginTop:30 ,marginBottom:10}]}>

<Button
  onPress={() => this.ActualiarDatos()}
  title="Actualizar Información"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,marginBottom:10}}
/>
</View>
</Footer>

</Container>

        )

    };

}

export default ProfilePage;