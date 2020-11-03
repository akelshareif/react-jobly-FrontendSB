import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import JoblyAPI from '../JoblyAPI';
import InfoCard from '../Shared/InfoCard';

const CompanyDetails = ({ user }) => {
    const { handle } = useParams();

    const [company, setCompany] = useState();

    const getCompany = async (handle) => {
        const companyData = await JoblyAPI.getCompany(handle);
        setCompany(companyData);
    };

    useEffect(() => {
        getCompany(handle);
    }, [handle]);

    if (company) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-9 mt-5">
                        <h5>{company.name}</h5>
                        <p>{company.description}</p>
                    </div>
                </div>
                {company.jobs.map((j) => (
                    <InfoCard key={j.id} data={j} user={user} update={getCompany} />
                ))}
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default CompanyDetails;
