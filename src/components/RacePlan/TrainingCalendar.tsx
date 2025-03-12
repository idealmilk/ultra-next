import React from 'react'

const trainingData = [
  {
    week: 'Week 1',
    days: [
      [ 'Running - 5km' ], // Monday
      [ 'Cycling - 20km' ], // Tuesday
      [ 'Swimming - 30 mins', 'HIIT - 20 mins' ], // Wednesday (two sessions)
      [ 'Yoga - 45 mins' ], // Thursday
      [ 'Rest Day' ], // Friday
      [ 'Strength Training - Upper Body' ], // Saturday
      [ 'Long Run - 10km' ], // Sunday
      '🏆 Total: 5 sessions', // Weekly Statistics
    ],
  },
  {
    week: 'Week 2',
    days: [
      [ 'Running - 3km', 'Jump Rope - 15 mins' ], // Monday (two sessions)
      [ 'Cycling - 15km' ], // Tuesday
      [ 'Strength Training - Lower Body' ], // Wednesday
      [ 'Rest Day' ], // Thursday
      [ 'Interval Sprints - 10x200m' ], // Friday
      [ 'Swimming - 40 mins' ], // Saturday
      [ 'Hiking - 2 hours' ], // Sunday
      '🏆 Total: 6 sessions', // Weekly Statistics
    ],
  },
  {
    week: 'Week 3',
    days: [
      [ 'Yoga - 30 mins' ], // Monday
      [ 'Cycling - 25km' ], // Tuesday
      [ 'Running - 7km' ], // Wednesday
      [ 'HIIT - 30 mins' ], // Thursday
      [ 'Strength Training - Full Body' ], // Friday
      [ 'Rest Day' ], // Saturday
      [ 'Long Run - 12km' ], // Sunday
      '🏆 Total: 5 sessions', // Weekly Statistics
    ],
  },
  {
    week: 'Week 4',
    days: [
      [ 'Swimming - 30 mins' ], // Monday
      [ 'Cycling - 30km' ], // Tuesday
      [ 'Yoga - 40 mins' ], // Wednesday
      [ 'Strength Training - Upper Body' ], // Thursday
      [ 'Running - 8km' ], // Friday
      [ 'Interval Sprints - 12x200m' ], // Saturday
      [ 'Hiking - 3 hours' ], // Sunday
      '🏆 Total: 7 sessions', // Weekly Statistics
    ],
  },
  {
    week: 'Week 5',
    days: [
      [ 'Running - 5km' ], // Monday
      [ 'Jump Rope - 20 mins' ], // Tuesday
      [ 'Strength Training - Lower Body' ], // Wednesday
      [ 'Swimming - 45 mins' ], // Thursday
      [ 'Cycling - 40km' ], // Friday
      [ 'Rest Day' ], // Saturday
      [ 'Marathon Simulation - 15km' ], // Sunday
      '🏆 Total: 6 sessions', // Weekly Statistics
    ],
  },
]

const TrainingCalendar = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        {/* Table Header */}
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {[ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Weekly Statistics' ].map(
              (header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2 text-left">
                  {header}
                </th>
              ),
            )}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {trainingData.map((week, index) => (
            <React.Fragment key={index}>
              {/* Week Row */}
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-bold">{week.week}</td>
                {week.days.map((_, dayIndex) => (
                  <td key={dayIndex} className="border border-gray-300 px-4 py-2" />
                ))}
              </tr>

              {/* Training Sessions Row */}
              <tr>
                {week.days.map((sessions, dayIndex) => (
                  <td key={dayIndex} className="border border-gray-300 px-4 py-2">
                    {Array.isArray(sessions) ? (
                      sessions.map((session, sessionIndex) => (
                        <div
                          key={sessionIndex}
                          className="mb-1 rounded-md bg-blue-100 p-1 text-sm text-blue-700"
                        >
                          {session}
                        </div>
                      ))
                    ) : (
                      <span>{sessions}</span>
                    )}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrainingCalendar
