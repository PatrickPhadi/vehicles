import React from 'react';
import { Row, Col } from '.'
import { useDispatch } from 'react-redux';
import { addToCart } from '../services/state/actions'

export default function List({ data, filters }) {
    const dispatch = useDispatch();

    const vehicles = () => {
        const filtersCriteria = {
            ...(filters.manufacturer !== "ANY" && {
                manufacturer: (manufacturer) => manufacturer === filters.manufacturer
            }),
            ...(filters.body !== "ANY" && {
                body: (body) => body === filters.body
            }),
            price: (price) => price > parseInt(filters.from) && price < parseInt(filters.to)
        }

        const filterKeys = Object.keys(filtersCriteria);
        return data.filter(item => {
            // validates all filter criteria
            return filterKeys.every(key => {
                // ignores non-function predicates
                if (typeof filtersCriteria[key] !== 'function') return true;
                return filtersCriteria[key](item[key]);
            });
            // sorted my list ascending
        }).sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }

    return (
        <Col className="listContainer">
            {vehicles() && vehicles().map((item, index) =>
                (<Row className="item" key={index}>
                    <Col>
                        <img
                            src={`https://warpfrontendtestserver.herokuapp.com/public/${item.manufacturer}_${item.model}.jpg`}
                            alt={`${item.manufacturer}_${item.model}`}
                            style={{ width: 170, height: 113 }}
                        />
                    </Col>
                    <Col className="itemDetails">
                        <span className="label">Price: R {item.price && (item.price.toString()).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                        <span className="label">Make: {item.manufacturer}</span>
                        <span className="label">Model: {item.model}</span>
                        <span className="label">Body: {item.body}</span>
                        <Row>
                            <button
                                className="moreInfo"
                                onClick={() => {
                                    return window.open(item.wiki, '_blank');
                                }}
                            >More Info</button>
                            <button
                                onClick={() => {
                                    dispatch(addToCart(item));
                                }}
                                className="addCart">Add to card</button>
                        </Row>
                    </Col>
                </Row>)
            )}
        </Col >
    );
}
