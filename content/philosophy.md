---
title: "Philosophy"
description: "Why DayGaps exists, and how it's meant to be used."
date: 2026-06-10
---

It's 9:30. The gap you named *morning focus* is the next slice of your day, and three tasks sit under it: the ones you decided belonged there. Yesterday evening, or first thing this morning, you opened the app in planning mode and gave each gap its work. That's real labor, and it has its own surface in {{< brand >}}.

Right now you've left it behind. You're inside the gap, and the only verb that matters is checking things off. There's no setup ritual, no daily review, no priorities to triage. That work is over for now. You arrived; you focus.

This is what {{< brand >}} is built for, and most of the design discipline is in service of it: keeping the app out of the way so the work can happen.

A task manager that requires task management to maintain is a contradiction with itself. Every flag, every weekly review, every priority field is a task the system adds to your day. {{< brand >}} refuses that overhead. The app fades into the background. You arrive at a gap, focus on the tasks you put there, and check them off. The sections below are the design discipline that makes the fading possible.

## The gap is the unit

You don't live your day in twenty-minute increments, and you don't live it as "Today" in one twelve-hour box either. You live it in named slices. *Morning focus. Lunch. Afternoon writing. The school pickup. Evening proposal.* The work that happens is the work that lands in one of those slices.

{{< brand >}} takes this seriously. A task isn't just due today; it's in *this* gap. When the gap arrives, the tasks under it are what you do. You decided where each task belonged earlier: first thing in the morning, the night before, whenever planning fit. By the time the gap is in front of you, the deciding is done.

{{< figure src="/screens/today.png" alt="Today view in DayGaps, with named gaps across the day and the tasks scheduled into each" caption="Today. Each gap is named and holds the tasks you put there. Tasks are queried in from project files by their date." >}}

## Planning and executing

Your day has two halves. One half is already structured: meetings, classes, meals, errands, the walk, sleep. The parts that have a time and place. The other half is in the gaps between, and that half is yours to direct.

{{< brand >}} has two modes for the two halves, though it doesn't label them on the screen. Before the day starts, you're planning. The whole interface exists to help you decide what each gap is for. Once you're inside a gap, you're executing. The other gaps fade and the other projects step out of the way, and what's in front of you is one slice of time and a few tasks beneath it.

{{< figure src="/screens/focus.png" alt="A single gap focused in DayGaps, with the rest of the day's gaps muted" caption="Click a gap to focus it. The others quiet down." >}}

Or open the gap as its own window, with no sidebar and no way to navigate elsewhere. The friction is the feature. The next time you want to switch contexts, you close the window. That's the only gesture there is.

{{< figure src="/screens/standalone.png" alt="A standalone focused window in DayGaps showing a single gap with its tasks and nothing else" caption="A gap opened as a standalone window. No sidebar, no inspector, no escape hatch." >}}

Both modes are calm. Neither asks for grooming.

## Alongside the calendar

Your calendar is the system of record for events, and {{< brand >}} treats it that way. The app reads the calendars you choose to share and writes nothing back. Events arrive as facts: the fixed posts of the day, drawn alongside your gaps so the open time is visible at a glance.

From those facts the app derives everything else it shows you. The true gaps between events, listed live in the calendar pane, one click away from becoming a named gap that starts where the open time starts. The most each gap can hold, read from where the next fixed thing begins. The quiet tint on a gap that sits inside an event, whether that event is a seminar or an hour you blocked to think.

Derived means never stored, and never stored means never stale. When a meeting runs long or a class moves, there is no saved schedule waiting to be repaired; the geometry recomputes and the day reads true again. The plan you keep is the part you meant: the gaps you named and the tasks you placed. The arithmetic around them is the app's job, every time, from scratch.

## You hold the nuance

Only you know what Thursday at 4pm costs after a hard committee meeting. Which task is heavier than its size. What kind of work fits the hour before a seminar and what fits the hour after. None of that is in the data, and {{< brand >}} doesn't pretend otherwise: it hands you the true shape of your time and trusts you with everything that can't be computed. Every task lands where you put it, for reasons that are yours and stay yours.

The same boundary decides how the app speaks. What it can know as fact, it states plainly: this gap overlaps that event, this much room remains, this task wasn't checked off yesterday. Unfinished tasks ride forward to the top of Today as *Carried over*, in the same calm voice as everything else, because "didn't get to it" is history, not judgment. A deadline is different. A deadline is a fact you committed to, so it gets the one loud register in the app: color that interrupts the calm, on purpose, as your nudge to act.

## The method is yours

{{< brand >}} has strong opinions about chrome and none about process. Time blocking maps onto gaps. Pomodoro maps onto the Mac's menu-bar timer. GTD-shaped capture and review map onto the inbox and the projects it drains into. Hybrids work, and so does improvising a gap at 4pm for the evening. Process changes from project to project and season to season; the app's job is to hold the current one, not to enforce the last one.

## Your data is yours

Your areas, projects, and days live in a private CloudKit zone inside your own iCloud account, with a local cache on every device. Sign into the same Apple ID and each device sees the same plans. There are no {{< brand >}} servers, and the only account involved is the one you already have.

The data also has a second life as text. Open the bridge on the Mac and your projects land in a folder as plain YAML, one file per project:

```yaml
project:
  id: p-4389e6
  name: Q2 paper draft
  status: active
  purpose: |-
    Submit the methods paper by the Q2 cutoff. Audience leans
    methods-heavy. Marie gets one editing pass before submission.
  last_edited: 2026-06-10T14:22:07Z

tasks:
  - header: Drafting

  - id: t-c351bc
    title: Sketch the section 3 figure
    done: false
    me:
      date: 2026-06-12
      gap: "12:30"
    subtasks:
      - id: t-8a01f2
        title: Pull source data
        done: true
      - id: t-77b3c9
        title: Decide on color scheme
        done: false

  - header: Review

  - id: t-ebb896
    title: Send first pass to Marie
    done: false
    due_date: 2026-06-26
```

{{< figure src="/screens/project.png" alt="The Q2 paper draft project as it appears in DayGaps" caption="The same project, opened in DayGaps." >}}

Read it with `cat`. Edit it in Vim. Keep the folder in git. [Hand it to your AI](/ai/) and ask for a triage pass. When you check the bridge back in, the YAML becomes the new truth, and every session starts with a backup. The schema is documented in full and ships with the app, so the text copy of your work stays legible to you, your scripts, and whatever assistant you choose. You're never locked in, because the way out is built into the way the app thinks.

## Projects end. Areas hold.

A project is something with a finish line: write the paper, host the conference, renovate the kitchen, teach the semester. When you complete it, the whole project moves into Archives. Tasks, history, notes intact, readable months later, and deliberately read-only: finished work is a record, not a workspace.

Areas don't conclude; they hold the projects that pass through them. *Research. Teaching. Personal.*

The shape matters. The alternative is a perpetual project called *Research* with five hundred floating items, the thing you start grooming once a quarter and never finish. {{< brand >}} doesn't let that exist. If a task doesn't fit in a project that ends, it probably doesn't belong on this list.

## The app sorts

Inside a gap, tasks appear in a deterministic order: by area, then by project, then by their position in the project. You don't reorder them. There are no priority flags, no high-medium-low buckets, no drag handles.

If a task feels like it should be first and the computed order disagrees, the answer is not to override the sort. The answer is to fix the plan. Move the task to a different gap, a different project, or an earlier day. The order is a symptom; the plan is the cause.

If sorting feels necessary, something is wrong with the plan.

## What you did stays

Completed tasks don't disappear. They stay under their gap with a strikethrough, exactly where they were when you checked them. At the end of the day, the gap reads as a small record of what happened, not a fresh emptiness.

Checking something off is meant to be seen.

## In closing

Everything in {{< brand >}} flows from these. The app stays in the background so what's in the foreground is the work, the gap, and you. You arrive, you focus, you check off.
