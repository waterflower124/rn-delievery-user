import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View,FlatList, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {configure, removeAllListeners} from '../../utility/Geolocation'


console.disableYellowBox = true;
class MyOrder extends React.Component{
  //constructor(props) {
    //super(props); 
    state = {
      dataSource: [],
      usuario_id: "" ,
      tipopedido:["","Comprar & Enviar","Recojer & Enviar","","Regalo"]
    };
  //}
  async ObtenerUsuario_id(init = false) {
    try {
      const usuario_id = await AsyncStorage.getItem('@gadeli:usuario_id');
      console.log('usuario_id', usuario_id)
      if (init) {
        configure({ userId: 'test_user' });
      }  
      return usuario_id;
      }
     catch (error) {
       console.log("Error al buscar usuario_id");
     }
  };
  
   Cargar_datos= async (avance, init = false) =>{
     
    this.ObtenerUsuario_id(init)
    .then(user_id =>{
      this.setState({usuario_id:user_id});
     
        fetch("https://aveoperu.com/gadeli11/pedido_usuario.php", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Usuario_id:user_id,
            avance:avance
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
          console.log(error);
        });
      }
      )
    }
  verdetalle(id){
    this.props.navigation.navigate('MapScreen',{user_id:global.usuario_id,pedido_id:id});
  }
  
  renderItem = data => (
    <Content padder>
    <Card>
          <CardItem header bordered>
              <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row'}}>
              <Image source={{uri:"https://www.aveoperu.com/gadeli11/imagenes/usuarios/logo.jpg"}} style={{width:40,height:40}} resizeMode='contain'></Image>
              <Text style={{fontSize:12,marginLeft:10}}> {"\n"}<Text style={{fontSize:12}}>{this.state.tipopedido[data.item.tipo_pedido_id]}</Text></Text>
              </View>
              <Text style={{fontSize:12,alignSelf:'flex-end'}}>  {"\n"}<Text style={{fontSize:12,alignSelf:'flex-end'}}>Precio :S/. {data.item.preciototal}</Text></Text>
              </View>
          </CardItem>
          <TouchableOpacity onPress={() => this.verdetalle(data.item.id)}>
          <CardItem bordered>
            <Body>
            <Text style={{fontSize:15,fontWeight:'normal'}}>
               Nombre del Repartidor : {data.item.repartidor.nombre}
              </Text>
              <Text style={{fontSize:15,fontWeight:'normal'}}>
               Descripcion : {data.item.descripcion}
              </Text>
              <Text style={{fontSize:15,fontWeight:'normal'}}>
                Precio : S/. {data.item.preciototal}
              </Text>
              <Text style={{fontSize:15,fontWeight:'normal'}}>
                {data.item.descripcion}
              </Text>
            </Body>
          </CardItem>
          </TouchableOpacity>
    </Card>
  </Content>
  );
  componentDidMount() {
   // const { entri } = this.props.navigation.state.params; 
   // this.state.setState({entri:entri})
   // if(this.state.entri){
      this.Cargar_datos(1, true)
   // }
  }

  componentWillUnmount() {
    removeAllListeners();
  }
    render(){
      //if (this.state.refreshing) {
        return(

            <Container>
              
            <View style={{flexDirection:'row', width:"100%",height:57}}>
                    <View style={{flexDirection:"column",width:"20%"}}>
                    <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
              <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
              </TouchableOpacity>
              </View>

        <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
        <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Mis Ordenes </Text>

        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                  <TouchableOpacity style={{width:"45%", borderColor:"grey",borderRadius:10, padding:10,borderWidth:1, margin:10}}
                    onPress={()=>this.Cargar_datos(1)}
                  >
                    <Text style={{ alignContent:"center",textAlign:"center",width:"100%"}}>Pendientes</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{width:"45%",borderColor:"grey",borderRadius:10, padding:10,borderWidth:1, margin:10}}
                   onPress={()=>this.Cargar_datos(0)}
                  >
                      <Text style={{ alignContent:"center",textAlign:"center",width:"100%"}}>Completos</Text>
                  </TouchableOpacity>
        </View>
        <FlatList
                data={this.state.dataSource}
                //ItemSeparatorComponent={this.ListViewItemSeparator}
                enableEmptySections={true}
                renderItem={item => this.renderItem(item)}
                keyExtractor={item => item.id.toString()}
                //refreshControl={
                //  <RefreshControl
                //    refreshing={this.state.refreshing}
                //    onRefresh={this.onRefresh.bind(this)}
                  />
       
  </Container>
        )
      //} // fin de if
    }

}

export default MyOrder;