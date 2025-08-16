import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { dataUser } from '../utils/UserData';

const Stories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {dataUser.map((item, index) => (
        <View key={index} style={styles.storyWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Story', { item })}
            style={styles.imageWrapper}
          >
            <Image
              source={item.story.image}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.username}>{item.username}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  storyWrapper: {
    alignItems: 'center',
    marginRight: 15,
  },
  imageWrapper: {
    borderWidth: 2,
    borderColor: '#C13584', // Like Instagram story border color
    borderRadius: 40,
    padding: 3,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
