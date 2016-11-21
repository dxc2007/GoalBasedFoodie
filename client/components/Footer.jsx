import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {

    render() {

        return (
            <footer>
                App by Xiaochen Du | <Link target="_blank" to="http://dxc2007.github.io">Github</Link> | <Link to="mailto:duxiaochen1996@gmail.com">Email</Link> | Feedback welcome | Pictures credits to  <Link target="_blank" to="https://unsplash.com/@inayali">Ali Inay</Link>
            </footer>
        )
    }


}
