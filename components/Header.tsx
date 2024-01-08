import classNames from 'classnames'
import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'
import { GeistSans } from 'geist/font/sans'

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-8 justify-center items-center">
        <p className={classNames(GeistSans.className, "font-bold text-4xl")}>
          Quiver
        </p>
      </div>
      <p className="mt-4 text-2xl !leading-tight mx-auto max-w-xl text-center">
        Open source finance analysis tool
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  )
}
