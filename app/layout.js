import '@/app/styles/globals.css';

export const metadata = {
    title: 'MomboteQ',
    description: "MomboteQ's Portfolio",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="overflow-auto scroll-smooth">
            <body className="overflow-hidden">{children}</body>
        </html>
    );
};

export default RootLayout;
