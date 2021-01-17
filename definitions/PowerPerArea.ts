import { EnergyFlux } from "./EnergyFlux";
import { Measurement, NamedMeasure, MeasureAnchors } from "../Measurement";

export class PowerPerArea extends Measurement<PowerPerArea>() {
  public unit: PowerPerAreaUnit;
  public constructor(value: number | number[], unit: PowerPerAreaUnit) {
    super(value, unit, "PowerPerArea");
  }
  public static get id(): NamedMeasure["PowerPerArea"] {
    return "PowerPerArea";
  }
  public static get anchors(): MeasureAnchors {
    return { ...EnergyFlux.anchors };
  }
  public static get metric() {
    return { ...EnergyFlux.metric };
  }
  public static get imperial() {
    return { ...EnergyFlux.imperial };
  }
  public static get SI(): "W/m2" {
    return PowerPerArea.units()["W/m2"];
  }
}

export type PowerPerAreaUnit = keyof {
  [P in keyof (typeof EnergyFlux.metric & typeof EnergyFlux.imperial)]: any
};
