// import React, { useState } from "react";
// //import { View, Text, Image } from "react-native";
// import { View, Text, Image, StatusBar } from "react-native";
// import AppIntroSlider from "react-native-app-intro-slider";
// import { COLORS, SIZES } from './src/constants/theme';
// import Router from './src/router/router';

// const slides = [
//   {
//     id: 1,
//     title: 'Discover Best Places',
//     description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
//     image: require('./src/assets/on1.jpg')
//   },
//   {
//     id: 2,
//     title: 'Choose A Tasty Dish',
//     description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
//     image: require('./src/assets/on2.jpg')
//   },
//   {
//     id: 3,
//     title: 'Pick Up The Delivery',
//     description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
//     image: require('./src/assets/on3.png')
//   }
// ]

// export default function App() {
//   const [showHomePage, setShowHomePage] = useState(false);
//   //const [showHomePage, setShowHomePage] = useState(true);

//   StatusBar.setBarStyle('light-content', true);
//   StatusBar.setBackgroundColor(COLORS.primary);

//   const buttonLabel = (label) => {
//     return(
//       <View style={{
//         padding: 12
//       }}>
//         <Text style={{
//           color: COLORS.title,
//           fontWeight: '600',
//           fontSize: SIZES.h4,
//         }}>
//           {label}
//         </Text>
//       </View>
//     )
//   }
//   if(!showHomePage) {
//     return(
//       <AppIntroSlider
//         data={slides}
//         renderItem={({item}) => {
//           return(
//             <View style={{
//               flex: 1,
//               alignItems: 'center',
//               padding: 15,
//               paddingTop: 100,
//             }}>
//               <Image
//                 source={item.image}
//                 style={{
//                   width: SIZES.width - 80,
//                   height: 400,
//                 }}
//                 resizeMode="contain"
//               />
//               <Text style={{
//                 fontWeight: 'bold',
//                 color: COLORS.title,
//                 fontSize: SIZES.h1,
//               }}>
//                 {item.title}
//               </Text>
//               <Text style={{
//                 textAlign: 'center',
//                 paddingTop: 5,
//                 color: COLORS.title
//               }}>
//                 {item.description}
//               </Text>
//             </View>
//           )
//         }}
//         activeDotStyle={{
//           backgroundColor: COLORS.primary,
//           width: 30,
//         }}
//         showSkipButton
//         renderNextButton={() => buttonLabel("Next")}
//         renderSkipButton={() => buttonLabel("Skip")}
//         renderDoneButton={() => buttonLabel("Done")}
//         onDone={() => {
//           setShowHomePage(true);
//         }}
//       />
//     )
//   }

//   return(
//     <><View style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//     >
//       <Text>Home Screen</Text>
//     </View>
//     <Router /> </>
//   )
// }





 

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Home, ItemDetail } from "./screens/";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default () => {
    return <App />;
};

  
