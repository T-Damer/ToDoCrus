import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default class FloatingButton extends React.Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  };
  render() {
    const heartStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -190],
          }),
        },
      ],
    };
    const thumbStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -130],
          }),
        },
      ],
    };

    const pinStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };
    return (
      <View
        style={[
          floatingButtonStyles.container,
          this.props.floatingButtonStyles,
        ]}
      >
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              floatingButtonStyles.button,
              floatingButtonStyles.secondary,
              heartStyle,
            ]}
          >
            <AntDesign name="hearto" size={20} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              floatingButtonStyles.button,
              floatingButtonStyles.secondary,
              thumbStyle,
            ]}
          >
            <Entypo name="thumbs-up" size={20} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              floatingButtonStyles.button,
              floatingButtonStyles.secondary,
              pinStyle,
            ]}
          >
            <Entypo name="location-pin" size={20} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View
            style={[
              floatingButtonStyles.button,
              floatingButtonStyles.menu,
              rotation,
            ]}
          >
            <AntDesign name="plus" size={24} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const floatingButtonStyles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#ffcc33",
    shadowOpacity: 1,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: "#ffcc33",
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#ff9900",
  },
});
