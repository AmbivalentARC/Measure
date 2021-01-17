import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class HeatTransferCoef extends Measurement<HeatTransferCoef>() {
  public unit: HeatTransferCoefUnit;
  public constructor(value: number | number[], unit: HeatTransferCoefUnit) {
    super(value, unit, "HeatTransferCoef");
  }
  public static get id(): NamedMeasure["HeatTransferCoef"] {
    return "HeatTransferCoef";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "W/m2-K",
        ratio: new Decimal(1).div(5.678263).toNumber()
      },
      imperial: {
        unit: "Btu/h-ft2-F",
        ratio: 5.678263
      }
    };
  }
  public static get metric() {
    return {
      "W/m2-K": {
        id: "W/m2-K",
        latexId: "W/(m^2·ºK)",
        name: {
          singular: "watt per square meter kelvin",
          nonSingular: "watts per square meter kelvin"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "BTU/h-ft2-F": {
        id: "Btu/h-ft2-F",
        latexId: "BTU_{IT}/(h·ft^2·ºF)",
        name: {
          singular:
            "British thermal unit(IT) per hour square foot degree Fahrenheit",
          nonSingular:
            "British thermal units(IT) per hour square foot degree Fahrenheit"
        },
        conversionFactor: 1
      } as UnitData,
      "BTU/s-ft2-F": {
        id: "Btu/s-ft2-F",
        latexId: "BTU_{IT}/(s·ft^2·ºF)",
        name: {
          singular:
            "British thermal unit(IT) per second square foot degree Fahrenheit",
          nonSingular:
            "British thermal units(IT) per second square foot degree Fahrenheit"
        },
        conversionFactor: new Decimal(2.044175e4)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "W/m2-K" {
    return HeatTransferCoef.units()["W/m2-K"];
  }
}

export type HeatTransferCoefUnit = keyof {
  [P in keyof (typeof HeatTransferCoef.metric &
    typeof HeatTransferCoef.imperial)]: any
};
