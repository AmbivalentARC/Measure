import { EnergyFlux } from "./EnergyFlux";
import { Measurement, NamedMeasure, MeasureAnchors } from "../Measurement";

export class DensityOfHeatFlowRate extends Measurement<
  DensityOfHeatFlowRate
>() {
  public unit: DensityOfHeatFlowRateUnit;
  public constructor(
    value: number | number[],
    unit: DensityOfHeatFlowRateUnit
  ) {
    super(value, unit, "DensityOfHeatFlowRate");
  }
  public static get id(): NamedMeasure["DensityOfHeatFlowRate"] {
    return "DensityOfHeatFlowRate";
  }
  public static get anchors(): MeasureAnchors {
    return { ...EnergyFlux.anchors };
  }
  public static get metric() {
    return EnergyFlux.metric;
  }
  public static get imperial() {
    return { ...EnergyFlux.imperial };
  }
  public static get SI(): "W/m2" {
    return DensityOfHeatFlowRate.units()["W/m2"];
  }
}

export type DensityOfHeatFlowRateUnit = keyof {
  [P in keyof (typeof EnergyFlux.metric & typeof EnergyFlux.imperial)]: any
};
