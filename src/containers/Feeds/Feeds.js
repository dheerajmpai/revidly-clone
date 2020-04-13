import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import FeedsHeader from '../../components/Feeds/FeedsHeader';

class Feeds extends Component {
    render() {
        return <Aux>
            <FeedsHeader />
        </Aux>
    }
}

export default Feeds;