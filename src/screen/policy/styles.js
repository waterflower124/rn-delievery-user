import React, {StyleSheet} from 'react-native'

import { Dimensions } from "react-native";



var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    
    parrafo:{
        alignContent:"flex-start",
        paddingBottom:10,
        alignItems:"flex-start",
        alignContent:"flex-start",
        justifyContent:"flex-start",
    },
    guiones:{
        alignContent:"flex-start",
        paddingBottom:10,
        paddingLeft:10,
    },
    titulo:{
        paddingBottom:10,
        fontWeight:"bold",
    }
  });

  export default styles;