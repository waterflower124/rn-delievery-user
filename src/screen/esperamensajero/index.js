import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  FormLabel,
  FormInput,
  FormValidationMessage,
  TextInput,
  ActivityIndicator,
  ToastAndroid
} from "react-native";
import styles from "./styles";
import { Container, Content, Footer, Text } from "native-base";
import { Button } from "react-native-elements";

import ImageOverlay from "react-native-image-overlay";

import { DrawerNavigator, DrawerActions } from "react-navigation";

import { StackNavigator } from "react-navigation";
import Toast from "react-native-simple-toast";
var SoundPlayer = require("react-native-sound");
var song = null;
class espera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
      pedido_activo: true,
      pedido_id: "",
      avance: ""
    };
  }
  cancelarpedido() {
    this.props.navigation.navigate("HomePage");
  }
  cargar_avance() {
    if (this.state.pedido_activo) {
      const { pedido_id } = this.props.navigation.state.params;
      this.setState({ pedido_id: pedido_id });

      // NetInfo.isConnected.fetch().then(isConnected => {
      //   if (isConnected) {
      //     Alert.alert("You are online!");
      //   } else {
      //     Alert.alert("You are offline!");
      //   }
      // });

      fetch("https://aveoperu.com/gadeli11/pedido_detalle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pedido_id: pedido_id
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.id != null || responseJson.id != "") {
            this.setState({ avance: responseJson.avance });
            if (parseInt(responseJson.estado) == 1) {
              // if (parseInt(responseJson.avance) == 0) {
              //avance:responseJson.avance,
              //repartidor_nombre:responseJson.repartidor.nombre,
              this.setState({ pedido_activo: false });

              this.playALerta();
              this.props.navigation.navigate("MapScreen", {
                pedido_id: this.state.pedido_id
              });
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  cancelar() {
    if (this.state.pedido_activo) {
      const { pedido_id } = this.props.navigation.state.params;
      this.setState({ pedido_id: pedido_id });
      //const pedido_id = this.props.navigation.getParam('pedido_id', '');
      fetch("https://aveoperu.com/gadeli11/pedido_termino.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pedido_id: pedido_id
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.mensaje == "ok") {
            this.setState({ pedido_activo: false });
            this.props.navigation.navigate("HomePage", {
              pedido_id: this.state.pedido_id
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  componentWillMount() {
    //"https://aveoperu.com/gadeli11/sound/bipbip.mp3",
    song = new SoundPlayer(
      "https://aveoperu.com/gadeli11/sound/Alerat_acepto.mp4",
      SoundPlayer.MAIN_BUNDLE,
      error => {
        if (error)
          ToastAndroid.show(
            "Error when init SoundPlayer :(((",
            ToastAndroid.SHORT
          );
      }
    );
    this.intervalId = setInterval(() => this.cargar_avance(), 5000);
    this.cargar_avance();
  }

  playALerta = async () => {
    //song = new SoundPlayer('https://aveoperu.com/gadeli11/sound/bipbip.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
    // if(error)
    //   ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    // else {
    song.play(success => {
      if (!success)
        ToastAndroid.show(
          "Error when play SoundPlayer :(((",
          ToastAndroid.SHORT
        );
    });
    // }
    //});
  };

  render() {
    return (
      <Container>
        <View style={{ flexDirection: "row", width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}
            >
              <Image
                source={require("../../assets/backk.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  padding: 10,
                  marginTop: 10,
                  marginLeft: 10
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ width: "80%", flexDirection: "column", marginTop: 20 }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#1f4b70" }}
            >
              {" "}
              Buscando mensajero{" "}
            </Text>
          </View>
        </View>

        <Content padder>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "normal",
                alignSelf: "center"
              }}
            >
              Pronto un Mensajero le respondera
            </Text>
          </View>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "normal",
                alignSelf: "center"
              }}
            >
              {}
            </Text>
          </View>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <ActivityIndicator size={160} color="#0000ff" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          ></View>
          <View
            style={[
              {
                flexDirection: "row",
                width: "100%",
                alignSelf: "center",
                marginTop: 30
              }
            ]}
          >
            <Button
              onPress={() => this.cancelar()}
              title="Cancelar Pedido"
              titleStyle={{ color: "white" }}
              type="clear"
              containerStyle={{
                alignSelf: "center",
                backgroundColor: "#1f4b70",
                borderRadius: 5,
                marginLeft: 5,
                width: "100%"
              }}
            />
            <Text>{this.state.avance}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
export default espera;
