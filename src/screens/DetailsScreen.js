import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation, route}) => {
    console.log(route);
    const movie = route.params.movie;
    return (
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
        <Text style={{fontSize: 20}}>{movie.title} ({movie.release})</Text>
        <Text style={{fontSize: 100}}>{movie.screenNumber}</Text>
          <Button
            title="Go to Image"
            onPress={() => navigation.navigate("Image")}/>
          <Button
            title="More details"
            onPress={() => {
                movie.screenNumber = movie.screenNumber + 1;
                navigation.navigate("Details", {movie: movie});
                }}/>
          <Button
            title="Go to Home"
            onPress={() => navigation.popToTop()}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;