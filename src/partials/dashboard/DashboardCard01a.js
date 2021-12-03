import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01a() {

  const [dates, setDates] = useState([])
  const [chartData, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const toTimestamp = (strDate) => {
    const ts = Date.parse(strDate);
    const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(ts)
    return date.toString();
  }

  useEffect(() => {
    fetch("https://datax-team9.herokuapp.com/subway_covid")
      .then(response => response.json()
        .then(data => {
          var old_dates = data["New Date"]
          var new_dates = []
          for (var key in old_dates) {
            new_dates.push(toTimestamp(old_dates[key]))
          }
          var new_data = []
          for (let step = 0; step < 611; step++) {
            new_data.push(data["Subways: Total Estimated Ridership"][step])
          }
          setDates(new_dates)
          setData(new_data)
          // setDates([0,1,2,3,4,5])
          // setData([10,20,30,40,50])
          setLoading(true)
        })
      )
  }, []);

  if (!loading) {
    return <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
    <div className="px-5 pt-5">
      <header className="flex justify-between items-start mb-2">
        {/* Icon */}
        <img src={Icon} width="32" height="32" alt="Icon 02" />
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
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Loading</h2>
      {/* <div className="flex items-start">
        <div className="text-3xl font-bold text-gray-800 mr-2">2.25M</div>
        <div className="text-sm font-semibold text-white px-1.5 bg-red-500 rounded-full">-</div>
      </div> */}
    </div>
    {/* {dates} */}
    {/* Chart built with Chart.js 3 */}
    {/* <div className="flex-grow">
      {/* Change the height attribute to adjust the chart height */}
  </div>
  }

  const chart = {
    labels: dates,
    datasets: [
      // Indigo line
      {
        label: 'Subways: Total Estimated Ridership',
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
      maintainAspectRatio: false,
    }
  };

  // console.log(chart)


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
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
        <h2 className="text-lg font-semibold text-gray-800 mb-2">NYC Subway Ridership During the Pandemic</h2>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Subways: Total Estimated Ridership</div>
        {/* <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">2.25M</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-red-500 rounded-full">-</div>
        </div> */}
      </div>
      {/* {dates} */}
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chart} width={389} height={300} />
      </div>
    </div>
  );
}

export default DashboardCard01a;
