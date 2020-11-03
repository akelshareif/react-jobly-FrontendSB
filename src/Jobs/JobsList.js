import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyAPI from '../JoblyAPI';

import SearchBar from '../Shared/SearchBar';
import InfoCard from '../Shared/InfoCard';

const JobList = ({ user }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            const { jobs: jobData } = await JoblyAPI.request('jobs');
            setJobs(jobData);
        };
        getJobs();
    }, []);

    if (user) {
        return (
            <div className="container">
                <SearchBar setSearch={setJobs} />
                {jobs.map((j) => (
                    <InfoCard key={j.id} data={j} user={user} />
                ))}
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
};

export default JobList;
