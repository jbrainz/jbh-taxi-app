import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import OnBoarding from "./Welcome/Onboarding"

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthStack.Navigator>
  )
}
