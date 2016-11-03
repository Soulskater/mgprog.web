import React from 'react';
import Header from '../header/header';

class About extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className="about">
                <Header title="About"/>
                <img role="profile" src="./content/profile.jpg"/>
                <p role="description" className="font-s">
                    My name is Gábor Mészáros, i'm a software engineer, with special interest in front end development.
                    In the past few years i worked with many different technologies like MVVM frameworks, LESS,
                    TypeScript, React etc, but my favorite part is the rendering on the client side with Canvas or SVG.
                    I
                    created this page to collect my projects, write blog posts about programming.
                    If you have any questions, feel free to shoot me an email.
                </p>
            </div>
        );
    }
}

export default About;