//This is an example code for React Native Swipe Down  to Refresh ListView Using RefreshControl//
import React, { Component } from "react";
//import react in our code.

import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Alert,
  RefreshControl,
  TouchableOpacity
} from "react-native";
//import all the components we are going to use.
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: true };
    this.GetData();
  }

  GetData = () => {
    //Service to get the data from the server to render
    return fetch("https://aveoperu.com/gadeli11/pedido_detalle.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          refreshing: false,
          //Setting the data source for the list to render
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: "90%",
          backgroundColor: "#808080"
        }}
      />
    );
  };
  onPress() {
    this.setState({ dataSource: [] });
    this.GetData();
  }
  onRefresh() {
    this.setState({ dataSource: [] });
    this.GetData();
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.onRefresh(), 5000);
    this.onRefresh(); // also load one immediately
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderItem = data => (
    <View style={styles.EstiloColumnas}>
      <View style={styles.styleViewInformation}>
        <TouchableOpacity style={styles.list}>
          <Text>
            <Text style={{ color: "#204B71" }}>Pedido :</Text>{" "}
            {data.item.tipopedido}
          </Text>
          <Text>
            <Text style={{ color: "#204B71" }}>Cliente :</Text>
            {data.item.Nombre_usuario}
          </Text>
          <Text>
            <Text style={{ color: "#204B71" }}>Unidad :</Text>
            {data.item.tipo_vehiculo}
          </Text>
          <Text style={{ color: "#204B71" }}>Descripcion :</Text>
          <Text> {data.item.descripcion} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.EstiloViewButton}>
        <Button
          buttonStyle={styles.EstiloButton}
          icon={<Icon name="account-check" size={20} color="white" />}
          onPress={() => this.onPress_AceptarPedido(data.item.id, 4)}
        />
        <Button
          buttonStyle={styles.EstiloButton}
          icon={<Icon name="account-off" size={20} color="white" />}
        />
      </View>
    </View>
  );

  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      //Returning the ListView
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
        <Button
          buttonStyle={styles.buttonLoginContainer}
          title="Actualizar lista"
          refreshing={this.state.refreshing}
          onPress={() => this.onPress()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  },
  EstiloColumnas: {
    flex: 1,
    flexDirection: "row"
  },
  styleViewInformation: {
    width: "80%",
    marginRight: 0.5
    //backgroundColor: "green"
  },
  estiloViewButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "20%"
    //backgroundColor: "orange"
  },
  EstiloButton: {
    backgroundColor: "#204B71",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 0,
    width: 60
  },
  buttonLoginContainer: {
    backgroundColor: "#204B71",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  }
});