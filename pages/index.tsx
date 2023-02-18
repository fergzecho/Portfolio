/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import Vercel from './../public/next.svg'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return ( 
      <> 
      <Head>
          <title>Fernando Besa Portfolio | Frontend Web Developer</title>
          <meta name="description" content="Generated by create next app"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico"/>
      </Head> 
      < main className="bg-slate-900 flex flex-col justify-center py-64 lg:px-32 sm:px-10 gap-32 sm:gap-32 s"> 
        <section className="sm:grid-cols-1 grid lg:grid-cols-2 gap-x-12 sm:place-content-center">
          <div>
              <h1 className="text-white text-6xl font-extrabold"><span className="mr-4 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">&#123;</span><span>Frontend</span> Web Development<span className="ml-4 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">&#125;</span></h1>
              <p className="font-sm text-whte-500 text-sm max-w-prose mt-8 inter">I'm an
                  aspiring frontend web developer with a passion for creating visually appealing
                  and user-friendly websites. Proficient in HTML, CSS, JavaScript, and CSS
                  frameworks such as Bootstrap and Foundation. 
              </p>
              <div className='mt-8 flex flex-row gap-4'>
                <button className="bg-red-400 py-1 px-6 rounded-sm">View Portfolio</button>
                <button className="bg-red-400 py-1 px-6 rounded-sm">Hire Me</button>
              </div>

          </div>
          <div className="text-black flex flex-col content-center items-center justify-center">
              <Image src={Vercel} height="500" width="500" alt="Hero Image"/>
          </div>
        </section> 
      </main>
      </>
    )
}
