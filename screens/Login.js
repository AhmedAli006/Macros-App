import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
 import database from '@react-native-firebase/database';
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import s from '../styling';
const style = StyleSheet.create(s);



{/* <View>

    <TouchableOpacity  style={[{backgroundColor:"#4285F4" ,width:"50%"}]}
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>

               <Text style={[s.txtWhite, s.fs5]}>

                   Google
               </Text>   
             </TouchableOpacity>
</View> */}

const Login =()=> {
//  auth()
//       .signInWithEmailAndPassword(user.email, user.password)
//       .then(() => {
//         console.log('User account signed in!');
//         navigation.navigate('Chat')
//       })
//       .catch(error => {
//         if (error.code === 'auth/email-already-in-use') {
//           console.log('That email address is already in use!');
//         }

//         if (error.code === 'auth/invalid-email') {
//           console.log('That email address is invalid!');
//         }
//         if (error.code === 'auth/user-not-found') {
//           console.log('That email address is invalid!');
//         }
//         console.error(error);
//       });

signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((success) => {
          // Signed in
          console.log("User successfully login", success);
          setSubmitLoading(false)
          navigate('/')
          // ...
        })
        .catch((error) => {
          console.log("User not login", error);
          setSubmitLoading(false)
        });
      e.target.reset();
    
  //     firebase.auth().signInWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });
  
  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  //   else (console.error)
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

   

// async function onGoogleButtonPress() {
//   const { idToken } = await GoogleSignin.signIn();
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   return auth().signInWithCredential(googleCredential);
// }
// GoogleSignin.configure();


// auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.uid;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });


  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>LOGIN</Text>
          <Text style={styles.dash}>_</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter email"
          />
          <TextInput
            style={styles.inputField}
            secureTextEntry
            textContentType="password"
            placeholder="Enter Password"
          />
        </View>
        <View style={styles.loginBtnMain}>
          <Button style={styles.loginBtn} title="Login NOW" />
        </View>

        <View>
          <Text style={styles.bottomText}>
            don't have an account <Text style={styles.link}>Signup</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

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
  loginBtn: {
    backgroundColor: "#0971f1",
  },

  loginBtnMain: {
    marginVertical: 10,
     marginLeft: 50,
    marginRight: 50,
  },
  bottomText: {
    marginTop: 20,
    color: "gray",
    marginLeft: 50,
    marginRight: 50,
  },
  link: {
    color: "#0971f1"
  }
});

export default Login;