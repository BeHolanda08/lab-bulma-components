import React from 'react';

const CoolButton = ({ b1, b2 }) => {
    return (
        <div>
            <button class="button is-rounded my-class is-danger is-small">{b1}</button>
            <button class="button is-small is-success">{b2}</button>
        </div>
    )
}

export default CoolButton;
