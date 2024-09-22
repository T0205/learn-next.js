import SideNav from '@/app/ui/dashboard/sidenav'

// layout 组件接受一个 children 属性: 一个子组件, 可以是一个页面/布局
//     children 属性是当前文件夹下的所有 页面/布局, 当访问特定的路由时候, 获取对应的组件, 渲染到 children 中
// 使用 Layout 只有页面组件会更新, layout 不会重新渲染.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* dashboard 下其他页面 page.tsx 渲染的地方 */}
        {children}
      </div>
    </div>
  )
}
