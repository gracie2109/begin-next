import { useRef, useState } from "react"

const useDebounce = (callback:void | any, timeout:any) => {
   const timerId = useRef<any>(null)
   const [isDone, setIsDone] = useState<boolean>(false)
   timeout = timeout || 0
   return [
      (...args: any) => {
         if (timerId.current) {
            clearTimeout(timerId.current)
            timerId.current = null
            setIsDone(true)
         }
         timerId.current = setTimeout(() => {
            setIsDone(false)
            callback(...args)
         }, timeout)
      },
      isDone
   ]
}

export  {useDebounce}