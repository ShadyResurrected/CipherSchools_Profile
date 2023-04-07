import React from "react";

import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";

import "./style.scss";

const Cipher = () => {
  const value = [
    { date: "2023/01/11", count: 2 },
    { date: "2023/01/12", count: 20 },
    { date: "2023/01/13", count: 10 },
    ...[...Array(17)].map((_, idx) => ({
      date: `2016/02/${idx + 10}`,
      count: idx,
      content: "",
    })),
    { date: "2023/04/11", count: 2 },
    { date: "2023/05/01", count: 5 },
    { date: "2023/05/02", count: 5 },
    { date: "2023/05/04", count: 11 },
  ];

  return (
    <section className="heatmap__container">
      <HeatMap
        value={value}
        width={800}
        startDate={new Date("2023/01/01")}
        rectRender={(props, data) => {
          // if (!data.count) return <rect {...props} />;
          const nDate = new Date(data.date);

          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

          const formattedDate = `${days[nDate.getDay()]} ${
            months[nDate.getMonth()]
          } ${nDate.getDate()}, ${nDate.getFullYear()}`;
          return (
            <Tooltip
              key={props.key}
              placement="top"
              content={`Cipher Points : ${data.count || 0} on ${formattedDate}`}
            >
              <rect {...props} />
            </Tooltip>
          );
        }}
        rectSize={18}
      />
    </section>
  );
};

export default Cipher;
