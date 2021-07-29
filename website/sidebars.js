module.exports = {
  docs: [
    // Introduction
    {
      Introduction: [
        'introduction/what-is-litmus',
        'introduction/features',
        'introduction/usage',
        'introduction/core-principles',
        'introduction/community',
        'introduction/other-links'
      ]
    },

    // Getting Started
    {
      'Getting Started': [
        {
          Prerequisites: [
            'getting-started/basic-requirements',
            {
              Resources: ['getting-started/chaoscenter', 'getting-started/chaosagents']
            }
          ]
        },
        {
          Installation: [
            {
              ChaosCenter: [
                'getting-started/chaoscenter-cluster-scope-installation',
                'getting-started/chaoscenter-namespace-scope-installation',
                'getting-started/setup-without-ingress',
                'getting-started/setup-with-ingress'
              ]
            },
            {
              ChaosAgents: [
                'getting-started/chaosagents-cluster-scope-installation',
                'getting-started/chaosagents-namespace-scope-installation'
              ]
            }
          ]
        },
        'getting-started/run-your-first-workflow',
        'getting-started/learning-litmus'
      ]
    },

    // Concepts
    {
      Concepts: [
        'concepts/introduction',
        'concepts/litmus',
        'concepts/experiment',
        'concepts/probes',
        'concepts/chaos-results',
        'concepts/chaos-schedule',
        'concepts/chaoshub',
        'concepts/chaos-center',
        'concepts/project',
        'concepts/agent',
        {
          Workflow: ['concepts/chaos-workflow', 'concepts/observe-workflow']
        },
        {
          Observability: ['concepts/workflow-statistics', 'concepts/app-infra-monitoring', 'concepts/datasource']
        },
        'concepts/user-management',
        'concepts/teaming',
        'concepts/gitops'
      ]
    },

    // User Guides
    {
      'User Guides': [
        'user-guides/introduction',
        {
          'Running Litmus': ['user-guides/air-gapped']
        },
        {
          'Injecting Fault': [
            'user-guides/schedule-workflow',
            'user-guides/observe-workflow',
            'user-guides/event-triggered-chaos',
            'user-guides/save-as-template',
            'user-guides/download-workflow-manifest',
            'user-guides/re-run-workflow',
            'user-guides/delete-workflow',
            'user-guides/construct-workflow'
          ]
        },
        {
          'Observing Chaos': [
            'user-guides/observability-set-up',
            'user-guides/analyze-workflow',
            'user-guides/comparative-analysis',
            'user-guides/configure-datasource',
            'user-guides/manage-app-dashboard',
            'user-guides/editing-queries-app-dashboard',
            'user-guides/view-chaos-impact',
            'user-guides/share-app-dashboard'
          ]
        },
        {
          'Litmus in CI/CD pipeline': [
            'user-guides/github-actions',
            'user-guides/gitlab-templates',
            'user-guides/keptn',
            'user-guides/spinnaker'
          ]
        },
        'user-guides/byoc',
        'user-guides/account-settings',
        {
          'Managing Projects': [
            'user-guides/change-project-name',
            'user-guides/get-added-to-projects',
            'user-guides/leave-project'
          ]
        },
        {
          'User Management': ['user-guides/view-user', 'user-guides/create-user', 'user-guides/reset-password', 'user-guides/deactivate-user']
        },
        {
          'Teaming': ['user-guides/invite-team-member', 'user-guides/edit-invite', 'user-guides/accept-invite', 'user-guides/remove-team-member']
        },
        'user-guides/image-registry',
        'user-guides/uninstall-litmus'
      ]
    },

    // Litmusctl
    {
      Litmusctl: [
        'litmusctl/installation',
        {
          'Connect Agent': ['litmusctl/cluster-scope-installation', 'litmusctl/namespace-scope-installation']
        }
      ]
    },

    // Integrations
    {
      Integrations: ['integrations/prometheus', 'integrations/grafana']
    },

    // Troubleshooting
    'troubleshooting',

    // FAQ
    'faq',

    // Contribute
    'contribute'
  ]
}
