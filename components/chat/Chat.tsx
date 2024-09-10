'use client'
import { useState } from 'react'
import { Send, Phone, Video, Info, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Chat = ({setIsOpen}:any) => {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-950 text-gray-100 max-h-[550px] rounded-xl border">
    <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl">
      <div className="flex items-center space-x-3 bg-slate-500 rounded-full">
        <Avatar className="w-10 h-10">
          <AvatarFallback>NI</AvatarFallback>
        </Avatar>
      </div>
      <div className=" bg-slate-600 rounded-full cursor-pointer p-1"
      onClick={
        setIsOpen
      }>
        <X/>
  </div>
    </div>

    {/* Chat Area */}
    <ScrollArea className="flex-grow p-4">
      <div className="space-y-4">
     
      </div>
    </ScrollArea>

    {/* Message Input */}
    <div className="p-3">
      <div className="flex items-center space-x-2 bg-slate-700 rounded-full p-1">
        <Input
          className="flex-grow bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0"
          placeholder="Message..."
        
        />
        <Button  className="rounded-full bg-white-100 hover:bg-white-200 p-2 text-slate-950">
          <Send className="h-5 w-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Chat
