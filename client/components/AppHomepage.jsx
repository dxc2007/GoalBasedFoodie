import React from 'react';

export default class AppHomepage extends React.Component {

    render() {

        return (
            <div id="appHomepage">
                {this.props.children}
            </div>
        )

    }

}
