// type contextChildren = { children: React.ReactNode };
type layoutProps = { children: React.ReactNode };
type creatorCardProps = { username?: string; image?: { banner: string; profile: string } };
type dropdownProps = { children: React.ReactNode };
type contextChildren = { children: React.ReactNode };
type signInButtonProps = { width?: string; px?: string; py?: string };
type signUpButtonProps = { width?: string; px?: string; py?: string };
type registerProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAndConditions: boolean;
};
type signInProps = {
    email: string;
    password: string;
};
interface headerProps {
    toggleSidebar: () => void;
}

interface UserContextType {
    token: string | null;
    currentUser: UserType | null;
    signIn: (user: object, rememberMe: boolean) => void | Promise<void> | Promise<unknown>;
    signOut: () => void;
}
interface AppContextType {
    lang: string;
    changeLanguage: (lang: string) => void;
}
interface UserType {
    id: string;
    name: string;
    email: string;
    role: string;
}
export type { layoutProps, creatorCardProps, dropdownProps, headerProps, contextChildren, UserContextType, signInButtonProps, signUpButtonProps, AppContextType, registerProps, signInProps, UserType };
