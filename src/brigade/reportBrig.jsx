import { Option, Select, Textarea } from '@material-tailwind/react'
import React from 'react'

const ReportBrig = () => {
  return (
    <div>
     {/* selects */}
     <div>
     <div className="w-72">
      <Select label="PDP Tanlang">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
    {/* text areas */}
    <div>
      <div>
        <Textarea label='s'>
        </Textarea>
      </div>
      <div>
      <Textarea></Textarea>
      </div>
    </div>
     </div>
    </div>
  )
}

export default ReportBrig