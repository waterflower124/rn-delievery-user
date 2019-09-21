import React from 'react'

import { createStackNavigator, createAppContainer, DrawerItems, DrawerNavigator, createDrawerNavigator } from "react-navigation";
import LoginPage from "../login";
import RegisterPage from "../signup";
import HomePage from "../home";
import PicandsendPage from "../picandsend";
import BuyandsendPage from "../buyandsend";
import GiftandparentPage from "../giftandparent";
import SplashScreen from "../splash";
import OtpVerification from "../otp";
import PolicyScreen from "../policy";
import PayScreen from '../pay';
import { View, TouchableOpacity, TextInput, StyleSheet,Text } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import DrawerContent from '../drawer';
import FeedBackScreen from '../feedback';
import MyOrder from '../myorder';
import OrderHistory from '../history';
import Favouirte from '../favouirte';
import ProductScreen from '../product';
import ProfilePage from '../profile';
import MapScreen from '../map';
import ChangePassword from '../chanagepassword';
import SummaryPage from '../summary';
import PayDetailsScreen from '../paydetail';
import OrderRequest from '../order_request';
import OrderRequestDetails from '../order_reuest_details';
import ForgotPasswordPage from '../forgotpassword';
import AboutPage from '../about';
import espera from '../esperamensajero';
const drawPage = createStackNavigator(
  {
    MyOrder :{
      screen:MyOrder,
      navigationOptions: {
        header: null,
      }
    },
    HomePage :{
      screen:HomePage,
      navigationOptions: {
        header: null,
      }
    },
      AboutPage :{
        screen:AboutPage,
        navigationOptions: {
          header: null,
        }
    },  
    AboutPage :{
      screen:espera,
      navigationOptions: {
        header: null,
      }
    },
    OrderHistory :{
      screen:OrderHistory,
      navigationOptions: {
        header: null,
      }
    }
    , Favouirte :{
      screen:Favouirte,
      navigationOptions: {
        header: null,
      }
    }
    , FeedBackScreen :{
      screen:FeedBackScreen,
      navigationOptions: {
        header: null,
      }
    } , Mypoint :{
      screen:ProductScreen,
      navigationOptions: {
        header: null,
      }
    }, ProfilePage :{
      screen:ProfilePage,
      navigationOptions: {
        header: null,
      }
    }, ChangePassword :{
      screen:ChangePassword,
      navigationOptions: {
        header: null,
      }
    }, PayDetailsScreen :{
      screen:PayDetailsScreen,
      navigationOptions: {
        header: null,
      }
    }
  }
  );

const silder = createDrawerNavigator (
  {
    HomePage:{
      screen:drawPage
    }
  
  }
  
   
  ,{
      contentComponent: DrawerContent,
      drawerWidth: 300,
  }
)
let TransitionConfig = () => {
  return {
    screenInterpolator: ({ position, scene }) => {
      const opacity = position.interpolate({
        inputRange: [scene.index - 1, scene.index],
        outputRange: [0, 1],
      });
      return {
        opacity: opacity,
      };
    },
  };
};
const AppNavigator = createStackNavigator(
  
  { SplashPage :{
    screen:SplashScreen,
    navigationOptions: {
      header: null,
    }
  },LoginPage:{screen:LoginPage, navigationOptions: {
    header: null,
  }
},RegisterPage:{screen:RegisterPage, navigationOptions: {
  header: null,
}
},OtpVerification:{screen:OtpVerification, navigationOptions: {
  header: null,
}
},Policy:{screen:PolicyScreen, navigationOptions: {
  header: null,
}
},PicandsendPage:{screen:PicandsendPage, navigationOptions: {
  header: null,
}
},BuyandsendPage:{screen:BuyandsendPage, navigationOptions: {
  header: null,
}
},GiftandparentPage:{screen:GiftandparentPage, navigationOptions: {
  header: null,
}
},Home:{screen:silder, navigationOptions: {
  header: null,
  headerMode:'none',
  transitionConfig: TransitionConfig,

}
},PayScreen:{screen:PayScreen, navigationOptions: {
  header: null,
  
}
}
,MapScreen:{screen:MapScreen, navigationOptions: {
  header: null,
  
}
}
,AboutPage:{screen:AboutPage, navigationOptions: {
  header: null,
  headerMode:'none',
  transitionConfig: TransitionConfig,
  
}
}
,espera:{screen:espera, navigationOptions: {
  header: null,
  headerMode:'none',
  transitionConfig: TransitionConfig,
}
}
,SummaryPage:{screen:SummaryPage, navigationOptions: {
  header: null,
  
}
},ForgotPasswordPage:{screen:ForgotPasswordPage, navigationOptions: {
  header: null,
  
}
}

  }
    );

  const styles = StyleSheet.create({
  headerLeftIconStyle: {
    marginLeft: 15,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputIconStyle: {
    padding: 5,
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});

  export default createAppContainer(AppNavigator)