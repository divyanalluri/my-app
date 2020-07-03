import React, { Component } from 'react'


class Terminal extends Component {
    render() {
        return (
            <div >
                <iframe
                    width={1000} height={1000}
                    src='https://notebooks.gesis.org/binder/jupyter/user/karthik018-binder-sample-tyb867yv/terminals/1' />
            </div>
        )
    }
}

export default Terminal
