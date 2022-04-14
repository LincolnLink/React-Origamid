import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import './style.css';

const Graficos01 = () => {
  return (
    <>
      <div className="body">
        <h1>Teste com Graficos do Google</h1>
        <div className="exemplo">
          <h3>Grafico em Barra</h3>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
          <br />
          <br />
        </div>
        <div className="exemplo">
          <h3>Grafico em Line</h3>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={dataLine}
            options={optionsLine}
          />
        </div>
        <div className="exemplo">
          <h3>Grafico em Area</h3>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

export default Graficos01;

//Barra
export const data = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2014', 1000, 400, 300],
  ['2015', 1170, 460, 250],
  ['2016', 660, 1120, 300],
  ['2017', 1030, 540, 350],
];

export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
};

//Line

export const dataLine = [
  ['Year', 'Sales', 'Expenses'],
  ['2004', 1000, 400],
  ['2005', 1170, 460],
  ['2006', 660, 2120],
  ['2007', 1030, 540],
];

export const optionsLine = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
};

//area

export const dataArea = [
  ['Year', 'Sales', 'Expenses'],
  ['2013', 1000, 400],
  ['2014', 1170, 460],
  ['2015', 660, 1120],
  ['2016', 1030, 540],
];

export const optionsArea = {
  title: 'Company Performance',
  hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
  vAxis: { minValue: 0 },
  chartArea: { width: '50%', height: '70%' },
};
