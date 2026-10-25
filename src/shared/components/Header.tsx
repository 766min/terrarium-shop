import { cn } from '@/shared/utils/cn';
import Link from 'next/link';
import { SiFlower } from 'react-icons/si';
import { IoCartOutline } from 'react-icons/io5';
import { DiGhostSmall } from 'react-icons/di';

export default function Header() {
    return (
        <header
            className={cn(
                'sticky top-0 z-50 flex w-full items-center bg-amber-50 backdrop-blur-md transition-all',
            )}
        >
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-16 md:px-6">
                <Link
                    href="/"
                    className="text-lg font-black tracking-tight text-gray-900 transition-colors hover:text-green-600 md:text-xl"
                >
                    초록이
                </Link>

                <nav className="flex items-center gap-1 md:gap-3">
                    <Link
                        href="/products"
                        aria-label="전체상품"
                        className="flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-gray-700 transition-colors hover:text-green-600 md:text-sm"
                    >
                        <DiGhostSmall className="h-4 w-4 shrink-0" />
                        <span className="hidden md:inline">전체 상품</span>
                    </Link>
                    <Link
                        href="/cart"
                        aria-label="장바구니"
                        className="flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-gray-700 transition-colors hover:text-green-600 md:text-sm"
                    >
                        <IoCartOutline className="h-4 w-4 shrink-0" />
                        <span className="hidden md:inline">장바구니</span>
                    </Link>

                    <Link
                        href="/login"
                        aria-label="로그인"
                        className="flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-gray-700 transition-colors hover:text-green-600 md:text-sm"
                    >
                        <SiFlower className="h-4 w-4 shrink-0" />
                        <span className="hidden md:inline">로그인</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
