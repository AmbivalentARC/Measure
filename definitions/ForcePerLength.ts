import { SurfaceTension } from "./SurfaceTension";
import { Measurement, NamedMeasure, MeasureAnchors } from "../Measurement";

export class ForcePerLength extends Measurement<ForcePerLength>() {
  public unit: ForcePerLengthUnit;
  public constructor(value: number | number[], unit: ForcePerLengthUnit) {
    super(value, unit, "ForcePerLength");
  }
  public static get id(): NamedMeasure["ForcePerLength"] {
    return "ForcePerLength";
  }
  public static get anchors(): MeasureAnchors {
    return { ...SurfaceTension.anchors };
  }
  public static get metric() {
    return SurfaceTension.metric;
  }
  public static get imperial() {
    return { ...SurfaceTension.imperial };
  }
  public static get SI(): "N/m" {
    return ForcePerLength.units()["N/m"];
  }
}

export type ForcePerLengthUnit = keyof {
  [P in keyof (typeof SurfaceTension.metric &
    typeof SurfaceTension.imperial)]: any
};
