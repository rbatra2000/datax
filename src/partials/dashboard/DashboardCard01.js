import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {

  const [dates, setDates] = useState([])
  const [chartData, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const toTimestamp = (strDate) => {
    const dt = Date.parse(strDate);
    return dt / 1000;
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/bus_covid")
      .then(response => response.json()
        .then(data => {
          var old_dates = data["New Date"]
          var new_dates = []
          for (var date in old_dates) {
            new_dates.push(toTimestamp(date))
          }
          var new_data = []
          for (let step = 0; step < 611; step++) {
            new_data.push(data["Buses: Total Estimated Ridership"][step])
          }
          setDates(new_dates)
          setData(new_data)
          setLoading(true)
          console.log(new_data)
        })
      )
  }, []);

  if (!loading) {
    return <div></div>
  }

  const chart = {
    labels: dates,
    datasets: [
      // Indigo line
      {
        data: chartData,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };

  // console.log(chart)


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          {/* <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu> */}
        </header>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">New York</h2>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Bus Total Estimated Ridership</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">2.25M</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-red-500 rounded-full">-</div>
        </div>
      </div>
      {/* {dates} */}
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chart} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard01;
