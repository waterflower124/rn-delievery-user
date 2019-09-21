import React  from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Image, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OTP_URL } from '../../utility/AppConstant';
import ProgressDialog from '../../utility/progessdialog';
import OTPTextView from 'react-native-otp-textinput';

class OtpVerification extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        text1:'',
              
      }
    }
    completeSignup(navigate,user,veri_code){
      // this.props.otp(user.id,veri_code).then(() => {
      //   if(this.props.error){
      //     Toast.show(this.props.error,Toast.LONG)
      //     this.setState({isLoading :false})    

      //   }else{
      //     this.setState({isLoading :false})    

      //     var userJObject = JSON.parse(this.props.userData)

      //     Toast.show(userJObject.message,Toast.LONG)

      //     navigate('SelectVehicle',
      //     { user:userJObject.result})
          
      //   }
      // })    

      
   
    }
render(){

 return(

  <Container>
      <TouchableOpacity onPress={this.props.navigation.goBack(null)}>
   <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
   </TouchableOpacity>
   <Content padder>
     
     <Text style={{fontSize:20,marginLeft:20}}> Phone Verification</Text>
     <Text style={{fontSize:15,marginLeft:20}}> Enter your Otp code here</Text>

      <View style={{alignSelf:'center' ,marginTop:20}}>

   <CodeInput
      ref="codeInputRef1"
      secureTextEntry
      className={'border-b'}
      keyboardType="phone"

      activeColor='rgba(49, 180, 4, 1)'
      inactiveColor='rgba(49, 180, 4, 1.3)'
      space={4}
      onFulfill={null}
      size={50}
      inputPosition='left'
    //   onFulfill={(code) => this._onFulfill(code)}
    />
    </View>


<View style={{alignSelf:'flex-end'}}>
    <Button
        onPress={() => this.props.navigation.navigate('LoginPage')}
     title="Verify Now"
     titleStyle={{color:"white"}}
     type="clear"
     containerStyle={{backgroundColor:"#1f4b70",borderRadius:5}}


/>
</View>
   </Content>

  </Container> 

 );

}


}


export default OtpVerification;