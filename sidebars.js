// @ts-check

const sidebars = {
  sidebarPath: [
    'README',
    {
      type: 'category',
      label: 'Community Roles',
      items: [
        'community-roles/maintainers',
        'community-roles/team-leads-and-coordinators',
      ],
    },
    // -------- COFFEE TABLE GROUPS --------
    {
      type: 'category',
      label: 'Coffee Table Groups',
      link: {
        type: 'doc',
        id: 'coffee-table-groups/README',
      },
      items: [
        'coffee-table-groups/coffee-table-groups-coordinator',
        {
          type: 'category',
          label: 'Leading and Facilitating a Group',
          items: [
            'coffee-table-groups/guides/guide-to-leading-a-coffee-table-group',
            'coffee-table-groups/guides/guide-to-hosting-a-coffee-table-group',
          ],
        },
        'coffee-table-groups/coffee-table-groups-list',
        {
          type: 'category',
          label: 'Guides',
          items: [
            'coffee-table-groups/guides/guide-to-accountabilibuddies',
            'coffee-table-groups/guides/guide-to-book-clubs',
            'coffee-table-groups/guides/guide-to-feelings-friday',
            'coffee-table-groups/guides/guide-to-learning-cohorts',
            'coffee-table-groups/guides/guide-to-the-pack-hunt',
          ],
        },
      ],
    },
    // -------- COFFEES --------
    {
      type: 'category',
      label: 'Coffees',
      link: {
        type: 'doc',
        id: 'coffees/README',
      },
      items: [
        {
          type: 'category',
          label: 'Room Leaders',
          link: {
            type: 'doc',
            id: 'coffees/room-leaders/README',
          },
          items: ['coffees/room-leaders/tips-for-facilitating'],
        },
        'coffees/Notetakers/README',
        'coffees/Hosts/README',
        'coffees/MCs/README',
        'coffees/processes/scheduling',
        'coffees/new-volunteer-onboarding',
        // {
        //   type: 'category',
        //   label: 'Topics',
        //   items: ['coffees/topic-suggestions', 'coffees/icebreaker-topics'],
        // },
      ],
    },
    // -------- MONTHLY CHALLENGES --------
    {
      type: 'category',
      label: 'Monthly Challenges',
      link: {
        type: 'doc',
        id: 'monthly-challenges/README',
      },
      items: [
        {
          type: 'category',
          label: 'Facilitators Handbook',
          link: {
            type: 'doc',
            id: 'monthly-challenges/facilitators-docs/README',
          },
          items: [
            'monthly-challenges/facilitators-docs/facilitate-a-challenge',
            'monthly-challenges/facilitators-docs/technical-guidelines',
          ],
        },
        'monthly-challenges/blogging-challenge/README',
        'monthly-challenges/build-in-public/README',
        'monthly-challenges/community-kindness/README',
        'monthly-challenges/create-av-content/README',
        'monthly-challenges/get-job-ready/README',
        'monthly-challenges/vc-hacktoberfest-initiative/README',
        'monthly-challenges/healthy-habits/README',
        'monthly-challenges/mid-year-check-in/README',
        'monthly-challenges/month-of-feedback/README',
        'monthly-challenges/month-of-learning/README',
        'monthly-challenges/new-year-new-goal/README',
        'monthly-challenges/pairing/README',
        'monthly-challenges/photography/README',
        'monthly-challenges/preptember/README',
        'monthly-challenges/public-speaking/README',
        'monthly-challenges/welcoming-community/README',
        // {
        //   type: 'category',
        //   label: 'Archive',
        //   items: [
        //     {
        //       type: 'category',
        //       label: 'Build in Public',
        //       items: [
        //         'monthly-challenges/build-in-public/archive/june-2021',
        //         'monthly-challenges/build-in-public/archive/standup',
        //         {
        //           type: 'category',
        //           label: 'Demo Days',
        //           items: [
        //             'monthly-challenges/build-in-public/archive/demo-days/demo-day',
        //             'monthly-challenges/build-in-public/archive/demo-days/demo-days-script',
        //             'monthly-challenges/build-in-public/archive/demo-days/demo-challenge',
        //             'monthly-challenges/build-in-public/archive/demo-days/facilitator-docs',
        //           ],
        //         },
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Create AV Content',
        //       items: [
        //         'monthly-challenges/create-av-content/archive/description',
        //         'monthly-challenges/create-av-content/archive/schedule',
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Healthy Habits for Healthy Devs',
        //       items: [
        //         'monthly-challenges/healthy-habits/archive/healthy-habits',
        //         'monthly-challenges/healthy-habits/archive/checkin-script',
        //         'monthly-challenges/healthy-habits/archive/august-2021/end-of-challenge',
        //         'monthly-challenges/healthy-habits/archive/august-2021/feedback',
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Month of Learning',
        //       items: [
        //         'monthly-challenges/month-of-learning/archive/month-of-learning',
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Preptember',
        //       items: [
        //         'monthly-challenges/preptember/archive/maintainer-checklist',
        //         'monthly-challenges/preptember/archive/how-to-write-issue',
        //         'monthly-challenges/preptember/archive/checkin-script',
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Hacktoberfest Initiative',
        //       items: [
        //         'VCHI/roles',
        //         'VCHI/messages',
        //         'VCHI/notes-for-2022',
        //         'monthly-challenges/vc-hacktoberfest-initiative/archive/help-divers',
        //         'VCHI/checklist',
        //       ],
        //     },
        //   ],
        // },
      ],
    },
    // -------- LUNCH & LEARNS --------
    {
      type: 'category',
      label: 'Lunch & Learns',
      link: {
        type: 'doc',
        id: 'lunch-and-learns/README',
      },
      items: [
        'lunch-and-learns/process-docs',
        'lunch-and-learns/event-script-template',
        // {
        //   type: 'category',
        //   label: 'Archive',
        //   items: [
        //     'lunch-and-learns/05-21-2021-meryl/script',
        //     'lunch-and-learns/2021-04-09-Bekah/script',
        //   ],
        // },
      ],
    },
    // ------- LIGHTNING TALKS -------
    {
      type: 'category',
      label: 'Lightning Talks',
      link: {
        type: 'doc',
        id: 'lightning-talks/README',
      },
      items: [
        // 'lightning-talks/processes/logistics',
        'lightning-talks/processes/project-workflow',
        {
          type: 'category',
          label: 'Templates',
          items: [
            {
              type: 'category',
              label: 'Participant Guidelines Templates',
              items: [
                'lightning-talks/guides/speaker-guide',
                'lightning-talks/guides/mentor-guide',
              ],
            },
            {
              type: 'category',
              label: 'Message Templates',
              items: [
                {
                  type: 'category',
                  label: 'Gathering Information from Speakers',
                  items: [
                    'lightning-talks/message-templates/speaker-info-message-1-template',
                    'lightning-talks/message-templates/speaker-info-message-2-template',
                    'lightning-talks/message-templates/speaker-info-message-3-template',
                  ],
                },
                {
                  type: 'category',
                  label: 'Sharing Information to Speakers',
                  items: [
                    'lightning-talks/message-templates/speaker-message-1-template',
                    'lightning-talks/message-templates/speaker-message-2-template',
                    'lightning-talks/message-templates/av-test-message-template',
                    'lightning-talks/message-templates/day-before-message-template',
                  ],
                },
                'lightning-talks/message-templates/mentor-message-1-template',
              ],
            },
            'lightning-talks/processes/mc-script-template',
            'lightning-talks/processes/speaker-info-template',
          ],
        },
        {
          type: 'category',
          label: 'Past Lightning Talks',
          items: [
            {
              type: 'category',
              label: '2024',
              items: [
                'lightning-talks/2024/schedule',
                'lightning-talks/2024/speaker-info',
                'lightning-talks/2024/mc-script',
              ],
            },
            {
              type: 'category',
              label: '2023',
              items: ['lightning-talks/2023/speaker-info'],
            },
            {
              type: 'category',
              label: '2022',
              items: ['lightning-talks/2022/speaker-info'],
            },
            {
              type: 'category',
              label: '2021',
              items: [
                'lightning-talks/2021/speaker-info',
                'lightning-talks/2021/mc-script',
              ],
            },
          ],
        },
      ],
    },
    // -------- PROCEDURES --------
    {
      type: 'category',
      label: 'Procedures',
      items: [
        'procedures/github-discussions/vc-discussion-boards',
        'procedures/new-coffee-table-group/add-coffee-table-group',
        'procedures/community-writers/README',
        {
          type: 'category',
          label: 'Community Streaming and YouTube',
          items: ['procedures/av/streaming', 'procedures/av/youtube'],
        },
        'procedures/x/friday-chat-template',
      ],
    },
  ],
}

export default sidebars;
