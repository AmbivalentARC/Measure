import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Length extends Measurement<Length>() {
  public unit: LengthUnit;
  public constructor(value: number | number[], unit: LengthUnit) {
    super(value, unit, "Length");
  }
  public static get id(): NamedMeasure["Length"] {
    return "Length";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "m",
        ratio: new Decimal(3.28084).toNumber()
      },
      imperial: {
        unit: "ft",
        ratio: new Decimal(1).div(3.28084).toNumber()
      }
    };
  }
  public static get metric() {
    return {
      m: {
        id: "m",
        latexId: "m",
        name: {
          singular: "Meter",
          nonSingular: "Meters"
        },
        conversionFactor: 1
      } as UnitData,
      km: {
        id: "km",
        latexId: "km",
        name: {
          singular: "Kilometer",
          nonSingular: "Kilometers"
        },
        conversionFactor: 1000
      } as UnitData,
      mm: {
        id: "mm",
        latexId: "mm",
        name: {
          singular: "Millimeter",
          nonSingular: "Millimeters"
        },
        conversionFactor: new Decimal(1).div(1000).toNumber()
      } as UnitData,
      cm: {
        id: "cm",
        latexId: "cm",
        name: {
          singular: "Centimeter",
          nonSingular: "Centimeters"
        },
        conversionFactor: new Decimal(1).div(100).toNumber()
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      ft: {
        id: "ft",
        latexId: "ft",
        name: {
          singular: "Foot",
          nonSingular: "Feet"
        },
        conversionFactor: 1
      } as UnitData,
      in: {
        id: "in",
        latexId: "in",
        name: {
          singular: "Inch",
          nonSingular: "Inches"
        },
        conversionFactor: new Decimal(1).div(12).toNumber()
      } as UnitData,
      yd: {
        id: "yd",
        latexId: "yd",
        name: {
          singular: "Yard",
          nonSingular: "Yards"
        },
        conversionFactor: 3
      } as UnitData,
      "ft-us": {
        id: "ft-us",
        latexId: "ft-us",
        name: {
          singular: "US Survey Foot",
          nonSingular: "US Survey Feet"
        },
        conversionFactor: new Decimal(1.000002).toNumber()
      } as UnitData,

      fathom: {
        id: "fathom",
        latexId: "fathom",
        name: {
          singular: "Fathom",
          nonSingular: "Fathoms"
        },
        conversionFactor: 6
      } as UnitData,
      mi: {
        id: "mi",
        latexId: "mile",
        name: {
          singular: "Mile",
          nonSingular: "Miles"
        },
        conversionFactor: 5280
      } as UnitData,
      nMi: {
        id: "nMi",
        latexId: "nMi",
        name: {
          singular: "Nautical Mile",
          nonSingular: "Nautical Miles"
        },
        conversionFactor: new Decimal(6076.12).toNumber()
      } as UnitData
    };
  }
  public static get SI(): "m" {
    return Length.units().m;
  }
}

export type LengthUnit = keyof {
  [P in keyof (typeof Length.metric & typeof Length.imperial)]: any
};

console.log(22, Length.unitsToArray());
console.log(23, Length.units());
