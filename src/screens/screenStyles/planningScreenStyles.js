import { StyleSheet, PixelRatio } from "react-native";

if (PixelRatio.get() > 1) {
  // Smthing else than WEB version
  var FONT_H1_LABEL = 64;
  var MAINMSG_LEFT_STYLE = 50;
} else {
  var FONT_H1_LABEL = 96;
  var MAINMSG_LEFT_STYLE = 100;
}

const styles = StyleSheet.create({
  mainMessage: {
    position: "absolute",
    left: MAINMSG_LEFT_STYLE,
    top: 65,
  },
  line: {
    position: "absolute",
    backgroundColor: "#ffcc33",
    height: 13,
    width: "76%",
    top: 150,
    left: 50,
    borderRadius: 42,
  },
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  planningScreen: {
    flex: 1,
    backgroundColor: "black",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: FONT_H1_LABEL,
    fontWeight: "bold",
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    padding: 20,
  },
  timeButtonsWrapper: {
    flex: 0.7,
    width: "100%",
    backgroundColor: "#000",
    flexDirection: "row",
  },
  timeButtonText: {
    color: "#ffcc33",
    fontSize: 20,
    fontFamily: "Roboto",
    padding: 20,
  },
});

export default styles;
