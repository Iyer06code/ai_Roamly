"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

function ChatBox() {
  const [destination, setDestination] = useState('')  // ← Added state
  const [messages, setMessages] = useState([])  // For dynamic messages

  const onSend = () => {
    if (!destination.trim()) return  // Prevent empty sends
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: destination }])
    // TODO: Call AI API here (e.g., fetch('/api/trip-plan', { body: JSON.stringify({destination}) }))
    console.log('Sending to AI:', destination)  // Temp log
    setDestination('')  // Clear input
  }

  return (
    <div className="flex flex-col h-full">
      {/* Display Messages */}
      <section className="flex-1 overscroll-y-auto p-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex mt-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-lg py-4 px-2 rounded-lg ${msg.type === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-black'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </section>
      {/* User Input */}
      <section>
        <div className="border-2 border-primary rounded-lg p-4 mt-6 relative">
          <Textarea
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where do you want to go?"
            className="w-full h-28 bg-muted border-accent-foreground focus-visible:ring-offset-0 resize-none"
          />
          <Button
            size="icon"
            className="absolute right-6 bottom-6"
            onClick={onSend}
            disabled={!destination.trim()}  // Disable if empty
          >
            <Send className="h-4 w-4" />  {/* Fixed w-3 → w-4 */}
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ChatBox
