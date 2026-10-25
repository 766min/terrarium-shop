import { cn } from '@/shared/utils/cn';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={cn('mt-auto w-full bg-amber-50')}>
            <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
                <div className="space-y-2">
                    <h3 className="text-sm font-bold text-gray-900">
                        우리의 초록이
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-500">
                        초록이를 사고 키우고 가꾸기
                    </p>
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">
                    바로가기
                </h4>
                <ul className="flex flex-wrap gap-4 text-xs text-gray-600 md:flex-col md:gap-1.5">
                    <li>
                        <Link href="/products" className="hover:text-green">
                            상품목록
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/boards/notice"
                            className="hover:text-green"
                        >
                            공지사항
                        </Link>
                    </li>
                    <li>
                        <Link href="/boards/qna" className="hover:text-green">
                            Q & A
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2">
                <h4 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">
                    고객 센터
                </h4>
                <p className="text-xs text-gray-600">
                    운영시간: 평일 09:00 - 18:00
                </p>
                <p className="text-xs text-gray-600">
                    문의 : terarrium@tera.com
                </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 text-center md:items-center md:justify-between md:text-left">
                <p className="text-xs text-gray-400">냠냠</p>
                <p className="mt-2 text-xs text-gray-400 md:mt-0">
                    프로젝트 완성까지
                </p>
            </div>
        </footer>
    );
}
