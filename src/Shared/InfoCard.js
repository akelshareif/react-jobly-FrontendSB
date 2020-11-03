import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import JoblyAPI from '../JoblyAPI';
import './InfoCard.css';

const InfoCard = ({ data, company, user, update }) => {
    const [isApplied, setIsApplied] = useState(data.state || false);

    if (company) {
        return (
            <div className="InfoCard w-75">
                <Card>
                    <CardBody>
                        <CardTitle className="lead font-weight-bold">
                            <div className="row justify-content-between">
                                <div className="col-3">{data.name}</div>
                                <div className="col-3 text-right">
                                    {data.logo_url ? (
                                        <img src={data.logo_url} alt="logo" width="16px" />
                                    ) : (
                                        <i className="far fa-building"></i>
                                    )}
                                </div>
                            </div>
                        </CardTitle>
                        <CardText>{data.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        const handleClick = async () => {
            if (!data.state) {
                await JoblyAPI.apply(data.id, user.username);
                setIsApplied(true);
            }
        };
        return (
            <div className="InfoCard w-75">
                <Card>
                    <CardBody>
                        <CardTitle className="font-weight-bold">{data.title}</CardTitle>
                        <div>Salary: {data.salary}</div>
                        <div>Equity: {data.equity}</div>
                        <Button color="danger" className="float-right font-weight-bold" onClick={handleClick}>
                            {isApplied ? 'APPLIED' : 'APPLY'}
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default InfoCard;
