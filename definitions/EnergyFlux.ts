import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class EnergyFlux extends Measurement<EnergyFlux>() {
  public unit: EnergyFluxUnit;
  public constructor(value: number | number[], unit: EnergyFluxUnit) {
    super(value, unit, "EnergyFlux");
  }
  public static get id(): NamedMeasure["EnergyFlux"] {
    return "EnergyFlux";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "W/m2",
        ratio: new Decimal(1).div(1.550003e3).toNumber()
      },
      imperial: {
        unit: "W/in2",
        ratio: 1.550003e3
      }
    };
  }
  public static get metric() {
    return {
      "W/m2": {
        id: "W/m2",
        latexId: "W/m^2",
        name: {
          singular: "watt per square meter",
          nonSingular: "watts per square meter"
        },
        conversionFactor: 1
      } as UnitData,
      "kg/s3": {
        id: "kg/s3",
        latexId: "kg/s^3",
        name: {
          singular: "kilogram per cubic second",
          nonSingular: "kilograms per cubic second"
        },
        conversionFactor: 1
      } as UnitData,
      "W/cm2": {
        id: "W/cm2",
        latexId: "W/cm^2",
        name: {
          singular: "watt per square centimeter",
          nonSingular: "watts per square centimeter"
        },
        conversionFactor: 1e4
      } as UnitData,
      "erg/cm2-s": {
        id: "erg/cm2-s",
        latexId: "erg/(cm^2·s)",
        name: {
          singular: "watt per square centimeter",
          nonSingular: "watts per square centimeter"
        },
        conversionFactor: 1e3
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "W/in2": {
        id: "W/in2",
        latexId: "W/in^2",
        name: {
          singular: "watt per square inch",
          nonSingular: "watts per square inch"
        },
        conversionFactor: 1
      } as UnitData,
      "cal/cm2-s": {
        id: "cal/cm2-s",
        latexId: "cal_{th}/(cm^2·s)",
        name: {
          singular: "calorie(th) per square centimeter second",
          nonSingular: "calories(th) per square centimeter second"
        },
        conversionFactor: new Decimal(4.184e4)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "cal/cm2-min": {
        id: "cal/cm2-min",
        latexId: "cal_{th}/(cm^2·min)",
        name: {
          singular: "calorie(th) per square centimeter min",
          nonSingular: "calories(th) per square centimeter min"
        },
        conversionFactor: new Decimal(6.973333e2)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "BTU/ft2-h": {
        id: "BTU/ft2-h",
        latexId: "BTU/(ft^2·h)",
        name: {
          singular: "British thermal unit per square foot hour",
          nonSingular: "British thermal units per square foot hour"
        },
        conversionFactor: new Decimal(3.154591)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "BTU/ft2-min": {
        id: "BTU/ft2-min",
        latexId: "BTU/(ft^2·min)",
        name: {
          singular: "British thermal unit per square foot minute",
          nonSingular: "British thermal units per square foot minute"
        },
        conversionFactor: new Decimal(1.891489e2)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "BTU/ft2-s": {
        id: "BTU/ft2-s",
        latexId: "BTU/(ft^2·s)",
        name: {
          singular: "British thermal unit per square foot second",
          nonSingular: "British thermal units per square foot second"
        },
        conversionFactor: new Decimal(1.135653e4)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "W/m2" {
    return EnergyFlux.units()["W/m2"];
  }
}

export type EnergyFluxUnit = keyof {
  [P in keyof (typeof EnergyFlux.metric & typeof EnergyFlux.imperial)]: any
};
