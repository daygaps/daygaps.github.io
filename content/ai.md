---
title: "Your AI, your terms"
description: "The DayGaps bridge hands your plans to the AI assistant of your choice as plain YAML, and takes the result back. We provide the doorway and never see what walks through it."
date: 2026-06-10
---

{{< brand >}} is built to be operated *with* an AI, and the way it does that says a lot about how the whole app thinks. Your assistant gets your real data, in plain text, on your desk. You pick the assistant, you phrase the asks, you approve the result. {{< brand >}} provides the doorway and has no idea what walks through it.

## The bridge

On the Mac, open the **bridge** and choose a scope: one or more of your areas. {{< brand >}} writes a snapshot of those areas to a folder on disk as plain YAML, one file per project plus your inbox, and locks itself for the duration. While the bridge is open, the app is read-only and the folder is the workbench.

Now the folder is yours. Open it with Claude, ChatGPT, a local model, a Python script, or Vim. Reorganize a project. Triage forty inbox items. Move every `#revision` task to next week. Ask for an honest read on whether the conference project is actually on track.

When you are done, **check in**. {{< brand >}} reads the folder and takes the YAML at face value as the new truth for everything in scope. Moves, regroupings, rewrites, additions, deletions: whatever shape the files came back in is the shape your data takes. Every session starts with a backup, and the last several sessions are kept, so checking in is reversible across sessions, not just within one.

The lifecycle is deliberate. A snapshot with a clear start and a clear end means you always know which version of your plans the assistant saw, the app never fights your editor over a half-written file, and one decisive check-in either lands or rolls back.

## What this means for privacy

The bridge writes to a local folder on your Mac. {{< brand >}} does not transmit your data to us or to any AI provider, does not monitor what you do with the snapshot, and cannot see your conversation with your assistant. The relationship between you and your AI, including which AI it is, whether it runs in the cloud or on your own machine, and what you let it read, is entirely yours. The [privacy page](/privacy/) covers the app's full posture; the short version is simple.

{{< callout >}}
There is nothing on our side to trust, because there is nothing on our side.
{{< /callout >}}

## What the assistant can and cannot touch

The snapshot draws its own boundaries, and they mirror the app's:

- **Project files and the inbox are editable.** That covers tasks, subtasks, sections, titles, done-states, due dates, and your scheduling.
- **Day files and area definitions are read-only.** Your assistant can see your gaps for context but cannot invent new ones; the shape of your day is decided in the app.
- **Archives stay out entirely.** Finished work is a record, not a workspace.

## The protocol

Everything an assistant needs to do this cleanly lives in one document: the AI bridge protocol. It is written to be pasted into a chat, and it covers the file formats, the editing rules, id minting, the scheduling rule that keeps tasks from silently vanishing off Today, and the handshake your assistant should perform before touching anything.

{{< button href="/ai-bridge-protocol/" >}}Read the protocol{{< /button >}}

A typical first session:

> Here is the DayGaps bridge protocol. My bridge folder is at `~/Desktop/daygaps-bridge/`. Read `areas.yaml` and `inbox.yaml`, tell me what you see, and wait. Then I want a triage pass: which inbox items belong in which project, and which are stale enough to delete.

The assistant reads, reports, waits for your go-ahead, edits the files, and announces what changed. You glance at the diff the app shows, check in, and the plans in your pocket are the plans you and your assistant just made.
