import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {

    render() {

        return (
            <footer>
                By Xiaochen Du | <Link to="http://dxc2007.github.io">Github</Link> | <Link to="mailto:duxiaochen1996@gmail.com">Email</Link> | Feedback welcome
            Pictures credits to
            </footer>
        )
    }


}
