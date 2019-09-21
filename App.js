/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, DrawerItems, DrawerNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginPage from "./src/screen/login";
import RegisterPage from "./src/screen/signup";
import HomePage from "./src/screen/home";
import PicandsendPage from "./src/screen/picandsend";
import BuyandsendPage from "./src/screen/buyandsend";
import GiftandparentPage from "./src/screen/giftandparent";
import SplashScreen from "./src/screen/splash";
import OtpVerification from "./src/screen/otp";
import PolicyScreen from "./src/screen/policy";
import PayScreen from './src/screen/pay';
import { Icon, Image } from 'react-native-elements';
import DrawerContent from './src/screen/drawer';
import FeedBackScreen from './src/screen/feedback';
import MyOrder from './src/screen/myorder';
import OrderHistory from './src/screen/history';
import Favouirte from './src/screen/favouirte';
import ProductScreen from './src/screen/product';
import ProfilePage from './src/screen/profile';
import MapScreen from './src/screen/map';
import ChangePassword from './src/screen/chanagepassword';
import SummaryPage from './src/screen/summary';
import PayDetailsScreen from './src/screen/paydetail';
import OrderRequest from './src/screen/order_request';
import OrderRequestDetails from './src/screen/order_reuest_details';
import ForgotPasswordPage from './src/screen/forgotpassword';
import AboutPage from './src/screen/about';

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
    },  OrderHistory :{
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

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
