import React from 'react';
import Header from '../header/header';
import Menu from '../menu/menu';

class Home extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className="page-wrapper">
                <Header title="Welcome"/>
                <Menu/>
            </div>
        );
    }
}

export default Home;