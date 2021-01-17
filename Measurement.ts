import { Measures } from "./";
import Decimal from "decimal.js";
import { Length } from "./definitions/Length";
import { Mass } from "./definitions/Mass";

export interface UnitName {
  singular: string;
  nonSingular: string;
}

export type UnitPrefix = boolean;
export type UnitSymbol = string;
export type UnitId = string;
export type UnitConversionFactor = number;
export type UnitConversionOffset = number;

export interface UnitData {
  name: UnitName;
  prefix?: UnitPrefix;
  id: UnitId;
  latexId: UnitSymbol; // symbol in latex formated for display & print
  conversionFactor: UnitConversionFactor;
  conversionOffset?: UnitConversionOffset;
}

export interface MeasureAnchorSystem {
  unit: string;
  ratio?: number;
  transform?: (val: number) => number;
}

export interface MeasureAnchors {
  metric: MeasureAnchorSystem;
  imperial?: MeasureAnchorSystem;
}

export type NamedMeasure = { [P in keyof typeof Measures]: P };

type integer = number;
export type ValueFormat =
  | "toDP"
  | "toExponential"
  | "toSD"
  | "toPrecision"
  | "toString";

type UnitFormat = "latexId" | "id" | "name";
function Measurement<T>() {
  abstract class Measurement {
    public value: number | number[];
    public unit: T["unit"];
    readonly measure: keyof NamedMeasure;
    private valueFormat: [ValueFormat, integer] = ["toSD", 9];
    private unitFormat: UnitFormat = "id";
    constructor(
      value: number | number[],
      unit: T["unit"],
      measure: keyof NamedMeasure
    ) {
      (this.value = value), (this.unit = unit), (this.measure = measure);
    }
    public convertTo = function(unit: T["unit"]): T | undefined {
      const to = String(unit);
      const from = String(this.unit);
      const value: number[] =
        typeof this.value === "number" ? [this.value] : this.value;
      const measureData = Measures[this.measure];
      // no conversion if units are the same
      if (to === from) return this;
      if (!measureData) return undefined;

      let result: number[] = undefined;
      const fromData = measureData.unitData(from);
      const toData = measureData.unitData(to);
      const fromSystem = Object.keys(measureData.metric).includes(from)
        ? "metric"
        : "imperial";
      const toSystem = Object.keys(measureData.metric).includes(to)
        ? "metric"
        : "imperial";

      // convert from the source value to its anchor
      // apply conversion factor
      result = value.map(val =>
        new Decimal(val).mul(fromData.conversionFactor).toNumber()
      );

      // for units that require a shift (e.g. C to F)
      // apply offset to anchor
      if (!!fromData.conversionOffset) {
        result = result.map(val =>
          new Decimal(val).sub(fromData.conversionOffset).toNumber()
        );
      }

      // use anchors factors/transforms to conver from metric to imperial or vice versa
      if (fromSystem !== toSystem) {
        let anchor = measureData.anchors[fromSystem];
        const transform = anchor.transform;
        if (typeof transform === "function") {
          result = result.map(val => transform(val));
        } else {
          result = result.map(val =>
            new Decimal(val).mul(anchor.ratio).toNumber()
          );
        }
      }

      // for units that require a shift (e.g. C to F)
      // apply conversiion offset
      if (!!toData.conversionOffset) {
        result = result.map(val =>
          new Decimal(val).sub(toData.conversionOffset).toNumber()
        );
      }

      // convert to the destination unit
      // apply conversion factor
      result = result.map(val =>
        new Decimal(val).div(toData.conversionFactor).toNumber()
      );

      return new measureData(result.length === 1 ? result[0] : result, unit);
    };
    public get printOptions() {
      const me = this;
      return {
        value: (vlaueFormat: ValueFormat, n: integer) => {
          me.valueFormat = [vlaueFormat, n];
          return { unit: this.printOptions.unit };
        },
        unit: (unitFormat: UnitFormat) => {
          me.unitFormat = unitFormat;
          return { value: this.printOptions.value };
        }
      };
    }
    /**
     * returns a tupple of value unit pairs
     * for each value in the values object
     */
    public toPrint = (): [string, string][] => {
      const value: number[] =
        typeof this.value === "number" ? [this.value] : this.value;
      const unitData = Measures[this.measure].unitData(String(this.unit));
      return value.map(val => {
        const v =
          this.valueFormat[0] === "toString"
            ? String(val)
            : new Decimal(val)
                [this.valueFormat[0]](
                  this.valueFormat[1],
                  Decimal.ROUND_HALF_EVEN
                )
                .toString();
        const u =
          this.unitFormat === "name"
            ? Number(v) === 1
              ? unitData.name.singular.toLowerCase()
              : unitData.name.nonSingular.toLowerCase()
            : this.unitFormat === "latexId"
            ? unitData.latexId
            : String(this.unit);
        return [v, u];
      });
    };

    public static unitsImperialToArray = function(): string[] {
      return Object.keys(this.imperial);
    };
    public static unitsMetricToArray = function(): string[] {
      return Object.keys(this.metric).sort();
    };
    public static unitsToArray = function(): string[] {
      return Object.keys({ ...this.metric, ...this.imperial }).sort();
    };
    public static units = function() {
      console.log({ ...this.metric, ...this.imperial });
      return Object.keys({ ...this.metric, ...this.imperial })
        .sort()
        .reduce((a, c) => {
          return { ...a, [c]: c };
        }, {}) as { [P in T["unit"]]: P };
    };
    public static unitData = function(unit: T["unit"] | string): UnitData {
      return this[this.unitSystem(unit)][unit];
    };
    public static unitSystem = function(unit: T["unit"]): string {
      return Object.keys(this.metric).includes(String(unit))
        ? "metric"
        : "imperial";
    };
    public static getAnchorSystem = function(
      system: keyof MeasureAnchors
    ): MeasureAnchorSystem {
      return this.anchors[system];
    };

    // public static getUnitSystem = function(unit: T["unit"]): string {
    //   return Object.keys(this.metric).includes(String(unit))
    //     ? "metric"
    //     : "imperial";
    // };
    // public static get g() {
    //   return {} as T;
    // }
  }
  return Measurement;
}

export { Measurement };
