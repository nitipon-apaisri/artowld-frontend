import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
const UserRegisteration = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: unknown) => console.log(data);
    return (
        <main>
            <div className="wrapper">
                <h1 className="text-2xl">{t("userRegistration")}</h1>
                <hr className="mt-4" />
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-6">
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" {...register("firstName", { required: true })} />
                        {errors.firstName && <span>This field is required</span>}
                        <label>Last name:</label>
                        <input type="text" {...register("lastName", { required: true })} />
                        {errors.lastName && <span>This field is required</span>}
                    </div>
                    <label>Email:</label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                    <label>Password:</label>
                    <input type="password" {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}
                    <label>Confirm Password:</label>
                    <input type="password" {...register("confirmPassword", { required: true })} />
                    {errors.confirmPassword && <span>This field is required</span>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
};

export default UserRegisteration;
