// import AuthButton from '../components/AuthButton'
// import { createClient } from '@/utils/supabase/server'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import { Search } from '@/components/Search'
import classNames from 'classnames'
import { GeistSans } from 'geist/font/sans'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default async function Index() {
  const cookieStore = cookies()

  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient(cookieStore)
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  // const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <p className={classNames(GeistSans.className, "font-bold text-xl")}>
            Quiver
          </p>
          {/* {isSupabaseConnected && <AuthButton />} */}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-8 opacity-0 max-w-4xl w-full px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <Search />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex text-center text-xs justify-between">
        <p className="font-semibold">
          Build in 🇨🇦 by <a className="underline" href="https://twitter.com/zlwaterfield">zlwaterfield</a>
        </p>
        <div>
          <a className="underline" href="https://github.com/zlwaterfield/quiver">
            <GitHubLogoIcon className="inline-block w-4 h-4 mr-2" />
          </a>
        </div>
      </footer>
    </div>
  )
}
