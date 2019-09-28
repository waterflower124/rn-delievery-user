import React from 'react';
import { Container, View, Text, Content, Footer } from 'native-base';
import { Image, Rating, Button } from 'react-native-elements';
import { TouchableOpacity,Alert, StyleSheet,ActivityIndicator,Clipboard } from 'react-native'
import MapView, { Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import call from "react-native-phone-call";
import Dialog from "react-native-dialog";
import { getDriverLocation } from '../../utility/firebase';

const img_vehiculo =["",require("../../assets/02.png"), require("../../assets/01.png"), require("../../assets/03.png")];

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible:false,
      latitude: 37.78825,
      longitude: -122.4324,
      repartidor_nombre:"",
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324
      }),
      user_id:"",
      avance:0,
      pedido:"",
      TextoAvance: ["Buscando Repartidor", "En Camino", "Comprando/Recogiendo","En camino", "Terminado","Pedido aceptado"],
      textotipovehiculo:["","02.png","01.png","03.png"],
      repartidor_nombre:"",
      repartidor_telefono:"",
      puntuacion:"0",
      vehiculo:"-",
      pedido_activo:true,
      vehiculo_tipo:"0",
      vehiculo_placa:"",
      vehiculo_imagen:img_vehiculo[1],
      repartidor_image:"https://www.aveoperu.com/gadeli11/imagenes/usuarios/logo.jpg",
      cargar_imagen:true,
      marker: {
        latitude: -18.0095704,
        longitude: -70.2475725
      },
      markers: [],
      initialRegion: {
        latitude: -18.0095704,
        longitude: -70.2475725,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      region: {
        latitude: -18.0095704,
        longitude: -70.2475725,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    };
  }
  metodosdepago = () => {
    this.setState({
      dialogVisible: true,
    })
  }
  cerrar = () => {
    this.setState({
      dialogVisible: false,
    })
  }
  cargar_avance = () => {
    if(this.state.pedido_activo){
    const { pedido_id } = this.props.navigation.state.params;
    this.setState({pedido_id:pedido_id})
     //const pedido_id = this.props.navigation.getParam('pedido_id', '');
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
      if(responseJson.repartidor.puntuacion == null){
        this.setState({puntuacion:"0"})
      }else{
        
        this.setState({puntuacion:responseJson.repartidor.puntuacion})
      }
      if(responseJson.repartidor.placa == null){
        this.setState({placa:"-"})
      }else{
        this.setState({placa:responseJson.vehiculo.placa})
      }
      if(responseJson.repartidor.tipo_id == null){
        this.setState({tipovehiculo:"1"})
      }else{
        this.setState({tipovehiculo:responseJson.vehiculo.tipo_id})
      }
        this.setState({
          avance:responseJson.avance,
          repartidor_nombre:responseJson.repartidor.nombre,
          repartidor_telefono:responseJson.repartidor.telefono,
          vehiculo_tipo:responseJson.vehiculo.tipo_id,
          vehiculo_placa:responseJson.vehiculo.placa,
          vehiculo_imagen:img_vehiculo[responseJson.vehiculo.tipo_id],
        });
        if(this.state.cargar_imagen){
          this.setState({repartidor_image:responseJson.repartidor.imagen,cargar_imagen:false})
        }
        
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
  componentDidMount() {
    this.intervalId = setInterval(() => this.cargar_avance(), 5000);
    this.cargar_avance();
    getDriverLocation('test_driver', (obj) => this.onLocation(obj));
}
getInitialState = () => {
  return {
    region: {
      latitude: -18.0095704,
      longitude: -70.2475725,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };
}

onLocation = (obj) => {
  const {markers} = this.state;
  console.warn('onLocation', JSON.stringify(obj.location));
  // alert(JSON.stringify(obj));
  const region = {
    latitude: obj.location.latitude,
    longitude: obj.location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  const marker = {
    latitude: obj.location.latitude,
    longitude: obj.location.longitude,
  };
  const nMarkers = [
    ...markers,
    marker,
  ];
  // markers.push(marker);
  this.setState({ region, marker, markers: nMarkers });
};

onRegionChange = (region) => {
  this.setState({ region });
  // navigator.geolocation.getCurrentPosition(
  //   position => {
  //     const initialPosition = JSON.stringify(position);
  //     this.setState({ initialPosition });
  //   },
  //   error => alert(error.message),
  //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  // );
  // this.watchID = navigator.geolocation.watchPosition(position => {
  //   const lastPosition = JSON.stringify(position);
  //   this.setState({ lastPosition });
  // });
}
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: 37.78825,
    longitudeDelta: -122.4324
  });

  siguiente = () => {
    Alert.alert(
      'Gadeli Delivery',
      'Concluir con el Pedido',
      [
        {text: 'Aceptar', onPress: () =>  
          {
            this.setState({pedido_activo:false});
            //alert("pedido_id:"+this.state.pedido_id);
            this.props.navigation.navigate('SummaryPage',{pedido_id:this.state.pedido_id});
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
  // onRegionChange = (region) => {
  //   this.setState({ region });
  // }
  PhoneCall = () => {
    //handler to make a call
    let phone = this.state.repartidor_telefono;
    if (phone == "" || phone == null ) {
      alert("No tiene numero telefono");
    } else {
      const args = {
        number: phone,
        prompt: false
      };
      call(args).catch((error) => {
        console.log(error);
      });
    }
  };
  render() {
    
    return (
      <Container>
         <MapView
            style={styles.map}
            followsUserLocation
            zoomControlEnabled
            showsTraffic
            loadingEnabled
            initialRegion={this.state.initialRegion}
            showsUserLocation={false}
            followUserLocation={false}
            zoomEnabled={true}
            //customMapStyle={mapStyle}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          >
            <Polyline
              // coordinates={[
              //   { latitude: 37.8025259, longitude: -122.4351431 },
              //   { latitude: 37.7896386, longitude: -122.421646 },
              //   { latitude: 37.7665248, longitude: -122.4161628 },
              //   { latitude: 37.7734153, longitude: -122.4577787 },
              //   { latitude: 37.7948605, longitude: -122.4596065 },
              //   { latitude: 37.8025259, longitude: -122.4351431 }
              // ]}
              coordinates={this.state.markers}
              strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={["#F00"]}
              strokeWidth={6}
            />
          <Marker
            // draggable
            coordinate={this.state.marker}
            // onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Test Marker"}
            description={"This is a description of the marker"}
          />
        </MapView>
        <View style={{ flexDirection: 'row', width: "100%", backgroundColor:"white", height: 60 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
              <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{ width: 50, height: 50, padding: 10, marginTop: 10, marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", flexDirection: "column", marginTop: 20,flexDirection: 'row' }}>
            <Text style={{  width: "80%",fontSize: 22, fontWeight: 'bold', color: '#1f4b70' }}> {this.state.TextoAvance[this.state.avance]} </Text>
            <TouchableOpacity onPress={() => this.PhoneCall()}>
            <Image source={require("../../assets/fono.png")} style={{ width: 30, height: 30 }} resizeMode='contain'></Image>
            </TouchableOpacity>
          </View>
        </View>
        <Content padder>
       </Content>
        <Footer style={{ backgroundColor: 'white', height: 180 }}>
          <View style={{ width: "100%", height: 157 }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
              <Text style={{ alignSelf: 'center', fontSize: 10 }}>Progreso</Text>
            </View>
           <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
             <Rating
                  type='custom'
                  ratingImage={require("../../assets/circle.png")}
                  readonly
                  startingValue={parseFloat(this.state.avance)}
                  ratingCount={5}
                  imageSize={15}
                  fractions={2}
                  style={{ paddingVertical: 0 }}
                  ratingBackgroundColor={'white'}
                />
           </View>
           <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text style={{ alignSelf: 'center', fontSize: 10 }}>{this.state.TextoAvance[this.state.avance]}</Text>
           </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{uri:this.state.repartidor_image}} style={{ width: 40, height: 40 }} resizeMode='contain'></Image>
                
                <View style={{ flexDirection: 'column', padding: 0, margin: 0 }}>
                  <Text style={{ fontSize: 12, marginLeft: 10, color: "black" }}>{ this.state.repartidor_nombre}</Text>
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Rating
                      type='star'
                      readonly
                      startingValue={parseFloat(this.state.puntuacion)}
                      ratingCount={5}
                      imageSize={20}
                      fractions={2}
                      style={{ paddingVertical: 0 }}
                      ratingBackgroundColor={'white'}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Image source={this.state.vehiculo_imagen} style={{ width: 40, height: 40 }} />
                    <Text style={{ fontSize: 12, marginLeft: 10, color: "#54748f" }}>{this.state.vehiculo_placa}</Text>
                  </View>
                </View>

                <View>

                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12, color: 'grey' }}>Tel:{this.state.repartidor_telefono}</Text>
                <View style={{flexDirection:'row'}}>
                <Button
                onPress={() => this.metodosdepago()}
                title="Metodos de Pago"
                titleStyle={{ color: "white", fontWeight: 'normal', fontSize: 12 }}
                type="clear"
                containerStyle={{ backgroundColor: "#1f4b70" }}
              />
                </View>
              </View>
            </View>
            <View style={[{ width: "100%", alignSelf: 'center' }]}>

              <Button
                onPress={() => this.siguiente()}
                title="Continuar"
                titleStyle={{ color: "white", fontWeight: 'normal', fontSize: 18 }}
                type="clear"
                containerStyle={{ backgroundColor: "#1f4b70" }}
              />

            </View>
          </View>
          <View>
              <Dialog.Container visible={this.state.dialogVisible}>
                <Dialog.Title>Metodos de Pago</Dialog.Title>
                <View style={{width:"100%"}}>
                  <Dialog.Button label="Yappe a 952293578"  onPress={() => Clipboard.setString('952293578')} />
                  <Dialog.Button label="Banco de la Nación 4152432106"  onPress={() => Clipboard.setString('4152432106')} />
                  <Dialog.Button label="BCP 54037307510077"  onPress={() => Clipboard.setString('54037307510077')} />
                  <Dialog.Button label="Scotiabank 7190136718"  onPress={() => Clipboard.setString('7190136718')} />
                  <Dialog.Button label="Interbank 3423146952634"  onPress={() => Clipboard.setString('3423146952634')} />
                  <Dialog.Button label="Banco Continental 0011-0427-0200157674"  onPress={() => Clipboard.setString('0011-0427-0200157674')} />
                  
                 </View>
                <Dialog.Button label="Cerrar"  onPress={() => this.cerrar()} />
              </Dialog.Container>
            </View>
        </Footer>
      </Container>
    )
  }
}


export default MapScreen;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});