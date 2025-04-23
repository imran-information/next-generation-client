import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieActiveArc = () => {
    const data = [
        { id: 0, value: 165, label: 'Q1', color: '#00e29a' },
        { id: 1, value: 158, label: 'Q2', color: '#e0fdf4' },
        { id: 2, value: 153, label: 'Q3', color: '#66f0c4' },
        { id: 3, value: 153, label: 'Q4', color: '#00c288' },
        { id: 4, value: 160, label: 'Q5', color: '#00a675' },
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
