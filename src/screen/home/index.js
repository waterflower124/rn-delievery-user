import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text} from 'native-base';
import { Button } from 'react-native-elements';

import ImageOverlay from "react-native-image-overlay";

import { DrawerNavigator, DrawerActions } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
class HomePage extends React.Component{

  state 


  toggleDrawer = () => {

    console.log(this.props.navigationProps);

    if (this.props.navigation.state.index === 0) {
      this.props.navigation.openDrawer()
            } else {
              this.props.navigation.closeDrawer()
            }

  }

render(){
      const { navigation } = this.props;

return(
<Container style={styles.container}>

<TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
  <View style={{width:"100%",height:250}}>

<ImageOverlay
  source={require("../../assets/img.png")}
  height={250} 
  
  contentPosition="top">
    <View style={{alignSelf:'flex-start'}}>
    <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >

<Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
</TouchableOpacity>
</View>

  </ImageOverlay>
  
{/* <Image source={require("../../assets/banner.png")} style={{width:"100%",height:250,resizeMode:'cover'}}/> */}
</View>
</TouchableOpacity>
<Content padder >



 <Text style={{marginTop:10,textAlign:'center',color:'#1F4B70',padding:10,fontSize:20,fontWeight:'bold'}}> SELECCIONE UNA OPCIÓN  </Text>
 <TouchableOpacity 
   onPress={() => this.props.navigation.navigate('BuyandsendPage')}
   style={{backgroundColor:"#FFF",borderRadius:10,margin:5}}
 >
      <View style={{flexDirection:'row'}}>  
 <Image source={require("../../assets/shop.png")} resizeMode='contain' style={{width:65,height:65,padding:10,margin:10,alignSelf:'center'}}></Image>
 <Text style={{fontSize:20, padding:10,marginLeft:5,color:'#1F4B70',alignSelf:'center'}}> Comprar & Enviar</Text>
 </View>
 </TouchableOpacity>
  <TouchableOpacity 
    onPress={() => this.props.navigation.navigate('PicandsendPage')}
    style={{backgroundColor:"#FFF",borderRadius:10,margin:5}}
  >
      <View style={{flexDirection:'row'}}>  
      <Image source={require("../../assets/pickup.png")} resizeMode='contain'  style={{width:65,height:65, padding:10,margin:10,alignSelf:'center'}}></Image>
      <Text style={{fontSize:20,padding:10,color:'#1F4B70',marginLeft:5,alignSelf:'center'}}>Recojer & Enviar</Text>
      </View>
  </TouchableOpacity>
 

<TouchableOpacity 
   onPress={() => this.props.navigation.navigate('GiftandparentPage')}
   style={{backgroundColor:"#FFF",borderRadius:10,margin:5}}
 >
         <View style={{flexDirection:'row'}}>  
 <Image source={require("../../assets/gift.png")} resizeMode='contain'  style={{width:65,height:65,padding:10,margin:10,alignSelf:'center'}}></Image>
 <Text style={{fontSize:20,padding:10,marginLeft:5,color:'#1F4B70',alignSelf:'center'}}> Regalos y Presentes</Text>
 </View>
 </TouchableOpacity>

</Content>

</Container>

)

};



}


export default HomePage;


