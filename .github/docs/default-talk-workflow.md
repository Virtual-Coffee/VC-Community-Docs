---
name: Default Talk Workflow
about: Track tasks and collect information for a talk
title: "[TALK TITLE] by [SPEAKER NAME]"
labels: ""
assignees: ""
---

## Roles

One person can take on multiple roles

- Speaker
- Logistics Coordinator
- Marketing
- Moderator
- PA (Production Assistant)
- Post-production Team:
  - Editor(s)
  - GC (Graphics Coordinator)

See my notes on this section.<sup>[1](#a1)</sup>

## Workflow Timeline

### Scheduling a Talk

#### Talk Subsmission Form Is Completed

- [ ] **KICK-OFF ACTION**: The Speaker fills out an talk submission form.

[DEFAULT TALK FORM](./default-talk-submission-form.md)

- [ ] A message of confirmation of submission is automatically sent to the Speaker.
  - Informs the Speaker that their request was sent and they should receive a response within 3(?) business days.

#### Completed Talk Submission Form Is Received

- [ ] 1. The Logistics Coordinator receives the form submission.
- [ ] 2. The Logistics Coordinator checks the calendar for availability in order of the Speaker's preferred dates.
  - [ ] a. If any of the Speaker's suggested time slots are available, continue to next step.
  - [ ] b. If none of the Speaker's suggested time slots are available, the Logistics Coordinator reaches out to the Speaker to ask for additional time slot options or to postpone the talk until a later date:
  
  LINK NEW TIME SLOTS EMAIL TEMPLATE

  Go back to Step 2. Iterate until the Speaker submits a time slot that's listed as available on the calendar.
- [ ] 3. The Logistics Coordinator confirms availability of a leadership team member to act as PA.
- [ ] 4. The Logistics Coordinator confirms availability of an Moderator.
  - [ ] a. If one of the Speaker's suggested time slots has been agreed on by both the PA and Moderator, the Logistics Coordinator sends a follow-up email to the Speaker:

  LINK EMAIL FOLLOW-UP TEMPLATE

  - [ ] b. If none of the Speaker's suggested time slots work for the PA and/or Moderator, the Logistics Coordinator reaches out to the Speaker to ask for additional time slot options or to postpone the talk until a later date:

  LINK NEW TIME SLOTS EMAIL TEMPLATE

  Go back to Step 2. Iterate these steps until a time slot is agreed upon.
- [ ] 5. The Logistics Coordinator adds the talk to the Virtual Coffee calendar.

### Pre-Talk

#### Confirmation to Day Before the Talk

- [ ] Marketing adds talk to the monthly newsletter.
- [ ] Marketing adds talk to scheduled Slack/social media posts.
- [ ] Marketing adds talk to Tuesday/Thursday announcement script.
- [ ] The PA sets up recordable Zoom meeting.
- [ ] The Logistics Coordinator does a check-in with the Speaker 24—72 hours prior to the talk.
- [ ] The Logistics Coordinator lets the Speaker know that the Moderator will watch the chat and voice any questions that come through. They also ask that the Speaker does not display the chat on their shared screen during the presentation.
- [ ] The Logistics Coordinator requests the Speaker's slides 24 hours prior to the talk (if applicable).

#### Day of the Talk

- [ ] The Logistics Coordinator does a second check-in with the Speaker the morning of the talk.
- [ ] The Logistics Coordinator posts the Zoom link to the event approximately 1 hour before the start time.

### During the Talk

- [ ] The Moderator and the Speaker arrive 15 minutes prior to the scheduled start time to check equipment and settle in.
- [ ] The PA allows 5 minutes for attendees to arrive.
- [ ] The Moderator lets the PA know when to start the recording.
- [ ] The Moderator introduces the Speaker.

LINK TALK INTRO TEMPLATE

- [ ] The Speaker gives their talk.
- [ ] The Moderator observes the chat and asks questions for non-vocal participants.
- [ ] One the Speaker finishes their presentation, the Moderator gives a verbal transition into Q&A (unless the Speaker does it themself).
- [ ] The Moderator gives the official sign off.

LINK TALK OUTRO TEMPLATE

- [ ] The PA stops the recording.

### Post-Talk

- [ ] The Logistics Coordinator thanks the Speaker for giving their talk.

#### Post-production

- [ ] The GC creates the intro card/thumbnail image using the information submitted in the original talk proposal form.
- [ ] The Editor trims the raw footage and cuts the intro card into the beginning of the video, then uploads it to YouTube.
- [ ] The Editor selects the newly uploaded video to complete the "Video details" fields.
  - [ ] Title
  - [ ] Description --> this includes the talk description followed by the speaker bio
  - [ ] Thumbnail --> uploads the intro card file
  - [ ] Sets the video privacy as indicated on the proposal form
  - [ ] Adds video to the appropriate playlist(s)
  - [ ] Adds keyword tags
  - [ ] Sets "Languages, subtitles, and closed captions (CC)" as:
    - [ ] Video language: English (United States)
    - [ ] Caption certification: This content has never aired on television in the U.S.
    - [ ] Title and description language: English
  - [ ] Sets recording date --> leave location blank
  - [ ] Use "Standard YouTube License"
  - [ ] Sets "Comments and ratings" as:
    - [ ] Comment visibility: Hold potentially inappropriate comments for review
    - [ ] Sort by: Top
    - [X] Show how many viewers like and dislike this video
- [ ] The Editor selects the "Subtitles" tab to add the video subtitles:
  - [ ] English should already be listed as a language. Click the "DUPLICATE AND EDIT" link in the rightmost column. Accept the warning that your current subtitles will be overwritten.
  - [ ] You'll see a pop-up window with default subtitles generated by YouTube. Click the "ASSIGN TIMINGS" button. This breaks the text into pieces that will display on the screen over certain time spans.
  - [ ] Go through the text to correct spelling and add punctuation (click "EDIT AS TEXT" to switch back to the large block of text if that's easier), then watch through the video with the edited captions to make sure they're displaying across the screen at the correct timings.
- [ ] The Editor notes time points in the talk where there are natural breaks/transitions between topics so they can be noted in the video description and turned into chapters for easy viewer access.
- [ ] The Editor adds a link to the talk's subdirectory inside the VC GitHub repo that holds presentation slides and resources.

- [ ] Marketing shares the video details in the relevant Slack channels and adds the info to the upcoming monthly newsletter.

## Meg's Notes

<b id="a1">1</b>: I combined the "Reviewer" and "Coordinator" roles into one ("Logistics Coordinator") because they seem to cross paths so much. Plus once we nail down a submission form for the Speakers, many of their duties will be automated. I changed "Comms" to "Marketing" to make the name more descriptive of the duties assigned to the role. I think "Moderator" sounds nicer than "MC" and it also cuts down on the confusion by keeping "MC" and "Host" straight. The only reason we use "Host" is because Zoom uses it. I looked up what the person is called who runs the behind-the-scenes stuff on a set and found out it's a ["Production Assistant" or "PA"](https://en.wikipedia.org/wiki/Television_crew#Production_assistant) for short. I think we should go with that instead of "Host." Lastly, we have more than just a video editor for after the completion of the talk so I created a "Post-production Team" subgroup that contains "Editor(s)" and a "Graphics Coordinator" or "GC" for short. We'll need to cut the video but also edit the captions, create keywords, make an intro card, setup the correct metadata, etc. Two people could probably handle it, but we may want to break it out by "Video Editor" and "Caption Editor."
