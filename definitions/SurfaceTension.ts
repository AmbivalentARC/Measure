import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class SurfaceTension extends Measurement<SurfaceTension>() {
  public unit: SurfaceTensionUnit;
  public constructor(value: number | number[], unit: SurfaceTensionUnit) {
    super(value, unit, "SurfaceTension");
  }
  public static get id(): NamedMeasure["SurfaceTension"] {
    return "SurfaceTension";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "N/m",
        ratio: new Decimal(1).div(1.45939e1).toNumber()
      },
      imperial: {
        unit: "lbf/ft",
        ratio: 1.45939e1
      }
    };
  }
  public static get metric() {
    return {
      "N/m": {
        id: "N/m",
        latexId: "N/m",
        name: {
          singular: "newton per meter",
          nonSingular: "newtons per meters"
        },
        conversionFactor: 1
      } as UnitData,
      "kN/m": {
        id: "kN/m",
        latexId: "kN/m",
        name: {
          singular: "kilonewton per meter",
          nonSingular: "kilonewtons per meters"
        },
        conversionFactor: 1e3
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "lbf/ft": {
        id: "lbf/ft",
        latexId: "lbf/ft",
        name: {
          singular: "pound-force per foot",
          nonSingular: "pound-forces per foot"
        },
        conversionFactor: 1
      } as UnitData,
      "lbf/in": {
        id: "lbf/in",
        latexId: "lbf/in",
        name: {
          singular: "pound-force per inch",
          nonSingular: "pound-forces per inch"
        },
        conversionFactor: new Decimal(1.38255e-1)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "N/m" {
    return SurfaceTension.units()["N/m"];
  }
}

export type SurfaceTensionUnit = keyof {
  [P in keyof (typeof SurfaceTension.metric &
    typeof SurfaceTension.imperial)]: any
};
