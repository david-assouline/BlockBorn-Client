import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

export function Profiles({ leaderboardData, columnData }) {
    return (
        <div id="profile">
            {populateTable(leaderboardData,columnData)}
        </div>
    )
};

function populateTable(leaderboardData, columnData) {
    
    const data = []

    leaderboardData.forEach(e => {
        data.push({
            key: e.wallet,
            rank: e.rank,
            player: e.player.value,
            wins: e.wins,
            losses: e.losses,
            wallet: e.wallet,
            points: e.points
        })
    });

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            sorter: (a, b) => a.rank - b.rank,
        },
        {
            title: 'Player',
            dataIndex: 'player',
        },
        {
            title: 'Wins',
            dataIndex: 'wins',
            sorter: (a, b) => a.wins - b.wins,
        },
        {
            title: 'Losses',
            dataIndex: 'losses',
            sorter: (a, b) => a.losses - b.losses,
        },
        {
            title: 'Wallet',
            dataIndex: 'wallet',
        },
        {
            title: 'Points',
            dataIndex: 'points',
            sorter: (a, b) => a.points - b.points,
        },

    ]
    
    return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
    )
}

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
