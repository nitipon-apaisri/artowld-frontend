// type contextChildren = { children: React.ReactNode };
type layoutProps = { children: React.ReactNode };
type creatorCardProps = { username?: string; image?: { banner: string; profile: string } };
type dropdownProps = { children: React.ReactNode };
type contextChildren = { children: React.ReactNode };
type signInButtonProps = { width?: string; px?: string; py?: string };
interface headerProps {
    toggleSidebar: () => void;
}

interface UserContextType {
    token: string | null;
}
export type { layoutProps, creatorCardProps, dropdownProps, headerProps, contextChildren, UserContextType, signInButtonProps };
