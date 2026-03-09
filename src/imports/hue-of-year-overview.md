let me share with you what my app does, and its fetuers:
 Hue of Year — Full App Overview


Core Concept
Hue of Year is a daily reflection app for iOS. Each evening the user completes a short log capturing mood, energy, a daily win, and a task for tomorrow. Every logged day is assigned a color based on mood. Over time these colors build a visual record of the year — a color-coded grid of 365 days that shows emotional patterns at a glance.


Views
Home View
The landing screen. Contains three orbs representing the app's three main areas: the calendar view, Prism, and Echo. A log button triggers the evening flow. The home view is intentionally minimal and does not display data directly.
Evening Log Flow
A sequential multi-step flow triggered each evening. Steps in order:
Accountability check — only appears if a task was set for the previous day. Asks "Did you [task name]?" with Yes / Not quite. If Not quite, asks for a reason and offers to carry the task forward to tomorrow.
Mood — three options: Struggling / Okay / Thriving (red / amber / green)
Energy — three options: Low / Medium / High
Daily Win — short free text field, prompt: "What went right today?" then the logging gets saved

Completion Moment: After the final step, a full screen animation plays. The mood-colored orb shoots up from the bottom of the screen, bounces at center with spring physics, settles briefly, then accelerates upward and exits at the top. Confetti in the mood color falls from the top simultaneously. Auto-dismisses after 2 seconds. Returns to home view.
Calendar View
A full year grid of 365 day squares, each colored by the mood logged on that day. Unlogged days are neutral/empty.
Tap a month → zooms into month view showing individual days
Tap a day → opens Day Detail View
On first visit ever, the Calendar info card auto-opens after 1 second. A ? button allows re-opening at any time.
Day Detail View
Shows everything logged on a specific day:
Mood, energy, daily win text
Task set that day and its completion status
Date
Prism View
Forward-looking view for setting tomorrow's task.
Task input field — short text, max 40 characters, prompt: "What is the one thing you will do tomorrow?"
Save toggle — "Save task" unchecked by default. User can check for repeating tasks.
Saved task pills — all previously saved tasks shown as tappable pills. Tap to auto-fill input. Long press to delete.
Today's task section — separated by divider, shows the task set for today (targetDate = today) with completion status. "Completed" in green, "Not completed" in orange. Hidden entirely if no task was set for today. Read-only, no interactive elements.
On first visit ever, the Prism info card auto-opens after 1 second. A ? button allows re-opening at any time.
Echo View
Backward-looking analytics view. All data displayed here covers the full history of logged days.
Mood Distribution
Horizontal bar showing overall split of green / amber / red days across all logged entries.
Energy Distribution
Horizontal bar showing overall split of low / medium / high energy days.
Task Completion Rate
Percentage of days a task was set and completed, viewable by month and year.
Mood on Task Complete Days
Dual donut chart. Left donut: mood distribution on days the task was not completed. Right donut: mood distribution on days the task was completed. Connected by a "VS" label. Communicates immediately that completing tasks correlates with better mood.
Saved Task Detail
The task completion section is expandable. Tapping it reveals all saved tasks. Tapping a saved task opens a Task Detail View showing: total times selected, completion rate, mood distribution on days that task was set, longest streak, last completed date, and a dot timeline of appearances and outcomes.
Settings View
Appearance: Three options — Light Mode / Dark Mode / System Default. 
Evening Reminder: Toggle (default reflects iOS permission state). Time picker defaults to 21:00. Follows iOS notification permission flow (see Notifications section).
Legal: Privacy Policy, Terms of Service, Contact Support (all external links), Version number.
Footer: Copyright line.


Widgets
Home screen and lock screen widgets displaying:
The year grid (color-coded, updates after each log)
Today's mood (if logged)
Today's task (the one thing set for today)
Widgets update after each log entry. May take a few minutes to refresh.


Notifications
Single daily local notification — an evening reminder to complete the log flow.
Permission flow:
On first toggle tap in Settings, an in-app prompt appears explaining what the notification is for before the iOS system dialog is triggered
iOS system dialog purpose string: "Daily reminders to log your evening reflection and close your day."
If previously denied, tapping the toggle shows a prompt with a direct link to iOS Settings → Notifications
Default time: 21:00 local. User-adjustable via time picker in Settings.
Notification is cancelled automatically if the user has already logged that day.
Title: "Evening check-in." Body: "Time to log mood, energy, and reflection."


Design
iOS only
Light mode / Dark mode / System default
SF Pro throughout
Three mood colors: #10B981 green / #F59E0B amber / #EF4444 red
Minimalist, no streaks, no scores, no gamification beyond the completion moment animation