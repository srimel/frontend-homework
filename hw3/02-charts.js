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

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const getColors = function getRepeatedColors(dataArray, colorArray) {
  const repeatedColors = [];
  dataArray.forEach((item, index) => {
    repeatedColors.push(colorArray[index % colorArray.length]);
  });
  return repeatedColors;
};

const renderChart = (houses, counts) => {
  const donutChart = document.querySelector('.donut-chart');

  // eslint-disable-next-line no-new, no-undef
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: houses,
      datasets: [
        {
          label: 'My First Dataset',
          data: counts,
          backgroundColor: getColors(houses, backgroundColors),
          borderColor: getColors(houses, borderColors),
          borderWidth: 1,
        },
      ],
    },
  });
};

const getHouseNameCounts = function getHouseNameCounts(data) {
  const familyCounts = {};
  data.forEach((obj) => {
    let { family } = obj;
    family = family || obj.lastName;
    familyCounts[family] = familyCounts[family] ? familyCounts[family] + 1 : 1;
  });
  const houseNames = Object.keys(familyCounts);
  const houseCounts = houseNames.map((house) => familyCounts[house]);
  return {
    houseNames,
    houseCounts,
  };
};

const handleResponseData = function handleJSONResponseData(data) {
  console.log('Response Data: ', data);
  const { houseNames, houseCounts } = getHouseNameCounts(data);
  renderChart(houseNames, houseCounts); // parameterize for labels (houses) and data (counts)
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    handleResponseData(data);
  })
  .catch((error) => {
    console.error('Failed to get response', error);
  });
