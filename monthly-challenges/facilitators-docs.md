# Monthly Challenge Facilitators Handbook

Thanks for volunteering to facilitate our monthly challenges! The Monthly Challenge Team Leads and Community Maintainers are always here to answer your questions and support you, so please reach out anytime! Most of our challenges have been created, and the directions and structure are available in the monthly challenge folders and on the website.

The Monthly Challenge team abides by Virtual Coffee [Code of Conduct](https://virtualcoffee.io/code-of-conduct/). Please take a moment to read it.


## Table of Contents

- [Facilitating a Challenge](#facilitating-a-challenge)
  - [Before the Challenge](#before-the-challenge)
    - [Update the Challenge Page on the Website](#update-the-challenge-page-on-the-website)
  - [The First Day of the Month](#the-first-day-of-the-month)
    - [Update the `monthly-challenge` Channel on Slack](#update-the-monthly-challenge-channel-on-slack)
    - [Make an Announcement for a New Challenge](#make-an-announcement-for-a-new-challenge)
    - [Blog Post](#blog-post)
  - [During the Challenge](#during-the-challenge)
  - [Post Challenge](#post-challenge)

## Technical Guidelines

Monthly Challenge team communication and facilitation mostly takes place in Slack and GitHub. In this section, you will find a guide on how to work with Slack and GitHub for the monthly challenge.

Read the "[Facilitating a Challenge](#facilitating-a-challenge)" section to learn more about facilitating a challenge.

### Set Up a Slack Bot

You can set up a Slack bot to drop a reminder and schedule a thread from your personal account.

#### Slack Reminder

Some challenges require regular reminders during the challenge that drops daily or weekly. You can read the guide on how to set a reminder on the official [Slack help center](https://slack.com/help/articles/208423427-Set-a-reminder).

#### Schedule a Thread

Sometimes, you want to write a customized thread directly from your account, such as weekly check-ins. If you need to post this in a particular hour, you can schedule your message by following the below instructions on your desktop:

1. Go to the channel where you want to post your message.
2. Write your message.
3. Click the down arrow next to the green "Send" icon.

    ![Slack schedule for later](./assets/slack-schedule-for-later.png)
4. Select the "Custom time".
5. Set the day and time. This day and time default to your timezone.

    ![Slack schedule message](./assets/slack-schedule-message.png)

### Update Monthly Challenge Page on the Website

Most of our challenges are repeated from previous years, but we also create a new challenge whenever there's a demand or when we feel it benefits our community. We make this information available on our Monthly Challenge page.

Every month, we update these pages with the challenge's description and instructions on participating. Here is how to update the pages:

#### 1. Create a new challenge page

- Go to `app/routes/__frontend/monthlychallenges`.
- Create a new `jsx` file for the challenge. For example, `feb-2024.jsx`.
- Write the content.

> [!NOTE]
> For repeated challenges, you can copy and paste the content from the past challenge's file and update it to fit the upcoming challenge. For a brand-new challenge, you need to write the content from scratch to introduce and describe the challenge. You can use the format of any previous challenge.

#### 2. Update the main page

- Go to `app/routes/__frontend/monthlychallenges/index.tsx`.
- Remove the `current: true` from the previous challenge and set it for the new challenge.
- Update the path to the challenge page.
- Update the link of the previous challenge.

Here is an example:

```javascript
	{
		current: true,  // set for the new challenge
		title: 'Get Job Ready',
		subtitle: `Resumes, Cover Letters, and Elevator Pitch. There's never a bad time to update your job application materials.`,
		description: (
			<>
				<p>
					The goal of this challenge is to work on creating, revising, or updating
					your job packet materials and that elevator pitch that might get you in
					the door. Your resume, cover letter, and elevator pitch should work
					together to tell your story and represent where you are on your career
					journey; each piece should complement the others. This challenge
					emphasizes taking time to ensure they work together or get some extra
					feedback on what you've worked on.
				</p>
				// Update the link to the new challenge page on the website
				<p>
					To view all of the details of this year's challenge,{' '}
					<Link to="/monthlychallenges/mar-2024">
						check out the March 2024 challenge page
					</Link>
					.
				</p>
			</>
		),
		links: [
			// Update with the link to the previous challenge
			{
				href: '/monthlychallenges/feb-2023',
				title: 'February, 2023',
			},
			{
				href: '/monthlychallenges/apr-2022',
				title: 'April, 2022',
			},
			{
				href: '/monthlychallenges/mar-2021',
				title: 'March, 2021',
			},
		],
	},
```

#### 3. Add a success "completed challenge" alert to the previous challenge

- Open the previous challenge file.
- Add the alert right on top of `<h1>`.
- Update the link to the new challenge.

Here is an example:

```javascript
<div className="alert alert-success">
    This monthly challenge is complete. Congratulations! Please join us for
    the <Link to="/monthlychallenges/mar-2024">next challenge</Link>!
</div>
```

## Facilitating a Challenge

Let us know your availability for the challenge in the reminder thread that drops every mid-month in the `#vc-monthly-challenge-team` channel in Slack.😊

### Before the Challenge

#### Update the Challenge Page on the Website

⏳ **Timeline**: Anytime before the challenge starts.

✅ **Tasks**:

- Change and adjust the challenge page on the website to the current challenge and create a PR.

### The First Day of the Month

#### Update the `monthly-challenge` Channel on Slack

✅ **Tasks**:

- Change the `#monthly-challenge` channel topic and description in Slack.
- Give a brief description of the challenge.

#### Make an Announcement for a New Challenge

✅ **Tasks**:

- Announce the challenge in the `#announcements` channel and crosspost it to the `#monthly-challenge` channel on Slack.

📝 **Notes**:

Script templates are available in each challenge file.

#### Blog Post

✅ **Tasks**:

- Drop the blog post about the challenge at [DEV](https://dev.to/virtualcoffee). Blog posts can be scheduled in advance.

📝 **Notes**:

A blog post is optional. However, introducing and promoting our challenges to the public and our members through blog posts is one of the good ways to engage folks to do the challenge with us.

### During the Challenge

Please read the `facilitators-guide.md` file in the challenge's folder for complete instructions.

### Post Challenge

- Provide feedback in the `#vc-monthly-challenge-team` channel, like what went well and what could've gone better for the challenge. Let us know the support you need and things you think would be nice to do next time.
- Update the `facilitators-guide.md` in the challenge's folder with:

  - new script templates and things we did for the challenge,
  - the month and year of the challenge,
  - the blog post(s) for the challenge, if any.
