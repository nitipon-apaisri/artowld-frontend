import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { registerProps } from "../types/types";
import Api from "../services/api";
const UserRegisteration = () => {
    const { t } = useTranslation();
    const [agree, setAgree] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<registerProps>();
    const onSubmit: SubmitHandler<registerProps> = async (data) => {
        const api = new Api();
        const user = {
            name: {
                first: data.firstName,
                last: data.lastName,
            },
            email: data.email,
            password: data.password,
        };
        const res = await api.registerUser(user);
        console.log(res);
    };
    return (
        <main>
            <div className="wrapper">
                <div className="max-w-4xl mx-auto">
                    <div className="w-full">
                        <h1 className="text-2xl">{t("userRegistration")}</h1>
                        <hr className="my-2" />
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row space-x-4 my-2">
                                <div className="w-full flex flex-col space-y-2">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" {...register("firstName", { required: true })} />
                                    {errors.firstName && <span>This field is required</span>}
                                </div>
                                <div className="w-full flex flex-col space-y-2">
                                    <label>Last name</label>
                                    <input type="text" {...register("lastName", { required: true })} />
                                    {errors.lastName && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="mb-2 flex flex-col">
                                <label className="mb-2">Email</label>
                                <input type="email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="mb-2 flex flex-col">
                                <label className="mb-2">Password</label>
                                <input type="password" {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <div className="mb-2 flex flex-col">
                                <label className="mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (val: string) => {
                                            if (watch("password") !== val) return "Your passwords do no match";
                                        },
                                    })}
                                />
                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                            </div>
                            <div className="flex flex-row items-center">
                                <input type="checkbox" {...register("termsAndConditions", { required: true })} onChange={() => setAgree(!agree)} />
                                <label className="ml-2 text-sm">I agree to the terms and conditions</label>
                            </div>

                            <button className={agree ? "submit" : "submit_disabled"} type="submit" disabled={!agree && true}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserRegisteration;
