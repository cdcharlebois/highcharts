import { ReactElement, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import Lib from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsAccessibility from "highcharts/modules/accessibility";
highchartsAccessibility(Lib);

import { HighchartsContainerProps } from "../typings/HighchartsProps";

import "./ui/Highcharts.css";

export function Highcharts({ ds, xattr, yattr }: HighchartsContainerProps): ReactElement {
    if (ds.status !== "available") {
        return <div></div>;
    }
    const seriesData = ds.items?.map(item => [Number(xattr.get(item).value), Number(yattr.get(item).value)]);
    console.warn("seriesdata", seriesData);
    const options = {
        title: {
            text: "my chart"
        },
        series: [
            {
                type: "line",
                data: seriesData
            }
        ]
    };
    return <HighchartsReact highcharts={Lib} options={options} />;
}
