"use client"

import {useForm} from 'react-hook-form'
import { FormEvent, useEffect, useState } from 'react';
import { sendEmail } from '../util/send-email';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { BsFillSendArrowUpFill, BsFillSendCheckFill, BsFillSendExclamationFill, BsFillSendFill } from "react-icons/bs";

export type FormData = {
  email:string;
  message: string;
  honeypot:string;
}

export function Contact(){
  const {register, handleSubmit, reset} = useForm<FormData>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState('')
  const [sent, setSent] = useState(false);



  async function temp(delay:number){
      return new Promise(res=>setTimeout(res, delay))
  
  
    }
  async function onSubmit(data:FormData){
      setError('')
      setLoading(true)
      await sendEmail(data).then((result:any)=>{
          setInfo(result.message as string)
          setSent(true)
          reset();
      }).catch((error)=>{
          console.error(error)
          setError(error.error);
      }).finally(()=>{
          setLoading(false);
      })
  }
  
  
  return(
    <div
      className='max-w-full'
    >
      <form
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
        className="md:p-[3vh] md:border-[0.15vw] min-h-[30vh] z-5 max-w-full tall:max-h-[80vh] rounded-2xl p-5 border border-solid border-black/[.08] dark:border-white/[.145] flex flex-col items-center relative transition-colors bg-white dark:bg-[#1d1d23] mt-[6vh] tall:mb-[15vh]"
      >
        <h1 className='font-bold text-2xl md:text-[3vw]' >Contact Me</h1>
        <div className="mb-5 flex flex-col max-w-full">
          <label
            htmlFor="email"
            className="mb-1 md:text-[2vw]"
          >
            Email
          </label>
          <input 
            type="email"
            placeholder="Your email"
            className="transition-colors min-w-[57vw] md:min-w-[30vw] duration-300 md:text-[2vw] flex outline-none focus:border-[#00ddff56] focus:shadow-md border-2 rounded-lg p-2 border-solid border-black/[.08] dark:border-white/[.145]"
            enterKeyHint="next"
            {...register('email', {required:true})}
          />
        </div>
        <div className="flex flex-col max-w-full">
            <label
              htmlFor="message"
              className="mb-1 md:text-[2vw]"
            >
              Your message
            </label>

            <textarea
                rows={4}
                placeholder="Type your message"
                className="transition-colors min-w-[57vw] md:min-w-[30vw] duration-300 md:text-[2vw] outline-none focus:border-[#00ddff56] focus:shadow-md resize-none p-2 border-2 rounded-lg border-solid border-black/[.08] dark:border-white/[.145]"
                enterKeyHint="send"
                {...register('message',{required:true})}
            >
            </textarea>
        </div>

		  	{/* Honey pot for bot detection */}
        <input 
            type="text"
            className="hidden"
            {...register('honeypot')}
        />

        {/* Info labels */}
        <label className='md:text-[2vw] mt-2 flex text-red-500'>
            {error}
        </label>

        <label className='md:text-[2vw] mt-2 flex text-green-600 dark:text-green-300'>
            {info}
        </label>

        <div className="w-fit flex justify-center">
          <button
            disabled={loading}
            className="md:text-[2vw] gap-[1vw] flex-row md:py-[2vh] cursor-pointer rounded-full mt-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ddff56] dark:hover:bg-[#282830] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:p-[3vw] w-fit"
          >   {loading?<BsFillSendArrowUpFill />: sent?<BsFillSendCheckFill />:error.length==0?<BsFillSendFill />:<BsFillSendExclamationFill/>}
              {loading ? 'Sending...':sent?'Sent!':'Send it'}
          </button>
        </div>
      </form>
      </div>
  )
}