import React from 'react';

class Footer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer">
                <p>
                    Follow me on
                </p>

                <a role="social" href="https://twitter.com/gmeszaros007" target="_blank">
                    <i className="icon-s icon-twitter"/>
                </a>
                <a role="social" href="https://www.facebook.com/gabor.meszaros.37604"
                   target="_blank">
                    <i className="icon-s icon-facebook"/>
                </a>
                <a role="social" href="https://www.linkedin.com/profile/view?id=115183260"
                   target="_blank">
                    <i className="icon-s icon-linkedin"/>
                </a>
                <a role="social" href="https://github.com/Soulskater/" target="_blank">
                    <i className="icon-s icon-fontawesome-webfont"/>
                </a>

                <p>
                    2016 Gábor Mészáros
                </p>
            </div>
        );
    }
}

export default Footer;