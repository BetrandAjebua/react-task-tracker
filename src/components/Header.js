import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({title="ClassList", onAdd, showHeader})=>{
    return(
        <header className='header'>
            <h1 className="App">
                {title}
            </h1>
            <Button color="green" onAdd={onAdd} showHeader={showHeader} />
            {/* <Button color="black" text='Delete'/>
            <Button color="black" text='Cancel' /> */}
        </header>
    ) 
}
Button.prototype={
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}
export default Header
