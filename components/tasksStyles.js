import { StyleSheet, PixelRatio } from "react-native";

if (PixelRatio.get() > 1) {
  // Smthing else than WEB version
  var FONT_H1_LABEL = 64;
  var MAINMSG_LEFT_STYLE = 50;
  var PLUS_MARGINRIGHT_STYLE = 50;
} else {
  var FONT_H1_LABEL = 96;
  var MAINMSG_LEFT_STYLE = 100;
  var PLUS_MARGINRIGHT_STYLE = 150;
}

const styles = StyleSheet.create({
  mainMessage: {
    position: "relative",
    left: MAINMSG_LEFT_STYLE,
    top: 83,
    lineHeight: 6,
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
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  items: {
    position: "relative",
    color: "#ffcc33",
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  writeTaskWrapper: {
    position: "absolute",
    top: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginRight: 5,
    backgroundColor: "#000",
    borderRadius: 42,
    borderColor: "#ffcc33",
    borderWidth: 2,
    width: "80%",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 2,
    marginRight: PLUS_MARGINRIGHT_STYLE,
  },
  addText: {
    color: "#ffcc33",
    fontSize: 24,
  },
});

export { styles };
