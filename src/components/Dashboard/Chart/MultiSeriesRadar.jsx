import * as React from 'react';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';

// Function to format values
function valueFormatter(v) {
    if (v === null) {
        return 'NaN';
    }
    return `${v.toLocaleString()} units`;  // Adjust this based on your data units
}

export default function MultiSeriesRadar() {
    return (
        <RadarChart
            height={300}
            series={[
                {
                    label: 'Technology',
                    data: [35, 44, 24, 34, 28],
                    valueFormatter,
                    color: '#bda9f8', // Technology color
                },
                {
                    label: 'Health',
                    data: [51, 6, 49, 30, 22],
                    valueFormatter,
                    color: '#cabcf9', // Health color
                },
                {
                    label: 'Travel',
                    data: [15, 25, 30, 50, 33],
                    valueFormatter,
                    color: '#d8cffb', // Travel color
                },
                {
                    label: 'Education',
                    data: [15, 25, 30, 50, 33],
                    valueFormatter,
                    color: '#e5e0fc', // Education color
                },
                {
                    label: 'Lifestyle',
                    data: [60, 50, 15, 25, 10],
                    valueFormatter,
                    color: '#f2f2fd', // Lifestyle color
                },
            ]}
            radar={{
                metrics: ['Technology', 'Health', 'Travel', 'Education', 'Lifestyle'],  // Labels for your categories
            }}
        />
    );
}
