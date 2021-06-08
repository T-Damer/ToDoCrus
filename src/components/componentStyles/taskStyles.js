import { StyleSheet, PixelRatio } from "react-native";

const taskStyle = StyleSheet.create({
  item: {
    backgroundColor: "#000",
    margin: 15,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    borderWidth: 2,
    borderColor: "#ffcc33",
  },
  itemTextComplete: {
    fontSize: 24,
    maxWidth: 1400 / (PixelRatio.get() * 3),
    color: "#ffcc33",
    textDecorationLine: "line-through",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#ffcc33",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    marginLeft: -15,
  },
  itemText: {
    fontSize: 24,
    maxWidth: 1400 / (PixelRatio.get() * 3),
    color: "#ffcc33",
  },
  button: {
    marginRight: 6,
  },
  buttons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: 36,
    height: 12,
    marginLeft: 20,
    marginBottom: 16,
  },
});

export default taskStyle;
