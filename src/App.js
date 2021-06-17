import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AsideLeft from './components/AsideLeft';
import ProductsContainer from './containers/ProductsContainer';
// import MessageContainer from './containers/MessageContainer';
// import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import SubHeaderSearch from './components/SubHeader_Search';
import Lichtrinhgiotau from './components/Lichtrinhgiotau'
import TrainTime from './components/TrainTime';
import VeTau from './components/VeTau'
import Map from './components/Map'
class App extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <AsideLeft />
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <Router>
                            <Header />
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <SubHeaderSearch />
                                <div className="d-flex flex-column-fluid">
                                    <div className="container">
                                        <Switch>
                                            <Route path="/" exact > <Lichtrinhgiotau/><TrainTime/></Route>
                                            <Route path="/maps" component={Map} > </Route>
                                            <Route path="/homepage"  > <Lichtrinhgiotau/><TrainTime/></Route>
                                            <Route path="/ve-tau" component={VeTau}></Route>
                                            <Route path="/foods" component={ProductsContainer}></Route>
                                        </Switch>
                                        {/* <ProductsContainer />
                                        <MessageContainer />
                                        <CartContainer /> */}
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </Router>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
