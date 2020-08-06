import React from 'react';
import { Col, Select } from '.'

export default function FiltersComponent({ setFilter, filters }) {
    return (
        <Col className="filterContainer">
            <div>
                <p>Manufacture</p>
                <Select
                    value={filters.manufacturer}
                    onChange={(e) => setFilter({manufacturer: e.target.value})}
                    data={[
                        {
                            label: "ANY",
                            value: "ANY"
                        },
                        {
                            label: "BMW",
                            value: "BMW"
                        },
                        {
                            label: "Audi",
                            value: "Audi"
                        },
                        {
                            label: "Nissan",
                            value: "Nissan"
                        },
                    ]}
                />
            </div>
            <div>
                <p>Body Style</p>
                <Select
                    value={filters.body}
                    onChange={(e) => setFilter({body: e.target.value})}
                    data={[
                        {
                            label: "ANY",
                            value: "ANY"
                        },
                        {
                            label: "Coupé",
                            value: "Coupé"
                        },
                        {
                            label: "Sedan",
                            value: "Sedan"
                        },
                        {
                            label: "SUV",
                            value: "SUV"
                        }
                    ]}
                />
            </div>
            <div>
                <p>Price Range</p>
            </div>
            <div>
                <p>From</p>
                <Select
                    value={filters.from}
                    onChange={(e) => setFilter({from: e.target.value})}
                    data={[
                        {
                            label: "ANY",
                            value: 0
                        },
                        {
                            label: "R 100 001",
                            value: 100001
                        },
                        {
                            label: "R 200 001",
                            value: 200001
                        },
                        {
                            label: "R 300 001",
                            value: 300001
                        },
                        {
                            label: "R 400 001",
                            value: 400001
                        },
                        {
                            label: "R 500 001",
                            value: 500001
                        },
                        {
                            label: "R 600 001",
                            value: 600001
                        },
                        {
                            label: "R 700 001",
                            value: 700001
                        },
                        {
                            label: "R 800 001",
                            value: 800001
                        },
                        {
                            label: "R 900 001",
                            value: 900001
                        },
                        {
                            label: "R 1 000 001",
                            value: 1000001
                        },
                        {
                            label: "R 2 000 001",
                            value: 2000001
                        },
                    ]}
                />
            </div>
            <div>
                <p>To</p>
                <Select
                    value={filters.to}
                    onChange={(e) => setFilter({to: e.target.value})}
                    data={[
                        {
                            label: "ANY",
                            value: 10000000
                        },
                        {
                            label: "R 100 000",
                            value: 100000
                        },
                        {
                            label: "R 200 000",
                            value: 200000
                        },
                        {
                            label: "R 300 000",
                            value: 300000
                        },
                        {
                            label: "R 400 000",
                            value: 400000
                        },
                        {
                            label: "R 500 000",
                            value: 500000
                        },
                        {
                            label: "R 600 000",
                            value: 600000
                        },
                        {
                            label: "R 700 000",
                            value: 700000
                        },
                        {
                            label: "R 800 000",
                            value: 800000
                        },
                        {
                            label: "R 900 000",
                            value: 900000
                        },
                        {
                            label: "R 1 000 000",
                            value: 1000000
                        },
                        {
                            label: "R 2 000 000",
                            value: 2000000
                        },
                    ]}
                />
            </div>
        </Col>
    );
}
