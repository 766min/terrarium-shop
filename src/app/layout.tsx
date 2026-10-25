import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '초록이',
    description: '테라리움',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className="h-full">
            <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
                <Header />
                <main className="w-full flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
