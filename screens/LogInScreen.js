import React, { useState } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Image, Button, Input } from "react-native-elements";

const LogInScreen = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const signIn = () => {

  }
  return (
    <KeyboardAvoidingView style={Styles.container}> 
      <StatusBar style="light"/>
      <Image source={{
        uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
      }}
      style={{ width: 200, height: 200 }}
      />
      <View style={Styles.inputContainer}>
        <Input 
          placeholder="Email"
          autoFocus type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={Styles.button} onPress={signIn} title="Login" />
      <Button containerStyle={Styles.button}  type="outline" title="Register" />
    </KeyboardAvoidingView>
  )
}

export default LogInScreen

const  Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "white",


  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop:10,
  },
})
