import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

// Random number generation function
function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const length = 5; // Number of categories
const firstDataSeed = randBetween(0, 5000);
const secondDataSeed = randBetween(0, 5000);

// Initial data setup for both series
const initialFirstData = Array.from({ length }).map(
    (_, __, array) => (array.at(-1) ?? firstDataSeed) + randBetween(-500, 500),
);
const initialSecondData = Array.from({ length }).map(
    (_, __, array) => (array.at(-1) ?? secondDataSeed) + randBetween(-500, 500),
);

export default function LiveLineChart() {
    const categories = ['Technology', 'Health', 'Travel', 'Education', 'Lifestyle']; // Categories for x-axis
    const [firstData, setFirstData] = React.useState(initialFirstData); // Data for the first series
    const [secondData, setSecondData] = React.useState(initialSecondData); // Data for the second series

    React.useEffect(() => {
        // Update data every second
        const intervalId = setInterval(() => {
            setFirstData((prev) => [
                ...prev.slice(1),
                prev.at(-1) + randBetween(-500, 500), // Update the first data series
            ]);
            setSecondData((prev) => [
                ...prev.slice(1),
                prev.at(-1) + randBetween(-500, 500), // Update the second data series
            ]);
        }, 1000); // Update every 1 second

        return () => {
            clearInterval(intervalId); // Clean up interval on unmount
        };
    }, []);

    return (
        <LineChart
            height={300}
            series={[
                {
                    data: secondData,
                    color: '#66f0c4', // Green color for second series
                    strokeWidth: 2, // Thicker line
                },
                {
                    data: firstData,
                    color: '#00c288', // Blue color for first series
                    strokeWidth: 2, // Thicker line
                },
            ]}
            xAxis={[
                {
                    scaleType: 'band', // Use a band scale for categorical data
                    data: categories, // Categories as x-axis labels
                },
            ]}
            yAxis={[{ width: 50 }]} // Y-axis width
            margin={{ right: 24 }} // Margin on the right for the chart
        />
    );
}
