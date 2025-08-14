import React from 'react';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import usePath from "../../hooks/usePath";
import { getPathXCenter } from "../../utils/Path";
import { interpolatePath } from "react-native-redash";
import { runOnJS } from "react-native-worklets";
import { StyleSheet, View } from "react-native";
import { SCREEN_WIDTH } from "../../constants/Screen";
import TabItem from "./TabItem";
import AnimatedCircle from './AnimatedCircle';


const AnimatedPath = Animated.createAnimatedComponent(Path);

const CustomBottomTab = ({ state, descriptors, navigation}) => {
  const { containerPath, curvedPaths, tHeight} = usePath();

  
  const circleXCoordinate = useSharedValue(0);
  const progress = useSharedValue(1);

  const handleMoveCircle = (currentPath) => {
    circleXCoordinate.value = getPathXCenter(currentPath)
  };



const selectIcon = (routeName) => {
  switch (routeName) {
    case 'Products':
      return 'home';
    case 'Shop':
      return 'ShopScreen';
    case 'ProfileScreen':
      return 'Profile';
    case 'SettingScreen':
      return 'Settings';
    default:
      return 'home';
  }
};

const animatedProps = useAnimatedProps(() => {
  const currentPath = interpolatePath(
    progress.value,
    curvedPaths.map((_, index) => index + 1),
    curvedPaths
  );
  runOnJS(handleMoveCircle)(currentPath);

  return {
    d: `${containerPath} ${currentPath}`,
  };
});


const handleTabPress = (index, tabName) => {
  navigation.navigate(tabName);
  progress.value = withTiming(index);
};

return (
  <View style={styles.tabBarContainer}>
    <Svg width={SCREEN_WIDTH} height={tHeight} style={styles.shadowMd}>
      <AnimatedPath fill={"black"} animatedProps={animatedProps} />
    </Svg>

    <AnimatedCircle circle={circleXCoordinate}/>

    <View style={[styles.tabItemsContainer, { height: tHeight}]}> 
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;

        return (
          <TabItem
          key={index.toString()}
          label={label}
          icon={selectIcon(route.name)}
          activeIndex={state.index + 1}
          index={index}
          onTabPress={() => handleTabPress(index + 1, route.name)}
          />
        );

      })}
    </View>

  </View>
);
};


const styles = StyleSheet.create({
  tabBarContainer:{
    position: 'absolute',
    bottom: 0,
    zIndex: 2
  },

  tabItemsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
  },

  shadowMd: {
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
});

export default CustomBottomTab;
