'use strict';

// Webpack entry point for index.html
// Scripts and styles included here are automatically included on the page at build time
require('./js/config');

// Styles
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./css/treeherder-global.css');
require('./css/treeherder-navbar.css');
require('./css/treeherder-navbar-panels.css');
require('./css/treeherder-notifications.css');
require('./css/treeherder-info-panel.css');
require('./css/treeherder-job-buttons.css');
require('./css/treeherder-resultsets.css');
require('./css/treeherder-pinboard.css');
require('./css/treeherder-bugfiler.css');
require('./css/treeherder-loading-overlay.css');

// Vendor JS
require('angular');
require('angular-route');
require('angular-resource');
require('angular-cookies');
require('angular-sanitize');
require('angular-toarrayfilter');
require('angular-local-storage');
require('bootstrap/dist/js/bootstrap');
require('angular1-ui-bootstrap4');
require('mousetrap');
require('js-yaml');
require('angular-marked');
require('ngreact');
require('jquery.scrollto');
require('./vendor/resizer.js');

// Treeherder JS
require('./js/services/log.js');
require('./js/providers.js');
require('./js/values.js');
require('./js/components/auth.js');
require('./js/directives/treeherder/main.js');
require('./js/directives/treeherder/clonejobs.js');
require('./js/directives/treeherder/resultsets.js');
require('./js/directives/treeherder/top_nav_bar.js');
require('./js/directives/treeherder/bottom_nav_panel.js');
require('./js/reactrevisions.jsx');
require('./js/services/main.js');
require('./js/services/buildapi.js');
require('./js/services/taskcluster.js');
require('./js/services/classifications.js');
require('./js/services/jobfilters.js');
require('./js/services/pinboard.js');
require('./js/services/treestatus.js');
require('./js/services/tcactions.js');
require('./js/models/resultset.js');
require('./js/models/resultsets_store.js');
require('./js/models/job_detail.js');
require('./js/models/repository.js');
require('./js/models/bug_job_map.js');
require('./js/models/classification.js');
require('./js/models/job.js');
require('./js/models/runnable_job.js');
require('./js/models/build_platform.js');
require('./js/models/job_type.js');
require('./js/models/job_group.js');
require('./js/models/job_log_url.js');
require('./js/models/option_collection.js');
require('./js/models/user.js');
require('./js/models/error.js');
require('./js/models/matcher.js');
require('./js/models/failure_lines.js');
require('./js/models/text_log_errors.js');
require('./js/models/classified_failure.js');
require('./js/models/bug_suggestions.js');
require('./js/models/text_log_step.js');
require('./js/models/perf/series.js');
require('./js/controllers/main.js');
require('./js/controllers/settings.js');
require('./js/controllers/repository.js');
require('./js/controllers/notification.js');
require('./js/controllers/filters.js');
require('./js/controllers/jobs.js');
require('./js/controllers/bugfiler.js');
require('./js/controllers/tcjobactions.js');
require('./plugins/tabs.js');
require('./plugins/controller.js');
require('./plugins/pinboard.js');
require('./plugins/annotations/controller.js');
require('./plugins/failure_summary/controller.js');
require('./plugins/similar_jobs/controller.js');
require('./plugins/auto_classification/controller.js');
require('./js/filters.js');
