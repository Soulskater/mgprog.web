import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu/menuItem';
import Header from '../header/header';
import {navigate} from '../../actions/actions';
import {pages} from '../../reducers/navigate';

class Menu extends React.Component {

    constructor() {
        super();
    }

    static get propTypes() {
        return {
            onItemClick: React.PropTypes.func.isRequired
        }
    }

    render() {
        return (
            <div className="menu">
                <MenuItem onItemClick={() => this.props.onItemClick(pages.PROJECTS)}
                          name="Projects"
                          itemClass="blue"
                          iconClass="icon-device-desktop"/>
                <MenuItem onItemClick={() => this.props.onItemClick(pages.BLOG)}
                          name="Blog"
                          itemClass="purple"
                          iconClass="icon-talk-chat-2"/>
                <MenuItem onItemClick={() => this.props.onItemClick(pages.ABOUT)}
                          name="About"
                          itemClass="green"
                          iconClass="icon-user-1"/>
            </div>
        );
    }

    static mapStateToProps(state) {
        return {};
    }

    static mapDispatchToProps(dispatch) {
        return {
            onItemClick: (page) => {
                dispatch(navigate(page));
            }
        };
    }
}

export default connect(
    Menu.mapStateToProps,
    Menu.mapDispatchToProps
)(Menu);