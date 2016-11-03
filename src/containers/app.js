import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Footer from '../components/footer/footer';

class App extends React.Component {

    constructor(children) {
        super();
    }

    static get propTypes() {
        return {
            children: React.PropTypes.element.isRequired
        };
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionLeaveTimeout={500}
                    transitionEnterTimeout={500}>
                    {React.cloneElement(this.props.children, {
                        key: location.pathname
                    })}
                </ReactCSSTransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default App;