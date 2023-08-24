import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import Api from "../services/api";
import { signInProps } from "../types/types";
const UserSignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<signInProps>();
    const { t } = useTranslation();
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const onSubmit: SubmitHandler<signInProps> = async (data) => {
        const api = new Api();
        const user: object = {
            email: data.email,
            password: data.password,
        };
        await api
            .signIn(user)
            .then((res) => {
                if (rememberMe) sessionStorage.setItem("token", res.data.token);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <main>
            <div className="wrapper">
                <div className="max-w-4xl mx-auto lg:py-20">
                    <div className="w-full">
                        <h1 className="text-2xl">{t("signIn")}</h1>
                        <hr className="my-2" />
                        <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2 flex flex-col">
                                <label className="mb-2">{t("email")}</label>
                                <input type="email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="mb-2 flex flex-col">
                                <label className="mb-2">{t("password")}</label>
                                <input type="password" {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <div className="flex flex-row items-center">
                                <input type="checkbox" onChange={() => setRememberMe(!rememberMe)} />
                                <label className="ml-2 text-sm">{t("rememberMe")}</label>
                            </div>

                            <button className="submit" type="submit">
                                {t("submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserSignIn;
