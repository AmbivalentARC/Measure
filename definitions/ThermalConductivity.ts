import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class ThermalConductivity extends Measurement<ThermalConductivity>() {
  public unit: ThermalConductivityUnit;
  public constructor(value: number | number[], unit: ThermalConductivityUnit) {
    super(value, unit, "ThermalConductivity");
  }
  public static get id(): NamedMeasure["ThermalConductivity"] {
    return "ThermalConductivity";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "W/m-K",
        ratio: new Decimal(1).div(1.730735).toNumber()
      },
      imperial: {
        unit: "Btu-ft/h-ft2-F",
        ratio: 1.730735
      }
    };
  }
  public static get metric() {
    return {
      "W/m-K": {
        id: "W/m-K",
        latexId: "W/(m·K)",
        name: {
          singular: "watt per meter",
          nonSingular: "watts per meter"
        },
        conversionFactor: 1
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "Btu-ft/h-ft2-F": {
        id: "Btu-ft/h-ft2-F",
        latexId: "Btu_{IT}·in/(h·ft2·°F)",
        name: {
          singular:
            "Britsh thermal unit(IT) foot per hour square foot degree Fahrenheit",
          nonSingular:
            "Britsh thermal units(IT) foot per hour square foot degree Fahrenheit"
        },
        conversionFactor: 1
      } as UnitData,
      "Btu-in/h-ft2-F": {
        id: "Btu-in/h-ft2-F",
        latexId: "Btu_{IT}·in/(h·ft2·°F)",
        name: {
          singular:
            "Britsh thermal unit(IT) inch per hour square foot degree Fahrenheit",
          nonSingular:
            "Britsh thermal units(IT) inch per hour square foot degree Fahrenheit"
        },
        conversionFactor: new Decimal(1.442279e-1)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "Btu-in/s-ft2-F": {
        id: "Btu-in/s-ft2-F",
        latexId: "Btu_{IT}·in/(s·ft2·°F)",
        name: {
          singular:
            "Britsh thermal unit(IT) inch per second square foot degree Fahrenheit",
          nonSingular:
            "Britsh thermal units(IT) inch per second square foot degree Fahrenheit"
        },
        conversionFactor: new Decimal(5.192204e2)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "W/m-K" {
    return ThermalConductivity.units()["W/m-K"];
  }
}

export type ThermalConductivityUnit = keyof {
  [P in keyof (typeof ThermalConductivity.metric &
    typeof ThermalConductivity.imperial)]: any
};
