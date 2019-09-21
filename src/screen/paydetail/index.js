
import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { Container, Content, Footer, Text } from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';


class PayDetailsScreen extends React.Component {
    render() {

        return (

            <Container>

                <View style={{ flexDirection: 'row', width: "100%", height: 57 }}>
                    <View style={{ flexDirection: "column", width: "20%" }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }} >
                            <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{ width: 50, height: 50, padding: 10, marginTop: 10, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "80%", flexDirection: "column", marginTop: 20 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1f4b70' }}> PAGO CON TARJETA </Text>

                    </View>
                </View>
                <Content padder>
                    <View style={{ alignSelf: 'center' }}>
                        <Text uppercase style={{ alignSelf: 'center' }}> Your are playing </Text>

                        <Text style={{ alignSelf: 'center', padding: 10, color: '#1f4b70' }} >S/45.00</Text>
                    </View>


                    <Text style={{ marginLeft: 20 }}>Account Holder Name</Text>
                    <TextInput
                        style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 15, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                        // Adding hint in TextInput using Placeholder option.
                        placeholder="Account holder name"
                        //set the value in state.
                        // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                        // Making the Under line Transparent.
                        underlineColorAndroid="transparent"
                    />

                    <Text style={{ marginLeft: 10 }}>Account Number</Text>
                    <TextInput
                        style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 15, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                        // Adding hint in TextInput using Placeholder option.
                        placeholder="Account Number"
                        //set the value in state.
                        // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                        // Making the Under line Transparent.
                        underlineColorAndroid="transparent"
                    />


                    <View style={{ flexDirection: "row", marginLeft: 10, marginRight: 10, justifyContent: 'center', marginTop: 20 }}>







                        <View style={{ flex: 1 }}>

                            <Text>Month</Text>
                            <TextInput
                                style={{ height: 45, width: "50%", borderColor: "grey", borderWidth: .5, borderRadius: 5, marginLeft: 2, marginTop: 5 }}
                                // Adding hint in TextInput using Placeholder option.
                                placeholder="Month"


                                //set the value in state.
                                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                                // Making the Under line Transparent.
                                underlineColorAndroid="transparent"
                            />


                        </View>


                        <View style={{ flex: 1 }}>

                            <Text style={{ marginLeft: 30 }}>Cvc</Text>
                            <TextInput
                                style={{ height: 45, width: "50%", borderColor: "grey", borderWidth: .5, borderRadius: 5, marginRight: 7, marginTop: 5 }}
                                // Adding hint in TextInput using Placeholder option.
                                placeholder="cvc"


                                //set the value in state.
                                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                                // Making the Under line Transparent.
                                underlineColorAndroid="transparent"
                            />

                        </View>

                    </View>

                    <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <TextInput
                            style={{ height: 75, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 5, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                            // Adding hint in TextInput using Placeholder option.
                            placeholder="SIGN HERE"
                            //set the value in state.
                            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                            // Making the Under line Transparent.
                            underlineColorAndroid="transparent"
                        />
                    </View>

                </Content>

                <View style={[{ width: "100%" }]}>

                    <Button
                        onPress={() => this.props.navigation.navigate('FeedBackScreen')}

                        title="PAY WITH CARD"
                        titleStyle={{ color: "white" }}

                        type="clear"
                        containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
                    />
                </View>
            </Container>
        )
    }

}

export default PayDetailsScreen;