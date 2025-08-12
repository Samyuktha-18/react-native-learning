import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState({});
  

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    if (!email) errors.email = 'Email is required';
    if (!mobile) errors.mobile = 'Mobile is required';
    setError(errors);
    return Object.keys(errors).length === 0;
  };


  const handleRegister = () => {
    if (validateForm()){
      console.log('Submitted', username, password, email, mobile);
      setUsername('');
      setPassword('');
      setEmail('');
      setMobile('');
      setError({});

      navigation.navigate("Home");
    }
  }

  // const handleRegister = () => {
  //   navigation.navigate("Login");
  // }

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
      </View>
      
      <View>
        <Text style={styles.createText}>Create Account</Text>
      </View>

      {/* user input */}
      <View style={styles.inputContainer}>
      <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder="Username" value={username}
            onChangeText={setUsername}/>
      </View>

      {
          error.username ? <Text style={styles.errorText}>{error.username}</Text> : null
      }
      

      {/* password input */}
      <View style={styles.inputContainer}>
      <Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder="Password" value={password}
            onChangeText={setPassword} secureTextEntry/>
      </View>

      {
        error.password ? <Text style={styles.errorText}>{error.password}</Text> : null
     }
      

      {/* Email and Mobile input */}
      <View style={styles.inputContainer}>
      <Feather name="mail" size={24} color="#9A9A9A" style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder="E-mail" value={email}
            onChangeText={setEmail}/>
      </View>

      {
        error.email ? <Text style={styles.errorText}>{error.email}</Text> : null
      }
      

      <View style={styles.inputContainer}>
      <Entypo name="mobile" size={24} color="#9A9A9A" style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder="Mobile" value={mobile}
            onChangeText={setMobile}/>
      </View>

      {
       error.mobile ? <Text style={styles.errorText}>{error.mobile}</Text> : null
      }


      
      {/* // Sign in button and register link */}
      <View style={styles.createButtonContainer}>
  <Pressable onPress={handleRegister} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
    <Text style={styles.signin}>SignUp</Text>
  </Pressable>
  
  <Pressable onPress={handleRegister} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1, marginLeft: 10 }]}>
    <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
      <AntDesign name="arrowright" size={24} color="white" style={styles.inputIcon} />
    </LinearGradient>
  </Pressable>
</View>

      {/* <View style={styles.createButtonContainer}>
        <Text style={styles.signin}>SignUp</Text>

        <LinearGradient 
        colors={['#F97794', '#623AA2']} 
        style={styles.linearGradient}>
          <AntDesign name="arrowright" size={24} color="white" style={styles.inputIcon} />
        </LinearGradient>

      </View> */}

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Or create account using social media
      </Text>
      <View style={styles.socialMediaContainer}>
          <Entypo name="facebook-with-circle" size={30} color="blue" style={styles.socialIcon} />
          <Entypo name="twitter-with-circle" size={30} color="blue" style={styles.socialIcon} />
          <AntDesign name="google" size={30} color="blue" style={styles.socialIcon} />
      </View>
      </TouchableOpacity>
      
      </View>

      {/* // Footer text and left vector image */}
      
      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require("../assets/leftVector.png")}
        style={styles.leftVectorImage}/>
      </View>

    </View>
  );
};

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },
  topImageContainer: {
    height: 25,
  },
  topImage: {
    width: "100%",
    height: "150",
    resizeMode: "contain",
  },
  helloContainer: { 
    marginTop: 160,
   },
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626"
  },
  createText: {
    textAlign: "center",
    fontSize: 30,
    color: "#262626",
    marginTop: 150,
    fontWeight: "bold"
  },
  inputContainer: {
    marginTop: 30,
    marginHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'center',
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  TextInput: {
    flex: 1
  },
  forgotPasswordText: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
    marginTop: 30,
  },
  createButtonContainer: {
    flexDirection: "row",
    marginTop: 40,
    width: "90%",
    justifyContent: "flex-end",
  },
  signin: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
  leftVectorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  leftVectorImage: {
    height: 300,
    width: 300
  },
  footerContainer: {
    marginTop: 25,
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    backgroundColor: "white",
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 50,
  },

})