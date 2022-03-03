import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
const Home: NextPage = () => {
  const [userInput, setUserInput] = useState()
  const textInput: any = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);
  return (
    <div className="">
      <Head>
        <title>Wakanda Forever</title>
        {/* add text in favicon */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-7xl mx-auto  p-5  '>
        <header className='text-gray-50 flex flex-col h-full justify-center items-center gap-3 font-OpenSans font-semibold text-2xl'>
          <h1>
            English to Wakandian
          </h1>
          {/* <hr className='self-center w-[30%] border-blue-800 border-2 rounded-lg' /> */}
        </header>
        <div className='mt-5 md:flex'>
          <section>
            <h1 className='text-gray-50 text-xl'>
              English
            </h1>
            <ReactTextareaAutosize ref={textInput} value={userInput} onChange={(e: any) => setUserInput(e.target.value)} placeholder='Enter Text' className='text-4xl border-none outline-none text-white placeholder:text-white font-medium cursor-text' />
          </section>
          <hr className='max-w-[30%] md:hidden mx-auto border-blue-800 border-2 rounded-lg' />
          <h1 className='hidden md:inline-block text-blue-800'>
            |
          </h1>
          <section>
            <h1 className='text-blue-300 text-xl'>
              Wakandian
            </h1>
            <ReactTextareaAutosize value={userInput} className="outline-none font-Wakandian text-4xl text-white">

            </ReactTextareaAutosize>
          </section>

        </div>

      </main>


    </div>
  )
}

export default Home
