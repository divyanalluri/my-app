import React, { Component } from 'react'
// import { observer } from 'mobx-react'
// import Helmet from 'react-helmet'
import { Terminal } from 'xterm'
// import { AttachAddon } from 'xterm-addon-attach'

import './styles.css'

class TerminalComponent extends Component {
    render() {
        return (
            <>
                <div id='terminal-container'></div>
            </>
        )
    }
}

export default TerminalComponent
