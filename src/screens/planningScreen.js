import React from "react";
import { PixelRatio } from "react-native";

import PlanScreenWeb from "./planningScreenWeb";
import PlanScreenMob from "./planningScreenMob";

export default function PlanningScreen() {
  if (PixelRatio.get() < 1) {
    return <PlanScreenWeb />;
  }
  if (PixelRatio.get() > 1) {
    return <PlanScreenMob />;
  }
}
