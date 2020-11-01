import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState({
        term: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm({
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
    };

    return (
        <div className="SearchBar w-75">
            <form onSubmit={handleSubmit}>
                <InputGroup size="lg">
                    <Input type="text" name="name" onChange={handleChange} placeholder="Enter search term.." />
                    <InputGroupAddon addonType="append">
                        <Button color="primary">Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    );
};

export default SearchBar;
