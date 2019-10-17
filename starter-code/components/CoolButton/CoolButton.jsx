import React from 'react';

const CoolButton = () => {
    return (
        <div>
            <form action="/Signup" method="get">
                <button class="button is-rounded my-class is-danger is-small">Login</button>
                <button class="button is-small is-success">Signup</button>
            </form>
        </div>
    )
}

export default CoolButton;
