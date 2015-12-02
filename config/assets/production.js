'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        //'public/lib/bootstrap/dist/css/bootstrap.min.css',
        //'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/materialize/dist/css/materialize.css',
        'https://fonts.googleapis.com/icon?family=Material+Icons'
      ],
      js: [
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/angular-file-upload.min.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/jquery/dist/jquery.js',
        //'https://code.jquery.com/jquery-2.1.1.min.js',
        'public/lib/materialize/dist/js/materialize.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
