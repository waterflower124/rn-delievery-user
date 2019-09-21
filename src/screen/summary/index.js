
import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { Container, Content, Footer, Text } from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';

class SummaryPage extends React.Component {
    state = {
        preciototal:"",
        repartidor_nombre: "",
        pedido_id:"",
        preciototal:"",
        precioespera:"",
        precioenvio:"",
        reembolso:"",

      };
      componentDidMount(){
        const { pedido_id } = this.props.navigation.state.params;
        //if(pedido_id){
            //alert("pedido "+pedido_id)
            this.setState({pedido_id:pedido_id})
            fetch("https://aveoperu.com/gadeli11/pedido_detalle.php", {
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
                    preciototal:responseJson.preciototal,
                    precioespera:responseJson.precioespera,
                    precioenvio:responseJson.precioenvio,
                    reembolso:responseJson.reembolso,
                    repartidor_nombre:responseJson.repartidor.nombre
                  });
              }
              else{
                alert(responseJson.mensaje);
              }
            })
            .catch(error => {
                console.error(error);
              });
       // }
      }
    render() {
        return (
            <Container>

                <View style={{ flexDirection: 'row', width: "100%", height: 57 }}>
                    <View style={{ width: "100%", flexDirection: "column",alignItems:"center", marginTop: 20 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1f4b70' }}> Resumen de Pedido</Text>
                    </View>
                </View>
                <Content padder>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ textDecorationLine: 'underline', textDecorationColor: 'grey', fontSize: 15 }}>Messenger : {this.state.repartidor_nombre}</Text>
                    </View>
                    <View style={{ marginTop: 20, borderColor: '#1f4b70', borderWidth: 1, width: "100%", height: 35, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, padding: 5 }}>Total a reembolsar</Text>
                        <Text style={{ fontSize: 15, padding: 5 }}>S/ {this.state.reembolso}</Text>
                    </View>
                    <View style={{ borderColor: '#1f4b70', borderWidth: 1, width: "100%", height: 35, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, padding: 5 }}>Costo del Servicio</Text>
                        <Text style={{ fontSize: 15, padding: 5 }}>S/ {this.state.precioenvio}</Text>
                    </View>
                    <View style={{ borderColor: '#1f4b70', borderWidth: 1, width: "100%", height: 35, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, padding: 5 }}>Adicional por espera: </Text>
                        <Text style={{ fontSize: 15, padding: 5 }}>S/ {this.state.precioespera}</Text>
                    </View>
                    <View style={{ width: "100%", height: 35, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, paddingLeft: 5 }}></Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5 }}>Total del Servicio : </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5 }}>S/  {this.state.preciototal}</Text>
                    </View>
                   
                    <View style={[{ width: "100%", alignSelf: 'center' }]}>
                        <Button
                            onPress={() => this.props.navigation.navigate('FeedBackScreen',{pedido_id:this.state.pedido_id})}
                            title="Terminar Delivery"
                            titleStyle={{ color: "white", fontWeight: 'normal', fontSize: 18 }}
                            type="clear"
                            containerStyle={{ backgroundColor: "#1f4b70" }}
                        />
                    </View>
                </Content>
            </Container>

        )
    }
}
export default SummaryPage;