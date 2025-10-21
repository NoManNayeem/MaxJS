import React from 'react';
interface NavbarProps {
    links: {
        label: string;
        href: string;
    }[];
    useCss?: boolean;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
