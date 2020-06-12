/**
 * Import React Native and ReactNative
 */
import React from "react";
import { Text, View, Button } from "react-native";

/**
 * Import libraries to implement navigation
 */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**
 *
 * @param {Navigation} Navigation passes the navigation prop to be used in button
 */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen{`\n`}</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            username: "yashkumarverma",
            message: "something awesome here",
          })
        }
      />
    </View>
  );
}

/**
 * @param {route} route used to extract data passed to Screen via navigator
 * @param {route} navigation Navigation passes the navigation prop to be used in button
 */
function DetailsScreen({ route, navigation }) {
  /**
   * Reading data passed from navigator to screen
   */
  const { username } = route.params;
  const { message } = route.params;

  /**
   * Rendering actual component
   */
  return (
    /**
     * Parent screen to contain details page
     */
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>these are the details</Text>
      <Text>ID: {username}</Text>
      <Text>
        Message: {message} {`\n`}
      </Text>
      {/*To open one details page after to another*/}
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            username: "someoneElse",
            message: "new one",
          })
        }
      />
      <Text>{`\n`}</Text>
      {/*To move to particular route*/}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>{`\n`}</Text>

      {/*To open the last opened screen*/}
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>{`\n`}</Text>

      {/*To open the first screen of stack*/}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

/**
 * Initialize stack to store navigation details
 */
const Stack = createStackNavigator();

/**
 * Main application Component
 */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Some Cool Heading" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * Export application for render
 */
export default App;
