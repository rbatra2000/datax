import { React, useEffect, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const markers = [
//   {
//     markerOffset: -30,
//     name: "Buenos Aires",
//     coordinates: [-58.3816, -34.6037]
//   },
//   { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
//   { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
//   { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
//   { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
//   { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
//   { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
//   { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
//   { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
//   { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
//   { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
//   { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
// ];

const MapChart = () => {
    const [chartData, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://datax-team9.herokuapp.com/maps")
            .then(response => response.json()
                .then(data => {
                    // setDates([0,1,2,3,4,5])
                    // setData([10,20,30,40,50])
                    console.log(data)
                    const obj = JSON.parse(data);
                    var chartInfo = []
                    for (var key in obj["Ranks"]) {
                        chartInfo.push({ rank: key, markerOffset: .003 * key, name: obj["Station"][key], coordinates: [obj["Longitude"][key], obj["Latitude"][key]] })
                    }
                    setData(chartInfo)
                    console.log(chartInfo)
                    setLoading(true)
                })
            )
    }, []);

    if (!loading) {
        return <div>Loading</div>
    }

    return (
        <div>

            <h1><strong>Busiest Subway Stations in NYC</strong></h1>
            {chartData.map(({ rank, name, coordinates, markerOffset }) => (
                <h2 key={name}>{rank}. {name}</h2>
            ))}
            <br />


            <ComposableMap
            >
                <ZoomableGroup zoom={400} center={[-74.005974, 40.712776]} maxZoom={1000}>

                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies
                                .map(geo => (
                                    <Geography key={geo.rsmKey}
                                        geography={geo}
                                        fill="#EAEAEC"
                                        stroke="#D6D6DA" />
                                ))
                        }
                    </Geographies>
                    {chartData.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle r={.01} fill="#F53" />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".01" }}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>

            </ComposableMap>
        </div>
    );
};

export default MapChart;
