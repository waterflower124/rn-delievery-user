import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';


class OrderRequest extends React.Component{

render(){
    return(

        
        <Container>
        <View style={{flexDirection:'row', width:"100%",height:57}}>
              <View style={{flexDirection:"column",width:"20%"}}>
              <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
   <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
   </TouchableOpacity>
   </View>
  
   <View style={{width:"60%",flexDirection:"column",marginTop:20}}>
   <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Alert -Order Request  </Text>
  
   </View>
   <View style={{flexDirection:"column",width:"20%",alignSelf:'center'}}>

   <Image source={require("../../assets/dot.png")} resizeMode='contain' style={{alignSelf:'center',width:30,height:30, padding:10,marginTop:10,marginLeft:10}}/>
</View>
   </View>

   <View style={{width:'100%',height:1.5,backgroundColor:'grey',marginTop:10}}></View>
<Content padder>

    <View style={{flexDirection:'row',width:'100%'}}>

<Card style={{width:"70%"}}>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                <Image source={require("../../assets/usuario.png")} style={{width:24,height:24}} resizeMode='contain'></Image>
                <Text style={{fontSize:12,marginLeft:5}}>All Yousef {"\n"}<Text style={{fontSize:12}}>Buy </Text></Text>
                </View>
               <Text style={{fontSize:12,alignSelf:'flex-end',marginLeft:5}}>Distance :10 km  {"\n"}<Text style={{fontSize:12,alignSelf:'flex-end'}}>Request : Motorcycle</Text></Text>
                </View>
            </CardItem>
            <CardItem bordered>
              <Body>
              
                <Text style={{fontSize:15,fontWeight:'normal'}}>Buy a chickeng in the resturant pardos chicken.</Text>
                <Text style={{fontSize:15,fontWeight:'normal'}}>Infornt of central market</Text>

                {/* <Text style={{fontSize:15,fontWeight:'normal'}}>
                 Distance:10 km
                </Text>
                <Text style={{fontSize:15,fontWeight:'normal'}}>
                 Payment:Cash $9.00
                </Text>
                <Text style={{fontSize:15,fontWeight:'normal'}}>
                 Discription Services :What is lorem lpsum ?
                </Text> */}
              </Body>
            </CardItem>
    
          </Card>
          <View style={[{width:"30%", alignSelf:'center', marginTop:30 }]}>



<Button
        onPress={() => this.props.navigation.navigate('Home')}
     
  title="Accept"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,margin:10}}
/>
<Button
        onPress={() => this.props.navigation.navigate('Home')}
     
  title="Deny"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,margin:10}}
/>
</View>
          </View>

          <View style={{flexDirection:'row',width:'100%'}}>

<Card style={{width:"70%"}}>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                <Image source={require("../../assets/usuario.png")} style={{width:24,height:24}} resizeMode='contain'></Image>
                <Text style={{fontSize:12,marginLeft:5}}>All Yousef {"\n"}<Text style={{fontSize:12}}>Buy </Text></Text>
                </View>
               <Text style={{fontSize:12,alignSelf:'flex-end',marginLeft:5}}>Distance :10 km  {"\n"}<Text style={{fontSize:12,alignSelf:'flex-end'}}>Request : Bike</Text></Text>
                </View>
            </CardItem>
            <CardItem bordered>
              <Body>
           
                <Text style={{fontSize:15,fontWeight:'normal'}}>Buy a chickeng in the resturant pardos chicken.</Text>
                <Text style={{fontSize:15,fontWeight:'normal'}}>Infornt of central market</Text>

                {/* <Text style={{fontSize:15,fontWeight:'normal'}}>
                 Distance:10 km
                </Text>
                <Text style={{fontSize:15,fontWeight:'normal'}}>
                 Payment:Cash $9.00
                </Text>
                <Text style={{fontSize:15,fontWeight:'normal'}}>
                 Discription Services :What is lorem lpsum ?
                </Text> */}
              </Body>
            </CardItem>
    
          </Card>
          <View style={[{width:"30%", alignSelf:'center', marginTop:30 }]}>



<Button
        onPress={() => this.props.navigation.navigate('Home')}
     
  title="Accept"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,margin:10}}
/>
<Button
        onPress={() => this.props.navigation.navigate('Home')}
     
  title="Deny"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,margin:10}}
/>
</View>
          </View>

</Content>
   </Container>
    )
}

}

export default OrderRequest;