// import React from 'react'

import ApiAccessKey from "../components/ApiAccessKey"
import ApiUsage from "../components/ApiUsage"
import Hero from "../components/Hero"

// type Props = {}

const Subscription = () => {
  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <ApiAccessKey />
      <ApiUsage />
    </div>
  )
}

export default Subscription