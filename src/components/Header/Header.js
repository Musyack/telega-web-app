import React from 'react';
import './header.css'
import Button from "../Button/Button";

import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {

    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>{user.username}</span>
            <a href={'https://google.com'}>ссылка</a>
        </div>
    );
};

export default Header;