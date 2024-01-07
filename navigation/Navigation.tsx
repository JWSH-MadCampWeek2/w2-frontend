import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExerciseMain from "../screens/exercise/ExerciseMain";
import RecordMain from "../screens/record/RecordMain";
import RankMain from "../screens/rank/RankMain";
import InfoGender from "../screens/info/InfoGender";
import InfoBody from "../screens/info/InfoBody";
import InfoAge from "../screens/info/InfoAge";
import InfoGoal from "../screens/info/InfoGoal";
import InfoLevel from "../screens/info/InfoLevel";
import InfoTarget from "../screens/info/InfoTarget";
import InfoLoad from "../screens/info/InfoLoad";
import Setting from "../screens/exercise/Setting";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export function InfoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InfoGender">
        <Stack.Screen name="InfoGender" component={InfoGender} />
        <Stack.Screen name="InfoAge" component={InfoAge} />
        <Stack.Screen name="InfoBody" component={InfoBody} />

        <Stack.Screen name="InfoLevel" component={InfoLevel} />
        <Stack.Screen name="InfoTarget" component={InfoTarget} />
        <Stack.Screen name="InfoGoal" component={InfoGoal} />
        <Stack.Screen name="InfoLoad" component={InfoLoad} />

        <Stack.Screen name="BottomStack" component={BottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function BottomStack() {
  return (
    <BottomTab.Navigator initialRouteName="ExerciseStack">
      <BottomTab.Screen name="ExerciseStack" component={ExerciseStack} />
      <BottomTab.Screen name="RecordMain" component={RecordMain} />
      <BottomTab.Screen name="RankMain" component={RankMain} />
    </BottomTab.Navigator>
  );
}

export function ExerciseStack() {
  return (
    <Stack.Navigator initialRouteName="ExerciseMain">
      <Stack.Screen name="ExerciseMain" component={ExerciseMain} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}