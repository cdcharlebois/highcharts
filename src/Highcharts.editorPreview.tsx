import { ReactElement, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
// import { HighchartsPreviewProps } from "../typings/HighchartsProps";

export function preview(): ReactElement {
    // return <HelloWorldSample sampleText={sampleText} />;
    return <div></div>;
}

export function getPreviewCss(): string {
    return require("./ui/Highcharts.css");
}
