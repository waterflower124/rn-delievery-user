import React  from 'react';
import { StatusBar, Image,Alert, TouchableOpacity, View,FlatList, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body, Right} from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { FAVORITO_USUARIO, FAVORITO_ELIMINAR } from '../../utility/AppConstant';
	
const imagen_tipo = ["",require("../../assets/gift.png"),require("../../assets/pickup.png"),"",require("../../assets/shop.png")]
class Favouirte extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      dataSource: [],
      refreshing: true ,
      usuario_id: "" ,
      tipopedido:["","Comprar & Enviar","Recojer & Enviar","","Regalo & Presentes"]
    };
  }
  async ObtenerUsuario_id() {
    try {
      const usuario_id = await AsyncStorage.getItem('@gadeli:usuario_id');
        //alert(usuario_id);
        return usuario_id;
      }
     catch (error) {
       console.log("Error al buscar usuario_id");
     }
  };
  
   Cargar_datos= async () =>{
    this.ObtenerUsuario_id()
      .then(user_id =>{
        this.setState({usuario_id:user_id});
        fetch(FAVORITO_USUARIO, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Usuario_id:user_id
          })
        })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson!=""){
          //alert(user_id);
          this.setState({ 
            dataSource:responseJson,
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
  Pedido (tipopedido,data){
    if(tipopedido==1){
      this.props.navigation.navigate('BuyandsendPage',{data:data})
    }else if(tipopedido==2){
      this.props.navigation.navigate('PicandsendPage',{data:data})
    }else{
      this.props.navigation.navigate('GiftandparentPage',{data:data})
    }
  }
  eliminar(id){
    // eliminar
        fetch(FAVORITO_ELIMINAR, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            favorito_id:id
          })
        })
      .then((response) => response.json())
      .then((responseJson) => {
        this.Cargar_datos();
      })
      .catch(error => {
          console.error(error);
        })

    // 
   
  }
  confirmar_eliminar(id){
    Alert.alert(
      'Favoritos',
      'Desea Eliminar este registro',
      [
        {text: 'Aceptar', onPress: () => this.eliminar(id)},
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
  renderItem = data => (
     <Content padder>
    <Card>
          <CardItem header bordered>
              <View style={{flexDirection:'row'}}>
              <Image source={imagen_tipo[data.item.tipo_pedido_id]} resizeMode='contain'  style={{width:20,height:20,alignSelf:'center'}}></Image>
                   <Text style={{fontSize:14, paddingLeft:10}}>{this.state.tipopedido[data.item.tipo_pedido_id]}</Text>
              </View>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={{fontSize:15,fontWeight:'normal'}}>
                Dirección de Envio : {data.item.direccion_envio}
              </Text>
              <Text style={{fontSize:15,fontWeight:'normal'}}>
                Precio : S/. {data.item.precio_estimado}
              </Text>
              <Text style={{fontSize:15,fontWeight:'normal'}}>
                {data.item.descripcion}
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <View style={{justifyContent: 'flex-end',width:"100%",flexDirection:'row'}}>
            <TouchableOpacity  onPress={() => this.Pedido(data.item.tipo_pedido_id,data.item)}>
              <Image source={require("../../assets/select.png")} resizeMode='contain'  style={{width:30,height:30,alignSelf:'center'}}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.confirmar_eliminar(data.item.id)} style={{paddingLeft:20}} >
              <Image source={require("../../assets/cancel.png")} resizeMode='contain'  style={{width:30,height:30,alignSelf:'center'}}></Image>
              </TouchableOpacity>
             </View>
           </CardItem>
    </Card>
  </Content>

  );
  componentDidMount() {
    this.Cargar_datos();
  }
    render(){
        return(
          <Container>
            <View style={{flexDirection:'row', width:"100%",height:57}}>
              <View style={{flexDirection:"column",width:"20%"}}>
              <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
              <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
              </TouchableOpacity>
              </View>
              <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
                <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}>Favoritos</Text>
              </View>
            </View>
              <FlatList
                  data={this.state.dataSource}
                  enableEmptySections={true}
                  renderItem={item => this.renderItem(item)}
                  keyExtractor={item => item.id.toString()}
              />
          </Container>
        )
    }

}

export default Favouirte;