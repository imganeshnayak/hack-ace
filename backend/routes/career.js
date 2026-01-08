const express = require('express');
const router = express.Router();

router.get('/reality', (req, res) => {
    // Mock data for Career Reality page
    const data = {
        role: "Senior Data Scientist",
        matchScore: 88,
        lastUpdated: "2 days ago",
        investment: {
            total: 12000,
            courses: 8500,
            tools: 3500,
            roiTimeframe: "4.5 Months",
            vsIndustry: -10
        },
        timeline: {
            totalYears: 2.5,
            stages: [
                { name: "Foundations", duration: "6 months", skills: "Python, SQL, Stats" },
                { name: "Advanced Certs", duration: "12 months", skills: "ML, Deep Learning" },
                { name: "Industry Ready", duration: "12 months", skills: "Portfolio, Internships" }
            ]
        },
        risk: {
            level: "Medium",
            competition: "High",
            automationImpact: "Medium",
            topApplicantPercent: 15
        },
        salary: {
            current: 165000,
            progression: [
                { label: "Entry", value: 100000 },
                { label: "Mid-Level", value: 140000 },
                { label: "Senior", value: 165000 }
            ]
        },
        marketGrowth: {
            yoy: 22,
            demandText: "Demand for Data Scientists is projected to grow much faster than average for all occupations.",
            history: [
                { year: 2020, label: "2020", value: 40 },
                { year: 2021, label: "2021", value: 55 },
                { year: 2022, label: "2022", value: 70 },
                { year: 2023, label: "2023", value: 85 },
                { year: 2024, label: "2024", value: 100 }
            ]
        },
        skillsMatrix: [
            { name: "Python", type: "primary" },
            { name: "SQL", type: "primary" },
            { name: "Machine Learning", type: "primary" },
            { name: "TensorFlow", type: "secondary" },
            { name: "AWS", type: "secondary" },
            { name: "Statistics", type: "secondary" },
            { name: "Data Vis", type: "secondary" },
            { name: "Communication", type: "secondary" }
        ],
        stories: [
            {
                name: "Sarah J.",
                from: "Barista",
                to: "Data Scientist",
                quote: "I took the python bootcamp recommended here. Took 18 months, but I tripled my salary.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzOPvbB4QgAmczagobq_7F1wzy9b1fAhsrAAUwk8lE-eT_GtZUfVXl0wgyVlDbQPMHVcOD-J1tMf5IWxVT255jGlzx9ohoFwQfguhsAr_Llndceh_YendSzYQ2O9dxWnNnmXmwW0CdXxXTSHXxXqiUxDsgl3Jukt_XB3ael0qZZkOe2eoxFLx2AWxUO1DfExai_jv22SN2ZiEJM_1jtwr_UsR_auuPAAU564xidMZfD2ytBXUzWoaaGIIbhZwQC3eil0v3Y8e99_DR"
            },
            {
                name: "Michael C.",
                from: "Analyst",
                to: "Senior DS",
                quote: "The hardest part was the math. Don't skip the foundations module, it's crucial for interviews.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3UhbP5ZfmZNYQU8An2vOILylkym5t7JFVnMfS_7UcB5ipUgNToDnlAL4rm2qTY_RBu_CR-BoOzJ8Kc0cmUHhqBG3ATTA95WFFiDYsc01mhzcdQFKvVUs9ejPWyvV2lOl4JzH_WsWMwxlJT6pwCP2LvEeLLgMuV_8S-KKebw5nBapoDRQWoRAGDR8H73g6B43QaZl-ZHcJWEqNhw3l2mHP90l6z49k9teZdcRC54pOYAczHlUlaLjV23bsqnJVvVhc_6cUFFK4Gaxx"
            }
        ]
    };

    res.json(data);
});

module.exports = router;
