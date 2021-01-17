import Decimal from "decimal.js";
import {
  Measurement,
  UnitData,
  NamedMeasure,
  MeasureAnchors
} from "../Measurement";

export class Energy extends Measurement<Energy>() {
  public unit: EnergyUnit;
  public constructor(value: number | number[], unit: EnergyUnit) {
    super(value, unit, "Energy");
  }
  public static get id(): NamedMeasure["Energy"] {
    return "Energy";
  }
  public static get anchors(): MeasureAnchors {
    return {
      metric: {
        unit: "J",
        ratio: new Decimal(1).div(1.355818).toNumber()
      },
      imperial: {
        unit: "ft-lbf",
        ratio: new Decimal(1).mul(1.355818).toNumber()
      }
    };
  }
  public static get metric() {
    return {
      J: {
        id: "J",
        latexId: "J",
        name: {
          singular: "joule",
          nonSingular: "joules"
        },
        conversionFactor: 1
      } as UnitData,
      kJ: {
        id: "kJ",
        latexId: "kJ",
        name: {
          singular: "kilojoule",
          nonSingular: "kilojoules"
        },
        conversionFactor: 1e3
      } as UnitData,
      Nm: {
        id: "Nm",
        latexId: "Nm",
        name: {
          singular: "newton meter",
          nonSingular: "newton meters"
        },
        conversionFactor: 1e3
      } as UnitData,
      cal: {
        id: "cal",
        latexId: "cal_{IT}",
        name: {
          singular: "calorie",
          nonSingular: "calories"
        },
        conversionFactor: 4.1868
      } as UnitData,
      kcal: {
        id: "kcal",
        latexId: "kcal_{IT}",
        name: {
          singular: "kilocalorie",
          nonSingular: "kilocalories"
        },
        conversionFactor: 4.1868e3
      } as UnitData,
      eV: {
        id: "eV",
        latexId: "eV",
        name: {
          singular: "electronvolt",
          nonSingular: "electronvolts"
        },
        conversionFactor: 1.602177e-19
      } as UnitData,
      "kW-h": {
        id: "kW-h",
        latexId: "kW·h",
        name: {
          singular: "kilowatt hour",
          nonSingular: "kilowatt hours"
        },
        conversionFactor: 3.6e6
      } as UnitData,
      "W-h": {
        id: "W-h",
        latexId: "W·h",
        name: {
          singular: "watt hour",
          nonSingular: "watt hours"
        },
        conversionFactor: 3.6e3
      } as UnitData,
      "W-s": {
        id: "W-s",
        latexId: "W·s",
        name: {
          singular: "watt second ",
          nonSingular: "watt second s"
        },
        conversionFactor: 1
      } as UnitData,
      erg: {
        id: "erg",
        latexId: "erg",
        name: {
          singular: "erg",
          nonSingular: "ergs"
        },
        conversionFactor: 1e-7
      } as UnitData
    };
  }
  public static get imperial() {
    return {
      "ft-lbf": {
        id: "ft-lbf",
        latexId: "ft·lbf",
        name: {
          singular: "foot pound-force",
          nonSingular: "foot pound-force"
        },
        conversionFactor: 1
      } as UnitData,
      "therm(EC)": {
        id: "therm(EC)",
        latexId: "therm_{EC}",
        name: {
          singular: "therm (EC)",
          nonSingular: "therms (EC)"
        },
        conversionFactor: new Decimal(1.05506e8)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      "therm(US)": {
        id: "therm-US",
        latexId: "therm_{US}",
        name: {
          singular: "therm (US)",
          nonSingular: "therms (US)"
        },
        conversionFactor: new Decimal(1.054804e8)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      tonTNT: {
        id: "tonTNT",
        latexId: "ton of TNT",
        name: {
          singular: "ton of TNT (energy equivalent)",
          nonSingular: "tons of TNT (energy equivalent)"
        },
        conversionFactor: new Decimal(14.184e9)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      Btu: {
        id: "Btu",
        latexId: "Btu_{IT}",
        name: {
          singular: "British thermal unit",
          nonSingular: "British thermal units"
        },
        conversionFactor: new Decimal(1.05505585262e3)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData,
      quad: {
        id: "quad",
        latexId: "10^{15}Btu_{IT}",
        name: {
          singular: "quad",
          nonSingular: "quads"
        },
        conversionFactor: new Decimal(1.05505585262e18)
          .mul(this.anchors.metric.ratio)
          .toNumber()
      } as UnitData
    };
  }
  public static get SI(): "J" {
    return Energy.units()["J"];
  }
}

export type EnergyUnit = keyof {
  [P in keyof (typeof Energy.metric & typeof Energy.imperial)]: any
};
