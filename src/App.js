import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, Filters, Content, List } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from './services/state/actions'


const App = () => {
  const [filters, setFilter] = useState({
    manufacturer: 'ANY',
    body: 'ANY',
    from: 0,
    to: 10000000
  });

  const dispatch = useDispatch();
  const vehicles = useSelector(state => state.list);
  
  useEffect(() => {
    dispatch(getVehicles()); // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Content>
        <Filters filters={filters} setFilter={(filter) => { setFilter({...filters, ...filter }) }} />
        <List filters={filters} data={vehicles.data} loading={vehicles.loading} />
      </Content>
    </React.Fragment>
  );
}

export default App

