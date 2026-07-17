---
title: "Concepts"
description: "The whole DayGaps model in one read: where things live, when things happen, and what a gap really is."
date: 2026-06-10
---

{{< brand >}} is a small set of ideas that compose. Five minutes here and the whole app will feel obvious.

## Where things live

Everything you put into {{< brand >}} has exactly one home. The hierarchy is shallow on purpose: areas hold projects, projects hold tasks, and there is one optional level of grouping on each side.

<figure class="concept-map">
  <div class="concept-map__panel">
    <p class="concept-map__title">The sidebar: areas hold projects</p>
    <ul class="ctree">
      <li class="ctree__area"><span class="ctree__chip ctree__chip--mint"></span>Research<span class="ctree__note">area</span>
        <ul>
          <li class="ctree__row">General tasks<span class="ctree__note">no project needed</span></li>
          <li class="ctree__row">Q2 paper draft<span class="ctree__note">project</span></li>
          <li class="ctree__row ctree__row--subarea">Lab<span class="ctree__note">sub-area</span>
            <ul>
              <li class="ctree__row">Conference talk<span class="ctree__note">project</span></li>
              <li class="ctree__row">Grant renewal<span class="ctree__note">project</span></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="ctree__area"><span class="ctree__chip ctree__chip--gold"></span>Teaching<span class="ctree__note">area</span>
        <ul>
          <li class="ctree__row">Spring course<span class="ctree__note">project</span></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="concept-map__panel">
    <p class="concept-map__title">Inside a project: sections hold tasks</p>
    <div class="cproj">
      <p class="cproj__section">Drafting<span class="ctree__note">section</span></p>
      <div class="cproj__task"><span class="cbox"></span>Draft section 3</div>
      <div class="cproj__task cproj__task--sub"><span class="cbox cbox--done"></span><s>Pull source data</s></div>
      <div class="cproj__task cproj__task--sub"><span class="cbox"></span>Cross-check table 2<span class="ctree__note">subtask</span></div>
      <div class="cproj__task"><span class="cbox"></span>Email the co-author</div>
      <p class="cproj__section">Review<span class="ctree__note">section</span></p>
      <div class="cproj__task"><span class="cbox"></span>Send first pass to Marie</div>
    </div>
  </div>
</figure>

**Areas** are the long-running domains of your life: *Research, Teaching, Service, Personal*. Areas hold; they never finish. Each one carries a color you choose, and that color follows its tasks everywhere in the app, so a glance tells you which part of your life is asking.

**Sub-areas** are one level of grouping inside an area, for when an area grows a wing: a *Lab* inside *Research*, a *Committee* inside *Service*. One level, no deeper.

**Projects** are the things with finish lines: *submit the paper, teach the course, renovate the kitchen*. A project belongs to one area (or sub-area). When it is done, you archive the whole thing; the archive keeps every task and its history, readable whenever you want to walk through it. Projects you are living in right now can be pinned to the top of the sidebar.

**General tasks** cover the to-dos that never deserve a project. Every area takes tasks directly, so *renew parking permit* can live in *Personal* without ceremony.

**Sections** group tasks inside a project: *Drafting* and *Review* inside the paper, week by week inside the course. A section is a named divider, nothing heavier.

**Tasks** are the unit of doing, and **subtasks** are their one level of fine print. A subtask carries a title and a done-state and inherits everything else from its parent: its project, its dates, its place in the day. Subtasks travel with the parent wherever it goes, and a parent cannot be completed while a subtask is still open. That last rule is the point: the subtask list is the honest definition of done.

Sub-areas, sections, and subtasks all collapse, so a big structure can read as a small one until you need the detail.

## The inbox

The inbox is where thoughts land before they have a home. Type into it from any screen (the capture button lives in the same spot everywhere: the bottom-bar button on iPhone, a keyboard shortcut on the Mac). The item is one line of text with a timestamp, and that is all it is. There are no dates, no gaps, no projects yet.

You triage later: drag an inbox item into a project (or an area's general-task list, or a specific day) and it becomes a task. The one-line thought carries forward as the title; you fill in whatever else it needs from there.

The inbox is deliberately calm and mostly-empty. It is the parking lot between "I thought of this" and "I know where this goes." When it grows past a page, that is the signal to sit down and triage.

## When things happen

Every task has room for two dates, and they answer different questions.

**Scheduled** is when you plan to do it: a day, and optionally a specific gap on that day. Scheduling is the verb of planning. It is yours to change as the week bends, and moving a task to tomorrow is a routine act, not a failure.

**Due** is when it must be done: the submission deadline, the grade-posting date, the day the grant closes. Due dates are rare and loud. As one approaches, it turns red. Today carries a DUE chip that counts tasks due or overdue; the chip is prominent when the count is above zero and absent when it is zero, so its presence is information. A Deadlines view collects every dated commitment in one place.

The two fields are fully independent. A task can have both (planned ahead of its deadline), only a schedule (most tasks, most of the time), only a due date (a commitment you have not placed in a day yet), or neither (it waits in its project as *anyday* work until you are ready).

A day can also end before you got to something. A scheduled task you didn't finish rides forward to the top of Today as **Carried over**, in the app's calm voice, where it waits to be done or rescheduled in your own time. Carried over is plain history, yesterday's plan meeting today's, and rescheduling it is a routine act. Due is the field that shouts; carried over never does.

## The gap

A **gap** is the part of {{< brand >}} the name comes from. Your calendar holds the committed parts of the day: meetings, classes, clinic hours, the school run. Between those commitments is the time the day actually gives you. A gap is a piece of that time, claimed and named.

A gap has a start time and a name: *Morning writing, 07:30. Before lab, 10:00. Evening review, 21:00.* If you want, a gap can carry a reminder, a single quiet notification that announces its arrival.

A gap has no end time to maintain. {{< brand >}} looks at where the next fixed thing begins, the next gap or the next calendar event, and derives the most the gap can hold. Your plan changes, the math follows, and there is nothing to update by hand.

The calendar side of this is read-only by design. {{< brand >}} reads the calendars you choose to share and writes nothing back; your events show up as the fixed posts of the day, and your calendar remains the system of record for them. The calendar pane also lists the true open stretches it derives between events, kept current as the day changes. Click one and it becomes a named gap, starting right where the open time starts.

Tasks scheduled into a gap appear under its header in Today. They arrive in a consistent order on their own, and when the gap's time comes, the only verb left is checking things off. Focus a gap and the rest of the day steps back.

**A gap can also live inside a calendar event.** Set a gap's start time inside a meeting and {{< brand >}} tints it to show the overlap. The app states the geometric fact and stops there; what the overlap *means* is yours. Work you intend to do during a seminar. Notes to raise in the meeting. The two minutes of prep right before you speak. The same mechanism carries all of them.

## Tags that come and go

Write `#manuscript` or `#TG` anywhere in a task's title and it becomes a tag. When the page you are looking at contains tagged tasks, the tags appear as chips at the top; tap one and the page filters to it.

Tags are read from the tasks in front of you, every time, and stored nowhere. There is no tag registry, no rename ceremony, no cleanup debt. Delete the text from the last task that carries it and the tag has never existed. Tags cost exactly what they say on the screen, which makes them safe to invent freely: tag this week's grading `#g1`, filter by it for a few days, and let it evaporate.

## Filtering by area or tag

Every list view (Today, This Week, a project page) can be narrowed by an area or by a tag. Area chips appear at the top of any list that spans areas; tap one and only that area's tasks remain. Tag chips sit beside the area chips, derived from the tasks actually present in the view; tap one and the list filters to it. Combine an area with a tag and the list filters to the intersection.

Filters are always view-scoped and reset when you leave the view. There is no saved-filter state to manage and no smart-list to keep tidy. The chips are up-to-the-minute: they show only what the current view actually contains, so the same button never lies.

## Sharing a project

A project can be shared with other people through iCloud. Invite someone and the project's *plan* becomes common ground: its name, its purpose, its sections, the order of its tasks, which tasks are done, the project deadline, and every task's due date. Everyone sees the same plan and the same progress.

What stays yours is *when*. Which day you schedule a task for, which gap you put it in, what you pin, what you collapse: all of that is personal state, invisible to the people you share with. A shared project agrees on what must happen and by when; each person decides where it lands in their own day.

One pattern this enables: a project shared with your weekly meeting, and a gap you placed inside the meeting itself. Schedule the items you want to raise into that gap, and your agenda assembles itself from the shared plan, on your phone, in the room.

## Where to go from here

{{< cards >}}
{{< card title="Start" href="/start/" link="Walk through it →" >}}From install to a planned day, in one sitting.{{< /card >}}
{{< card title="Patterns" href="/patterns/" link="See the days →" >}}Whole days lived with DayGaps, meeting-fractured to wide open.{{< /card >}}
{{< card title="FAQ" href="/faq/" link="Open the FAQ →" >}}The operational details, every shortcut, every edge.{{< /card >}}
{{< card title="Your AI" href="/ai/" link="How it works →" >}}Hand your data to an assistant on your own terms.{{< /card >}}
{{< /cards >}}
