import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Force extends Measurement<Force>() {
  public unit: ForceUnit;
  public constructor(value: number | number[], unit: ForceUnit) {
    super(value, unit, "Force");
  }
  public static get id(): NamedMeasure["Force"] {
    return "Force";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "N",
        ratio: new Decimal(1).div(4.448222).toNumber()
      },
      imperial: {
        unit: "lbf",
        ratio: 4.448222
      }
    };
  }
  public static get metric() {
    return {
      N: {
        id: "N",
        latexId: "N",
        name: {
          singular: "newton",
          nonSingular: "newtons"
        },
        conversionFactor: 1
      } as UnitData,
      "kg-m/s2": {
        id: "kg-m/s2",
        latexId: "kg·m/s2",
        name: {
          singular: "kilogram meter per squared second",
          nonSingular: "kilogram meters per squared second"
        },
        conversionFactor: 1
      } as UnitData,
      kgf: {
        id: "kgf",
        latexId: "kgf",
        name: {
          singular: "kilogram-force",
          nonSingular: "kilogram-forces"
        },
        conversionFactor: 9.80665
      } as UnitData,
      dyn: {
        id: "dyn",
        latexId: "dyn",
        name: {
          singular: "dyne",
          nonSingular: "dynes"
        },
        conversionFactor: 1e-5
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      lbf: {
        id: "lbf",
        latexId: "lbf",
        name: {
          singular: "pound-force",
          nonSingular: "pound-force"
        },
        conversionFactor: 1
      } as UnitData,
      poundal: {
        id: "poundal",
        latexId: "poundal",
        name: {
          singular: "poundal",
          nonSingular: "poundals"
        },
        conversionFactor: new Decimal(1.38255e-1)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      ozf: {
        id: "ozf",
        latexId: "ozf",
        name: {
          singular: "ounce (avoirdupois)-force",
          nonSingular: "ounce (avoirdupois)-forces"
        },
        conversionFactor: new Decimal(2.780139e-1)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      kip: {
        id: "kip",
        latexId: "kip",
        name: {
          singular: "x1000 pound-force",
          nonSingular: "x1000 pound-forces"
        },
        conversionFactor: new Decimal(4.448222e3)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "ton-force": {
        id: "ton-force",
        latexId: "ton-force",
        name: {
          singular: "x2000 pound-force",
          nonSingular: "x2000 pound-forces"
        },
        conversionFactor: new Decimal(8.896443e3)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "N" {
    return Force.units()["N"];
  }
}

export type ForceUnit = keyof {
  [P in keyof (typeof Force.metric & typeof Force.imperial)]: any
};
