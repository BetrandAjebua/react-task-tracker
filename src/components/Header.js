import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({title="Task Tracker", onAdd, showHeader})=>{
    return(
        <header className='header'>
            <h1 className="App">
                {title}
            </h1>
            <Button color="green" onAdd={onAdd} showHeader={showHeader} />
        </header>
    ) 
}
Button.prototype={
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}
export default Header
