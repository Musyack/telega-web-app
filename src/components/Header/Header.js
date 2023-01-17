import React from 'react';
import './header.css'
import Button from "../Button/Button";

const Header = () => {

    const tg = window.Telegram.WebApp
    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <Button>Закрыть</Button>
            <span className={'username'}>{tg.initDataInsafe?.user?.username}</span>
            <a href={'https://google.com'}>ссылка</a>
        </div>
    );
};

export default Header;