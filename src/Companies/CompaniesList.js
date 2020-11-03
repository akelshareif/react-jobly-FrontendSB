import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import JoblyAPI from '../JoblyAPI';

import SearchBar from '../Shared/SearchBar';
import InfoCard from '../Shared/InfoCard';

import './CompaniesList.css';

const CompaniesList = ({ user }) => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanies = async () => {
            const { companies: companyData } = await JoblyAPI.request('companies');
            setCompanies(companyData);
        };
        getCompanies();
    }, []);

    if (user) {
        return (
            <div className="container">
                <SearchBar setSearch={setCompanies} searchCompanies />
                {companies.map((c) => (
                    <Link key={c.handle} to={`/companies/${c.handle}`} className="CompanyListLink">
                        <InfoCard data={c} company />
                    </Link>
                ))}
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
};

export default CompaniesList;
