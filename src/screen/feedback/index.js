import React  from 'react';
import { Container, View, Text, Content } from 'native-base';
import { Image, Rating, AirbnbRating, Button } from 'react-native-elements';
import {TouchableOpacity,TextInput} from 'react-native'
import styles from './styles';
import { PEDIDO_DETALLE, REVIEW_REGISTRO } from '../../utility/AppConstant';
const img_vehiculo =["",require("../../assets/02.png"), require("../../assets/01.png"), require("../../assets/03.png")];

class FeedBackScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      precio:"",
      fecha:"",
      imagen:img_vehiculo[1],
      // datos de review
      Conductor_id:"",
      Usuarios_id:"",
      comentario:"",
      puntuacion:"4",
      Pedido_id:"",

      
    }
  }
  cargar_datos(){
     const { pedido_id } = this.props.navigation.state.params;
     fetch(PEDIDO_DETALLE, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({
      pedido_id:pedido_id,

    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //alert(pedido_id);
      if( responseJson.id!=null || responseJson.id!=""){
          this.setState({
            precio:responseJson.preciototal,
            fecha:responseJson.Inicio,
            vehiculo_imagen:img_vehiculo[responseJson.vehiculo.tipo_id],
            //
            Conductor_id:responseJson.repartidor.id,
            Usuarios_id:responseJson.usuario.id,
            Pedido_id:responseJson.id,
          });
      }
      //else{
      //  alert(responseJson.mensaje);
      //}
    })
    .catch(error => {
        console.error(error);
      });
    
  }
  Guardar_comentario(){
    
    //this.setState({puntuacion:global.rainking})
    /*alert(
        this.state.Conductor_id + "," +
        this.state.Usuarios_id +"," +
        this.state.comentario + "," +
        this.state.puntuacion +"," +
        this.state.Pedido_id 
      )
    */
    fetch(REVIEW_REGISTRO, {
     method: "POST",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
   body: JSON.stringify({
      Conductor_id:this.state.Conductor_id, 
      Usuarios_id:this.state.Usuarios_id, 
      comentario:this.state.comentario,     
      puntuacion:global.rainking, //this.state.puntuacion,
      Pedido_id:this.state.Pedido_id, 
   })
   })
   .then((response) => response.json())
   .then((responseJson) => {
      this.props.navigation.navigate('HomePage')
   })
   .catch(error => {
       console.error(error);
     });
   
 }
  componentDidMount(){
    global.rainking = 4
    const { params } = this.props.navigation.state;
    if(params){
      this.cargar_datos();
    }
  }
  ratingCompleted(rating) {
    global.rainking=rating
  }

  render(){
       return(

     <Container >
        <View style={{flexDirection:'row', width:"100%",height:57}}>
     <View style={{flexDirection:"column",width:"20%"}}>
    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
    <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
    </TouchableOpacity>
    </View>

    <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
    <Text style={{fontSize:18,fontWeight:'bold',color:'#1f4b70'}}> Tu Opinion es Importante </Text>
    </View>

    </View>

    <Content padder>
        
    <View style={{alignSelf:'center',padding:10}}>
        <Text style={{fontSize:19,fontWeight:'normal',alignSelf:'center'}}>Gracias por su preferencia</Text>

      </View>
      <View style={{alignSelf:'center',padding:10}}>
        <Text style={{fontSize:14,fontWeight:'normal',alignSelf:'center'}}>{this.state.fecha}</Text>

      </View>
      <View style={{alignSelf:'center',padding:10}}>
        <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>Costo S/. {this.state.precio}</Text>

      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:20}}>
      <Image source={require("../../assets/line.png")} style={{width:"45%",height:"5%",alignSelf:'flex-start'}}></Image>
      <Image source={this.state.imagen} style={{width:50,height:50,alignSelf:'center'}}></Image>
      <Image source={require("../../assets/line.png")} style={{width:"45%",height:"5%",alignSelf:'flex-end'}}></Image>

    </View>

    <View style={{alignSelf:'center',padding:10}}>
        <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>Como estuvo tu Delivery ?</Text>
    </View>
    <View style={{alignSelf:'center',padding:10}}>
    <Rating
      type='star'
      ratingCount={5}
      startingValue={this.state.puntuacion}
      imageSize={30}
      onFinishRating={this.ratingCompleted}
      style={{ paddingVertical: 0 }}
    />

    </View>

    <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({ comentario:text})}
          placeholder="Comentario"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>

      <View style={[{flexDirection:"row", width:"100%", alignSelf:'center', marginTop:30 }]}>
      <Button
        onPress={() => this.Guardar_comentario()}
        title="Calificar"
        titleStyle={{color:"white"}}
        type="clear"
        containerStyle={{backgroundColor:"#1f4b70",borderRadius:5, marginRight:5, width:"49%"}}
      />
        <Button
        onPress={() => this.props.navigation.navigate('HomePage')}
        title="No Calificar"
        titleStyle={{color:"white"}}
        type="clear"
        containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,  marginLeft:5, width:"49%"}}
      />
    </View>
    </Content>
    </Container>
       )
    };

}

export default FeedBackScreen;