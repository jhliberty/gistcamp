define(function(require) {
  var
  _ = require('underscore'),
    Marionette = require('marionette'),
    Application = require('application'),
    GistListView = require('views/gistListView'),
    GistItemListView = require('views/gistItemListView'),
    shellView = require('views/shellView'),
    constants = require('constants'),
    FilesWrapperView = require('views/filesWrapperView'),
    CommentsWrapperView = require('views/commentsWrapperView'),
    CreateGistView = require('views/createGistView'),
    ChatView = require('views/chatView'),
    ChatItemListView = require('views/chatItemListView'),
    ConversationWrapperView = require('views/conversationWrapperView'),
    global = require('global'),
    FriendsView = require('views/friends/friendsView'),
    FriendsItemListView = require('views/friends/friendsItemListView'),
    FriendsSearchContainerView = require(
      'views/friends/friendsSearchContainerView'),
    FriendsSearchView = require('views/friends/friendsSearchView')
    // FollowersSearchView     = require('views/friends/followersSearchView')
    ;

  var
  Controller = Marionette.Controller.extend({
    initialize: function() {},

    onClose: function() {},

    all: function() {
      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistItemListView.getPublicGistList();
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'all');
    },

    friends: function() {
      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistItemListView.getFriendsGistList();
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'friends');
    },

    friendsList: function() {
      // Layout View with regions
      var friendsView = new FriendsView();
      shellView.main.show(friendsView);
      shellView.hideFooterRegion();

      // Friends Items on the left region
      var friendsItemListView = new FriendsItemListView;
      friendsView.friendsItemList.show(friendsItemListView);
      friendsItemListView.getWatchingList();

      // Followers and Followings on the center region
      var friendsSearchContainerView = new FriendsSearchContainerView;
      friendsView.friendsSearchContainer.show(friendsSearchContainerView);

      var followingSearchView = new FriendsSearchView({
        mode: 'following'
      });
      friendsSearchContainerView.following.show(followingSearchView);
      followingSearchView.getFriends();

      var followersSearchView = new FriendsSearchView({
        mode: 'followers'
      });
      friendsSearchContainerView.followers.show(followersSearchView);
      followersSearchView.getFriends();

      // notify menu selected
      Application.execute(constants.MENU_SELECTED, 'friends/list');
    },

    friendsGists: function() {
      if (window.location.hash.indexOf('friends/gists') < 0) {
        Backbone.history.navigate('friends/gists', {
          trigger: false,
          replace: true
        });
      }

      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();
      shellView.showWatchRegion();

      // watch list on the left region
      var friendsItemListView = new FriendsItemListView;
      gistListView.friendsItemList.show(friendsItemListView);
      friendsItemListView.getWatchingList();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'friends/gists');
    },

    myGists: function() {
      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistItemListView.getGistListByUser();
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'mygists');
    },

    starred: function() {
      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistItemListView.getStarredGistList();
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'starred');
    },

    shared: function() {
      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistItemListView.getSharedGistList();
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'shared');
    },

    forked: function() {
      shellView.main.show(new GistListView({
        currentSelectedMenu: 'forked'
      }));
      Application.execute(constants.MENU_SELECTED, 'forked');
    },

    tagged: function(tagId, tagUrl) {
      // LayoutView with regions
      var gistListView = new GistListView();
      shellView.main.show(gistListView);
      shellView.showFooterRegion();

      // Gist Item on the left region
      var gistItemListView = new GistItemListView;
      gistItemListView.getTaggedGistList(tagId, tagUrl);
      gistListView.gistItemList.show(gistItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      gistListView.filesWrapper.show(filesWrapperView);

      // Comments on the right region
      var commentsWrapperView = new CommentsWrapperView;
      gistListView.commentsWrapper.show(commentsWrapperView);

      Application.execute(constants.MENU_SELECTED, 'tagged');
    },

    newGist: function() {
      var createListView = new CreateGistView();
      shellView.main.show(createListView);
      shellView.hideFooterRegion();

      Application.execute(constants.MENU_SELECTED, 'newgist');
    },

    chat: function() {
      var chatView = new ChatView();
      shellView.main.show(chatView);
      shellView.hideFooterRegion();

      // Chat List on the left region
      var chatItemListView = new ChatItemListView;
      chatView.chatList.show(chatItemListView);

      // Gist Files on the center region
      var filesWrapperView = new FilesWrapperView;
      chatView.filesWrapper.show(filesWrapperView);

      // Chat on the right region
      var conversationWrapperView = new ConversationWrapperView;
      chatView.chatWrapper.show(conversationWrapperView);

      Application.execute(constants.MENU_SELECTED, 'chat');

      global.socket.emit('getrooms');
    }
  });

  return Controller;
});
