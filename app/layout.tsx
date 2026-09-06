import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '张俊洋 — 机器人算法 / 强化学习 / 运动控制',
  description: '张俊洋的个人主页，研究方向为四足机器人、强化学习、运动控制与 sim-to-real。',
  metadataBase: new URL('https://your-handle.github.io'),
  openGraph: {
    title: '张俊洋 — 机器人算法 / 强化学习 / 运动控制',
    description: '四足机器人、强化学习、运动控制与 sim-to-real。',
    type: 'website',
    url: 'https://your-handle.github.io',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: '张俊洋 — 机器人算法与强化学习' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '张俊洋 — 机器人算法 / 强化学习 / 运动控制',
    description: '四足机器人、强化学习、运动控制与 sim-to-real。',
    images: ['/og.svg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
