import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart = ({ maxTemperatures, timeStamps }) => {
  const minTemperature = Math.min(...maxTemperatures); // Weekly lowest max temperature
  const maxTemperature = Math.max(...maxTemperatures); // Weekly highest max temperature

  const chartData = {
    labels: timeStamps.map((time, index) => `Day ${index + 1}`), // Labels for each day
    datasets: [
      {
        label: '',
        data: maxTemperatures,
        borderColor: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart fills the container
    plugins: {
      legend: { display: false }, // Hide legend
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
        min: minTemperature - 5,
        max: maxTemperature + 5,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0, // Remove points from the chart
      },
    },
    layout: {
      padding: { top: 0, bottom: 0, left: 0, right: 0 }, // Smaller padding inside the chart
    },
  };

  return (
    <div className="rounded-lg border border-white bg-transparent relative w-[300px] h-[200px] md:w-[450px] md:h-[250px]"> {/* Reduced padding and height */}
      <Line data={chartData} options={options} />

      {/* Custom horizontal lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{ top: '28%', borderTop: '1px solid rgba(255, 255, 255, 0.5)', width: '100%' }}
        />
        <div
          className="absolute"
          style={{ top: '61%', borderTop: '1px solid rgba(255, 255, 255, 0.5)', width: '100%' }}
        />
        <div
          className="absolute"
          style={{ top: '95%', borderTop: '1px solid rgba(255, 255, 255, 0.5)', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default TemperatureChart;
