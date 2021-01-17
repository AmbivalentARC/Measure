import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class EnergyPerArea extends Measurement<EnergyPerArea>() {
  public unit: EnergyPerAreaUnit;
  public constructor(value: number | number[], unit: EnergyPerAreaUnit) {
    super(value, unit, "EnergyPerArea");
  }
  public static get id(): NamedMeasure["EnergyPerArea"] {
    return "EnergyPerArea";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "J/m2",
        ratio: new Decimal(1).div(1.135653e4).toNumber()
      },
      imperial: {
        unit: "Btu/ft2",
        ratio: 1.135653e4
      }
    };
  }
  public static get metric() {
    return {
      "J/m2": {
        id: "J/m2",
        latexId: "J/m^2",
        name: {
          singular: "joule per square meter",
          nonSingular: "joules per square meter"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu/ft2": {
        id: "Btu/ft2",
        latexId: "Btu_{IT}/ft^2",
        name: {
          singular: "British thermal unit(IT) per square foot",
          nonSingular: "British thermal units(IT) per square foot"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get SI(): "J/m2" {
    return EnergyPerArea.units()["J/m2"];
  }
}

export type EnergyPerAreaUnit = keyof {
  [P in keyof (typeof EnergyPerArea.metric &
    typeof EnergyPerArea.imperial)]: any
};
