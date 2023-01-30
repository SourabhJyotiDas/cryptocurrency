import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)


export default function Chart({ chartArray = [], currency, days }) {
    // console.log(chartArray);

    const prices = [];
    const date = [];

    for (let i = 0; i < chartArray.length; i++) {
        if (days === "24h") date.push(new Date(chartArray[i][0]).toLocaleTimeString());
        else date.push(new Date(chartArray[i][0]).toLocaleDateString());
        prices.push(chartArray[i][1]);
    }
    // console.log(date);

    const data = {
        labels: date,
        datasets: [{
            label: `price in ${currency}`,
            data: prices, borderColor: "rgb(255,99,132)",
            backgroundColor: "rgb(255,99,132,0.5)"
        }]
    }

    return (
        <div>
            <Line options={{
                responsive: true,
            }}
                data={data}

            />

        </div>
    )
}
