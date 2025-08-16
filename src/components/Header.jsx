import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/heart.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <View style={{ position: 'relative' }}>
            <Image
              source={require('../assets/messenger.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <View style={{ position: 'absolute', bottom: 12, left: 15 }}>
              <Text
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 5,
                  borderRadius: 10,
                }}
              >
                5
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
