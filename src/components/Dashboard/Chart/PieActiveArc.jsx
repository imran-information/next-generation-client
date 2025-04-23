import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieActiveArc = () => {
    const data = [
        { id: 0, value: 165, label: 'Q1', color: '#bda9f8' },
        { id: 1, value: 158, label: 'Q2', color: '#cabcf9' },
        { id: 2, value: 153, label: 'Q3', color: '#d8cffb' },
        { id: 3, value: 153, label: 'Q4', color: '#e5e0fc' },
        { id: 4, value: 160, label: 'Q5', color: '#f2f2fd' },
    ];

    return (
        <PieChart
            series={[
                {
                    data: data,
                    innerRadius: 40,
                    outerRadius: 120,
                    arcLabel: (item) => `${item.label}: ${item.value}`,
                },
            ]}
            height={320}
        />
    );
};

export default PieActiveArc;
