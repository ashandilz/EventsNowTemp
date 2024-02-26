import React from 'react'
import Container from './Container'
import OverviewSubComponent from './OverviewSubComponent'
export default function Overview() {
  return (
    
      <Container >
       <div className="h-full mb-56"> <div className="pl-10 mb-5 grid gap-2 mt-3">
        <div className=" font-mono text-custom-orange font-medium text-3xl ">Overview</div>
        <div className=" text-[#848484] font-mono">
        Get a quick overview of your event
        </div>
        </div>
        
        <div className="flex justify-between gap-8">
        <OverviewSubComponent
        image='tickets.svg'
        text='Total ticket Sale'
        linkToDetails="/event/dashboard/1/tickets"
        />
        <OverviewSubComponent
        image='attendence.svg'
        text='Total attendence'
        linkToDetails="/event/dashboard/1/tickets"
        />
        <OverviewSubComponent
        image='revenue.svg'
        text='Total revenue'
        linkToDetails="/event/dashboard/1/tickets"
        />
        
        </div></div>
      </Container>
  
  )
}
