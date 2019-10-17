import React from 'react';

const User = () => {
    ({
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    })
};

export default User;