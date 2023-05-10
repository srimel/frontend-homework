import { useEffect, useRef } from 'react';
import axios from 'axios';
import { Chart, DoughnutController, ArcElement, Legend } from 'chart.js';
import './houses.css';

const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

const url = 'https://thronesapi.com/api/v2/Characters';

const getColors = (dataArray, colorArray) => {
  const repeatedColors = [];
  dataArray.forEach((item, index) => {
    repeatedColors.push(colorArray[index % colorArray.length]);
  });
  return repeatedColors;
};

export default function Houses() {
  const donutChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        renderChart(data);
      } catch (error) {
        console.error('Request failed', error);
      }
    };

    fetchData();
  }, []);

  const getHouseNameCounts = function getHouseNameCountsFromData(data) {
    const familyCounts = {};
    data.forEach((obj) => {
      let { family } = obj;
      family = family || obj.lastName;
      familyCounts[family] = familyCounts[family]
        ? familyCounts[family] + 1
        : 1;
    });
    const houseNames = Object.keys(familyCounts);
    const houseCounts = houseNames.map((house) => familyCounts[house]);
    return {
      houseNames,
      houseCounts,
    };
  };

  // FIXME
  const renderChart = function renderTheChart(data) {
    const { houseNames, houseCounts } = getHouseNameCounts(data);
    const donutChart = donutChartRef.current.getContext('2d');

    Chart.register(DoughnutController, ArcElement, Legend);

    new Chart(donutChart, {
      type: 'doughnut',
      data: {
        labels: houseNames,
        datasets: [
          {
            label: 'My First Dataset',
            data: houseCounts,
            backgroundColor: getColors(houseNames, backgroundColors),
            borderColor: getColors(houseNames, borderColors),
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  };

  return (
    <div className="container-houses m-3">
      <div className="chart-box">
        <h1>House Counts</h1>
        <div>
          <canvas ref={donutChartRef} className="donut-chart" />
        </div>
      </div>
    </div>
  );
}
