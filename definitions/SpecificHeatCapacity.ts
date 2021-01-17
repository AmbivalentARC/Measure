import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class SpecificHeatCapacity extends Measurement<SpecificHeatCapacity>() {
  public unit: SpecificHeatCapacityUnit;
  public constructor(value: number | number[], unit: SpecificHeatCapacityUnit) {
    super(value, unit, "SpecificHeatCapacity");
  }
  public static get id(): NamedMeasure["SpecificHeatCapacity"] {
    return "SpecificHeatCapacity";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "J/kg-K",
        ratio: new Decimal(1).div(4.1868e3).toNumber()
      },
      imperial: {
        unit: "Btu/lb-F",
        ratio: 4.1868e3
      }
    };
  }
  public static get metric() {
    return {
      "J/kg-K": {
        id: "J/kg-K",
        latexId: "J/(kg·K)",
        name: {
          singular: "joule per kilogram kelvin",
          nonSingular: "joules per kilogram kelvin"
        },
        conversionFactor: 1
      } as UnitData,
      "cal/g-C": {
        id: "cal/g-C",
        latexId: "cal_{IT}/(g·°C)",
        name: {
          singular: "calorie(IT) per gram degree Celsius",
          nonSingular: "calories(IT) per gram degree Celsius"
        },
        conversionFactor: 4.1868e3
      } as UnitData,
      "cal/g-K": {
        id: "cal/g-K",
        latexId: "cal_{IT}/(g·°K)",
        name: {
          singular: "calorie(IT) per gram degree kelvin",
          nonSingular: "calories(IT) per gram degree kelvin"
        },
        conversionFactor: 4.1868e3
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu/lb-F": {
        id: "Btu/lb-F",
        latexId: "Btu/(lb·°F)",
        name: {
          singular: "British thermal unit(IT) per pound degree Fahrenheit",
          nonSingular: "British thermal units(IT) per pound degree Fahrenheit"
        },
        conversionFactor: 1
      } as UnitData,
      "Btu/lb-R": {
        id: "Btu/lb-R",
        latexId: "Btu/(lb·°R)",
        name: {
          singular: "British thermal unit(IT) per pound degree Rankine",
          nonSingular: "British thermal units(IT) per pound degree Rankine"
        },
        conversionFactor: new Decimal(4.1868e3)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "J/kg-K" {
    return SpecificHeatCapacity.units()["J/kg-K"];
  }
}

export type SpecificHeatCapacityUnit = keyof {
  [P in keyof (typeof SpecificHeatCapacity.metric &
    typeof SpecificHeatCapacity.imperial)]: any
};
