import { React, useEffect, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Line,
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
        fetch("https://datax-team9.herokuapp.com/busy")
            .then(response => response.json()
                .then(data => {
                    // setDates([0,1,2,3,4,5])
                    // setData([10,20,30,40,50])
                    const obj = JSON.parse(data);
                    console.log(obj)
                    var chartInfo = []
                    for (var key in obj["Avenue"]) {
                        chartInfo.push({ markerOffset: .003 * key, name: obj["Avenue"][key], coordinates: [obj["Longitude From"][key], obj["Latitude From"][key]], coordinates2: [obj["Longitude to"][key], obj["Latitude to"][key]] })
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
            <h1><strong>busiest avenues in NYC during rush hours (4pm - 8pm)</strong></h1>
            {chartData.map(({ name, coordinates, markerOffset, coordinates2 }) => (
                <h2 key={name}>{name}</h2>
            ))}
            <br />

            <ComposableMap
            >
                <ZoomableGroup zoom={400} center={[-74.005974, 40.712776]} maxZoom={500}>

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
                    {chartData.map(({ name, coordinates, markerOffset, coordinates2 }) => (
                        <Line key={name} from={coordinates} to={coordinates2}>
                        </Line>
                    ))}
                    {chartData.map(({ name, coordinates, markerOffset, coordinates2 }) => (

                        <Marker key={name} coordinates={coordinates}>
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: ".05" }}
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
