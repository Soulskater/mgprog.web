import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className="header font-xl">
                {this.props.title}
            </div>
        );
    }
}

export default Header;