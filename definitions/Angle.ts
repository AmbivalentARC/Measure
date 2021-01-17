import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Angle extends Measurement<Angle>() {
  public unit: AngleUnit;
  public constructor(value: number | number[], unit: AngleUnit) {
    super(value, unit, "Angle");
  }
  public static get id(): NamedMeasure["Angle"] {
    return "Angle";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "rad",
        ratio: 1
      }
    };
  }
  public static get metric() {
    return {
      rad: {
        id: "rad",
        latexId: "rad",
        name: {
          singular: "radian",
          nonSingular: "radians"
        },
        conversionFactor: 1
      } as UnitData,
      "°": {
        id: "°",
        latexId: "°",
        name: {
          singular: "degree",
          nonSingular: "degrees"
        },
        conversionFactor: 1.745329e-2
      } as UnitData,
      arcmin: {
        id: "arcmin",
        latexId: "^′",
        name: {
          singular: "minute",
          nonSingular: "minutes"
        },
        conversionFactor: 2.908882e-4
      } as UnitData,
      arcsec: {
        id: "arcsec",
        latexId: "^′",
        name: {
          singular: "second",
          nonSingular: "seconds"
        },
        conversionFactor: 4.848137e-6
      } as UnitData,
      arcrev: {
        id: "arcrev",
        latexId: "r",
        name: {
          singular: "revolution",
          nonSingular: "revolutions"
        },
        conversionFactor: 4.848137e-6
      } as UnitData
    };
  }
  public static get imperial() {
    return {};
  }
  public static get SI(): "rad" {
    return Angle.units()["rad"];
  }
}

export type AngleUnit = keyof {
  [P in keyof (typeof Angle.metric & typeof Angle.imperial)]: any
};
