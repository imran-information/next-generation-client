import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const Bar = () => {
    return (
        <BarChart
            series={[
                { data: [35, 44, 24, 34, 28], color: '#00e29a', label: 'Q1' },
                { data: [51, 6, 49, 30, 22], color: '#e0fdf4', label: 'Q2' },
                { data: [15, 25, 30, 50, 33], color: '#66f0c4', label: 'Q3' },
                { data: [15, 25, 30, 50, 33], color: '#00c288', label: 'Q4' },
                { data: [60, 50, 15, 25, 10], color: '#00a675', label: 'Q5' },
            ]}
            height={320}
            xAxis={[
                {
                    data: ['Technology', 'Health', 'Travel', 'Education', 'Lifestyle'],
                    scaleType: 'band',
                    label: 'Categories',
                },
            ]}
            yAxis={[{ label: 'Values' }]}
            sx={{
                [`& .${axisClasses.label}`]: {
                    fontSize: 14,
                    fill: '#555',
                },
                [`& .${axisClasses.tickLabel}`]: {
                    fontSize: 12,
                    fill: '#888',
                },
            }}
            margin={{ top: 20, bottom: 40, left: 60, right: 20 }}
        />
    );
};

export default Bar;
