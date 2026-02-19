import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowDown, Globe2, Icon, Landmark, Plane, Send } from 'lucide-react' 
import React from 'react'
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
const suggestions = [
    {
        title: "Create New Trip",
        icon: <Globe2 className=' text-blue-400 h-4 w-4' />
    },
    {
        title: "Inspire me where to go",
        icon: <Plane className=' text-green-400 h-4 w-4' />        
    },
    {
        title: "Discover Hidden Gems",
        icon: <Landmark className=' text-red-400 h-4 w-4' />                      
    },                          
    {
        title: "Adventure Destinations",
        icon: <Globe2 className=' text-yellow-400 h-4 w-4' />                      
    },
        
]

function Hero() {
  return (
    <div className='mt-24 flex items-center justify-center'>
            {/* Content*/}
            <div className='max-w-3xl w-full text-center space-y-6 '>
                <h1 className="text-xl md:text-5xl font-bold">Hey, I'm your <span className="text-primary">AI Trip Planner</span></h1>
                <p className="text-md md:text-md mt-4">Plan your next trip with ease. Just tell me where you want to go and I'll take care of the rest:Flights, Hotels, Trip Planner - all in seconds</p>

            {/* Input Box */}
            <div>
            <div className="border-2 border-primary rounded-lg p-4 mt-6 relative">
                    <Textarea placeholder="Where do you want to go?" className="w-full h-28 bg-muted border-accent-foreground focus-visible:ring-offset-0 resize-none"></Textarea>
                <Button size={'icon'} className='absolute right-6 bottom-6'>
                    <Send className='h-4 w-3'/>
                </Button>
                </div>

            </div>

            {/* Suggstion list*/}
            <div className='flex gap-1.5'>
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center gap-2 border-2 border-muted rounded-full p-4 mt-4 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        {suggestion.icon}
                        <h2 className="text-xs">{suggestion.title}</h2>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center flex-col'>
            <h2 className="my-7 mt-14 flex gap-2 items-center">Not sure where to start?<strong>See how it works</strong><ArrowDown className="h-4 w-4"/></h2>
            {/* Video Section */}
            <HeroVideoDialog
                 className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.example.com/dummy-video"
                thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
                thumbnailAlt="Dummy Video Thumbnail"
/>
            </div>

            </div>
    </div>
  )

}
export default Hero