import React from 'react';
import { IoIosCart } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from '.'
import { removeFromCart } from '../services/state/actions'

export default function Header() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const total = () => {
        let totalSum = items.map(o => o.price).reduce((a, c) => { return a + c });
        return (totalSum.toString()).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <React.Fragment>
            <div className="headerContainer">
                <div className="brandName">
                    <h2>Browse Vehicles</h2>
                </div>
                <div className="headerIcon">
                    <IoIosCart size={30} />
                </div>
                <div> ({items.length}) items</div>
            </div>
            {items.length > 0 && <div className="cart">
                <div className="cartItem">
                    {items.map((itm, key) =>
                        <Row className="cartRow" key={key}>
                            <Col>
                                <img
                                    src={`https://warpfrontendtestserver.herokuapp.com/public/${itm.manufacturer}_${itm.model}.jpg`}
                                    alt={`${itm.manufacturer}_${itm.model}`}
                                    style={{ width: 100 }} />
                            </Col>
                            <Col className="itemDetails">
                                <span className="label">R {itm.price && (itm.price.toString()).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                                <span className="label">{itm.manufacturer}</span>
                                <span className="label">{itm.model}</span>
                            </Col>
                            <Col>
                                <button
                                    className="moreInfo"
                                    onClick={() => dispatch(removeFromCart(itm.id))}
                                >
                                    X
                            </button>
                            </Col>
                        </Row>
                    )}
                    <div className="cartTotal">
                        Total: R {total()}
                    </div>
                </div>
            </div>}
        </React.Fragment>
    );
}
