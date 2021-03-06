require.config({
  baseUrl: '../js',
  waitSeconds: 200,
  paths: {
    jquery: '../vendor/jquery/jquery',
    domReady: '../vendor/requirejs-domready/domReady',
    underscore: '../vendor/underscore/underscore',
    backbone: '../vendor/backbone/backbone',
    marionette: '../vendor/marionette/lib/backbone.marionette',
    handlebars: '../vendor/handlebars.js/dist/handlebars',
    hbs: '../vendor/require-handlebars-plugin/hbs',
    i18nprecompile: '../vendor/require-handlebars-plugin/hbs/i18nprecompile',
    json2: '../vendor/require-handlebars-plugin/hbs/json2',
    bootstrap: '../vendor/bootstrap/docs/assets/js/bootstrap',
    prettify: '../vendor/bootstrap/docs/assets/js/google-code-prettify/prettify',
    nicescroll: '../vendor/jquery-nicescroll/jquery.nicescroll',
    autoGrow: '../vendor/autogrow-textarea/jquery.autogrowtextarea',
    scrollTo: '../vendor/jquery.scrollTo/jquery.scrollTo',
    spin: '../vendor/spin.js/spin',
    moment: '../vendor/moment/moment',
    postal: '../vendor/postal.js/lib/postal',
    async: '../vendor/async/lib/async',
    store: '../vendor/store.js/store',
    markdown: '../vendor/markdown/lib/markdown',
    ace: '../vendor/ace/lib/ace',
    socketio: '/socket.io/socket.io',
    toastr: '../vendor/toastr/toastr',
    select2: '../vendor/select2/select2',
    mousetrap: '../vendor/mousetrap/mousetrap',
    fancybox: '../vendor/fancybox/source/jquery.fancybox.pack',
    jqueryuiCore: '../vendor/jquery-ui/ui/jquery.ui.core',
    jqueryuiMouse: '../vendor/jquery-ui/ui/jquery.ui.mouse',
    jqueryuiWidget: '../vendor/jquery-ui/ui/jquery.ui.widget',
    jqueryuiSortable: '../vendor/jquery-ui/ui/jquery.ui.sortable',
    tipsy: '../vendor/tipsy/src/javascripts/jquery.tipsy'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Marionette'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    bootstrap: {
      deps: ['jquery']
    },
    nicescroll: {
      deps: ['jquery']
    },
    autoGrow: {
      deps: ['jquery']
    },
    scrollTo: {
      deps: ['jquery']
    },
    markdown: {
      exports: 'markdown'
    },
    socketio: {
      exports: 'io'
    },
    fancybox: {
      deps: ['jquery']
    },
    jqueryuiCore: {
      deps: ['jquery']
    },
    jqueryuiWidget: {
      deps: ['jquery']
    },
    jqueryuiMouse: {
      deps: ['jquery', 'jqueryuiWidget']
    },
    jqueryuiSortable: {
      deps: ['jquery', 'jqueryuiCore', 'jqueryuiMouse', 'jqueryuiWidget']
    },
    tipsy: {
      deps: ['jquery']
    }
  },
  hbs: {
    templateExtension: 'html',
    disableI18n: true,
    helperPathCallback: function(name) {
      // set path for handlebar helpers
      return 'templates/helpers/' + name;
    }
  }
});
