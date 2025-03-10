import { useState } from 'react'

type TabsProps = {
  data: {
    header: string
    content: string
  }[]
}

const Tabs = ({ data }: TabsProps) => {
  const [ activeIndex, setActiveIndex ] = useState(0)

  return (
    <div>
      <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          {data.map((section, idx) => (
            <li key={idx} className="me-2">
              <button
                onClick={() => setActiveIndex(idx)}
                className={`inline-block rounded-t-lg border-b-2 p-4 transition-colors duration-200
                  ${idx === activeIndex ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'}`}
                // disabled={section.disabled}
              >
                {section.header}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 text-gray-700 dark:text-gray-300">
        {data[activeIndex]?.content}
      </div>
    </div>
  )
}

export default Tabs