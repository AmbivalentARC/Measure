import { HeatCapacity } from "./HeatCapacity";
import { Measurement, NamedMeasure, MeasureAnchors } from "../Measurement";

export class Entropy extends Measurement<Entropy>() {
  public unit: EntropyUnit;
  public constructor(value: number | number[], unit: EntropyUnit) {
    super(value, unit, "Entropy");
  }
  public static get id(): NamedMeasure["Entropy"] {
    return "Entropy";
  }
  public static get anchors(): MeasureAnchors {
    return { ...HeatCapacity.anchors };
  }
  public static get metric() {
    return HeatCapacity.metric;
  }
  public static get imperial() {
    return { ...HeatCapacity.imperial };
  }
  public static get SI(): "J/K" {
    return Entropy.units()["J/K"];
  }
}

export type EntropyUnit = keyof {
  [P in keyof (typeof HeatCapacity.metric & typeof HeatCapacity.imperial)]: any
};
