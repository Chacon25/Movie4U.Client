import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { Menu, Button } from 'antd';

export const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <Button size='large' style={{ display: 'flex', margin: '10px 10px 10px auto', backgroundColor: 'green', borderColor: 'green', color: 'white', }} onClick={() => loginWithRedirect()}> Login</ Button >
    )
}
