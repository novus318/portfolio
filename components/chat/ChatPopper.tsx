'use client'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"
import { SiChatbot } from 'react-icons/si'
import Chat from './Chat'

const ChatPopper = () => {
    const [isOpen, setIsOpen] = useState(false)
    const chatRef:any = useRef(null)

    const toggleChat = () => setIsOpen(!isOpen)

    // Close chat when clicking outside
    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (chatRef.current &&!chatRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside)
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [chatRef])

  return (
    <div className="fixed bottom-6 right-4 z-50">
      {isOpen ? (
        <div ref={chatRef}>
          <Chat setIsOpen={toggleChat} />
        </div>
      ) : (
        <div onClick={toggleChat} className="rounded-full bg-black-200 cursor-pointer p-3 border text-slate-100">
          <SiChatbot className="h-8 w-8" />
        </div>
      )}
    </div>
  )
}

export default ChatPopper
