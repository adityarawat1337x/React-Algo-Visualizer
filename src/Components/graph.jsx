import React from "react";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
  VerticalBarSeries,
} from "react-vis";

function Graph(props) {
  const { Data } = props;
  return (
    <>
      <XYPlot height={480} width={720} color="rgb(214, 51, 141)">
        <VerticalBarSeries animation="noWobble" data={Data}></VerticalBarSeries>
        <XAxis />
        <YAxis />
      </XYPlot>
    </>
  );
}

export default Graph;
