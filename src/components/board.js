import React, { useEffect, useState } from "react"
import { Profiles } from './profiles'

export default function Board() {

    const [loading, setLoading] = useState(false);
    const [league, setLeague] = useState('1');
    const [week, setWeek] = useState('1');
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [columnData, setcolumnData] = useState([]);

    const handleLeagueClick = async (e) => {
        setLeague(e.target.dataset.id)
        document.getElementById("leaguebtn1").style.backgroundColor = "white"
        document.getElementById("leaguebtn1").style.color = "black"
        document.getElementById("leaguebtn2").style.backgroundColor = "white"
        document.getElementById("leaguebtn2").style.color = "black"
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"
    }

    const handleWeekClick = async (e) => {
        setWeek(e.target.dataset.id)
        document.getElementById("weekbtn1").style.backgroundColor = "white"
        document.getElementById("weekbtn1").style.color = "black"
        document.getElementById("weekbtn2").style.backgroundColor = "white"
        document.getElementById("weekbtn2").style.color = "black"
        document.getElementById("weekbtn3").style.backgroundColor = "white"
        document.getElementById("weekbtn3").style.color = "black"
        document.getElementById("weekbtn4").style.backgroundColor = "white"
        document.getElementById("weekbtn4").style.color = "black"
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"
    }

    useEffect(() => {
        fetch(`/api?league=${league}&week=${week}`).then(
            response => response.json()
        ).then(
            data => {
                setLeaderboardData(data.data.results)
                setcolumnData(data.data.columns)
            }
        )
    }, [league, week])

    return (
        <div className="board">
            <h1 className="leaderboard">Block Born Leaderboard</h1>

            <div className="league">
                <button onClick={handleLeagueClick} id="leaguebtn1" data-id='l'>League 1</button>
                <button onClick={handleLeagueClick} id="leaguebtn2" data-id='2'>League 2</button>
            </div>

            <div className="week">
                <button onClick={handleWeekClick} id="weekbtn1" data-id='1'>Week 1</button>
                <button onClick={handleWeekClick} id="weekbtn2" data-id='2'>Week 2</button>
                <button onClick={handleWeekClick} id="weekbtn3" data-id='3'>Week 3</button>
                <button onClick={handleWeekClick} id="weekbtn4" data-id='4'>Week 4</button>
            </div>

            <Profiles leaderboardData={leaderboardData} columnData={columnData}></Profiles>

        </div>
    )
};

