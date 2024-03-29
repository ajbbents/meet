import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState({});
  useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    // const summaries = events.map(event => event.summary);
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.split(' ').includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  // const colors = ['#3A5261', '#4A3A61', '#B06101', '#613A52', '#194A2C'];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#194A2C"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name} />))} */}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;