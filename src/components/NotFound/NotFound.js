import React from 'react';

const style={
    color: 'red',
    textAlign: 'center',
    marginTop:'150px',
    fontWeight:'bold',
    border: '5px dotted red'

}
const NotFound = () => {
    return (
        <div>
            <h1 style={style}>404!!! <br/> Page Not Found!</h1>
        </div>
    );
};

export default NotFound;