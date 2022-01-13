import React from 'react'
import {ReactComponent as WhiteLogo} from './img/logo-white.svg'


function Header() {
    return (
        <div>
            <div className='header-block'>
                <WhiteLogo className='logo' />
            </div>
        </div>
    )
}

export default Header
