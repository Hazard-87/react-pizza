import React from 'react'
import classNames from 'classnames'

function Button({outline, children}) {
    return (
        <button className={classNames('button', {
            'button--outline': outline
        })}>
            <span>{children}</span>
        </button>
    )
}

export default Button