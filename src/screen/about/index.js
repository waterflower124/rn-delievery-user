import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  FormLabel,
  FormInput,
  FormValidationMessage,
  TextInput
} from "react-native";
import styles from "./styles";
import { Container, Content, Footer, Text } from "native-base";
import { Button } from "react-native-elements";

import ImageOverlay from "react-native-image-overlay";

import { DrawerNavigator, DrawerActions } from "react-navigation";

import { StackNavigator } from "react-navigation";
class AboutPage extends React.Component {
  state;
  toggleDrawer = () => {
    console.log(this.props.navigationProps);

    if (this.props.navigation.state.index === 0) {
      this.props.navigation.openDrawer();
    } else {
      this.props.navigation.closeDrawer();
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        >
          <View style={{ width: "100%", height: 250 }}>
            <ImageOverlay
              source={require("../../assets/img.png")}
              height={250}
              contentPosition="top"
            >
              <View style={{ alignSelf: "flex-start" }}>
                <Image
                  source={require("../../assets/menu.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    marginTop: 10,
                    marginLeft: 10
                  }}
                />
              </View>
            </ImageOverlay>
          </View>
        </TouchableOpacity>
        <Content padder>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              color: "#1F4B70",
              padding: 10,
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            GADELI DELIVERY{" "}
          </Text>
          <Text
            style={{
              fontSize: 20,
              padding: 10,
              color: "#1F4B70",
              marginLeft: 5,
              alignSelf: "center"
            }}
          >
            Somos un servicio de delivery en general, entregamos y recogemos
            encomiendas y realizamos tus compras. Somos 100% Tacneños.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                color: "#1F4B70",
                marginLeft: 5,
                alignSelf: "center"
              }}
            >
              Facebook : https://www.facebook.com/GadeliDelivery
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                marginLeft: 5,
                color: "#1F4B70",
                alignSelf: "center"
              }}
            >
              {" "}
              Telefono: Llamar 945740400
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                marginLeft: 5,
                color: "#1F4B70",
                alignSelf: "center"
              }}
            >
              Correo Electrónico: contacto@gadeli.com.pe
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AboutPage;
