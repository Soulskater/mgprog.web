import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.openWindow = this.openWindow.bind(this);
    }

    static get propTypes() {
        return {
            project: React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                description: React.PropTypes.string.isRequired,
                sourceUrl: React.PropTypes.string.isRequired
            }).isRequired
        }
    }

    openWindow() {
        window.open(this.props.project.sourceUrl);
    }

    render() {
        return (
            <div className="project-item" onClick={this.openWindow}>
                <div className="title">
                    {this.props.project.name}
                </div>
                <div className="description">
                    {this.props.project.description}
                </div>
                <div className="button">
                    <span>Git</span>
                </div>
            </div>
        );
    }
}

export default ProjectItem;