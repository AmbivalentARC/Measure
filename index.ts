// Source of conversion factors  https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9

import { Acceleration } from "./definitions/Acceleration";
import { Angle } from "./definitions/Angle";
import { Area } from "./definitions/Area";
import { DensityOfHeatFlowRate } from "./definitions/DensityOfHeatFlowRate";
import { Energy } from "./definitions/Energy";
import { EnergyFlux } from "./definitions/EnergyFlux";
import { EnergyPerArea } from "./definitions/EnergyPerArea";
import { Force } from "./definitions/Force";
import { ForcePerLength } from "./definitions/ForcePerLength";
import { HeatCapacity } from "./definitions/HeatCapacity";
import { HeatTransferCoef } from "./definitions/HeatTransferCoef";
import { Length } from "./definitions/Length";
import { Mass } from "./definitions/Mass";
import { Temperature } from "./definitions/Temperature";
import { Measurement, NamedMeasure } from "./Measurement";
// // Import stylesheets
// import "./style.css";

// // // Write TypeScript code!
// // const appDiv: HTMLElement = document.getElementById("app");
// // appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//type h = {[P in keyof typeof Quantity]:(value:number|number[],unit:typeof Quantity[P]["prototype"]["unit"])=> typeof Quantity[P]["prototype"]}

/**
 * todo
 * rename the Measure class to Measurement and update unit class inheritance accordingly
 */

// TIP-1 - class id must be the same as the registered measure
export const Measures = {
  Acceleration,
  Angle,
  Area,
  DensityOfHeatFlowRate,
  Energy,
  EnergyFlux,
  EnergyPerArea,
  Force,
  ForcePerLength,
  HeatCapacity,
  HeatTransferCoef,
  Length,
  Mass,
  Temperature
};

export const Measure = Object.keys(Measures).reduce(
  (a: object, k) => ({
    ...a,
    [k]: (value: number | number[], unit: string) =>
      new Measures[k](value, unit)
  }),
  {}
) as {
  [P in keyof typeof Measures]: (
    value: number | number[],
    unit: typeof Measures[P]["prototype"]["unit"]
  ) => typeof Measures[P]["prototype"]
};

console.log(11, process.env);
console.log(Measures);
const a = Measure.Length(1, "cm")
  .convertTo("cm")
  .convertTo("fathom")
  .convertTo("ft")
  .convertTo("ft-us")
  .convertTo("in")
  .convertTo("km");
// .convertTo("m")
// .convertTo("mi")
// .convertTo("mm")
// .convertTo("nMi")
// .convertTo("yd")
// .convertTo("fathom");
const b = Measure.Area(1, "mi2").convertTo("m2");
const c = Measure.Energy(1, "kW-h").convertTo("ft-lbf");
const d = Measure.EnergyPerArea(1, "Btu/ft2").convertTo("J/m2");

console.log({ a, b, c, d });

///////    TODO //////////
// toSI()
// toBest()
// conversion table for a selected unit for each Measure
// conversion matrix for each Meashre

const f = Measure.Mass(
  [2.549, 2.55, 25555.55500001, 1.1, 1, 0.9005003, 0.9999],
  "t"
);
f.printOptions.unit("name").value("toSD", 3);
console.log({ f }, f.toPrint());
console.log("hello") 
console.log(Measure.Length(23,"cm").convertTo("mm"))
var t = Measure.Area([1,2,3,4.99,5,5.16,7,8,9,10],"cm2").convertTo("m2").toPrint2({valueFormat:["toDP",3],unitFormat:"name"})

console.log(2,t,4)