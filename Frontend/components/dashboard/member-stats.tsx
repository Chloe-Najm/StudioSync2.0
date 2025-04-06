export function MemberStats() {
  const classTypes = [
    { name: "Yoga", attendance: 450, percentage: 32 },
    { name: "HIIT", attendance: 320, percentage: 23 },
    { name: "Pilates", attendance: 280, percentage: 20 },
    { name: "Spin", attendance: 210, percentage: 15 },
    { name: "Strength", attendance: 140, percentage: 10 },
  ]

  return (
    <div className="space-y-6">
      {classTypes.map((type) => (
        <div key={type.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">{type.name}</span>
            <span className="text-sm text-muted-foreground">{type.attendance} attendees</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${type.percentage}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

