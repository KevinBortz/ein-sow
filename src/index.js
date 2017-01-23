import "./index.css";
import numeral from "numeral";

const currencyValue = numeral(1000).format("$0,0.00");
console.log(`Your mom is worth ${currencyValue}`);
