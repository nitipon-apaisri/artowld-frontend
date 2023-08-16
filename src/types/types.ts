// type contextChildren = { children: React.ReactNode };
type layoutProps = { children: React.ReactNode };
type creatorCardProps = { username?: string; image?: { banner: string; profile: string } };
type dropdownProps = { children: React.ReactNode };
interface headerProps {
    toggleSidebar: () => void;
}
export type { layoutProps, creatorCardProps, dropdownProps, headerProps };
