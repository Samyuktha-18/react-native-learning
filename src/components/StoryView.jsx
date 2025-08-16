import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const StoryView = ({ route }) => {
  console.log(route.params);
  const selectedItem = route.params.item;
  const navigation = useNavigation();
  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - selectedItem.story.time;
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const timeout = setTimeout(() => {
        navigation.goBack();
  },15000)
},[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={selectedItem.profile} style={styles.profileImage} />
        <Text style={styles.nameText}>{selectedItem.name}</Text>
        <Text style={styles.storyTimeText}>{storyTime}hr</Text>
      </View>

      <View style={styles.absoluteView}>
        <Image
          source={selectedItem.story.image}
          style={[styles.storyImage, { width: screenWidth, height: screenHeight - 100 }]}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder='Message'
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
          <Image style={styles.messageIcon} source={require('../assets/send.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 60,
    paddingLeft: 10,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  storyTimeText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
    color: 'white',
  },
  absoluteView: {
    position: 'absolute',
  },
  storyImage: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
inputContainer: {
  position: 'absolute',
  bottom: 0,
  left: 10,
  right: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  paddingVertical: 10,
},

messageInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: 'white',
  paddingHorizontal: 15,
  color: 'white',
  borderRadius: 30,
  height: 40,
  marginRight: 10,
},

  messageIcon: {
  width: 24,
  height: 24,
  tintColor: 'white',
},

});
