import React from 'react';
import { StatusBar, Image,Alert, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput  } from 'react-native';
import styles from './styles';
import { Container, Content, Footer, Text, Col, Row } from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import Dialog from "react-native-dialog";
//import {AsyncStoragext} from 'react-native';
//import { AsyncResource } from 'async_hooks';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import { PEDIDO_REGISTRO } from '../../utility/AppConstant'
import { tsImportEqualsDeclaration } from '@babel/types';

class PicandsendPage extends React.Component {
  state = {
    dialogVisible: false,
    direccion_envio:"",
    direccion_recojo:"",
    descripcion:"",
    tipo_pedido_id:"",
    tipo_vehiculo:null,
    comentario:"",
    destinatario:"",
    bici: false,
    moto: false,
    auto: false,
    ColordeBordeBici: 'white',
    ColordeBordeMoto: 'white',
    ColordeBordeAuto: 'white',
    chkefectivo:false,
    precioreferencia:"",
    precio:"0",
    usuario_id:"",
    favoritos:false,
    favorito_id:"",
    enviar:false,
    tarjeta:false,
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
  handleok= () => {
    this.setState({ chkefectivo: !this.state.chkefectivo, dialogVisible: false, tarjeta:false });
  };
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
  Accept= () => {
    this.setState({ chkefectivo: !this.state.chkefectivo, dialogVisible: false });
  };
  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };

  registrar_pedido = async() =>{
    if (this.state.direccion_envio == null || this.state.direccion_envio == '') {
      Toast.show('Ingrese la direcciòn donde entregar el encargo ', Toast.LONG)
    }else if (this.state.direccion_recojo == null || this.state.direccion_recojo == '') {
      Toast.show('Ingrese la direcciòn donde recoger el encargo', Toast.LONG)
    }else{
      this.setState({ enviar:true })
      await AsyncStorage.getItem("@gadeli:usuario_id").then(val =>{
          this.setState({usuario_id:val});
          if(this.state.auto){
            this.setState({tipo_vehiculo:"1"});
          }else if(this.state.moto){
            this.setState({tipo_vehiculo:"3"});
          }else if(this.state.bici){
            this.setState({tipo_vehiculo:"2"});
          }else{
            this.setState({tipo_vehiculo:"0"});
          }
          if(this.state.precioreferencia==""){
            this.setState({precioreferencia:"0"})
          }
      });
        fetch(PEDIDO_REGISTRO, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          Usuarios_id:this.state.usuario_id,
          tipo_pedido_id:"2", 
          direccion_recojo:this.state.direccion_recojo,
          direccion_envio:this.state.direccion_envio,
          descripcion:this.state.descripcion,
          comentario:this.state.comentario,
          precioreferencia:this.state.precioreferencia,
          tipo_vehiculo_id:this.state.tipo_vehiculo,
          favoritos:this.state.favoritos,
          destinatario:this.state.destinatario,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.id==null || responseJson.id==""  || responseJson.id==""){
          alert(responseJson.mensaje);
        }
        else{
          this.setState({ enviar:false })
          this.props.navigation.navigate('espera',{user_id:this.state.usuario_id,pedido_id:responseJson.id});
        }
      })
    .catch(error => {
        console.error(error);
      });
    }
  };
  componentDidMount(){
    const { params } = this.props.navigation.state;
    this.setState({ enviar:false })
    if(params){
      const descripcion = params.data ? params.data.descripcion : "";
      const precioreferencia = params.data ? params.data.precioreferencia : "";
      const direccion_envio = params.data ? params.data.direccion_envio : "";
      const direccion_recojo = params.data ? params.data.direccion_recojo : "";
      const comentario = params.data ? params.data.comentario : "";
      const destinatario = params.data ? params.data.destinatario : "";
      this.setState({
        descripcion:descripcion,
        precioreferencia:precioreferencia,
        direccion_envio:direccion_envio,
        direccion_recojo:direccion_recojo,
        comentario:comentario,
        favorito_id:params.data.id,
        destinatario:destinatario,
      })
    }
  }


  render() {
    return (

      <Container style={styles.container}>
        <View style={{ flexDirection: 'row', width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
              <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{ width: 50, height: 50, padding: 10, marginTop: 10, marginLeft: 10 }} />
            </TouchableOpacity>
          </View>

          <View style={{ width: "80%", flexDirection: "column", marginTop: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1f4b70' }}> Recojer & Enviar </Text>

          </View>
        </View>
        <Content padder>
          <View>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Lugar de Compra (Direción, referencias)"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.setState({ direccion_recojo:text})}
                  defaultValue={this.state.direccion_recojo}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Direccion de entrega"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.setState({ direccion_envio:text})}
                  defaultValue={this.state.direccion_envio}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Descripción del bien"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.setState({ descripcion:text})}
                  defaultValue={this.state.descripcion}
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
                  style={{ height: 75, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                  // Adding hint in TextInput using Placeholder option.
                  placeholder="Comentarios de la entrega"
                  //set the value in state.
                  // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                   onChangeText={(text) => this.setState({ comentario:text})}
                  // Making the Under line Transparent.
                  underlineColorAndroid="transparent"
                  defaultValue={this.state.comentario}
                />
              </View>
              <Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold',marginLeft:5}}> Selecione medio de transporte </Text>
              <View style={{ flexDirection: 'row' }}>
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
      </View>

             <View>
                <Row>
                  <Col xs="6">
                    <CheckBox
                      containerStyle={{ margin: 10 }}
                      title='Efectivo - Vuelto de ...'
                      onPress={this.showDialog}
                      value={this.state.checked}
                      checked={this.state.chkefectivo}
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

            <View style={[{ width: "70%", alignSelf: 'center', marginTop: 45, backgroundColor: "#fff" }]}>

              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Button
                  title="Enviar"
                  disabled={this.state.enviar}
                  titleStyle={{ color: "white" }}
                  onPress={() => this.registrar_pedido()}
                  type="clear"
                  containerStyle={{
                    backgroundColor: "#1F4B70", width: "50%",height: 40
                  }}
                />
                <Button
                  title="Cancel"
                  titleStyle={{ color: "white" }}
                  onPress={() => this.props.navigation.goBack(null)}
                  type="clear"
                  containerStyle={{ backgroundColor: "#1F4B70", width: "70%", height: 40, marginLeft: 10 }}
                />

              </View>
            </View>
          </View>
          <View>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Con cuanto dinero va a pagar ?</Dialog.Title>
          <View style={{flexDirection:'row',width:"100%"}}>
            <Text style={{alignSelf:'center',marginRight:2}}>S/</Text>
            <Dialog.Input placeholder='0.00'  style={{height:40,width: "100%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
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

export default PicandsendPage;
