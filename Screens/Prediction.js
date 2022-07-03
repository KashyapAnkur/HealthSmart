import React from "react";
import { FormControl, Input, Radio, Button, Box, WarningOutlineIcon, Spacer, Icon, Center, Heading, ScrollView, VStack, Divider, Text, Container, NativeBaseProvider, HStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Component1 from './PredictionComponents/Component1';
import Component2 from './PredictionComponents/Component2';
import Component3 from './PredictionComponents/Component3';
import { useSelector } from 'react-redux';
import PredictResult from '../Screens/PredictionComponents/PredictResult';

function Prediction(props) {
  const selector = useSelector(state => state);
  console.log(selector, "selector");
  
  if(selector.predictionComponentName == "Component1"){
    return (
      <Component1 
      props={props}
      />
    )
  }
  if(selector.predictionComponentName == "Component2"){
    return (
      <Component2 />
    )
  }
  if(selector.predictionComponentName == "Component3"){
    return (
      <Component3 />
    )
  }
  if(selector.predictionComponentName == "PredictResult"){
    return (
      <PredictResult />
    )
  }
}

export default Prediction;