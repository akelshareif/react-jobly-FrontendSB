import React, { useState, useEffect } from 'react';
import JoblyAPI from '../JoblyAPI';

import SearchBar from '../Shared/SearchBar';
import InfoCard from '../Shared/InfoCard';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            const { jobs: jobData } = await JoblyAPI.request('jobs');
            setJobs(jobData);
        };
        getJobs();
    }, []);

    return (
        <div className="container">
            <SearchBar />
            {jobs.map((j) => (
                <InfoCard key={j.id} data={j} />
            ))}
        </div>
    );
};

export default JobList;
