import React, { useState, useEffect } from 'react';
import JoblyAPI from '../JoblyAPI';

import SearchBar from '../Shared/SearchBar';
import InfoCard from '../Shared/InfoCard';

const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanies = async () => {
            const { companies: companyData } = await JoblyAPI.request('companies');
            setCompanies(companyData);
        };
        getCompanies();
    }, []);

    return (
        <div className="container">
            <SearchBar />
            {companies.map((c) => (
                <InfoCard key={c.handle} data={c} company />
            ))}
        </div>
    );
};

export default CompaniesList;
