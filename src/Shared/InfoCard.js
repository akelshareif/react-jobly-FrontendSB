import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './InfoCard.css';

const InfoCard = ({ data, company }) => {
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
        return (
            <div className="InfoCard w-75">
                <Card>
                    <CardBody>
                        <CardTitle className="font-weight-bold">{data.title}</CardTitle>
                        <div>Salary: {data.salary}</div>
                        <div>Equity: {data.equity}</div>
                        <Button color="danger" className="float-right font-weight-bold">
                            APPLY
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default InfoCard;
