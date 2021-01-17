import { SpecificHeatCapacity } from "./SpecificHeatCapacity";
import { Measurement, NamedMeasure, MeasureAnchors } from "../Measurement";

export class SpecificEntropy extends Measurement<SpecificEntropy>() {
  public unit: SpecificEntropyUnit;
  public constructor(value: number | number[], unit: SpecificEntropyUnit) {
    super(value, unit, "SpecificEntropy");
  }
  public static get id(): NamedMeasure["SpecificEntropy"] {
    return "SpecificEntropy";
  }
  public static get anchors(): MeasureAnchors {
    return { ...SpecificHeatCapacity.anchors };
  }
  public static get metric() {
    return SpecificHeatCapacity.metric;
  }
  public static get imperial() {
    return { ...SpecificHeatCapacity.imperial };
  }
  public static get SI(): "J/kg-K" {
    return SpecificEntropy.units()["J/kg-K"];
  }
}

export type SpecificEntropyUnit = keyof {
  [P in keyof (typeof SpecificHeatCapacity.metric &
    typeof SpecificHeatCapacity.imperial)]: any
};
