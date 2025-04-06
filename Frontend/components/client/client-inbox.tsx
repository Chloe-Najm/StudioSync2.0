import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientInbox() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333]">Your Inbox</h1>
        <p className="text-[#666666] mt-1">Messages and reminders from your studio.</p>
      </div>

      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
          <CardDescription>Communications from your studio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <InboxMessage
            title="Class Reminder: Spin Class"
            preview="Your Spin Class is scheduled for tomorrow at 7:00 AM. Please arrive 10 minutes early."
            sender="StudioSync"
            time="Today, 3:45 PM"
            isUnread={true}
          />

          <InboxMessage
            title="New Barre Workshop Next Month"
            preview="We're excited to announce a new Barre Intensive Workshop starting next month. Early registration is now open!"
            sender="Barre Studio"
            time="Yesterday, 10:22 AM"
            isUnread={false}
          />

          <InboxMessage
            title="Your Membership Renewal"
            preview="Your premium membership will renew automatically in 45 days. No action is required from your side."
            sender="StudioSync Billing"
            time="3 days ago"
            isUnread={false}
          />

          <InboxMessage
            title="Class Schedule Changes"
            preview="Please note that our weekend Spin classes will be moving to a new time slot starting next week."
            sender="Spin Studio"
            time="1 week ago"
            isUnread={false}
          />
        </CardContent>
      </Card>

      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <CardTitle>Reminders</CardTitle>
          <CardDescription>Upcoming class and appointment reminders</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-[#F7D6D4] bg-[#FDF0EE] p-4">
            <div className="space-y-1">
              <p className="font-medium">Spin Class Tomorrow</p>
              <p className="text-sm text-[#666666]">7:00 AM - 8:00 AM</p>
            </div>
            <div className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#F2A0A0]">Tomorrow</div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-[#F7D6D4] p-4">
            <div className="space-y-1">
              <p className="font-medium">Barre Fundamentals</p>
              <p className="text-sm text-[#666666]">Wednesday, 6:30 PM - 7:30 PM</p>
            </div>
            <div className="rounded-full bg-[#FDF0EE] px-3 py-1 text-xs font-medium text-[#F2A0A0]">2 days</div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-[#F7D6D4] p-4">
            <div className="space-y-1">
              <p className="font-medium">Spin Express</p>
              <p className="text-sm text-[#666666]">Friday, 12:00 PM - 12:45 PM</p>
            </div>
            <div className="rounded-full bg-[#FDF0EE] px-3 py-1 text-xs font-medium text-[#F2A0A0]">4 days</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface InboxMessageProps {
  title: string
  preview: string
  sender: string
  time: string
  isUnread: boolean
}

function InboxMessage({ title, preview, sender, time, isUnread }: InboxMessageProps) {
  return (
    <div className={`rounded-lg border ${isUnread ? "border-[#F2A0A0] bg-[#FDF0EE]" : "border-[#F7D6D4]"} p-4`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className={`font-medium ${isUnread ? "text-[#333333]" : "text-[#666666]"}`}>{title}</p>
          <p className="text-sm text-[#666666] line-clamp-2">{preview}</p>
        </div>
        {isUnread && <div className="h-2 w-2 rounded-full bg-[#F2A0A0]"></div>}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-[#999999]">
        <span>{sender}</span>
        <span>{time}</span>
      </div>
    </div>
  )
}

