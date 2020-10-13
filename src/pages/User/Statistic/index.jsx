import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  AreaChart, Area, ResponsiveContainer,
  LineChart, Line,
  PieChart, Pie, Cell,
} from 'recharts';

import {getHistoryList} from '../../../redux/actions/index';

function Statistic({
  getHistoryList,
  historyList
}) {

  const dataDays = [
    {
      name: 'T2', CP: 8000
    },
    {
      name: 'T3', CP: 3000
    },
    {
      name: 'T4', CP: 2000
    },
    {
      name: 'T5', CP: 5000
    },
    {
      name: 'T6', CP: 1000
    },
    {
      name: 'T7', CP: 2000
    },
    {
      name: 'CN', CP: 3000
    },
  ];

  const dataWeek = [
    {
      name: 'Tuần 1', CP: 40000
    },
    {
      name: 'Tuần 2', CP: 30000
    },
    {
      name: 'Tuần 3', CP: 20000
    },
    {
      name: 'Tuần 4', CP: 15000
    },
  ]

  const dataMonth = [
    {
      name: 'Thg 1', CP: 20000
    },
    {
      name: 'Thg 2', CP: 40000
    },
    {
      name: 'Thg 3', CP: 25000
    },
    {
      name: 'Thg 4', CP: 10000
    },
    {
      name: 'Thg 5', CP: 50000
    },
    {
      name: 'Thg 6', CP: 35000
    },
    {
      name: 'Thg 7', CP: 29000
    },
    {
      name: 'Thg 8', CP: 30000
    },
    {
      name: 'Thg 9', CP: 20000
    },
    {
      name: 'Thg 10', CP: 56000
    },
    {
      name: 'Thg 11', CP: 17000
    },
    {
      name: 'Thg 12', CP: 23000
    },
  ];

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const renderHistoryList = () => {
    return historyList.map((item, itemIndex) => {
      return (
        <tr key={itemIndex}>
          <td>{item.stt}</td>
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.timeIn}</td>
          <td>{item.timeOut}</td>
          <td>{item.place}</td>
          <td>{item.licensePlates}</td>
        </tr>
      );
    });
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className="statistic">
      <div className="statistic-row1">
        <div className="statistic-week">
          <div className="div-statistic-head">
            <h3>Lượt gửi/ Tuần</h3>
          </div>
          <div style={{ height: '83%', marginTop: '2%' }}>
            <BarChart
              width={600}
              height={300}
              data={dataDays}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="CP" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
          </div>
        </div>
        <div className="statistic-month">
          <div className="div-statistic-head">
            <h3>Lượt gửi/ Tháng</h3>
          </div>
          <div style={{ height: '83%', marginTop: '2%' }}>
            <ResponsiveContainer>
              <AreaChart
                data={dataWeek}
                margin={{
                  top: 10, right: 30, left: 0, bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="CP" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="statistic-row2">
        <div className="statistic-year">
          <div className="div-statistic-head">
            <h3>Lượt gửi/ Năm</h3>
          </div>
          <div style={{ height: '83%', marginTop: '2%' }}>
            <LineChart
              width={800}
              height={200}
              data={dataMonth}
              syncId="anyId"
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="CP" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
          </div>
        </div>
        <div className="total-year">
          <h4>Tổng lượt gửi / Năm</h4>
          <div style={{ position: 'relative' }}>
            <PieChart width={200} height={400}>
              <Pie
                data={data}
                cx={107}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            </PieChart>
              <h1 style={{ position: 'absolute', top:'22%' , left:'37%'}}>340</h1>
          </div>
        </div>
      </div>

      <div className="statistic-row3">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Ngày</th>
              <th>Giờ vào</th>
              <th>Giờ ra</th>
              <th>Địa điểm</th>
              <th>Biển số</th>
            </tr>
          </thead>
          <tbody>
            {renderHistoryList()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { historyList} = state;
  return {
    historyList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHistoryList: (params) => dispatch(getHistoryList(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Statistic);