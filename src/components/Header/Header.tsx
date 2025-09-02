import { Link, useLocation } from "react-router-dom"
import { Container } from "../Container/Container"
import { useAppSelector } from "../../store";
import { SearchMovie } from "../SearchMovie/SearchMovie";
import "./Header.scss"
import { LoginBtn } from "../LoginBtn/LoginBtn";
import { memo, useMemo } from "react";

export const Header = memo(() => {
    const { isUserLogin, data: user } = useAppSelector((state) => state.user);
    const location = useLocation();

    // Мемоизируем вычисления active состояний
    const { isHomeActive, isGenresActive, isProfileActive } = useMemo(() => {
        const path = location.pathname;
        return {
            isHomeActive: path === "/" || path.startsWith('/movie/'),
            isGenresActive: path.startsWith("/genres"),
            isProfileActive: path.startsWith("/profile/")
        };
    }, [location.pathname]);

    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <Link to={"/"} className="header__logo-link">
                        <picture className="header__logo-img">
                            <source srcSet="/images/logo--white@2x.webp 2x, /images/logo--white.webp 1x" type="image/webp" />
                            <source srcSet="/images/logo--white@2x.png 2x, /images/logo--white.png 1x" type="image/png" />
                            <img src="/images/logo--white.png" alt="Логотип" width={144} height={32} />
                        </picture>
                    </Link>
                    <div className="header__column">
                        <div className="header__central-group">
                            <Link
                                to={"/"}
                                className={isHomeActive ? 'header__link header__link--home-page header__link--active' : 'header__link header__link--home-page'}>
                                Главная
                            </Link>
                            <Link
                                to={"/genres"}
                                aria-label="Жанры"
                                className={isGenresActive ? 'header__link header__link--active' : 'header__link'}>
                                <span className="header__link-text">Жанры</span>
                                <svg className="header__link-icon" width={24} height={24} aria-hidden="true">
                                    <use xlinkHref="/images/sprite.svg#genres-icon" />
                                </svg>
                            </Link>
                            <SearchMovie />
                        </div>
                        <div className="header__right-group">
                            <div className="header__auth-group">
                                <div className="header__auth-group--desktop">
                                    {isUserLogin ? (
                                        <>
                                            <Link
                                                to={"/profile/favorites"}
                                                className={isProfileActive ? 'header__link header__link--active' : 'header__link'}>
                                                {user?.name || "Profile"}
                                            </Link>
                                        </>
                                    ) : (
                                        <LoginBtn />
                                    )
                                    }
                                </div>
                                <div className="header__auth-group--mobile">
                                    {isUserLogin ? (
                                        <Link
                                            to={"/profile/favorites"}
                                        >
                                            <LoginBtn />
                                        </Link>
                                    ) : (
                                        <LoginBtn />
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
})