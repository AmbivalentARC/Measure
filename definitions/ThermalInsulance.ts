import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class ThermalDiffusivity extends Measurement<ThermalDiffusivity>() {
  public unit: ThermalDiffusivityUnit;
  public constructor(value: number | number[], unit: ThermalDiffusivityUnit) {
    super(value, unit, "ThermalDiffusivity");
  }
  public static get id(): NamedMeasure["ThermalDiffusivity"] {
    return "ThermalDiffusivity";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "m2-K/W",
        ratio: new Decimal(1).div(1.761102e-1).toNumber()
      },
      imperial: {
        unit: "F-h-ft2/Btu",
        ratio: 1.761102e-1
      }
    };
  }
  public static get metric() {
    return {
      "m2-K/W": {
        id: "m2-K/W",
        latexId: "m2·°K/W",
        name: {
          singular: "square meter kelvin per watt",
          nonSingular: "square meters kelvin per watt"
        },
        conversionFactor: 1
      } as UnitData,
      "m2-C/W": {
        id: "m2-C/W",
        latexId: "m2·°C/W",
        name: {
          singular: "square meter celcius per watt",
          nonSingular: "square meters celcius per watt"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "F-h-ft2/Btu": {
        id: "F-h-ft2/Btu",
        latexId: "°F·h·ft2/Btu_{IT}",
        name: {
          singular:
            "degree Fahrenheit hour square foot per British thermal unit(IT)",
          nonSingular:
            "degree Fahrenheit hour square feet per British thermal unit(IT)"
        },
        conversionFactor: 1
      } as UnitData,
      clo: {
        id: "clo",
        latexId: "clo",
        name: {
          singular: "clo",
          nonSingular: "clo"
        },
        conversionFactor: new Decimal(1.55e-1)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "m2-K/W" {
    return ThermalDiffusivity.units()["m2-K/W"];
  }
}

export type ThermalDiffusivityUnit = keyof {
  [P in keyof (typeof ThermalDiffusivity.metric &
    typeof ThermalDiffusivity.imperial)]: any
};
