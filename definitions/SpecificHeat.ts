import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class SpecificHeat extends Measurement<SpecificHeat>() {
  public unit: SpecificHeatUnit;
  public constructor(value: number | number[], unit: SpecificHeatUnit) {
    super(value, unit, "SpecificHeat");
  }
  public static get id(): NamedMeasure["SpecificHeat"] {
    return "SpecificHeat";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "J/kg",
        ratio: new Decimal(1).div(2.326e3).toNumber()
      },
      imperial: {
        unit: "Btu/lb",
        ratio: 2.326e3
      }
    };
  }
  public static get metric() {
    return {
      "J/kg": {
        id: "J/kg",
        latexId: "J/kg",
        name: {
          singular: "joule per kilogram",
          nonSingular: "joules per kilograms"
        },
        conversionFactor: 1
      } as UnitData,
      "kJ/kg": {
        id: "kJ/kg",
        latexId: "kJ/kg",
        name: {
          singular: "kilojoule per kilogram",
          nonSingular: "kilojoules per kilograms"
        },
        conversionFactor: 1e3
      } as UnitData,
      "cal/g": {
        id: "cal/g",
        latexId: "cal/g",
        name: {
          singular: "calorie per gram",
          nonSingular: "calories per gram"
        },
        conversionFactor: 4.1868e3
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu/lb": {
        id: "Btu/lb",
        latexId: "Btu_{IT}/lb",
        name: {
          singular: "British thermal unit(IT) per pound",
          nonSingular: "British thermal unit(IT) per pound"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get SI(): "J/kg" {
    return SpecificHeat.units()["J/kg"];
  }
}

export type SpecificHeatUnit = keyof {
  [P in keyof (typeof SpecificHeat.metric & typeof SpecificHeat.imperial)]: any
};
