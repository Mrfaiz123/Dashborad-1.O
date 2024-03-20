import React from 'react'
import Chart from './Cart'
function DashBorad() {
  return (
    <div className='flex flex-col py-12 px-14'>
      <h2 className='font-semibold'>DashBorad</h2>
      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-6 justify-center">
          <h2>Faiz Ali</h2>
          <p className="text-gray-500 mt-3">Your Expenses: Rs10000</p>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-6 justify-center">
          <h2>Faiz Ali</h2>
          <p className="text-gray-500 mt-3">Your Savings: Rs100000</p>
        </div>
      </div>
      <div className="flex space-x-8 py-3 flex-col font-semibold w-4/5">
        <h2>Expanses Chart</h2>
        <Chart className="w-4/5" />
      </div>
      <div className="flex space-x-8 py-5">
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-6 justify-center">
          <h2>Your Activity</h2>
          <li className=" mt-3">you send Rs 10000 to your mother</li>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-6 justify-center">
          <h2>Pending Bills </h2>
          <li className="mt-3">Broadband Bill : Rs 700</li>
        </div>
      </div>
    </div>
  )
}

export default DashBorad
