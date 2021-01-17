import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class ThermalDiffusivity extends Measurement<ThermalDiffusivity>() {
  public unit: ThermalDiffusivityUnit;
  public constructor(value: number | number[], unit: ThermalDiffusivityUnit) {
    super(value, unit, "ThermalDiffusivity");
  }
  public static get id(): NamedMeasure["ThermalDiffusivity"] {
    return "ThermalDiffusivity";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "m2/s",
        ratio: new Decimal(1).div(1.761102e-1).toNumber()
      }
    };
  }
  public static get metric() {
    return {
      "m2/s": {
        id: "m2/s",
        latexId: "m2/s",
        name: {
          singular: "square meter per second",
          nonSingular: "square meters per second"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {};
  }
  public static get SI(): "m2/s" {
    return ThermalDiffusivity.units()["m2/s"];
  }
}

export type ThermalDiffusivityUnit = keyof {
  [P in keyof (typeof ThermalDiffusivity.metric &
    typeof ThermalDiffusivity.imperial)]: any
};
