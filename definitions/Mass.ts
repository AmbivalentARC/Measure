import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Mass extends Measurement<Mass>() {
  public unit: MassUnit;
  public constructor(value: number | number[], unit: MassUnit) {
    super(value, unit, "Mass");
  }
  public static get id(): NamedMeasure["Mass"] {
    return "Mass";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "g",
        ratio: new Decimal(1).div(453.592).toNumber()
      },
      imperial: {
        unit: "lb",
        ratio: 453.592
      }
    };
  }
  public static get metric() {
    return {
      kg: {
        id: "kg",
        name: {
          singular: "Kilogram",
          nonSingular: "Kilograms"
        },
        latexId: "kg",
        conversionFactor: 1000
      } as UnitData,
      g: {
        id: "g",
        name: {
          singular: "Gram",
          nonSingular: "Grams"
        },
        latexId: "g",
        conversionFactor: 1
      } as UnitData,
      mcg: {
        id: "mcg",
        name: {
          singular: "Microgram",
          nonSingular: "Micrograms"
        },
        latexId: "\\mu g",
        conversionFactor: new Decimal(1).div(1000000).toNumber()
      } as UnitData,
      mg: {
        id: "mg",
        name: {
          singular: "Milligram",
          nonSingular: "Milligrams"
        },
        latexId: "mg",
        conversionFactor: new Decimal(1).div(1000).toNumber()
      } as UnitData,

      mt: {
        id: "mt",
        name: {
          singular: "Metric Tonne",
          nonSingular: "Metric Tonnes"
        },
        latexId: "mt",
        conversionFactor: 1000000
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      oz: {
        id: "oz",
        name: {
          singular: "Ounce",
          nonSingular: "Ounces"
        },
        latexId: "oz",
        conversionFactor: new Decimal(1).div(16).toNumber()
      } as UnitData,
      lb: {
        id: "lb",
        name: {
          singular: "Pound",
          nonSingular: "Pounds"
        },
        latexId: "lb",
        conversionFactor: 1
      } as UnitData,
      t: {
        id: "t",
        name: {
          singular: "Ton",
          nonSingular: "Tons"
        },
        latexId: "t",
        conversionFactor: 2000
      } as UnitData
    };
  }
  public static get SI(): "kg" {
    return Mass.units().kg;
  }
}

export type MassUnit = keyof {
  [P in keyof (typeof Mass.metric & typeof Mass.imperial)]: any
};

console.log(32, Mass.units().lb);
