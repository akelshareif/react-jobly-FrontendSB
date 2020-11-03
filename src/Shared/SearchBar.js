import React, { useState } from 'react';
import { Form, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

import JoblyAPI from '../JoblyAPI';
import './SearchBar.css';

const SearchBar = ({ setSearch, searchCompanies }) => {
    const [searchTerm, setSearchTerm] = useState({
        term: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchCompanies) {
            const { companies } = await JoblyAPI.request('companies', { search: searchTerm.term });
            setSearch(companies);
        } else {
            const { jobs } = await JoblyAPI.request('jobs', { search: searchTerm.term });
            setSearch(jobs);
        }
    };

    return (
        <div className="SearchBar w-75">
            <Form onSubmit={handleSubmit}>
                <InputGroup size="lg">
                    <Input
                        tag="input"
                        type="text"
                        name="term"
                        onChange={handleChange}
                        value={searchTerm.term}
                        placeholder="Enter search term.."
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="primary">Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        </div>
    );
};

export default SearchBar;
