import { useMutation } from "@tanstack/react-query"
import { Button } from "../../components/Button/Button"
import { logoutUser } from "../../api/auth/auth"
import { queryClient } from "../../api/queryClient"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../store"
import "./settingsPage.scss";

const SettingsPage = () => {
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user.data);

    const logoutMutation = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["user", "profile"]});
            navigate("/");
        }
    })

    return (
        <>
            <div className="user-data">
                <div className="user-data__item">
                    <span className="user-data__icon">
                        {`${user?.name[0].toUpperCase()}${user?.surname[0].toUpperCase()}`}
                    </span>
                    <div className="user-data__text-group">
                        <span className="user-data__item-label">Имя Фамилия</span>
                        <span className="user-data__item-value">{`${user?.name} ${user?.surname}`}</span>
                    </div>
                </div>
                <div className="user-data__item">
                    <span className="user-data__icon">
                        <svg width={24} height={24}>
                            <use xlinkHref="./images/sprite.svg#mail-icon" />
                        </svg>
                    </span>
                    <div className="user-data__text-group">
                        <span className="user-data__item-label">Электронная почта</span>
                        <span className="user-data__item-value">{user?.email}</span>
                    </div>
                </div>
            </div>
            <Button
                handleClick={() => logoutMutation.mutate()}
                classNames="user-data__btn btn--blue"
                text="Выйти из аккаунта"
            />
            {logoutMutation.isError && (
                <p className="error-message">Не удалось выйти из аккаунта</p>
            )}
        </>
    )
}

export default SettingsPage;