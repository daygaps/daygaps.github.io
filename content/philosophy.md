---
title: "Philosophy"
description: "Why DayGaps exists, and how it's meant to be used."
date: 2026-05-13
---

It's 9:30. The gap you named *morning focus* is the next slice of your day, and three tasks sit under it: the ones you decided belonged there. Yesterday evening, or first thing this morning, you opened the app in planning mode and gave each gap its work. That's real labor, and it has its own surface in {{< brand >}}.

Right now you've left it behind. You're inside the gap, and the only verb that matters is checking things off. There's no setup ritual, no daily review, no priorities to triage. That work is over for now. You arrived; you focus.

This is what {{< brand >}} is built for, and most of the design discipline is in service of it: keeping the app out of the way so the work can happen.

A task manager that requires task management to maintain is a contradiction with itself. Every flag, every weekly review, every priority field is a task the system adds to your day. {{< brand >}} refuses that overhead. The app fades into the background. You arrive at a gap, focus on the tasks you put there, and check them off. The sections below are the design discipline that makes the fading possible.

## The gap is the unit

You don't live your day in twenty-minute increments, and you don't live it as "Today" in one twelve-hour box either. You live it in named slices. *Morning focus. Lunch. Afternoon writing. The school pickup. Evening proposal.* The work that happens is the work that lands in one of those slices.

{{< brand >}} takes this seriously. A task isn't just due today; it's in *this* gap. When the gap arrives, the tasks under it are what you do. You decided where each task belonged earlier: first thing in the morning, the night before, whenever planning fit. By the time the gap is in front of you, the deciding is done.

{{< figure src="/screens/today.png" alt="Today view in DayGaps, with named chunks across the day and the tasks scheduled into each" caption="Today. Each gap is named and holds the tasks you put there. Tasks are queried in from project files by their date." >}}

## Planning and executing

Your day has two halves. One half is already structured: meetings, classes, meals, errands, the walk, sleep. The parts that have a time and place. The other half is in the gaps between, and that half is yours to direct.

{{< brand >}} has two modes for the two halves, though it doesn't label them on the screen. Before the day starts, you're planning. The whole interface exists to help you decide what each gap is for. Once you're inside a gap, you're executing. The other gaps fade and the other projects step out of the way, and what's in front of you is one slice of time and a few tasks beneath it.

{{< figure src="/screens/focus.png" alt="A single gap focused in DayGaps, with the rest of the day's chunks muted" caption="Click a gap to focus it. The others quiet down." >}}

Or open the gap as its own window, with no sidebar and no way to navigate elsewhere. The friction is the feature. The next time you want to switch contexts, you close the window. That's the only gesture there is.

{{< figure src="/screens/standalone.png" alt="A standalone focused window in DayGaps showing a single gap with its tasks and nothing else" caption="A gap opened as a standalone window. No sidebar, no inspector, no escape hatch." >}}

Both modes are calm. Neither asks for grooming.

## Your data is yours

Every project is a YAML file. Every day is a YAML file. Captured thoughts live in `inbox.yaml`. The whole structure of your work sits in a folder of your choosing: Dropbox, iCloud, a Git repo, anywhere you trust.

```yaml
project:
  id: p-4389e6
  name: Q2 Paper Draft
  status: active
  created: 2026-05-13
  notebook: false

  purpose: |-
    Submit the methods paper by the Q2 cutoff. Audience leans methods-heavy. Co-authored with Marie; she gets one editing pass before submission. The goal is a tight first draft, not a perfect manuscript.

tasks:
  - header: Drafting

  - id: t-c351bc
    date: 2026-05-13
    chunk: "12:30"
    title: Sketch §3 figure
    done: false
    subtasks:
      - id: t-c351bc-s1
        title: Pull source data
        done: true

      - id: t-c351bc-s2
        title: Decide on color scheme
        done: false

  - id: t-4b91ef
    date: 2026-05-14
    title: Pull citation list
    done: false

  - header: Review

  - id: t-ebb896
    title: Send first pass to Marie
    done: false

  - id: t-54b792
    title: Incorporate Marie's edits
    done: false
```

{{< figure src="/screens/project.png" alt="The Q2 Paper Draft project as it appears in DayGaps" caption="The same project, opened in DayGaps." >}}

The app reads those files and writes them back. It doesn't own them. There's no database to corrupt, no cloud account to lose. The file is the export.

Edit the YAML directly and the app reflects the change the next time you open the project. The file is the storage. You're never locked in because there's nothing to be locked into.

## Projects end. Areas hold.

A project is something with a finish line: write the paper, host the conference, renovate the kitchen, teach the semester. When you complete it, the whole file moves into an archive folder. Tasks, history, notes intact. You can still walk through it months later.

Areas don't conclude; they hold the projects that pass through them. *Research. Teaching. Personal.* An area is a folder, and that's the only thing it is.

The shape matters. The alternative is a perpetual project called *Research* with five hundred floating items, the thing you start grooming once a quarter and never finish. {{< brand >}} doesn't let that exist. If a task doesn't fit in a project that ends, it probably doesn't belong on this list.

## The app sorts

Inside a gap, tasks appear in a deterministic order: by area, then by project, then by their position in the file. You don't reorder them. There are no priority flags, no high-medium-low buckets, no drag handles.

If a task feels like it should be first and the computed order disagrees, the answer is not to override the sort. The answer is to fix the plan. Move the task to a different gap, a different project, or an earlier day. The order is a symptom; the plan is the cause.

If sorting feels necessary, something is wrong with the plan.

## What you did stays

Completed tasks don't disappear. They stay under their gap with a strikethrough, exactly where they were when you checked them. At the end of the day, the gap reads as a small record of what happened, not a fresh emptiness.

Checking something off is meant to be seen.

## In closing

Everything in {{< brand >}} flows from these. The app stays in the background so what's in the foreground is the work, the gap, and you. You arrive, you focus, you check off.
