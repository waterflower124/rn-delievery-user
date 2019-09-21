import React  from 'react';
import {Modal, StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text, Col, Row} from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import CustomDialog from '../dilalog_screen/gift_dialog';
import Dialog from "react-native-dialog";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';

class GiftandparentPage extends React.Component{
  state = {
    dialogVisible: false,
    chkefectivo:false,
    efectivo:0.0,
    direccion_envio:"",
    direccion_recojo:"",
    descripcion:"",
    tipo_pedido_id:"",
    comentario:"",
    precioreferencia:"",
    destinatario:"",
    chkefectivo:false,
    horadeentrega:"",
    bici: false,
    moto: false,
    auto: false,
    ColordeBordeBici: 'white',
    ColordeBordeMoto: 'white',
    ColordeBordeAuto: 'white',
    usuario_id:"",
    enviar:false,
    favoritos:false,
  };
  _onPressButtonBici = () => {
    if(!this.state.bici){
      this.setState({ bici: true, ColordeBordeBici:"blue",moto: false, ColordeBordeMoto:"white", auto: false, ColordeBordeAuto:"white"});

    }else{
      this.setState({ bici: false, ColordeBordeBici:"white" });
    }
  };
  _onPressButtonMoto = () => {
    if(!this.state.moto){
      this.setState({ moto: true, ColordeBordeMoto:"blue",bici: false, ColordeBordeBici:"white",auto: false, ColordeBordeAuto:"white"   });
    }else{
      this.setState({ moto: false, ColordeBordeMoto:"white" });
    }
  };
  _onPressButtonAuto = () => {
    if(!this.state.auto){
      this.setState({ auto: true, ColordeBordeAuto:"blue", bici: false, ColordeBordeBici:"white" ,moto: false, ColordeBordeMoto:"white"});
    }else{
      this.setState({ auto: false, ColordeBordeAuto:"white" });
    }
  };
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
  handleok= () => {
    this.setState({ chkefectivo: !this.state.chkefectivo, dialogVisible: false });
  };
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
   registrar_pedido = async() =>{
    if (this.state.direccion_envio == null || this.state.direccion_envio == '') {
      Toast.show('Ingrese la direcciòn donde entregar el encargo ', Toast.LONG)
    }else if (this.state.direccion_recojo == null || this.state.direccion_recojo == '') {
      Toast.show('Ingrese la direcciòn donde recoger el encargo', Toast.LONG)
    }else{

        if(this.state.auto){
          this.setState({tipo_vehiculo:"1"});
        }else if(this.state.moto){
          this.setState({tipo_vehiculo:"3"});
        }else if(this.state.bici){
          this.setState({tipo_vehiculo:"2"});
        }
        if(this.state.precioreferencia==""){
          this.setState({precioreferencia:"0"})
        }
        this.setState({enviar:true});
    //fetch("http://192.168.0.12:8080/gadeli/pedido_registro.php", {
      fetch("https://aveoperu.com/gadeli11/pedido_registro.php", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        Usuarios_id:global.usuario_id,
        tipo_pedido_id:"4", 
        direccion_recojo:this.state.direccion_recojo,
        direccion_envio:this.state.direccion_envio,
        descripcion:this.state.descripcion,
        //precio_estimado:this.state.precioreferencia,
        destinatario:this.state.destinatario,
        horadeentrega:this.state.horadeentrega,
        favoritos:this.state.favoritos,
      })
      
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.id!="0"){
        // enviar parametros
       this.setState({enviar:false});
        this.props.navigation.navigate('espera',{user_id:global.usuario_id,pedido_id:responseJson.id});
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
  componentDidMount(){
    const { params } = this.props.navigation.state;
    this.setState({enviar:false});
    if(params){
      const descripcion = params.data ? params.data.descripcion : "";
      const precioreferencia = params.data ? params.data.precioreferencia : "";
      const direccion_envio = params.data ? params.data.direccion_envio : "";
      const direccion_recojo = params.data ? params.data.direccion_recojo : "";
      const comentario = params.data ? params.data.comentario : "";
      this.setState({
        descripcion:descripcion,
        precioreferencia:precioreferencia,
        direccion_envio:direccion_envio,
        direccion_recojo:direccion_recojo,
        comentario:comentario,
        favorito_id:params.data.id,
      })
 
    }
  }
    render(){
        return(

            <Container  style={styles.container}>
               <View style={{flexDirection:'row', width:"100%",height:57}}>
                <View style={{flexDirection:"column",width:"20%"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
                <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Da un Regalo</Text>
                </View>
            </View>

            <Content padder>
       
  
      <View style={{marginLeft:20,marginRight:20}}>
            <View style={styles.SectionStyle}>
 
              <TextInput
                  style={{flex:1}}
                  placeholder="Lugar de Compra (Direción, referencias)"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.setState({ direccion_recojo:text})}
              />
          
          </View>
          <View style={styles.SectionStyle}>
          <TextInput
            style={{flex:1}}
            placeholder="Direccion de entrega"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ direccion_envio:text})}
       />
        
        </View>

<View>
<TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Nombre del destinatario"
            //set the value in state.
            onChangeText={(text) => this.setState({ destinatario:text})}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
</View>

<View>
<TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Fecha y Hora de Entrega"
            //set the value in state.
            onChangeText={(text) => this.setState({ horadeentrega:text})}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
</View>

<View>
<TextInput
            style={{height:75,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Que deseas regalar"
            //set the value in state.
            onChangeText={(text) => this.setState({ descripcion:text})}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
</View>

<View style = { styles.MainContainer }>
<Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold',marginLeft:5}}>Seleccione el medio de transporte </Text>
<Row>

<TouchableOpacity
          style={{
            width: '33%',
            alignItems: 'center',
          }}
          onPress={this._onPressButtonBici}>
          <Image
            source={require('../../assets/imgpsh_fullsize_anim.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderColor: this.state.ColordeBordeBici,
              borderWidth: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '33%',
            alignItems: 'center',
            
          }} onPress={this._onPressButtonMoto}>
          <Image
            source={require('../../assets/01.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderColor: this.state.ColordeBordeMoto,
              borderWidth: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '33%',
            alignItems: 'center',
          }}  onPress={this._onPressButtonAuto}>
          <Image
            source={require('../../assets/02.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderColor: this.state.ColordeBordeAuto,
              borderWidth: 2,
            }}
          />
        </TouchableOpacity>

</Row>              
      </View>



<View>
 <Row>
  <Col xs="6">    
  <CheckBox
containerStyle={{margin:10}}
  title='Effective'
  onPress={this.showDialog}
 ></CheckBox>
  </Col>
  <Col xs="6">    
    <CheckBox
      checked={this.state.favoritos}
      containerStyle={{margin:10}}
      title='Agregar a Favoritos'
      onPress={()=>this.setState({favoritos:!this.state.favoritos})}
    >
    </CheckBox>
    </Col>
  </Row>   
</View>

</View>
<View style={[{width:"70%", alignSelf:'center', marginTop:45,  backgroundColor: "#fff" }]}>

<View style={{flexDirection:'row',alignSelf:'center'}}>
<Button
  title="Enviar"
  titleStyle={{color:"white"}}
  disabled={this.state.enviar}
  onPress={() => this.registrar_pedido()}
  type="clear"
  containerStyle={{ backgroundColor:"#1F4B70",width:"50%"
  ,height:40
  }}
/>
<Button
  title="Cancel"
  titleStyle={{color:"white"}}
  onPress={() => this.props.navigation.navigate('HomePage')}
  type="clear"
  containerStyle={{ backgroundColor:"#1F4B70",width:"70%",height:40,marginLeft:10}}
/>

</View>
 
 </View>

      <View>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Con cuanto dinero va a pagar ?</Dialog.Title>

          <View style={{flexDirection:'row',width:"80%"}}>

            <Text style={{alignSelf:'center',marginRight:2}}>S/</Text>
          <Dialog.Input placeholder='0.00'  style={{height:40,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
           onChangeText={(text) => this.setState({precioreferencia:text})}
          />
          </View>
      
          <Dialog.Button label="Cancel" onPress={this.handleCancel}  />
          <Dialog.Button label="Ok"  onPress={this.handleok} />
        </Dialog.Container>
      </View>

</Content>



</Container>

        )

    };

}

export default GiftandparentPage;