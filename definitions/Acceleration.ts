import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Acceleration extends Measurement<Acceleration>() {
  public unit: AccelerationUnit;
  public constructor(value: number | number[], unit: AccelerationUnit) {
    super(value, unit, "Acceleration");
  }
  public static get id(): NamedMeasure["Acceleration"] {
    return "Acceleration";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "m/s2",
        ratio: new Decimal(1).div(3.048e-1).toNumber()
      },
      imperial: {
        unit: "ft/s",
        ratio: new Decimal(1).mul(3.048e-1).toNumber()
      }
    };
  }
  public static get metric() {
    return {
      "m/s2": {
        id: "m/s2",
        latexId: "m/s^2",
        name: {
          singular: "meter per second squared",
          nonSingular: "meters per second squared"
        },
        conversionFactor: 1
      } as UnitData,
      g_n: {
        id: "g_n",
        latexId: "g_n",
        name: {
          singular: "acceleration of free fall",
          nonSingular: "accelerations of free fall"
        },
        conversionFactor: new Decimal(1).mul(9.80665).toNumber()
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "ft/s2": {
        id: "ft/s2",
        latexId: "ft/s^2",
        name: {
          singular: "foot per second squared",
          nonSingular: "feet per second squared"
        },
        conversionFactor: 1
      } as UnitData,
      Gal: {
        id: "gal",
        latexId: "gal",
        name: {
          singular: "gal",
          nonSingular: "gals"
        },
        conversionFactor: new Decimal(1)
          .mul(1e-2)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "in/s2": {
        id: "in/s2",
        latexId: "in/s^2",
        name: {
          singular: "inch per second squared",
          nonSingular: "inches per second squared"
        },
        conversionFactor: new Decimal(1)
          .mul(2.54e-2)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "m/s2" {
    return Acceleration.units()["m/s2"];
  }
}

export type AccelerationUnit = keyof {
  [P in keyof (typeof Acceleration.metric & typeof Acceleration.imperial)]: any
};
