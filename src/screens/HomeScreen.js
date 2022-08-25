import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation, route}) => {
    console.log(route)
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
          <TouchableOpacity
            style={styles.TouchableView}
            onPress={() => navigation.navigate("Details", {movie: {
                title: "Star wars",
                release: 1977,
                screenNumber: 1
                }})}>
                <View>
                    <Text>Star Wars</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableView}
            onPress={() => navigation.navigate("Details", {movie: {
                title: "Black Panther",
                release: 2018,
                screenNumber: 1
            }})}>
                <View>
                     <Text>Black Panther</Text>
                </View>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableView}
            onPress={() => navigation.navigate("Details", {movie: {
                title: "The Matrix",
                release: 1999,
                screenNumber: 1
            }})}>
                <View>
                   <Text>The Matrix</Text>
                </View>
            </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TouchableView: {
      marginBottom: 30,
      width: 150,
      height: 50,
      alignItems: 'center',
      borderColor: 'black',
      backgroundColor:'orange',
      borderWidth: 5,
      borderRadius: 10,
    },
    TouchableText: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
    }
});

export default HomeScreen;