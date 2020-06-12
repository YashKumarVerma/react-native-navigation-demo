import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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

function DetailsScreen({ route, navigation }) {
  // get the params here
  const { username } = route.params;
  const { message } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>these are the details</Text>
      <Text>ID: {username}</Text>
      <Text>
        Message: {message} {`\n`}
      </Text>
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
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>{`\n`}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>{`\n`}</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

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

export default App;
