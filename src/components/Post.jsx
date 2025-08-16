import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { dataUser } from '../utils/UserData';

const Post = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {dataUser.map((item, index) => (
          <View key={index}>
            <View style={styles.postContainer}>
              <Image style={styles.profileImage} source={item.profile} />
              <Text style={styles.username}>{item.name}</Text>
            </View>

            {item.post?.image && (
              <Image
                style={[styles.postImage, { width: screenWidth }]}
                source={item.post.image}
              />
            )}

            <View style={styles.likeButton}>
              <TouchableOpacity style={styles.iconTouchable}>
                <Image
                  source={require('../assets/heart.png')}
                  style={styles.iconHeart}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTouchable}>
                <Image
                  source={require('../assets/chat.png')}
                  style={styles.iconChat}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require('../assets/send.png')}
                  style={styles.iconSend}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.likesText}>
              {item.post.likes} likes
            </Text>

            <View style={styles.captionContainer}>
              <Text style={styles.captionUsername}>{item.name}{' '}</Text>
              <Text style={styles.captionText}>{item.post.caption}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 16,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 10,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    height: 500,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
    paddingHorizontal: 13,
  },
  iconTouchable: {
    marginRight: 12,
  },
  iconHeart: {
    height: 24,
    width: 28,
  },
  iconChat: {
    height: 24,
    width: 24,
  },
  iconSend: {
    height: 24,
    width: 24,
  },
  likesText: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  captionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    alignItems: 'center',
    marginBottom: 20
  },
  captionUsername: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  captionText: {
    color: 'black',
  },
});
