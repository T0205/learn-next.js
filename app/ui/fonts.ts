/**
 * 保存整个应用使用的字体
 * ['latin'] 表示这个字体配置支持拉丁字母，这是大多数西方语言使用的字符集
 */

// 导入 Inter 字体
import { Inter } from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] })

// 导入次要字体
import { Lusitana } from 'next/font/google'
export const lusitana = Lusitana({ weight: '400', subsets: ['latin'] })
