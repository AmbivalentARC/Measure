import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class HeatCapacity extends Measurement<HeatCapacity>() {
  public unit: HeatCapacityUnit;
  public constructor(value: number | number[], unit: HeatCapacityUnit) {
    super(value, unit, "HeatCapacity");
  }
  public static get id(): NamedMeasure["HeatCapacity"] {
    return "HeatCapacity";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "J/K",
        ratio: new Decimal(1.899101e3).toNumber()
      },
      imperial: {
        unit: "Btu/F",
        ratio: new Decimal(1).div(1.899101e3).toNumber()
      }
    };
  }
  public static get metric() {
    return {
      "J/K": {
        id: "J/K",
        latexId: "J/°K",
        name: {
          singular: "joule per kelvin",
          nonSingular: "joules per kelvin"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu/F": {
        id: "Btu/F",
        latexId: "Btu/°F",
        name: {
          singular: "British thermal unit(IT) per degree Fahrenheit",
          nonSingular: "British thermal units(IT) per degree Fahrenheit"
        },
        conversionFactor: 1
      } as UnitData,
      "Btu/R": {
        id: "Btu/R",
        latexId: "Btu/°R",
        name: {
          singular: "British thermal unit(IT) per degree Rankine",
          nonSingular: "British thermal units(IT) per degree Rankine"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get SI(): "J/K" {
    return HeatCapacity.units()["J/K"];
  }
}

export type HeatCapacityUnit = keyof {
  [P in keyof (typeof HeatCapacity.metric & typeof HeatCapacity.imperial)]: any
};
