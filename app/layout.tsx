import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

// TODO: 文件路由系统
// 1. page.tsx 在 Next 中是一个特殊的文件, 必须是可以访问的, 有点类似于 index.vue
// 2. layout.tsx 则是所有文件路由的公共布局, 也是一个特殊的文件.
//     多个界面之间的共享 UI,
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* TODO: className 属性 ??? */}
      {/* Tailwind 的 antialiased 类，该类可使字体更加平滑。使用这个类并不是必需的，但它会增添一些美感。 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
