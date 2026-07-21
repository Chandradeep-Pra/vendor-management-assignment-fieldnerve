import React from 'react'
import VendorDistributionChart from './VendorDistributionChart'
import MonthlyPurchaseChart from './MonthlyPurchaseChart'
import { Card, CardContent, CardHeader } from '../ui/card'

const charts = [
  {
    "title":"Vendor Distribution",
    "chart":<VendorDistributionChart />
  },
  {
    "title":"Monthly Purchase",
    "chart":<MonthlyPurchaseChart />
  },
]

const DashboardCharts = () => {
  return (
    <div className='flex w-full gap-4 md:flex-row flex-col'>
      {charts.map((chart,index) => (
        <Card key={index} className='flex-1'>
          <CardHeader className='font-semibold text-center'>
            {chart.title}
          </CardHeader>
          <CardContent>
            {chart.chart}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default DashboardCharts