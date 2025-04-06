import { CalendarClock, Users } from "lucide-react"

export function UpcomingClasses() {
  const classes = [
    {
      id: 1,
      name: "Morning Yoga",
      time: "7:00 AM - 8:00 AM",
      instructor: "Emma Rodriguez",
      attendees: 12,
      maxAttendees: 20,
    },
    {
      id: 2,
      name: "HIIT Workout",
      time: "12:00 PM - 1:00 PM",
      instructor: "Michael Chen",
      attendees: 18,
      maxAttendees: 24,
    },
    {
      id: 3,
      name: "Pilates",
      time: "5:30 PM - 6:30 PM",
      instructor: "Sarah Johnson",
      attendees: 8,
      maxAttendees: 15,
    },
    {
      id: 4,
      name: "Spin Class",
      time: "7:00 PM - 8:00 PM",
      instructor: "David Wilson",
      attendees: 15,
      maxAttendees: 20,
    },
  ]

  return (
    <div className="space-y-4">
      {classes.map((classItem) => (
        <div key={classItem.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div className="flex-1">
            <p className="font-medium">{classItem.name}</p>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <CalendarClock className="h-4 w-4" />
              <span>{classItem.time}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Instructor: {classItem.instructor}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-sm">
              <Users className="h-4 w-4" />
              <span>
                {classItem.attendees}/{classItem.maxAttendees}
              </span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${(classItem.attendees / classItem.maxAttendees) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

