import React, { useEffect, useState } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTrophy, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import leetcode from "../../assets/leetcode.png";
import codechef from "../../assets/codechef.png";
import gfg from "../../assets/gfg.png";

function Skills() {
    const [skills, setSkills] = useState([]);
    const [leetcodeStats, setLeetcodeStats] = useState({
        totalSolved: '400+',
        ranking: '',
        easySolved: '',
        mediumSolved: '',
        hardSolved: ''
    });
    const [codechefStats, setCodechefStats] = useState({
        problemsSolved: '100+',
        rating: '',
        rank: '',
        division: '',
        contests: ''
    });
    const [gfgStats, setGfgStats] = useState({
        problemsSolved: '40+',
        instituteRank: '',
        codingScore: '',
        totalScore: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const skillsData = [
            { name: "C", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
            { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
            { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
            { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
            { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
            { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/128/6911/6911893.png" },
            { name: " Machine Learning", icon: "https://cdn-icons-png.flaticon.com/128/4616/4616734.png" },
            { name: " Deep Learning", icon: "https://cdn-icons-png.flaticon.com/128/10817/10817404.png" },
            { name: "Data Science", icon: "https://cdn-icons-png.flaticon.com/128/1449/1449312.png" },
            { name: "Data Analysis", icon: "https://cdn-icons-png.flaticon.com/128/2041/2041643.png" },
            { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/919/919847.png" },
            { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
            { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
            { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
            { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/825/825529.png" },
            { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
            { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
            { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
        ];

        setSkills(skillsData);
    }, []);

    const fetchLeetCodeStats = async () => {
        try {
            const response = await axios.get('https://leetcode-stats-api.herokuapp.com/harshilkothiya');
            if (response.data) {
                setLeetcodeStats({
                    totalSolved: response.data.totalSolved || '400+',
                    ranking: response.data.ranking || 'N/A',
                    easySolved: response.data.easySolved || '0',
                    mediumSolved: response.data.mediumSolved || '0',
                    hardSolved: response.data.hardSolved || '0'
                });
            }
        } catch (error) {
            console.error('Error fetching LeetCode stats:', error);
            // Set default values if API fails
            setLeetcodeStats({
                totalSolved: '400+',
                ranking: 'N/A',
                easySolved: '0',
                mediumSolved: '0',
                hardSolved: '0'
            });
        }
    };

    const fetchCodeChefStats = async () => {
        try {
            const response = await axios.get('https://competitive-coding-api.herokuapp.com/api/codechef/harshilkothiya');
            if (response.data) {
                setCodechefStats({
                    problemsSolved: response.data.fully_solved?.count || '100+',
                    rating: response.data.rating || 'N/A',
                    rank: response.data.rank || 'N/A',
                    division: response.data.division || 'N/A',
                    contests: response.data.contest_ratings?.length || '0'
                });
            }
        } catch (error) {
            console.error('Error fetching CodeChef stats:', error);
            // Set default values if API fails
            setCodechefStats({
                problemsSolved: '100+',
                rating: 'N/A',
                rank: 'N/A',
                division: 'N/A',
                contests: '0'
            });
        }
    };

    const fetchGFGStats = async () => {
        try {
            // Using a different API endpoint for GFG
            const response = await axios.get('https://api.geeksforgeeks.org/api/v1/user/harshilkhg17/');
            if (response.data) {
                setGfgStats({
                    problemsSolved: response.data.solved || '40+',
                    instituteRank: response.data.institute_rank || 'N/A',
                    codingScore: response.data.coding_score || 'N/A',
                    totalScore: response.data.total_score || 'N/A'
                });
            }
        } catch (error) {
            console.error('Error fetching GFG stats:', error);
            // Set default values if API fails
            setGfgStats({
                problemsSolved: '40+',
                instituteRank: 'N/A',
                codingScore: 'N/A',
                totalScore: 'N/A'
            });
        }
    };

    useEffect(() => {
        const fetchAllStats = async () => {
            setLoading(true);
            try {
                await Promise.all([
                    fetchLeetCodeStats(),
                    fetchCodeChefStats(),
                    fetchGFGStats()
                ]);
            } catch (error) {
                console.error('Error fetching all stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllStats();
        // Update every 5 minutes
        const interval = setInterval(fetchAllStats, 300000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Skills & Abilities Section */}
            <section className="skills" id="skills">
                <h2 className="heading">
                    <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span>
                </h2>

                <div data-aos="fade-down" className="container">
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div className="bar" key={index}>
                                <div className="info">
                                    <img src={skill.icon} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Programming Stats Section */}
            <div className="competitive-stats">
                <h2 className="heading">
                    <FontAwesomeIcon icon={faTrophy} /> Competitive Programming <span>Stats</span>
                </h2>
                <div className="stats-layout">
                    {/* LeetCode Card */}
                    <div className="platform-card" data-aos="flip-left">
                        {loading && <div className="loading-overlay">Loading...</div>}
                        <div className="stat-icon small-icon">
                            <img src={leetcode} alt="LeetCode" />
                        </div>
                        <h3>LeetCode</h3>
                        <div className="stat-value">{leetcodeStats.totalSolved}</div>
                        <div className="stat-description">Problems Solved</div>
                        
                        <div className="problem-stats">
                            <span className="easy">Easy: {leetcodeStats.easySolved}</span>
                            <span className="medium">Medium: {leetcodeStats.mediumSolved}</span>
                            <span className="hard">Hard: {leetcodeStats.hardSolved}</span>
                        </div>

                        <div className="stat-grid">
                            <div className="stat-item">
                                <div className="stat-detail">
                                    <span>Global Rank: {leetcodeStats.ranking}</span>
                                </div>
                            </div>
                        </div>

                        <div className="stat-footer">
                            <a href="https://leetcode.com/harshilkothiya/" target="_blank" rel="noopener noreferrer">
                                <button className="profilebtn">View Profile <FontAwesomeIcon icon={faArrowRight} /></button>
                            </a>
                        </div>
                    </div>

                    {/* CodeChef Card */}
                    <div className="platform-card " data-aos="flip-up">
                        {loading && <div className="loading-overlay">Loading...</div>}
                        <div className="stat-icon small-icon">
                            <img src={codechef} alt="CodeChef" />
                        </div>
                        <h3>CodeChef</h3>
                        <div className="stat-value">{codechefStats.problemsSolved}</div>
                        <div className="stat-description">Problems Solved</div>

                        <div className="stat-grid">
                            <div className="stat-item">
                                <div className="stat-detail">
                                    <span>Rating: {codechefStats.rating}</span>
                                    <span>Rank: {codechefStats.rank}</span>
                                    <span>Division: {codechefStats.division}</span>
                                    <span>Contests: {codechefStats.contests}</span>
                                </div>
                            </div>
                        </div>

                        <div className="stat-footer">
                            <a href="https://www.codechef.com/users/harshilkothiya" target="_blank" rel="noopener noreferrer">
                                <button className="profilebtn">View Profile <FontAwesomeIcon icon={faArrowRight} /></button>
                            </a>
                        </div>
                    </div>

                    {/* GFG Card */}
                    <div className="platform-card" data-aos="flip-right">
                        {loading && <div className="loading-overlay">Loading...</div>}
                        <div className="stat-icon small-icon">
                            <img src={gfg} alt="GeeksforGeeks" />
                        </div>
                        <h3>GeeksforGeeks</h3>
                        <div className="stat-value">{gfgStats.problemsSolved}</div>
                        <div className="stat-description">Problems Solved</div>

                        <div className="stat-grid">
                            <div className="stat-item">
                                <div className="stat-detail">
                                    <span>Institute Rank: {gfgStats.instituteRank}</span>
                                    <span>Coding Score: {gfgStats.codingScore}</span>
                                    <span>Total Score: {gfgStats.totalScore}</span>
                                </div>
                            </div>
                        </div>

                        <div className="stat-footer">
                            <a href="https://www.geeksforgeeks.org/user/harshilkhg17/" target="_blank" rel="noopener noreferrer">
                                <button className="profilebtn">View Profile <FontAwesomeIcon icon={faArrowRight} /></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills; 