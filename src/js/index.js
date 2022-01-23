import 'owl.carousel';

// produkte slider
$('#produkte-slider').owlCarousel({
  autoWidth: false,
  loop: true,
  autoplayHoverPause: true,
  nav: true,
  dots: false,
  autoplay: true,
  margin: 20,
  items: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Chart js
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const lineChart = document.getElementById('line-chart').getContext('2d');

const dataPoints = [1900, 1950, 2040, 2200, 2400, 2300, 2150, 1850, 1950, 2000];

const chart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: [
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
      '2021',
      'Jan',
      'Feb',
      'Mar',
    ],
    datasets: [
      {
        label: 'Almunium',
        data: dataPoints,
        borderColor: '#f59b00',
        backgroundColor: '#f59b00',
        cubicInterpolationMode: 'monotone',
        fill: false,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        min: 1800,
        max: 2600,
        grid: {
          display: true,
        },
        title: {},
        ticks: {
          stepSize: 200,
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {},
        ticks: {},
      },
    },
    layout: {
      padding: 0,
    },
  },
});
