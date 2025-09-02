import { NavLink, Outlet } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import "./ProfilePage.scss";

const ProfilePage = () => {
    return (
        <section className="section profile-page">
            <Container>
                <div className="section__wrapper profile-page__wrapper">
                    <h2 className="section__title profile-page__title">Мой аккаунт</h2>
                    <nav className="profile-page__nav">
                        <NavLink
                            to="favorites"
                            className={({ isActive }) =>
                                isActive ? 'profile-page__link profile-page__link--active' : 'profile-page__link'
                            }
                        >
                            <svg width={24} height={24} aria-hidden="true" className="profile-page__link-icon">
                                <use xlinkHref="./images/sprite.svg#heart-icon" />
                            </svg>
                            <span className="profile-page__link-text">Избранные фильмы</span>
                            <span className="profile-page__link-text--mobile">Избранное</span>
                        </NavLink>
                        <NavLink
                            to="settings"
                            className={({ isActive }) =>
                                isActive ? 'profile-page__link profile-page__link--active' : 'profile-page__link'
                            }
                        >
                            <svg width={24} height={24} aria-hidden="true" className="profile-page__link-icon">
                                <use xlinkHref="./images/sprite.svg#user-icon" />
                            </svg>
                            <span className="profile-page__link-text">Настройка аккаунта</span>
                            <span className="profile-page__link-text--mobile">Настройки</span>
                        </NavLink>
                    </nav>
                    <Outlet />
                </div>
            </Container>
        </section>
    );
};

export default ProfilePage;