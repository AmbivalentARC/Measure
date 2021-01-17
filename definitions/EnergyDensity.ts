import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class EnergyDensity extends Measurement<EnergyDensity>() {
  public unit: EnergyDensityUnit;
  public constructor(value: number | number[], unit: EnergyDensityUnit) {
    super(value, unit, "EnergyDensity");
  }
  public static get id(): NamedMeasure["EnergyDensity"] {
    return "EnergyDensity";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "J/m3",
        ratio: new Decimal(1).div(3.725e4).toNumber()
      },
      imperial: {
        unit: "Btu/ft3",
        ratio: 3.725e4
      }
    };
  }
  public static get metric() {
    return {
      "J/m3": {
        id: "J/m3",
        latexId: "J/m^3",
        name: {
          singular: "joule per cubic meter",
          nonSingular: "joules per cubic meter"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu/ft3": {
        id: "Btu/ft3",
        latexId: "Btu_{IT}/ft^3",
        name: {
          singular: "British thermal unit(IT) per cubic foot",
          nonSingular: "British thermal units(IT) per cubic foot"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get SI(): "J/m3" {
    return EnergyDensity.units()["J/m3"];
  }
}

export type EnergyDensityUnit = keyof {
  [P in keyof (typeof EnergyDensity.metric &
    typeof EnergyDensity.imperial)]: any
};
