import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignIn = async () => {
    if (validateForm()) {
      console.log('Submitted', email, password);
      setEmail('');
      setPassword('');
      setError({});
      try {
        await AsyncStorage.setItem('userLoggedIn', 'true');
        navigation.navigate('Home');
      } catch (error) {
        console.log('Error saving login status:', error);
      }
      navigation.navigate('Home');
    }
  };

  // const handleSignIn = () => {
  //   console.log('Sign in button pressed');
  //   navigation.navigate('Signup');
  // };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginStatus = await AsyncStorage.getItem('userLoggedIn');
        if (loginStatus === 'true') {
          navigation.navigate('Home');
        }
      } catch (error) {
        console.log('Error reading login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleRegister = () => {
    alert('Create pressed!');
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top Image */}
        <View style={styles.topImageContainer}>
          <Image
            source={require('../assets/topVector.png')}
            style={styles.topImage}
          />
        </View>

        {/* Hello Text */}
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Hello</Text>
        </View>

        <Text style={styles.signInText}>Sign in to your account</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={24}
            color="#9A9A9A"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Fontisto
            name="locked"
            size={24}
            color="#9A9A9A"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}

        {/* Forgot Password */}
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>

        {/* Sign In Button */}
        {/* <Pressable onPress={handleSignIn}>
          <View style={styles.signInButtonContainer}>
            <Text style={styles.signin}>Sign in</Text>
            <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
              <AntDesign name="arrowright" size={24} color="white" style={styles.inputIcon} />
            </LinearGradient>
          </View>
        </Pressable> */}

        <View style={styles.signInButtonContainer}>
          <Pressable
            onPress={handleSignIn}
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={styles.signin}>Sign in</Text>
          </Pressable>
          <Pressable
            onPress={handleSignIn}
            style={({ pressed }) => [
              { opacity: pressed ? 0.6 : 1, marginLeft: 10 },
            ]}
          >
            <LinearGradient
              colors={['#F97794', '#623AA2']}
              style={styles.linearGradient}
            >
              <AntDesign
                name="arrowright"
                size={24}
                color="white"
                style={styles.inputIcon}
              />
            </LinearGradient>
          </Pressable>
        </View>

        {/* Register Link */}
        {/* <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Create</Text>
          </Text>
        </TouchableOpacity> */}
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{ textDecorationLine: 'underline', fontSize: 16 }}>
              Create
            </Text>
          </TouchableOpacity>
        </Text>

        {/* Bottom Image */}
        {/* <View style={styles.leftVectorContainer}>
          <ImageBackground
            source={require('../assets/leftVector.png')}
            style={styles.leftVectorImage}
          />
        </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: 'relative',
  },
  topImageContainer: {
    height: 25,
  },
  topImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  helloContainer: {
    marginTop: 160,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
    color: '#262626',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#262626',
  },
  inputContainer: {
    marginTop: 30,
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    color: '#BEBEBE',
    textAlign: 'right',
    width: '90%',
    fontSize: 15,
    marginTop: 20,
  },
  signInButtonContainer: {
    flexDirection: 'row',
    marginTop: 50,
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signin: {
    color: '#262626',
    fontSize: 25,
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  footerText: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 100,
  },
  leftVectorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  leftVectorImage: {
    height: 500,
    width: 350,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 50,
  },
});