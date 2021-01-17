import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Area extends Measurement<Area>() {
  public unit: AreaUnit;
  public constructor(value: number | number[], unit: AreaUnit) {
    super(value, unit, "Area");
  }
  public static get id(): NamedMeasure["Area"] {
    return "Area";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "m2",
        ratio: new Decimal(1).div(9.290304e-2).toNumber()
      },
      imperial: {
        unit: "ft2",
        ratio: 9.290304e-2
      }
    };
  }
  public static get metric() {
    return {
      m2: {
        id: "m2",
        latexId: "m^2",
        name: {
          singular: "square meter",
          nonSingular: "square meters"
        },
        conversionFactor: 1
      } as UnitData,
      cm2: {
        id: "cm2",
        latexId: "cm^2",
        name: {
          singular: "square centimetre",
          nonSingular: "square centimetres"
        },
        conversionFactor: 1e-4
      } as UnitData,
      mm2: {
        id: "mm2",
        latexId: "mm^2",
        name: {
          singular: "square millimeter",
          nonSingular: "square millimeters"
        },
        conversionFactor: 1e-6
      } as UnitData,
      km2: {
        id: "km2",
        latexId: "km^2",
        name: {
          singular: "square kilometer",
          nonSingular: "square kilometers"
        },
        conversionFactor: 1e6
      } as UnitData,
      ha: {
        id: "ha",
        latexId: "ha",
        name: {
          singular: "hectare",
          nonSingular: "hectares"
        },
        conversionFactor: 1e4
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      ft2: {
        id: "ft2",
        latexId: "ft^2",
        name: {
          singular: "square foot",
          nonSingular: "square feet"
        },
        conversionFactor: 1
      } as UnitData,
      in2: {
        id: "in2",
        latexId: "in^2",
        name: {
          singular: "square inch",
          nonSingular: "square inches"
        },
        conversionFactor: new Decimal(1)
          .mul(6.4516e-4)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      mi2: {
        id: "mi2",
        latexId: "mi^2",
        name: {
          singular: "square mile",
          nonSingular: "square miles"
        },
        conversionFactor: new Decimal(2.589988e6)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      yd2: {
        id: "yd2",
        latexId: "yd^2",
        name: {
          singular: "square yard",
          nonSingular: "square yards"
        },
        conversionFactor: new Decimal(8.361274e-1)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      acre: {
        id: "acre",
        latexId: "acre",
        name: {
          singular: "acre",
          nonSingular: "acres"
        },
        conversionFactor: new Decimal(4.046873e3)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "m2" {
    return Area.units()["m2"];
  }
}

export type AreaUnit = keyof {
  [P in keyof (typeof Area.metric & typeof Area.imperial)]: any
};
