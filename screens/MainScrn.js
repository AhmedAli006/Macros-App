import React, { useState, useEffect } from 'react'
import axios from "axios"
import { View, StyleSheet } from 'react-native';
import { Button , Text } from '@ui-kitten/components';
import s from '../styling';
import { NavBar } from "../components/NavBar"
 const MainScrn = () =>{



// app.get('/recipes/:query',(req, res) => {
//     const response = axios.get(
       
//         `https://api.spoonacular.com/food/ingredients/${process.env.APP_ID}/information`
//     )
//     console.log(response.data.hits)
//     res.json(response.data.hits)
// })
//  const [Data, setData] = useState([]);
    
//  useEffect(() => {
    
//     const api =
//     //   `https://api.spoonacular.com/food/ingredients/{id}/information?apiKey=30fbb2475d4a48b79c7a0872fbc5e650`;
//       `https://api.nal.usda.gov/fdc/v1/foods/search?q=${req.params.query}&pageSize=2&api_key=36jPa6wtQWuuvBVyYy52whAdEKi2WKFb5jcqj5b6`
//     axios.get(api).then(req,res => {
//       setData(res.data.foods);
//     });
//   }, []);
//     console.log(Data);

const style = StyleSheet.create(s);

return <>
<NavBar/>
<View style={[s.main]}>
{/* {Data.map((e,key)=>{
  return(

  <View key={key}>
    <Text>{e.description}</Text>
  </View>
  )
})} */}

</View>

</>

}
export default MainScrn;