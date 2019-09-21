import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';



class OrderRequestDetails extends React.Component{

    render(){

        return(
            <Container>
    
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <View style={{flexDirection:'row'}}>
                <Image source={require("../../assets/usuario.png")} style={{width:50,height:50}} resizeMode='contain'></Image>
                <Text style={{fontSize:12,marginLeft:5,color:'#1f4b70',alignSelf:'center'}}>All Yousef {"\n"}<Text style={{fontSize:12,color:'#1f4b70'}}>Buy </Text></Text>
                </View>
               <Text style={{fontSize:12,alignSelf:'flex-end',marginLeft:5,color:'#1f4b70'}}>Distance :10 km  {"\n"}<Text style={{fontSize:12,alignSelf:'flex-end',color:'#1f4b70'}}>Request : Motorcycle</Text></Text>
                </View>


                <View style={{width:"100%",backgroundColor:'grey',height:2,marginTop:10}}></View>

                 <Content padder>
               <View style={{marginLeft:10,marginRight:10}}>
               <Text style={{textDecorationLine:'underline',textDecorationColor:'#1f4b70',fontSize:16,color:'#1f4b70'}}>Information of the order</Text>

              
               <Text style={{fontSize:12,color:'grey',padding:10}}>Buy a chicken and french fires fresh salad</Text> 
               <Text style={{fontSize:12,color:'grey',padding:10}}>Price of about S/ 43.00</Text>    
               <Text style={{fontSize:12,color:'grey',padding:10}}>Ubication Av. cornel mendoza 256 need plaza vea</Text>    
               <Text style={{fontSize:12,color:'grey',padding:10}}>Observation : Include aji, mustard and mayonaise</Text>    

               </View>
                </Content>
               </Container>
        )
    }



}


export default OrderRequestDetails;