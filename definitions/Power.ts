import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Power extends Measurement<Power>() {
  public unit: PowerUnit;
  public constructor(value: number | number[], unit: PowerUnit) {
    super(value, unit, "Power");
  }
  public static get id(): NamedMeasure["Power"] {
    return "Power";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "W",
        ratio: new Decimal(1).div(2.930711e-1).toNumber()
      },
      imperial: {
        unit: "Btu/h",
        ratio: 2.930711e-1
      }
    };
  }
  public static get metric() {
    return {
      W: {
        id: "W",
        latexId: "W",
        name: {
          singular: "watt",
          nonSingular: "watts"
        },
        conversionFactor: 1
      } as UnitData,
      "erg/s": {
        id: "erg/s",
        latexId: "erg/s",
        name: {
          singular: "erg per second",
          nonSingular: "erg per seconds"
        },
        conversionFactor: 1e-7
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu/h": {
        id: "Btu/h",
        latexId: "Btu/h",
        name: {
          singular: "British thermal unit(IT) per hour",
          nonSingular: "British thermal units(IT) per hour"
        },
        conversionFactor: 1
      } as UnitData,
      "ft-lbf/s": {
        id: "ft-lbf/s",
        latexId: "ft·lbf/s",
        name: {
          singular: "foot pound-force per second",
          nonSingular: "foot pound-force per second"
        },
        conversionFactor: new Decimal(1.355818)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "ft-lbf/min": {
        id: "ft-lbf/min",
        latexId: "ft·lbf/min",
        name: {
          singular: "foot pound-force per minute",
          nonSingular: "foot pound-force per minute"
        },
        conversionFactor: new Decimal(2.259697e-2)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "ft-lbf/h": {
        id: "ft-lbf/h",
        latexId: "ft·lbf/h",
        name: {
          singular: "foot pound-force per hour",
          nonSingular: "foot pound-force per hour"
        },
        conversionFactor: new Decimal(3.766161e-4)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "W" {
    return Power.units()["W"];
  }
}

export type PowerUnit = keyof {
  [P in keyof (typeof Power.metric & typeof Power.imperial)]: any
};
