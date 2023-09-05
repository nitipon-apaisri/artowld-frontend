import { RefObject } from "react";

// type contextChildren = { children: React.ReactNode };
type layoutProps = { children: React.ReactNode };
type creatorCardProps = { username?: string; image?: { banner: string; profile: string } };
type productCardProps = { product: { creator?: string; title?: string; price: number } };
type dropdownProps = { children: React.ReactNode };
type contextChildren = { children: React.ReactNode };
type signInButtonProps = { width?: string; px?: string; py?: string };
type signUpButtonProps = { width?: string; px?: string; py?: string };
type sidebarProps = { isSidebarToggle?: boolean; toggleSidebar?: () => void };
type userBioProps = { bio?: string };
type externalLinkProps = { href?: string[] };
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
    isBreakpoint: boolean;
    isSmallScreen: boolean;
    searchHistory: object[];
    searchResult: productCardProps[];
    showSearchSuggesstions: boolean;
    changeLanguage: (lang: string) => void;
    useOutSideClick: (ref: RefObject<HTMLDivElement>) => void;
    searchInputOnFocus: () => void;
    setShowSearchSuggesstions: (value: boolean) => void;
    onSearch: (value: string) => void;
}
interface UserType {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
}
interface NavType {
    name: string;
    path: string;
}
interface RouterType {
    path: string;
    element: React.ReactNode;
}
export type {
    layoutProps,
    creatorCardProps,
    dropdownProps,
    headerProps,
    contextChildren,
    UserContextType,
    signInButtonProps,
    signUpButtonProps,
    AppContextType,
    registerProps,
    signInProps,
    UserType,
    NavType,
    RouterType,
    productCardProps,
    sidebarProps,
    userBioProps,
    externalLinkProps,
};
