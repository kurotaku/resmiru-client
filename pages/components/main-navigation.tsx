import Link from 'next/link'
import Styles from '../../styles/MainNavigation.module.scss'

export default function MainNavigation(){
  return(
    <>
      <nav className={Styles.mainNav}>
        <img src="/images/logo/logo.svg" />
        <ul>
          <li><Link href="/"><a>ダッシュボード</a></Link></li>
          <li><Link href="/cards/"><a>診察券管理</a></Link></li>
        </ul>
      </nav>
    </>
  )
}