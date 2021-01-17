import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Temperature extends Measurement<Temperature>() {
  public unit: TemperatureUnit;
  public constructor(value: number | number[], unit: TemperatureUnit) {
    super(value, unit, "Temperature");
  }
  public static get id(): NamedMeasure["Temperature"] {
    return "Temperature";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "C",
        transform(C: number) {
          return new Decimal(C)
            .div(new Decimal(5).div(9))
            .add(32)
            .toNumber();
        }
      },
      imperial: {
        unit: "F",
        transform(F: number) {
          return new Decimal(new Decimal(F).sub(32))
            .mul(5)
            .div(9)
            .toNumber();
        }
      }
    };
  }
  public static get metric() {
    return {
      C: {
        id: "C",
        latexId: "°C",
        name: {
          singular: "degree Celsius",
          nonSingular: "degrees Celsius"
        },
        conversionFactor: 1,
        conversionOffset: 0
      } as UnitData,
      K: {
        id: "K",
        latexId: "°K",
        name: {
          singular: "degree Kelvin",
          nonSingular: "degrees Kelvin"
        },
        conversionFactor: 1,
        conversionOffset: 273.15
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      F: {
        id: "F",
        latexId: "°F",
        name: {
          singular: "degree Fahrenheit",
          nonSingular: "degrees Fahrenheit"
        },
        conversionFactor: 1
      } as UnitData,
      R: {
        id: "R",
        latexId: "°R",
        name: {
          singular: "degree Rankine",
          nonSingular: "degrees Rankine"
        },
        conversionFactor: 1,
        conversionOffset: 459.67
      } as UnitData
    };
  }
  public static get SI(): "m" {
    return Temperature.units().m;
  }
}

export type TemperatureUnit = keyof {
  [P in keyof (typeof Temperature.metric & typeof Temperature.imperial)]: any
};

console.log(42, Temperature.unitsToArray());
console.log(43, Temperature.units());
