import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
// import { collection, getDocs } from "firebase/firestore";
import DashboardCard01a from '../partials/dashboard/DashboardCard01a';
import DashboardCard02b from '../partials/dashboard/DashboardCard02b';
import DashboardCard02c from '../partials/dashboard/DashboardCard02c';

import DashboardCard03a from '../partials/dashboard/DashboardCard03a';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
// import DashboardCard04 from '../partials/dashboard/DashboardCard04';
// import DashboardCard05 from '../partials/dashboard/DashboardCard05';
// import DashboardCard06 from '../partials/dashboard/DashboardCard06';
// import DashboardCard07 from '../partials/dashboard/DashboardCard07';
// import DashboardCard08 from '../partials/dashboard/DashboardCard08';
// import DashboardCard09 from '../partials/dashboard/DashboardCard09';
// import DashboardCard10 from '../partials/dashboard/DashboardCard10';
// import DashboardCard11 from '../partials/dashboard/DashboardCard11';
// import DashboardCard12 from '../partials/dashboard/DashboardCard12';
// import DashboardCard13 from '../partials/dashboard/DashboardCard13';
// import Banner from '../partials/Banner';
// import { dbh } from '../constants/firebase.js';

function Subway() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [show, setShow] = useState("hidden")

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            {/* <div className="sm:flex sm:justify-between sm:items-center mb-8"> */}

            {/* Left: Avatars */}
            {/* <DashboardAvatars /> */}

            {/* Right: Actions */}
            {/* <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
            {/* <FilterButton /> */}
            {/* Datepicker built with flatpickr */}
            {/* <Datepicker /> */}
            {/* Add view button */}
            {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add view</span>
                </button> */}
            {/* </div> */}

            {/* </div> */}

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard02b />
              <DashboardCard02c />

              {/* Line chart (Acme Advanced) */}
              {/* <DashboardCard02a /> */}
              {/* Line chart (Acme Professional) */}
              {/* <DashboardCard03a /> */}


              {/* Bar chart (Direct vs Indirect) */}
              {/* <DashboardCard04 /> */}
              {/* Line chart (Real Time Value) */}
              {/* <DashboardCard05 /> */}
              {/* Doughnut chart (Top Countries) */}
              {/* <DashboardCard06 /> */}
              {/* Table (Top Channels) */}
              {/* <DashboardCard07 /> */}
              {/* Line chart (Sales Over Time) */}
              {/* <DashboardCard08 /> */}
              {/* Stacked bar chart (Sales VS Refunds) */}
              {/* <DashboardCard09 /> */}
              {/* Card (Customers) */}
              {/* <DashboardCard10 /> */}
              {/* Card (Reasons for Refunds) */}
              {/* <DashboardCard11 /> */}
              {/* Card (Recent Activity) */}
              {/* <DashboardCard12 /> */}
              {/* Card (Income/Expenses) */}
              {/* <DashboardCard13 /> */}

            </div>


            {/* <br />
            <button
              className="inline-flex justify-center items-center group"
              onClick={() => { setShow("visible") }}
            >
              CLICK ME
        </button>
            <img src={one} style={{ maxWidth: '1000px', width: '1000px', visibility: show }} alt="one" />
            <br />
            <img src={two} style={{ maxWidth: '1000px', width: '1000px', visibility: show }} alt="two" />
            <br />

            <img src={three} style={{ maxWidth: '1000px', width: '1000px', visibility: show }} alt="three" />
            <br />

            <img src={four} style={{ maxWidth: '1000px', width: '1000px', visibility: show }} alt="four" />
            <br />

            <img src={five} style={{ maxWidth: '1000px', width: '1000px', visibility: show }} alt="five" />
          </div> */}

          </div>
        </main>
      </div>
    </div>
  );
}

export default Subway; 