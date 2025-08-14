import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const circleContainerSize = 50;

const AnimatedCircle = ({ circle }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: circle.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: circleContainerSize,
    height: circleContainerSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});

export default AnimatedCircle;
