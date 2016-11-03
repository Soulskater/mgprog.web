import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import ProjectItem from './projectItem';

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="page-wrapper">
                <Header title="Projects"/>
                <div className="projects-list">
                    {this.props.projects.items.map((project, i) =>
                        <ProjectItem key={i} project={project}>
                        </ProjectItem>
                    )}
                </div>
            </div>
        );
    }

    static mapStateToProps(state, ownProps) {
        return {
            projects: state.projects
        };
    }
}

export default connect(
    Projects.mapStateToProps
)(Projects);