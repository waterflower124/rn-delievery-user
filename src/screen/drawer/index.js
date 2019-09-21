import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Clipboard,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import HomePage from "../home";
import { Image } from "react-native-elements";
import styles from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import MyOrder from "../myorder";
import { Container, Content } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import Dialog from "react-native-dialog";

const order = require("../../assets/order.png");
const history = require("../../assets/history.png");
const feedback = require("../../assets/str.png");
const suggestion = require("../../assets/review.png");
const logout = require("../../assets/logout.png");
const about = require("../../assets/about.png");
const point = require("../../assets/point.png");
const home = require("../../assets/home.png");

class DrawerContent extends Component {
  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  };
  state = {
    email: "",
    image_pic: "",
    user_name: "",
    nombres: "",
    email: "",
    dialogVisible: false
  };

  async salir() {
    Alert.alert(
      "Gadeli",
      "Desea cerrar sesión",
      [
        { text: "Salir", onPress: () => this.removeStorage() },
        {
          text: "Cancelar",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  async removeStorage() {
    await AsyncStorage.removeItem("@gadeli:token");
    await AsyncStorage.removeItem("@gadeli:usuario_id");
    await AsyncStorage.removeItem("@gadeli:nombres");
    await AsyncStorage.removeItem("@gadeli:email");
    this.props.navigation.navigate("LoginPage");
  }

  async datos_usuario() {
    const nombres = await AsyncStorage.getItem("@gadeli:nombres");
    const email = await AsyncStorage.getItem("@gadeli:email");
    const usuario_id = await AsyncStorage.getItem("@gadeli:usuario_id");
    return [nombres, email, usuario_id];
  }
  metodosdepago() {
    this.setState({
      dialogVisible: true
    });
  }
  cerrar() {
    this.setState({
      dialogVisible: false
    });
  }
  componentDidMount() {
    this.datos_usuario().then(val => {
      this.setState({ nombres: val[0], email: val[1] });
      global.usuario_id = val[2];
    });
  }
  render() {
    const { navigation } = this.props;
    //const { email } = this.props.navigation.state.params;
    return (
      <View style={styles.containerStyle}>
        <View>
          <View
            style={{
              backgroundColor: "#1f4b70",
              height: 170,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={this.navigateToScreen("ProfilePage")}
              style={[
                styles.profileImgContainer,
                { borderColor: "white", borderWidth: 1 }
              ]}
            >
              <Image
                source={require("../../assets/usuario.png")}
                style={styles.profileImg}
              />
            </TouchableOpacity>

            <Text style={{ color: "white", fontSize: 15 }}>
              {this.state.nombres}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {this.state.email}
            </Text>
          </View>
        </View>
        <Container>
          <Content>
            <TouchableOpacity onPress={this.navigateToScreen("HomePage")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={home}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                ></Image>
                <Text style={{ color: "black", marginTop: 17 }}>Inicio</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("MyOrder", { entri: true })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={order}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                ></Image>
                <Text style={{ color: "black", marginTop: 17 }}>
                  Mis Ordenes
                </Text>
              </View>
            </TouchableOpacity>
            {/*
            <TouchableOpacity
              onPress={this.navigateToScreen('OrderHistory')}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image source={history} resizeMode='center' style={{ width: 24, height: 24, margin: 15 }}></Image>
                <Text style={{ color: 'black', marginTop: 17 }}>Historial</Text>
              </View>
            </TouchableOpacity>
            */}

            <TouchableOpacity onPress={this.navigateToScreen("Favouirte")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={feedback}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                ></Image>
                <Text style={{ color: "black", marginTop: 17 }}>Favoritos</Text>
              </View>
            </TouchableOpacity>
            {/*
            <TouchableOpacity
              onPress={this.navigateToScreen('Mypoint')}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image source={point} resizeMode='center' style={{ width: 24, height: 24, margin: 15 }}></Image>
                <Text style={{ color: 'black', marginTop: 12 }}>Mis Puntos</Text>
              </View>
            </TouchableOpacity>
                */}
            <TouchableOpacity onPress={() => this.metodosdepago()}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={point}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                ></Image>
                <Text style={{ color: "black", marginTop: 12 }}>
                  Metodos de Pago
                </Text>
              </View>
            </TouchableOpacity>
            {/*
            <TouchableOpacity onPress={this.navigateToScreen("AboutPage",{user_id:"2",pedido_id:"110"}))}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={about}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                ></Image>
                <Text style={{ color: "black", marginTop: 17 }}>Acerca de</Text>
              </View>
            </TouchableOpacity>
            */}
            <TouchableOpacity onPress={() => this.salir()}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={logout}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                ></Image>
                <Text style={{ color: "black", marginTop: 17 }}>Logout</Text>
              </View>
            </TouchableOpacity>
            {/*
            <TouchableOpacity
               onPress={() =>this.props.navigation.navigate('espera',{user_id:"2",pedido_id:"110"})}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image source={logout} resizeMode='center' style={{ width: 24, height: 24, margin: 15 }}></Image>
                <Text style={{ color: 'black', marginTop: 17 }}>Espera</Text>
              </View>
            </TouchableOpacity>
           */}
            <View>
              <Dialog.Container visible={this.state.dialogVisible}>
                <Dialog.Title>Metodos de Pago</Dialog.Title>
                <View style={{ width: "100%" }}>
                  <Dialog.Button
                    label="Yappe a 952293578"
                    onPress={() => Clipboard.setString("952293578")}
                  />
                  <Dialog.Button
                    label="Banco de la Nación 4152432106"
                    onPress={() => Clipboard.setString("4152432106")}
                  />
                  <Dialog.Button
                    label="BCP 54037307510077"
                    onPress={() => Clipboard.setString("54037307510077")}
                  />
                  <Dialog.Button
                    label="Scotiabank 7190136718"
                    onPress={() => Clipboard.setString("7190136718")}
                  />
                  <Dialog.Button
                    label="Interbank 3423146952634"
                    onPress={() => Clipboard.setString("3423146952634")}
                  />
                  <Dialog.Button
                    label="Banco Continental 0011-0427-0200157674"
                    onPress={() => Clipboard.setString("0011-0427-0200157674")}
                  />
                </View>
                <Dialog.Button label="Cerrar" onPress={() => this.cerrar()} />
              </Dialog.Container>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

export default DrawerContent;
