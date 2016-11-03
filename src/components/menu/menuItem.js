import React from 'react';
import classNames from 'classnames';

class MenuItem extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    static get propTypes() {
        return {
            itemClass: React.PropTypes.string.isRequired,
            iconClass: React.PropTypes.string.isRequired,
            onItemClick: React.PropTypes.func.isRequired
        }
    }

    render() {
        return (
            <div onClick={this.props.onItemClick} className={classNames(this.props.itemClass, "menu-item font-m")}>
                <span className="title">{this.props.name}</span>
                <span className={classNames(this.props.iconClass, "logo", "icon-l")}/>
            </div>
        );
    }
}

export default MenuItem;
