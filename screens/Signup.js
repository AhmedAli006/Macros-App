

import React, {useState} from 'react';
import { Text } from '@ui-kitten/components';
import {
  Button,
  StyleSheet,
//   Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import s from '../styling';
import auth, { firebase } from '@react-native-firebase/auth';
 import database from '@react-native-firebase/database';

const reference = database().ref('/users/');

const style = StyleSheet.create(s);
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     margin: 2,
//   },

// });


export default function Signin() {
  const [Obj, setObj] = useState([]);




  const signUp = () => {
    console.log(Obj);
   
    auth()
      .createUserWithEmailAndPassword(Obj.email, Obj.password)
      .then(user => {
        console.log('User account created & signed in!');
        Obj.uid = user.user.uid;
        reference
          .child(Obj.uid)
          .set(Obj)
          .then(() => {
            console.log('Data Saved in Database Succesfully');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

   
}


    return (
<>

    <View style={[styles.container ]}>
        <View>
          <Text style={styles.heading}>SIGNUP</Text>
          <Text style={styles.dash}>_</Text>
        </View>
        <View>
            <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter name"
            onChangeText={(e) => setObj({ ...Obj, name: e })}
          />
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter email"
            onChangeText={(e) => setObj({...Obj, email:e})}
          />
          <TextInput
            style={styles.inputField}
            secureTextEntry
            textContentType="password"
            placeholder="Enter Password"
            onChangeText={(e) => setObj({...Obj, password:e})}
          />
        </View>
        <View style={styles.signUpBtnMain}>
          <Button onPress={signUp} style={styles.signUpBtn} title="Sign up" />
        </View>

        {/* <View>
          <Text style={styles.bottomText}>
            don't have an account <Text style={styles.link}>Signup</Text>{" "}
          </Text>
        </View> */}
      </View>
</>

      
  
    );
  };


 const styles = StyleSheet.create({
  
  container: {
    height: "100%",
   backgroundColor:"white",
    justifyContent:'center',
    flex:1,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0971f1",
     marginLeft: 50,
    marginRight: 50,

  },
  dash: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0971f1",
    marginBottom: 10,
    marginTop:-20,
     marginLeft: 50,
    marginRight: 50,
  },
  inputField: {
    paddingVertical: 11,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d3d3d3",
    marginVertical: 10,
     marginLeft: 50,
    marginRight: 50,
  },
  signUpBtn: {
    backgroundColor: "#0971f1",
  },

  signUpBtnMain: {
    marginVertical: 10,
     marginLeft: 50,
    marginRight: 50,
  },
  bottomText: {
    marginTop: 20,
    color: "gray"
  },
  link: {
    color: "#0971f1"
  }
});

