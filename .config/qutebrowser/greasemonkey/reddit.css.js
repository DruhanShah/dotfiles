// ==UserScript==
// @name    Userstyle (reddit.css)
// @include    *reddit.com/*
// ==/UserScript==
GM_addStyle(`@-moz-document domain("reddit.com") {
  :root:not(.theme-dark) .theme-rpl,
  :root:not(.theme-dark).theme-rpl,
  :root:not(.theme-dark) .theme-beta,
  :root:not(.theme-dark).theme-beta,
  .theme-light {
    color-scheme: dark;
    /* BETA */
    --color-pizzaRed: #d20f39 !important;
    --color-global-brand-orangered: #fe640b !important;
    --color-global-focus: #bcc0cc !important;
    --color-interactive-content-disabled: #6c6f85 !important;
    --color-interactive-background-disabled: rgba(172, 176, 190, 0.7) !important;
    --color-interactive-pressed: #acb0be !important;
    --color-neutral-content: #4c4f69 !important;
    --color-neutral-content-disabled: #6c6f85 !important;
    --color-neutral-content-weak: #6c6f85 !important;
    --color-neutral-content-strong: #4c4f69 !important;
    --color-global-white: #dce0e8 !important;
    --color-neutral-background: #eff1f5 !important;
    --color-neutral-background-selected: #ccd0da !important;
    --color-neutral-background-weak: #e6e9ef !important;
    --color-neutral-background-medium: #eff1f5 !important;
    --color-neutral-background-strong: #dce0e8 !important;
    --color-neutral-background-hover: #ccd0da !important;
    --color-neutral-border: #ccd0da !important;
    --color-neutral-border-medium: #ccd0da !important;
    --color-neutral-border-weak: #ccd0da !important;
    --color-neutral-border-strong: #acb0be !important;
    --color-primary: #1e66f5 !important;
    --color-primary-hover: #4f87f7 !important;
    --color-primary-visited: #7287fd !important;
    --color-primary-background: #1e66f5 !important;
    --color-primary-background-hover: #0b57ef !important;
    --color-primary-background-selected: #0b57ef !important;
    --color-primary-onBackground: #eff1f5 !important;
    --color-primary-onBackground-selected: #dce0e8 !important;
    --color-secondary: #6c6f85 !important;
    --color-secondary-hover: #5c5f77 !important;
    --color-secondary-weak: #6c6f85 !important;
    --color-secondary-onBackground: #4c4f69 !important;
    --color-secondary-background: #e6e9ef !important;
    --color-secondary-background-hover: #bcc0cc !important;
    --color-secondary-background-selected: #bcc0cc !important;
    --color-secondary-plain: #6c6f85 !important;
    --color-secondary-plain-hover: #5c5f77 !important;
    --color-danger-background: #d20f39 !important;
    --color-danger-background-disabled: rgba(210, 15, 57, 0.2) !important;
    --color-danger-background-hover: rgba(210, 15, 57, 0.98) !important;
    --color-danger-onBackground: #4c4f69 !important;
    --color-danger-content: #d20f39 !important;
    --color-danger-content-default: #dce0e8;
    --color-danger-content-hover: #c80e36 !important;
    --color-success-content: #40a02b !important;
    --color-success-hover: #3d9829 !important;
    --color-success-onBackground: #dce0e8;
    --color-success-background: #40a02b !important;
    --color-success-background-hover: #3d9829 !important;
    --color-warning-content: #df8e1d !important;
    --color-warning-content-hover: #d6881c !important;
    --color-warning-onBackground: #eff1f5 !important;
    --color-warning-background: #df8e1d !important;
    --color-warning-background-hover: #d6881c !important;
    --color-upvote-content: #1e66f5 !important;
    --color-upvote-disabled: #6c6f85 !important;
    --color-upvote-onBackground: #4c4f69 !important;
    --color-upvote-background: #eff1f5 !important;
    --color-upvote-background-hover: #0b57ef !important;
    --color-upvote-background-disabled: #eff1f5 !important;
    --color-downvote-content: #4c4f69 !important;
    --color-downvote-content-weak: #4c4f69 !important;
    --color-downvote-disabled: #6c6f85 !important;
    --color-downvote-onBackground: #4c4f69 !important;
    --color-downvote-background: #eff1f5 !important;
    --color-downvote-background-hover: #0b57ef !important;
    --color-downvote-background-disabled: #e6e9ef !important;
    --color-tone-1: #4c4f69 !important;
    --color-tone-2: #6c6f85 !important;
    --color-tone-3: #7c7f93 !important;
    --color-tone-4: #ccd0da !important;
    --color-tone-5: #bcc0cc !important;
    --color-tone-6: #acb0be !important;
    --color-tone-7: #eff1f5 !important;
    --color-avatar-gradient: #1e66f5 !important;
    --color-transparent-background-hover: rgba(204, 208, 218, 0.3) !important;
    --color-opacity-50: rgba(239, 241, 245, 0.5) !important;
    --color-online: #1e66f5 !important;
    --color-favorite: #1e66f5 !important;
    --color-brand-background: #1e66f5 !important;
    --color-brand-background-hover: #0b57ef !important;
    --color-global-orangered: #1e66f5 !important;
    --color-action-upvote: #1e66f5 !important;
    --color-action-downvote: #1e66f5;
    --shreddit-color-wordmark: #1e66f5;
    /* normal stuff */
    /* reddit chat variables */
    /* site background */
    /* PROFILE MENU */
    /* karma count */
    /* profile button karma icon */
    /* menu headers */
    /* switches, should also apply sitewide */
    /* online status */
    /* PROFILE PAGE */
    /* create avatar button */
    /* cake day and followers icon */
    /* add social links button readability tweak */
    /* profile moderation and user settings page */
    /* Beta Badge */
    /* Delete Account */
    /* Delete Account Icon */
    /* blocked, muted input */
    /* fixes profile posts not being themed */
    /* NFT AVATAR VIEWER */
    /* modal background */
    /* Tag Color */
    /* mint status */
    /* carousel background */
    /* nft card back */
    /* external links */
    /* shop for avatars button */
    /* AVATAR CREATOR */
    /* SITE HEADER */
    /* reddit logo */
    /* Post title from notification */
    /* notification icon */
    /* advertise button */
    /* reddit now notification */
    /* search scope pill text */
    /* search popup title */
    /* safe search toggle */
    /* NAVIGATION SIDEBAR */
    /* close icon */
    /* item color */
    /* navigation sidebar header color */
    /* favorites */
    /* RIGHT FRONTPAGE SIDEBAR */
    /* reddit premium icon */
    /* reddit premium try now button */
    /* recent posts thumbnail borders */
    /* POSTS */
    /* post background for card style */
    /* post options (save, comment, etc.) */
    /* post title color */
    /*
         *  post op color and
         *  post date color
         */
    /* nsfw flair */
    /* pinned post icon */
    /* give award icon */
    /* locked post icon */
    /* post button divider */
    /* UPVOTES/DOWNVOTES */
    /* upvote/downvote background */
    /* inactive vote text color */
    /* active upvote color */
    /* active upvote text color */
    /* hover background for both upvotes and downvotes */
    /* active downvote color */
    /* active downvote text color */
    /* REPORT MODAL */
    /* SUBREDDIT PAGES */
    /* radio buttons (flair selector, etc.) */
    /* checkboxes */
    /* SUBREDDIT RIGHT SIDEBAR (some styles carry over from the homepage right sidebar section) */
    /* header background */
    /* subreddit image background */
    /* border between uela */
    /* follower color */
    /* default subreddit icon */
    /* online users */
    /* POST VIEWER */
    /* spoiler tags */
    /* mod comment tag */
    /* op comment tag */
    /* post overlay if you have "open in new tab" disabled */
    /* fixes comment section background not working when "open in new tab is disabled" */
    /* shade applied to background when clicking on a post with "open in new tab" disabled */
    /* gold award gradient */
    /* image gallery next/previous buttons */
    /* image gallery image count */
    /* comment search bar */
    /* tab bar below banner */
    /* MULTIREDDITS/CUSTOM FEEDS */
    /* delete custom feed button */
    /* TOOLTIPS */
    /* Recap Reddit Logo */
  }
  :root:not(.theme-dark) .theme-rpl ::selection,
  :root:not(.theme-dark).theme-rpl ::selection,
  :root:not(.theme-dark) .theme-beta ::selection,
  :root:not(.theme-dark).theme-beta ::selection,
  .theme-light ::selection {
    background-color: rgba(30, 102, 245, 0.3);
  }
  :root:not(.theme-dark) .theme-rpl input::placeholder,
  :root:not(.theme-dark).theme-rpl input::placeholder,
  :root:not(.theme-dark) .theme-beta input::placeholder,
  :root:not(.theme-dark).theme-beta input::placeholder,
  .theme-light input::placeholder,
  :root:not(.theme-dark) .theme-rpl textarea::placeholder,
  :root:not(.theme-dark).theme-rpl textarea::placeholder,
  :root:not(.theme-dark) .theme-beta textarea::placeholder,
  :root:not(.theme-dark).theme-beta textarea::placeholder,
  .theme-light textarea::placeholder {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl #reddit-logo circle[fill="#FF4500"],
  :root:not(.theme-dark).theme-rpl #reddit-logo circle[fill="#FF4500"],
  :root:not(.theme-dark) .theme-beta #reddit-logo circle[fill="#FF4500"],
  :root:not(.theme-dark).theme-beta #reddit-logo circle[fill="#FF4500"],
  .theme-light #reddit-logo circle[fill="#FF4500"] {
    fill: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl #reddit-logo path[fill="#FFF"],
  :root:not(.theme-dark).theme-rpl #reddit-logo path[fill="#FFF"],
  :root:not(.theme-dark) .theme-beta #reddit-logo path[fill="#FFF"],
  :root:not(.theme-dark).theme-beta #reddit-logo path[fill="#FFF"],
  .theme-light #reddit-logo path[fill="#FFF"] {
    fill: #dce0e8 !important;
  }
  :root:not(.theme-dark) .theme-rpl,
  :root:not(.theme-dark).theme-rpl,
  :root:not(.theme-dark) .theme-beta,
  :root:not(.theme-dark).theme-beta,
  .theme-light,
  :root:not(.theme-dark) .theme-rpl div[class^="subredditvars"],
  :root:not(.theme-dark).theme-rpl div[class^="subredditvars"],
  :root:not(.theme-dark) .theme-beta div[class^="subredditvars"],
  :root:not(.theme-dark).theme-beta div[class^="subredditvars"],
  .theme-light div[class^="subredditvars"] {
    --color-online: #40a02b !important;
    --newCommunityTheme-actionIcon: #6c6f85 !important;
    --newCommunityTheme-actionIconAlpha20: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-actionIconAlpha50: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-actionIconShaded80: #6c6f85 !important;
    --newCommunityTheme-actionIconTinted80: #5c5f77 !important;
    --newCommunityTheme-active: #1e66f5 !important;
    --newCommunityTheme-activeAlpha10: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-activeAlpha20: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-activeAlpha50: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-activeLight60: #1e66f5 !important;
    --newCommunityTheme-activeShaded80: #1e66f5 !important;
    --newCommunityTheme-activeShaded90: #1e66f5 !important;
    --newCommunityTheme-activeTinted05: #4c4f69 !important;
    --newCommunityTheme-banner-backgroundColor: #1e66f5 !important;
    --newCommunityTheme-banner-iconColor: #1e66f5 !important;
    --newCommunityTheme-body: #e6e9ef !important;
    --newCommunityTheme-bodyAlpha50: #ccd0da !important;
    --newCommunityTheme-bodyAlpha70: #bcc0cc !important;
    --newCommunityTheme-bodyAlpha80: #acb0be !important;
    --newCommunityTheme-bodyFade: #6c6f85 !important;
    --newCommunityTheme-bodyShaded80: #e6e9ef !important;
    --newCommunityTheme-bodyText: #4c4f69 !important;
    --newCommunityTheme-bodyTextAlpha03: #e6e9ef !important;
    --newCommunityTheme-bodyTextAlpha20: #bcc0cc !important;
    --newCommunityTheme-bodyTextShaded20: #ccd0da !important;
    --newCommunityTheme-bodyTextTinted20: #6c6f85 !important;
    --newCommunityTheme-bodyTinted50: #8c8fa1 !important;
    --newCommunityTheme-bodyTinted80: #9ca0b0 !important;
    --newCommunityTheme-button: #4c4f69 !important;
    --newCommunityTheme-buttonAlpha05: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-buttonAlpha10: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-buttonAlpha20: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-buttonAlpha40: #6c6f85 !important;
    --newCommunityTheme-buttonAlpha50: #5c5f77 !important;
    --newCommunityTheme-buttonAlpha80: #5c5f77 !important;
    --newCommunityTheme-buttonShaded80: #9ca0b0 !important;
    --newCommunityTheme-buttonTinted20: #1e66f5 !important;
    --newCommunityTheme-buttonTinted50: #1e66f5 !important;
    --newCommunityTheme-buttonTinted80: #1e66f5 !important;
    --newCommunityTheme-canvas: #dce0e8 !important;
    --newCommunityTheme-checkbox: #4c4f69 !important;
    --newCommunityTheme-errorText: #d20f39 !important;
    --newCommunityTheme-field: #ccd0da !important;
    --newCommunityTheme-fieldFade: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-flair: #1e66f5 !important;
    --newCommunityTheme-highlight: #eff1f5 !important;
    --newCommunityTheme-inactive: #6c6f85 !important;
    --newCommunityTheme-lightText: #4c4f69 !important;
    --newCommunityTheme-lightTextAlpha75: #5c5f77 !important;
    --newCommunityTheme-line: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-lineShaded80: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-lineShaded90: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-lineShadedNinety: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-linkText: #1e66f5 !important;
    --newCommunityTheme-linkTextAlpha80: #1e66f5 !important;
    --newCommunityTheme-linkTextShaded80: #1e66f5 !important;
    --newCommunityTheme-linkTextTinted80: #1e66f5 !important;
    --newCommunityTheme-linkTextWithBody: #1e66f5 !important;
    --newCommunityTheme-menu: #e6e9ef !important;
    --newCommunityTheme-menuActiveText: #4c4f69 !important;
    --newCommunityTheme-menuButtonBackground-active: #eff1f5 !important;
    --newCommunityTheme-menuButtonBackground-focus: #eff1f5 !important;
    --newCommunityTheme-menuButtonBackground-hover: #eff1f5 !important;
    --newCommunityTheme-menuInactiveText: #4c4f69 !important;
    --newCommunityTheme-metaText: #6c6f85 !important;
    --newCommunityTheme-metaTextAlpha50: #6c6f85 !important;
    --newCommunityTheme-metaTextShaded80: #6c6f85 !important;
    --newCommunityTheme-monospaceColor: #1e66f5 !important;
    --newCommunityTheme-navBar-activeLink: #4c4f69 !important;
    --newCommunityTheme-navBar-activeSubmenuCaret: #4c4f69 !important;
    --newCommunityTheme-navBar-activeSubmenuLink: #4c4f69 !important;
    --newCommunityTheme-navBar-backgroundColor: #e6e9ef !important;
    --newCommunityTheme-navBar-hoverLink: #4c4f69 !important;
    --newCommunityTheme-navBar-inactiveLink: #4c4f69 !important;
    --newCommunityTheme-navBar-inactiveSubmenuCaret: #4c4f69 !important;
    --newCommunityTheme-navBar-inactiveSubmenuLink: #4c4f69 !important;
    --newCommunityTheme-navBar-submenuBackgroundColor: #e6e9ef !important;
    --newCommunityTheme-navIcon: #4c4f69 !important;
    /* upvote/downvote focus */
    --newCommunityTheme-navIconFaded10: rgba(220, 224, 232, 0.8) !important;
    --newCommunityTheme-nsfw: #d20f39 !important;
    --newCommunityTheme-nsfwBlocking-bgcolor: #dce0e8 !important;
    --newCommunityTheme-nsfwBlocking-color: #4c4f69 !important;
    --newCommunityTheme-nsfwBlocking-contentTitleBgColor: #eff1f5 !important;
    --newCommunityTheme-nsfwBlocking-mainCtaBgColor: #e6e9ef !important;
    --newCommunityTheme-pageHeader: #acb0be !important;
    --newCommunityTheme-placeholder: #ccd0da !important;
    --newCommunityTheme-post: #e6e9ef !important;
    --newCommunityTheme-postError: #d20f39 !important;
    --newCommunityTheme-postFlairText: #dce0e8 !important;
    --newCommunityTheme-postIcon: #1e66f5 !important;
    --newCommunityTheme-postLine: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-postLineShaded80: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-postLineShaded90: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-postTinted20: #eff1f5 !important;
    --newCommunityTheme-postTransparent20: #eff1f5 !important;
    --newCommunityTheme-primaryButtonShadedEighty: #8c8fa1 !important;
    --newCommunityTheme-primaryButtonTintedEighty: #8c8fa1 !important;
    --newCommunityTheme-primaryButtonTintedFifty: #9ca0b0 !important;
    --newCommunityTheme-primaryButtonTintedSixty: #9ca0b0 !important;
    --newCommunityTheme-quarantine: #df8e1d !important;
    --newCommunityTheme-report: #bcc0cc !important;
    --newCommunityTheme-search-syntaxHighlightBackgroundColor: #1e66f5 !important;
    --newCommunityTheme-search-syntaxHighlightColor: #eff1f5 !important;
    --newCommunityTheme-titleText: #4c4f69 !important;
    --newCommunityTheme-upsell-appleIcon: #5c5f77 !important;
    --newCommunityTheme-upsell-ssoButtonBorderColor: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-upsell-ssoButtonTextColor: #4c4f69 !important;
    --newCommunityTheme-voteText-base: #6c6f85 !important;
    --newCommunityTheme-voteText-downvote: #1e66f5 !important;
    --newCommunityTheme-voteText-downvoteShaded80: #1e66f5 !important;
    --newCommunityTheme-voteText-downvoteTinted80: #1e66f5 !important;
    --newCommunityTheme-voteText-upvote: #d20f39 !important;
    --newCommunityTheme-voteText-upvoteShaded80: #d20f39 !important;
    --newCommunityTheme-voteText-upvoteTinted80: #d20f39 !important;
    --newCommunityTheme-widgetColors-appleIcon: #9ca0b0 !important;
    --newCommunityTheme-widgetColors-lineColor: rgba(188, 192, 204, 0.7) !important;
    /* sidebar widgets */
    --newCommunityTheme-widgetColors-sidebarWidgetBackgroundColor: #e6e9ef !important;
    --newCommunityTheme-widgetColors-sidebarWidgetBorderColor: rgba(188, 192, 204, 0.7) !important;
    --newCommunityTheme-widgetColors-sidebarWidgetHeaderColor: #dce0e8 !important;
    --newCommunityTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: #e6e9ef !important;
    --newCommunityTheme-widgetColors-sidebarWidgetTextColor: #4c4f69 !important;
    --newCommunityTheme-widgetColors-sidebarWidgetTextColorShaded80: #5c5f77 !important;
    --newCommunityTheme-widgetColors-sidebarWidgetTitleColor: #4c4f69 !important;
    --newRedditTheme-actionIcon: #6c6f85 !important;
    --newRedditTheme-actionIconAlpha20: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-actionIconAlpha50: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-actionIconShaded80: #6c6f85 !important;
    --newRedditTheme-actionIconTinted80: #5c5f77 !important;
    --newRedditTheme-active: #1e66f5 !important;
    --newRedditTheme-activeAlpha10: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-activeAlpha20: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-activeAlpha50: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-activeLight60: #1e66f5 !important;
    --newRedditTheme-activeShaded80: #1e66f5 !important;
    --newRedditTheme-activeShaded90: #1e66f5 !important;
    --newRedditTheme-activeTinted05: #4c4f69 !important;
    --newRedditTheme-banner-backgroundColor: #1e66f5 !important;
    --newRedditTheme-banner-iconColor: #1e66f5 !important;
    --newRedditTheme-body: #e6e9ef !important;
    --newRedditTheme-bodyAlpha50: #ccd0da !important;
    --newRedditTheme-bodyAlpha70: #bcc0cc !important;
    --newRedditTheme-bodyAlpha80: #acb0be !important;
    --newRedditTheme-bodyFade: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-bodyShaded80: #e6e9ef !important;
    --newRedditTheme-bodyText: #4c4f69 !important;
    --newRedditTheme-bodyTextAlpha03: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-bodyTextAlpha20: #bcc0cc !important;
    --newRedditTheme-bodyTextShaded20: #ccd0da !important;
    --newRedditTheme-bodyTextTinted20: #5c5f77 !important;
    --newRedditTheme-bodyTinted50: #9ca0b0 !important;
    --newRedditTheme-bodyTinted80: #8c8fa1 !important;
    --newRedditTheme-button: #4c4f69 !important;
    --newRedditTheme-buttonAlpha05: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-buttonAlpha10: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-buttonAlpha20: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-buttonAlpha40: #6c6f85 !important;
    --newRedditTheme-buttonAlpha50: #5c5f77 !important;
    --newRedditTheme-buttonAlpha80: #5c5f77 !important;
    --newRedditTheme-buttonShaded80: #9ca0b0 !important;
    --newRedditTheme-buttonTinted20: #1e66f5 !important;
    --newRedditTheme-buttonTinted50: #1e66f5 !important;
    --newRedditTheme-buttonTinted80: #1e66f5 !important;
    --newRedditTheme-canvas: #dce0e8 !important;
    --newRedditTheme-checkbox: #4c4f69 !important;
    --newRedditTheme-errorText: #d20f39 !important;
    --newRedditTheme-field: #eff1f5 !important;
    --newRedditTheme-fieldFade: #e6e9ef !important;
    --newRedditTheme-flair: #1e66f5 !important;
    /* controls menu, link, and other similar highlights. very important */
    --newRedditTheme-highlight: #eff1f5 !important;
    --newRedditTheme-inactive: #ccd0da !important;
    --newRedditTheme-lightText: #4c4f69 !important;
    --newRedditTheme-lightTextAlpha75: #5c5f77 !important;
    --newRedditTheme-line: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-lineShaded80: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-lineShaded90: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-lineShadedNinety: rgba(188, 192, 204, 0.7) !important;
    /* links */
    --newRedditTheme-linkText: #1e66f5 !important;
    --newRedditTheme-linkTextAlpha80: #1e66f5 !important;
    --newRedditTheme-linkTextShaded80: #1e66f5 !important;
    --newRedditTheme-linkTextTinted80: #1e66f5 !important;
    --newRedditTheme-linkTextWithBody: #1e66f5 !important;
    /* menus */
    --newRedditTheme-menu: #e6e9ef !important;
    --newRedditTheme-menuActiveText: #4c4f69 !important;
    --newRedditTheme-menuButtonBackground-active: #1e66f5 !important;
    --newRedditTheme-menuButtonBackground-focus: #eff1f5 !important;
    --newRedditTheme-menuButtonBackground-hover: #eff1f5 !important;
    --newRedditTheme-menuInactiveText: #4c4f69 !important;
    --newRedditTheme-metaText: #6c6f85 !important;
    --newRedditTheme-metaTextAlpha50: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-metaTextShaded80: #5c5f77 !important;
    --newRedditTheme-monospaceColor: #1e66f5 !important;
    --newRedditTheme-navBar-activeLink: #4c4f69 !important;
    --newRedditTheme-navBar-activeSubmenuCaret: #4c4f69 !important;
    --newRedditTheme-navBar-activeSubmenuLink: #4c4f69 !important;
    --newRedditTheme-navBar-backgroundColor: #e6e9ef !important;
    --newRedditTheme-navBar-hoverLink: #4c4f69 !important;
    --newRedditTheme-navBar-inactiveLink: #4c4f69 !important;
    --newRedditTheme-navBar-inactiveSubmenuCaret: #4c4f69 !important;
    --newRedditTheme-navBar-inactiveSubmenuLink: #4c4f69 !important;
    --newRedditTheme-navBar-submenuBackgroundColor: #e6e9ef !important;
    --newRedditTheme-navIcon: #4c4f69 !important;
    --newRedditTheme-navIconFaded10: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-nsfw: #d20f39 !important;
    --newRedditTheme-nsfwBlocking-bgcolor: #dce0e8 !important;
    --newRedditTheme-nsfwBlocking-color: #4c4f69 !important;
    --newRedditTheme-nsfwBlocking-contentTitleBgColor: #eff1f5 !important;
    --newRedditTheme-nsfwBlocking-mainCtaBgColor: #e6e9ef !important;
    --newRedditTheme-pageHeader: #ccd0da !important;
    --newRedditTheme-placeholder: #bcc0cc !important;
    --newRedditTheme-post: #e6e9ef !important;
    --newRedditTheme-postError: #d20f39 !important;
    --newRedditTheme-postFlairText: #4c4f69 !important;
    --newRedditTheme-postIcon: #1e66f5 !important;
    --newRedditTheme-postLine: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-postLineShaded80: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-postLineShaded90: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-postTinted20: #eff1f5 !important;
    --newRedditTheme-postTransparent20: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-primaryButtonShadedEighty: #bcc0cc !important;
    --newRedditTheme-primaryButtonTintedEighty: #acb0be !important;
    --newRedditTheme-primaryButtonTintedFifty: #bcc0cc !important;
    --newRedditTheme-primaryButtonTintedSixty: #bcc0cc !important;
    --newRedditTheme-quarantine: #df8e1d !important;
    --newRedditTheme-report: #eff1f5 !important;
    --newRedditTheme-search-syntaxHighlightBackgroundColor: #1e66f5 !important;
    --newRedditTheme-search-syntaxHighlightColor: #eff1f5 !important;
    --newRedditTheme-titleText: #4c4f69 !important;
    --newRedditTheme-upsell-appleIcon: #9ca0b0 !important;
    --newRedditTheme-upsell-ssoButtonBorderColor: #4c4f69 !important;
    --newRedditTheme-upsell-ssoButtonTextColor: #4c4f69 !important;
    --newRedditTheme-voteText-base: #5c5f77 !important;
    --newRedditTheme-voteText-downvote: #1e66f5 !important;
    --newRedditTheme-voteText-downvoteShaded80: #1e66f5 !important;
    --newRedditTheme-voteText-downvoteTinted80: #1e66f5 !important;
    --newRedditTheme-voteText-upvote: #d20f39 !important;
    --newRedditTheme-voteText-upvoteShaded80: #d20f39 !important;
    --newRedditTheme-voteText-upvoteTinted80: #d20f39 !important;
    --newRedditTheme-widgetColors-appleIcon: #9ca0b0 !important;
    --newRedditTheme-widgetColors-lineColor: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-widgetColors-sidebarWidgetBackgroundColor: #e6e9ef !important;
    --newRedditTheme-widgetColors-sidebarWidgetBorderColor: rgba(188, 192, 204, 0.7) !important;
    --newRedditTheme-widgetColors-sidebarWidgetHeaderColor: #dce0e8 !important;
    --newRedditTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: rgba(220, 224, 232, 0.8) !important;
    --newRedditTheme-widgetColors-sidebarWidgetTextColor: #4c4f69 !important;
    --newRedditTheme-widgetColors-sidebarWidgetTextColorShaded80: #5c5f77 !important;
    --newRedditTheme-widgetColors-sidebarWidgetTitleColor: #4c4f69 !important;
    --tw-bg-opacity: #dce0e8 !important;
    --vds-video-bg-color: #dce0e8 !important;
  }
  :root:not(.theme-dark) .theme-rpl :root,
  :root:not(.theme-dark).theme-rpl :root,
  :root:not(.theme-dark) .theme-beta :root,
  :root:not(.theme-dark).theme-beta :root,
  .theme-light :root {
    --activity-button-chatFilterColor: #ccd0da !important;
    --activity-button-newChatFilter-activeBg: #1e66f5 !important;
    --activity-button-newChatFilter-activeText: #eff1f5 !important;
    --activity-button-newChatFilter-defaultBorder: #bcc0cc !important;
    --activity-button-newChatFilter-defaultText: #4c4f69 !important;
    --activity-button-primary: #1e66f5 !important;
    --activity-button-secondary: #4c4f69 !important;
    --activity-buttonPrimary-color: #1e66f5 !important;
    --activity-buttonSecondary-active: #1e66f5 !important;
    --activity-checkbox-checked: #1e66f5 !important;
    --activity-checkbox-checkmark: #4c4f69 !important;
    --activity-checkbox-unchecked: #eff1f5 !important;
    --activity-checkbox-uncheckedBorder: #bcc0cc !important;
    --activity-icon-active: #1e66f5 !important;
    --activity-icon-contrast: #bcc0cc !important;
    --activity-icon-default: #6c6f85 !important;
    --activity-icon-disable: #acb0be !important;
    --activity-icon-hover: #acb0be !important;
    --activity-icon-nsfw-bg: #eff1f5 !important;
    --activity-icon-nsfw-text: #4c4f69 !important;
    --activity-icon-subIcon-backgroundColor: #4c4f69 !important;
    --activity-icon-toaster: #dce0e8 !important;
    --activity-input-background: rgba(220, 224, 232, 0.8) !important;
    --activity-input-border: #bcc0cc !important;
    --activity-input-channelRename: #6c6f85 !important;
    --activity-input-color: #5c5f77 !important;
    --activity-input-error: #d20f39 !important;
    --activity-input-focusBg: #40a02b !important;
    --activity-input-focusColor: #4c4f69 !important;
    --activity-input-ownerBg: #ccd0da !important;
    --activity-link-hoverText: #d20f39 !important;
    --activity-link-staticText: #1e66f5 !important;
    --activity-link-staticUnderline: #1e66f5 !important;
    --activity-minimizedPortal-backgroundColor-unreadFinal: #e6e9ef !important;
    --activity-minimizedPortal-backgroundColor-unreadInitial: #1e66f5 !important;
    --activity-minimizedPortal-color-unreadFinal: #4c4f69 !important;
    --activity-minimizedPortal-color-unreadInitial: #4c4f69 !important;
    --activity-send-disable: #ccd0da !important;
    --activity-send-hover: #1e66f5 !important;
    --activity-text-active: #1e66f5 !important;
    --activity-text-fade: #6c6f85 !important;
    --activity-text-highlight: #4c4f69 !important;
    --activity-text-light: #6c6f85 !important;
    --activity-text-meta: #6c6f85 !important;
    --activity-text-regular: #4c4f69 !important;
    --activity-text-success: #40a02b !important;
    --activity-text-tutorial: #dc8a78 !important;
    --activity-text-warning: #d20f39 !important;
    --addReaction-backgroundColor: #ccd0da !important;
    --addReaction-iconFill: #bcc0cc !important;
    --boxShadow: rgba(220, 224, 232, 0.8) !important;
    --bubble-border: rgba(188, 192, 204, 0.7) !important;
    --bubble-channelsFilter-background: #dce0e8 !important;
    --bubble-channelsFilter-selected: #9ca0b0 !important;
    --bubble-color: #4c4f69 !important;
    --bubble-link-color: #1e66f5 !important;
    --bubbleActions-hover: #ccd0da !important;
    --editName: #bcc0cc !important;
    --layout-body: #e6e9ef !important;
    --layout-colsBorder: rgba(188, 192, 204, 0.7) !important;
    --layout-controlsBorder: rgba(188, 192, 204, 0.7) !important;
    --layout-dropdown-border: rgba(188, 192, 204, 0.7) !important;
    --layout-header-counterBg: #d20f39 !important;
    --layout-header-counterText: #4c4f69 !important;
    --layout-overlayBackground: rgba(220, 224, 232, 0.8) !important;
    --layout-overlayReportFlow: rgba(220, 224, 232, 0.8) !important;
    --layout-scrollbar: #4c4f69 !important;
    --layout-scrollbarHover: #1e66f5 !important;
    --layout-timeStamp-tooltip-background: #ccd0da !important;
    --message-list-item-button: #bcc0cc !important;
    --message-list-item-onlineIndicator: #40a02b !important;
    --message-list-item-ownerBg: #bcc0cc !important;
    --message-list-item-richItem: #9ca0b0 !important;
    --message-list-item-richItemBorder: rgba(188, 192, 204, 0.7) !important;
    --message-list-item-white: #4c4f69 !important;
    --modal-buttonsBackground: #4c4f69 !important;
    --modal-primaryButtonWarning: #d20f39 !important;
    --modal-secondaryButton: #4c4f69 !important;
    --newChat-inviteLink-borderColor: rgba(188, 192, 204, 0.7) !important;
    --overlay-backgroundColor: #e6e9ef !important;
    --overlay-headerColor: #4c4f69 !important;
    --overlay-inputBackground: #dce0e8 !important;
    --overlay-searchBarBackground: #e6e9ef !important;
    --prompt-tooltip-background: #1e66f5 !important;
    --searchBar-backgroundColor: #e6e9ef !important;
    --settings-color: #6c6f85 !important;
    --settings-dropdownItemHoverBackground: #dce0e8 !important;
    --settings-panelBackground: #dce0e8 !important;
    --settings-panelItemHoverBackground: #ccd0da !important;
    --settings-panelItemSelectedBackground: #bcc0cc !important;
    --sidebar-background: rgba(188, 192, 204, 0.7) !important;
    --sidebar-basic-background-active: #1e66f5 !important;
    --sidebar-basic-background-hover: #e6e9ef !important;
    --sidebar-footer-background: #dce0e8 !important;
    --sidebar-item-active: #bcc0cc !important;
    --sidebar-item-hover: #ccd0da !important;
    --sidebar-item-selected: #acb0be !important;
    --sidebar-item-text-active: #4c4f69 !important;
    --sidebar-subreddit-background-active: #1e66f5 !important;
    --sidebar-subreddit-background-hover: #bcc0cc !important;
    --sidebar-text-divider: #bcc0cc !important;
    --skeleton-field: #acb0be !important;
    --skeleton-inactive: #ccd0da !important;
    --subreddit-iconBg: #1e66f5 !important;
    --toast-error: #d20f39 !important;
    --toast-pending: #dce0e8 !important;
    --toast-success: #40a02b !important;
    --uploads-progress-background: #6c6f85 !important;
    --uploads-progress-bar: #1e66f5 !important;
    --videoModal-button-background: #4c4f69 !important;
    --videoModal-button-color: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl div.ListingLayout-backgroundContainer::before,
  :root:not(.theme-dark).theme-rpl div.ListingLayout-backgroundContainer::before,
  :root:not(.theme-dark) .theme-beta div.ListingLayout-backgroundContainer::before,
  :root:not(.theme-dark).theme-beta div.ListingLayout-backgroundContainer::before,
  .theme-light div.ListingLayout-backgroundContainer::before {
    background: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  :root:not(.theme-dark).theme-rpl span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  :root:not(.theme-dark) .theme-beta span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  :root:not(.theme-dark).theme-beta span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  .theme-light span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-karma_fill,
  :root:not(.theme-dark).theme-rpl i.icon-karma_fill,
  :root:not(.theme-dark) .theme-beta i.icon-karma_fill,
  :root:not(.theme-dark).theme-beta i.icon-karma_fill,
  .theme-light i.icon-karma_fill {
    color: #d20f39 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[role="menu"] > div > div > span > span,
  :root:not(.theme-dark).theme-rpl div[role="menu"] > div > div > span > span,
  :root:not(.theme-dark) .theme-beta div[role="menu"] > div > div > span > span,
  :root:not(.theme-dark).theme-beta div[role="menu"] > div > div > span > span,
  .theme-light div[role="menu"] > div > div > span > span {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[role="switch"][aria-checked="false"],
  :root:not(.theme-dark).theme-rpl button[role="switch"][aria-checked="false"],
  :root:not(.theme-dark) .theme-beta button[role="switch"][aria-checked="false"],
  :root:not(.theme-dark).theme-beta button[role="switch"][aria-checked="false"],
  .theme-light button[role="switch"][aria-checked="false"] {
    background: #ccd0da !important;
  }
  :root:not(.theme-dark) .theme-rpl button[role="switch"] > div,
  :root:not(.theme-dark).theme-rpl button[role="switch"] > div,
  :root:not(.theme-dark) .theme-beta button[role="switch"] > div,
  :root:not(.theme-dark).theme-beta button[role="switch"] > div,
  .theme-light button[role="switch"] > div {
    background: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl ._2dn5Ncenn0BSD4tCSmxQhA,
  :root:not(.theme-dark).theme-rpl ._2dn5Ncenn0BSD4tCSmxQhA,
  :root:not(.theme-dark) .theme-beta ._2dn5Ncenn0BSD4tCSmxQhA,
  :root:not(.theme-dark).theme-beta ._2dn5Ncenn0BSD4tCSmxQhA,
  .theme-light ._2dn5Ncenn0BSD4tCSmxQhA {
    fill: #40a02b !important;
  }
  :root:not(.theme-dark) .theme-rpl ._3SlBAJb2MbUHwgBZFH8eL7,
  :root:not(.theme-dark).theme-rpl ._3SlBAJb2MbUHwgBZFH8eL7,
  :root:not(.theme-dark) .theme-beta ._3SlBAJb2MbUHwgBZFH8eL7,
  :root:not(.theme-dark).theme-beta ._3SlBAJb2MbUHwgBZFH8eL7,
  .theme-light ._3SlBAJb2MbUHwgBZFH8eL7 {
    fill: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button._3F1tNW0P4Ff182mO_CefIg,
  :root:not(.theme-dark).theme-rpl button._3F1tNW0P4Ff182mO_CefIg,
  :root:not(.theme-dark) .theme-beta button._3F1tNW0P4Ff182mO_CefIg,
  :root:not(.theme-dark).theme-beta button._3F1tNW0P4Ff182mO_CefIg,
  .theme-light button._3F1tNW0P4Ff182mO_CefIg {
    background: linear-gradient(90deg, #d20f39, #fe640b) !important;
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button._3F1tNW0P4Ff182mO_CefIg > i,
  :root:not(.theme-dark).theme-rpl button._3F1tNW0P4Ff182mO_CefIg > i,
  :root:not(.theme-dark) .theme-beta button._3F1tNW0P4Ff182mO_CefIg > i,
  :root:not(.theme-dark).theme-beta button._3F1tNW0P4Ff182mO_CefIg > i,
  .theme-light button._3F1tNW0P4Ff182mO_CefIg > i {
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-cake_fill,
  :root:not(.theme-dark).theme-rpl i.icon-cake_fill,
  :root:not(.theme-dark) .theme-beta i.icon-cake_fill,
  :root:not(.theme-dark).theme-beta i.icon-cake_fill,
  .theme-light i.icon-cake_fill,
  :root:not(.theme-dark) .theme-rpl i.icon-user_fill,
  :root:not(.theme-dark).theme-rpl i.icon-user_fill,
  :root:not(.theme-dark) .theme-beta i.icon-user_fill,
  :root:not(.theme-dark).theme-beta i.icon-user_fill,
  .theme-light i.icon-user_fill {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark).theme-rpl div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark) .theme-beta div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark).theme-beta div._3hew1NnzwygOKDNQDKp6R4,
  .theme-light div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark) .theme-rpl div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-dark).theme-rpl div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-dark) .theme-beta div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-dark).theme-beta div._3hew1NnzwygOKDNQDKp6R4 > i,
  .theme-light div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-dark) .theme-rpl li._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark).theme-rpl li._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark) .theme-beta li._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-dark).theme-beta li._3hew1NnzwygOKDNQDKp6R4,
  .theme-light li._3hew1NnzwygOKDNQDKp6R4 {
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._1VP69d9lk-Wk9zokOaylL,
  :root:not(.theme-dark).theme-rpl div._1VP69d9lk-Wk9zokOaylL,
  :root:not(.theme-dark) .theme-beta div._1VP69d9lk-Wk9zokOaylL,
  :root:not(.theme-dark).theme-beta div._1VP69d9lk-Wk9zokOaylL,
  .theme-light div._1VP69d9lk-Wk9zokOaylL {
    --background: #eff1f5 !important;
    --canvas: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl span._2KFJx8Dhh1o1u0Xb8e7NuD,
  :root:not(.theme-dark).theme-rpl span._2KFJx8Dhh1o1u0Xb8e7NuD,
  :root:not(.theme-dark) .theme-beta span._2KFJx8Dhh1o1u0Xb8e7NuD,
  :root:not(.theme-dark).theme-beta span._2KFJx8Dhh1o1u0Xb8e7NuD,
  .theme-light span._2KFJx8Dhh1o1u0Xb8e7NuD {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button.EBd2MhBQlQeZ13YeP0K8a,
  :root:not(.theme-dark).theme-rpl button.EBd2MhBQlQeZ13YeP0K8a,
  :root:not(.theme-dark) .theme-beta button.EBd2MhBQlQeZ13YeP0K8a,
  :root:not(.theme-dark).theme-beta button.EBd2MhBQlQeZ13YeP0K8a,
  .theme-light button.EBd2MhBQlQeZ13YeP0K8a {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  :root:not(.theme-dark).theme-rpl svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  :root:not(.theme-dark) .theme-beta svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  :root:not(.theme-dark).theme-beta svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  .theme-light svg._1Fa4RPHlhrfUZuNaXK2-eP > path {
    fill: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl input._1Vnaj3fBuYrmHKEPQD_zWW,
  :root:not(.theme-dark).theme-rpl input._1Vnaj3fBuYrmHKEPQD_zWW,
  :root:not(.theme-dark) .theme-beta input._1Vnaj3fBuYrmHKEPQD_zWW,
  :root:not(.theme-dark).theme-beta input._1Vnaj3fBuYrmHKEPQD_zWW,
  .theme-light input._1Vnaj3fBuYrmHKEPQD_zWW {
    background-color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div.scrollerItem > div,
  :root:not(.theme-dark).theme-rpl div.scrollerItem > div,
  :root:not(.theme-dark) .theme-beta div.scrollerItem > div,
  :root:not(.theme-dark).theme-beta div.scrollerItem > div,
  .theme-light div.scrollerItem > div,
  :root:not(.theme-dark) .theme-rpl div[data-testid="post-container"],
  :root:not(.theme-dark).theme-rpl div[data-testid="post-container"],
  :root:not(.theme-dark) .theme-beta div[data-testid="post-container"],
  :root:not(.theme-dark).theme-beta div[data-testid="post-container"],
  .theme-light div[data-testid="post-container"],
  :root:not(.theme-dark) .theme-rpl div[style="background:#1A1A1B"],
  :root:not(.theme-dark).theme-rpl div[style="background:#1A1A1B"],
  :root:not(.theme-dark) .theme-beta div[style="background:#1A1A1B"],
  :root:not(.theme-dark).theme-beta div[style="background:#1A1A1B"],
  .theme-light div[style="background:#1A1A1B"],
  :root:not(.theme-dark) .theme-rpl div._2otRz3OtuWajw1RleFDJ5P,
  :root:not(.theme-dark).theme-rpl div._2otRz3OtuWajw1RleFDJ5P,
  :root:not(.theme-dark) .theme-beta div._2otRz3OtuWajw1RleFDJ5P,
  :root:not(.theme-dark).theme-beta div._2otRz3OtuWajw1RleFDJ5P,
  .theme-light div._2otRz3OtuWajw1RleFDJ5P {
    background: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl div._productDetails_7kbcu_53,
  :root:not(.theme-dark).theme-rpl div._productDetails_7kbcu_53,
  :root:not(.theme-dark) .theme-beta div._productDetails_7kbcu_53,
  :root:not(.theme-dark).theme-beta div._productDetails_7kbcu_53,
  .theme-light div._productDetails_7kbcu_53 {
    background: #e6e9ef !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl .RESUserTagImage::after,
  :root:not(.theme-dark).theme-rpl .RESUserTagImage::after,
  :root:not(.theme-dark) .theme-beta .RESUserTagImage::after,
  :root:not(.theme-dark).theme-beta .RESUserTagImage::after,
  .theme-light .RESUserTagImage::after {
    color: #1e66f5;
  }
  :root:not(.theme-dark) .theme-rpl div._mintStatus_7kbcu_264,
  :root:not(.theme-dark).theme-rpl div._mintStatus_7kbcu_264,
  :root:not(.theme-dark) .theme-beta div._mintStatus_7kbcu_264,
  :root:not(.theme-dark).theme-beta div._mintStatus_7kbcu_264,
  .theme-light div._mintStatus_7kbcu_264 {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._carousel_7kbcu_45,
  :root:not(.theme-dark).theme-rpl div._carousel_7kbcu_45,
  :root:not(.theme-dark) .theme-beta div._carousel_7kbcu_45,
  :root:not(.theme-dark).theme-beta div._carousel_7kbcu_45,
  .theme-light div._carousel_7kbcu_45 {
    background: linear-gradient(243.37deg, #eff1f5 16.42%, #1e66f5 100%);
  }
  :root:not(.theme-dark) .theme-rpl div._card_1ooes_1,
  :root:not(.theme-dark).theme-rpl div._card_1ooes_1,
  :root:not(.theme-dark) .theme-beta div._card_1ooes_1,
  :root:not(.theme-dark).theme-beta div._card_1ooes_1,
  .theme-light div._card_1ooes_1 {
    background: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl ol._container_1t62i_1,
  :root:not(.theme-dark).theme-rpl ol._container_1t62i_1,
  :root:not(.theme-dark) .theme-beta ol._container_1t62i_1,
  :root:not(.theme-dark).theme-beta ol._container_1t62i_1,
  .theme-light ol._container_1t62i_1 {
    border-color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl ol._container_1t62i_1 > li,
  :root:not(.theme-dark).theme-rpl ol._container_1t62i_1 > li,
  :root:not(.theme-dark) .theme-beta ol._container_1t62i_1 > li,
  :root:not(.theme-dark).theme-beta ol._container_1t62i_1 > li,
  .theme-light ol._container_1t62i_1 > li {
    border-color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl ol._container_1t62i_1 > li > div,
  :root:not(.theme-dark).theme-rpl ol._container_1t62i_1 > li > div,
  :root:not(.theme-dark) .theme-beta ol._container_1t62i_1 > li > div,
  :root:not(.theme-dark).theme-beta ol._container_1t62i_1 > li > div,
  .theme-light ol._container_1t62i_1 > li > div {
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div.MuiMobileStepper-dot,
  :root:not(.theme-dark).theme-rpl div.MuiMobileStepper-dot,
  :root:not(.theme-dark) .theme-beta div.MuiMobileStepper-dot,
  :root:not(.theme-dark).theme-beta div.MuiMobileStepper-dot,
  .theme-light div.MuiMobileStepper-dot {
    background: #ccd0da !important;
  }
  :root:not(.theme-dark) .theme-rpl div.MuiMobileStepper-dotActive,
  :root:not(.theme-dark).theme-rpl div.MuiMobileStepper-dotActive,
  :root:not(.theme-dark) .theme-beta div.MuiMobileStepper-dotActive,
  :root:not(.theme-dark).theme-beta div.MuiMobileStepper-dotActive,
  .theme-light div.MuiMobileStepper-dotActive {
    background: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-dark).theme-rpl div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-dark) .theme-beta div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-dark).theme-beta div._scrollContainer_7kbcu_104 > div > h3,
  .theme-light div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-dark) .theme-rpl div._cardAuthor_7kbcu_79,
  :root:not(.theme-dark).theme-rpl div._cardAuthor_7kbcu_79,
  :root:not(.theme-dark) .theme-beta div._cardAuthor_7kbcu_79,
  :root:not(.theme-dark).theme-beta div._cardAuthor_7kbcu_79,
  .theme-light div._cardAuthor_7kbcu_79 {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._container_oikih_1,
  :root:not(.theme-dark).theme-rpl div._container_oikih_1,
  :root:not(.theme-dark) .theme-beta div._container_oikih_1,
  :root:not(.theme-dark).theme-beta div._container_oikih_1,
  .theme-light div._container_oikih_1 {
    background: #dce0e8 !important;
    border-color: #bcc0cc !important;
  }
  :root:not(.theme-dark) .theme-rpl a._pill_7kbcu_280,
  :root:not(.theme-dark).theme-rpl a._pill_7kbcu_280,
  :root:not(.theme-dark) .theme-beta a._pill_7kbcu_280,
  :root:not(.theme-dark).theme-beta a._pill_7kbcu_280,
  .theme-light a._pill_7kbcu_280 {
    background: #dce0e8 !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl button._shopForMoreButton_7kbcu_125,
  :root:not(.theme-dark).theme-rpl button._shopForMoreButton_7kbcu_125,
  :root:not(.theme-dark) .theme-beta button._shopForMoreButton_7kbcu_125,
  :root:not(.theme-dark).theme-beta button._shopForMoreButton_7kbcu_125,
  .theme-light button._shopForMoreButton_7kbcu_125 {
    background: linear-gradient(90deg, #d20f39, #fe640b) !important;
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._wrapper_1upjl_7,
  :root:not(.theme-dark).theme-rpl div._wrapper_1upjl_7,
  :root:not(.theme-dark) .theme-beta div._wrapper_1upjl_7,
  :root:not(.theme-dark).theme-beta div._wrapper_1upjl_7,
  .theme-light div._wrapper_1upjl_7 {
    background: #eff1f5 !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[aria-label="Home"] > svg > g > circle,
  :root:not(.theme-dark).theme-rpl a[aria-label="Home"] > svg > g > circle,
  :root:not(.theme-dark) .theme-beta a[aria-label="Home"] > svg > g > circle,
  :root:not(.theme-dark).theme-beta a[aria-label="Home"] > svg > g > circle,
  .theme-light a[aria-label="Home"] > svg > g > circle {
    fill: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[aria-label="Home"] > svg:first-child > g > path,
  :root:not(.theme-dark).theme-rpl a[aria-label="Home"] > svg:first-child > g > path,
  :root:not(.theme-dark) .theme-beta a[aria-label="Home"] > svg:first-child > g > path,
  :root:not(.theme-dark).theme-beta a[aria-label="Home"] > svg:first-child > g > path,
  .theme-light a[aria-label="Home"] > svg:first-child > g > path {
    fill: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[aria-label="Home"] > svg:nth-child(2) > g > path,
  :root:not(.theme-dark).theme-rpl a[aria-label="Home"] > svg:nth-child(2) > g > path,
  :root:not(.theme-dark) .theme-beta a[aria-label="Home"] > svg:nth-child(2) > g > path,
  :root:not(.theme-dark).theme-beta a[aria-label="Home"] > svg:nth-child(2) > g > path,
  .theme-light a[aria-label="Home"] > svg:nth-child(2) > g > path {
    fill: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl h1._eYtD2XCVieq6emjKBH3m,
  :root:not(.theme-dark).theme-rpl h1._eYtD2XCVieq6emjKBH3m,
  :root:not(.theme-dark) .theme-beta h1._eYtD2XCVieq6emjKBH3m,
  :root:not(.theme-dark).theme-beta h1._eYtD2XCVieq6emjKBH3m,
  .theme-light h1._eYtD2XCVieq6emjKBH3m {
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[aria-label="Open notifications inbox"] > div > span,
  :root:not(.theme-dark).theme-rpl button[aria-label="Open notifications inbox"] > div > span,
  :root:not(.theme-dark) .theme-beta button[aria-label="Open notifications inbox"] > div > span,
  :root:not(.theme-dark).theme-beta button[aria-label="Open notifications inbox"] > div > span,
  .theme-light button[aria-label="Open notifications inbox"] > div > span {
    background: #1e66f5 !important;
    color: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  :root:not(.theme-dark).theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  :root:not(.theme-dark) .theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  :root:not(.theme-dark).theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  .theme-light #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a {
    background: #ccd0da !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  :root:not(.theme-dark).theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  :root:not(.theme-dark) .theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  :root:not(.theme-dark).theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  .theme-light #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i {
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[href="/now"] > div,
  :root:not(.theme-dark).theme-rpl a[href="/now"] > div,
  :root:not(.theme-dark) .theme-beta a[href="/now"] > div,
  :root:not(.theme-dark).theme-beta a[href="/now"] > div,
  .theme-light a[href="/now"] > div {
    background: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[data-testid="search-scope-pill-text"],
  :root:not(.theme-dark).theme-rpl div[data-testid="search-scope-pill-text"],
  :root:not(.theme-dark) .theme-beta div[data-testid="search-scope-pill-text"],
  :root:not(.theme-dark).theme-beta div[data-testid="search-scope-pill-text"],
  .theme-light div[data-testid="search-scope-pill-text"] {
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  :root:not(.theme-dark).theme-rpl div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  :root:not(.theme-dark) .theme-beta div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  :root:not(.theme-dark).theme-beta div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  .theme-light div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"] {
    --posttitletextcolor: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl button#safe-search-toggle[aria-checked="true"],
  :root:not(.theme-dark).theme-rpl button#safe-search-toggle[aria-checked="true"],
  :root:not(.theme-dark) .theme-beta button#safe-search-toggle[aria-checked="true"],
  :root:not(.theme-dark).theme-beta button#safe-search-toggle[aria-checked="true"],
  .theme-light button#safe-search-toggle[aria-checked="true"] {
    background: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-close,
  :root:not(.theme-dark).theme-rpl i.icon-close,
  :root:not(.theme-dark) .theme-beta i.icon-close,
  :root:not(.theme-dark).theme-beta i.icon-close,
  .theme-light i.icon-close {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[role="menuitem"],
  :root:not(.theme-dark).theme-rpl a[role="menuitem"],
  :root:not(.theme-dark) .theme-beta a[role="menuitem"],
  :root:not(.theme-dark).theme-beta a[role="menuitem"],
  .theme-light a[role="menuitem"] {
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[role="menu"] > div[role="heading"],
  :root:not(.theme-dark).theme-rpl div[role="menu"] > div[role="heading"],
  :root:not(.theme-dark) .theme-beta div[role="menu"] > div[role="heading"],
  :root:not(.theme-dark).theme-beta div[role="menu"] > div[role="heading"],
  .theme-light div[role="menu"] > div[role="heading"] {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[role="menuitem"]:hover,
  :root:not(.theme-dark).theme-rpl a[role="menuitem"]:hover,
  :root:not(.theme-dark) .theme-beta a[role="menuitem"]:hover,
  :root:not(.theme-dark).theme-beta a[role="menuitem"]:hover,
  .theme-light a[role="menuitem"]:hover {
    background: #ccd0da !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-star_fill,
  :root:not(.theme-dark).theme-rpl i.icon-star_fill,
  :root:not(.theme-dark) .theme-beta i.icon-star_fill,
  :root:not(.theme-dark).theme-beta i.icon-star_fill,
  .theme-light i.icon-star_fill {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-star,
  :root:not(.theme-dark).theme-rpl i.icon-star,
  :root:not(.theme-dark) .theme-beta i.icon-star,
  :root:not(.theme-dark).theme-beta i.icon-star,
  .theme-light i.icon-star {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-premium_fill,
  :root:not(.theme-dark).theme-rpl i.icon-premium_fill,
  :root:not(.theme-dark) .theme-beta i.icon-premium_fill,
  :root:not(.theme-dark).theme-beta i.icon-premium_fill,
  .theme-light i.icon-premium_fill {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  :root:not(.theme-dark).theme-rpl button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  :root:not(.theme-dark) .theme-beta button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  :root:not(.theme-dark).theme-beta button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  .theme-light button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ- {
    background: #1e66f5 !important;
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  :root:not(.theme-dark).theme-rpl div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  :root:not(.theme-dark) .theme-beta div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  :root:not(.theme-dark).theme-beta div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  .theme-light div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div {
    border-color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[data-adclicklocation="background"],
  :root:not(.theme-dark).theme-rpl div[data-adclicklocation="background"],
  :root:not(.theme-dark) .theme-beta div[data-adclicklocation="background"],
  :root:not(.theme-dark).theme-beta div[data-adclicklocation="background"],
  .theme-light div[data-adclicklocation="background"] {
    background: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-dark).theme-rpl div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-dark) .theme-beta div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-dark).theme-beta div._3-miAEojrCvx_4FQ8x3P-s,
  .theme-light div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-dark) .theme-rpl i.icon-comment,
  :root:not(.theme-dark).theme-rpl i.icon-comment,
  :root:not(.theme-dark) .theme-beta i.icon-comment,
  :root:not(.theme-dark).theme-beta i.icon-comment,
  .theme-light i.icon-comment,
  :root:not(.theme-dark) .theme-rpl i.icon-share,
  :root:not(.theme-dark).theme-rpl i.icon-share,
  :root:not(.theme-dark) .theme-beta i.icon-share,
  :root:not(.theme-dark).theme-beta i.icon-share,
  .theme-light i.icon-share,
  :root:not(.theme-dark) .theme-rpl i.icon-save,
  :root:not(.theme-dark).theme-rpl i.icon-save,
  :root:not(.theme-dark) .theme-beta i.icon-save,
  :root:not(.theme-dark).theme-beta i.icon-save,
  .theme-light i.icon-save,
  :root:not(.theme-dark) .theme-rpl i.icon-expand,
  :root:not(.theme-dark).theme-rpl i.icon-expand,
  :root:not(.theme-dark) .theme-beta i.icon-expand,
  :root:not(.theme-dark).theme-beta i.icon-expand,
  .theme-light i.icon-expand,
  :root:not(.theme-dark) .theme-rpl i.icon-collapse,
  :root:not(.theme-dark).theme-rpl i.icon-collapse,
  :root:not(.theme-dark) .theme-beta i.icon-collapse,
  :root:not(.theme-dark).theme-beta i.icon-collapse,
  .theme-light i.icon-collapse,
  :root:not(.theme-dark) .theme-rpl i.icon-text_post,
  :root:not(.theme-dark).theme-rpl i.icon-text_post,
  :root:not(.theme-dark) .theme-beta i.icon-text_post,
  :root:not(.theme-dark).theme-beta i.icon-text_post,
  .theme-light i.icon-text_post,
  :root:not(.theme-dark) .theme-rpl i.icon-image_post,
  :root:not(.theme-dark).theme-rpl i.icon-image_post,
  :root:not(.theme-dark) .theme-beta i.icon-image_post,
  :root:not(.theme-dark).theme-beta i.icon-image_post,
  .theme-light i.icon-image_post,
  :root:not(.theme-dark) .theme-rpl i.icon-media_gallery,
  :root:not(.theme-dark).theme-rpl i.icon-media_gallery,
  :root:not(.theme-dark) .theme-beta i.icon-media_gallery,
  :root:not(.theme-dark).theme-beta i.icon-media_gallery,
  .theme-light i.icon-media_gallery,
  :root:not(.theme-dark) .theme-rpl i.icon-video_post,
  :root:not(.theme-dark).theme-rpl i.icon-video_post,
  :root:not(.theme-dark) .theme-beta i.icon-video_post,
  :root:not(.theme-dark).theme-beta i.icon-video_post,
  .theme-light i.icon-video_post,
  :root:not(.theme-dark) .theme-rpl i.icon-gif_post,
  :root:not(.theme-dark).theme-rpl i.icon-gif_post,
  :root:not(.theme-dark) .theme-beta i.icon-gif_post,
  :root:not(.theme-dark).theme-beta i.icon-gif_post,
  .theme-light i.icon-gif_post,
  :root:not(.theme-dark) .theme-rpl i.icon-embed,
  :root:not(.theme-dark).theme-rpl i.icon-embed,
  :root:not(.theme-dark) .theme-beta i.icon-embed,
  :root:not(.theme-dark).theme-beta i.icon-embed,
  .theme-light i.icon-embed,
  :root:not(.theme-dark) .theme-rpl i.icon-external_link,
  :root:not(.theme-dark).theme-rpl i.icon-external_link,
  :root:not(.theme-dark) .theme-beta i.icon-external_link,
  :root:not(.theme-dark).theme-beta i.icon-external_link,
  .theme-light i.icon-external_link,
  :root:not(.theme-dark) .theme-rpl i.icon-poll_post,
  :root:not(.theme-dark).theme-rpl i.icon-poll_post,
  :root:not(.theme-dark) .theme-beta i.icon-poll_post,
  :root:not(.theme-dark).theme-beta i.icon-poll_post,
  .theme-light i.icon-poll_post {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-dark).theme-rpl div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-dark) .theme-beta div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-dark).theme-beta div[data-adclicklocation="title"] > div > a > div > h3,
  .theme-light div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-dark) .theme-rpl div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  :root:not(.theme-dark).theme-rpl div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  :root:not(.theme-dark) .theme-beta div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  :root:not(.theme-dark).theme-beta div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  .theme-light div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child {
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-dark).theme-rpl div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-dark) .theme-beta div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-dark).theme-beta div[data-adclicklocation="top_bar"] > span,
  .theme-light div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-dark) .theme-rpl a[data-testid="post_author_link"],
  :root:not(.theme-dark).theme-rpl a[data-testid="post_author_link"],
  :root:not(.theme-dark) .theme-beta a[data-testid="post_author_link"],
  :root:not(.theme-dark).theme-beta a[data-testid="post_author_link"],
  .theme-light a[data-testid="post_author_link"] {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl span._1wzhGvvafQFOWAyA157okr,
  :root:not(.theme-dark).theme-rpl span._1wzhGvvafQFOWAyA157okr,
  :root:not(.theme-dark) .theme-beta span._1wzhGvvafQFOWAyA157okr,
  :root:not(.theme-dark).theme-beta span._1wzhGvvafQFOWAyA157okr,
  .theme-light span._1wzhGvvafQFOWAyA157okr {
    border-color: #d20f39 !important;
    color: #d20f39 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-pin_fill,
  :root:not(.theme-dark).theme-rpl i.icon-pin_fill,
  :root:not(.theme-dark) .theme-beta i.icon-pin_fill,
  :root:not(.theme-dark).theme-beta i.icon-pin_fill,
  .theme-light i.icon-pin_fill {
    color: #40a02b !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-award,
  :root:not(.theme-dark).theme-rpl i.icon-award,
  :root:not(.theme-dark) .theme-beta i.icon-award,
  :root:not(.theme-dark).theme-beta i.icon-award,
  .theme-light i.icon-award {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-archived_fill,
  :root:not(.theme-dark).theme-rpl i.icon-archived_fill,
  :root:not(.theme-dark) .theme-beta i.icon-archived_fill,
  :root:not(.theme-dark).theme-beta i.icon-archived_fill,
  .theme-light i.icon-archived_fill,
  :root:not(.theme-dark) .theme-rpl i.icon-lock_fill,
  :root:not(.theme-dark).theme-rpl i.icon-lock_fill,
  :root:not(.theme-dark) .theme-beta i.icon-lock_fill,
  :root:not(.theme-dark).theme-beta i.icon-lock_fill,
  .theme-light i.icon-lock_fill {
    color: #df8e1d !important;
  }
  :root:not(.theme-dark) .theme-rpl div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  :root:not(.theme-dark).theme-rpl div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  :root:not(.theme-dark) .theme-beta div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  :root:not(.theme-dark).theme-beta div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  .theme-light div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3) {
    border-color: #bcc0cc !important;
  }
  :root:not(.theme-dark) .theme-rpl div.Post,
  :root:not(.theme-dark).theme-rpl div.Post,
  :root:not(.theme-dark) .theme-beta div.Post,
  :root:not(.theme-dark).theme-beta div.Post,
  .theme-light div.Post,
  :root:not(.theme-dark) .theme-rpl div[data-click-id="media"],
  :root:not(.theme-dark).theme-rpl div[data-click-id="media"],
  :root:not(.theme-dark) .theme-beta div[data-click-id="media"],
  :root:not(.theme-dark).theme-beta div[data-click-id="media"],
  .theme-light div[data-click-id="media"] {
    background: #e6e9ef !important;
    fill: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl div[id^="vote-arrows"] > div,
  :root:not(.theme-dark).theme-rpl div[id^="vote-arrows"] > div,
  :root:not(.theme-dark) .theme-beta div[id^="vote-arrows"] > div,
  :root:not(.theme-dark).theme-beta div[id^="vote-arrows"] > div,
  .theme-light div[id^="vote-arrows"] > div {
    color: #6c6f85 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-upvote_fill,
  :root:not(.theme-dark).theme-rpl i.icon-upvote_fill,
  :root:not(.theme-dark) .theme-beta i.icon-upvote_fill,
  :root:not(.theme-dark).theme-beta i.icon-upvote_fill,
  .theme-light i.icon-upvote_fill {
    color: #d20f39 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-dark).theme-rpl button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-dark) .theme-beta button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-dark).theme-beta button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  .theme-light button[aria-label="upvote"][aria-pressed="false"] > span:hover > i {
    color: #d20f39 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[aria-label="upvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-dark).theme-rpl button[aria-label="upvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-dark) .theme-beta button[aria-label="upvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-dark).theme-beta button[aria-label="upvote"][aria-pressed="true"] ~ div,
  .theme-light button[aria-label="upvote"][aria-pressed="true"] ~ div {
    color: #d20f39 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  :root:not(.theme-dark).theme-rpl button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  :root:not(.theme-dark) .theme-beta button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  :root:not(.theme-dark).theme-beta button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  .theme-light button[aria-label="upvote"][aria-label="downvote"] > span:hover {
    background: #ccd0da !important;
  }
  :root:not(.theme-dark) .theme-rpl .icon-downvote_fill,
  :root:not(.theme-dark).theme-rpl .icon-downvote_fill,
  :root:not(.theme-dark) .theme-beta .icon-downvote_fill,
  :root:not(.theme-dark).theme-beta .icon-downvote_fill,
  .theme-light .icon-downvote_fill {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[aria-label="downvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-dark).theme-rpl button[aria-label="downvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-dark) .theme-beta button[aria-label="downvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-dark).theme-beta button[aria-label="downvote"][aria-pressed="true"] ~ div,
  .theme-light button[aria-label="downvote"][aria-pressed="true"] ~ div {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-dark).theme-rpl button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-dark) .theme-beta button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-dark).theme-beta button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  .theme-light button[aria-label="downvote"][aria-pressed="false"] > span:hover > i {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl a.o1ov2mzLxTFAFP-O4Uv8I,
  :root:not(.theme-dark).theme-rpl a.o1ov2mzLxTFAFP-O4Uv8I,
  :root:not(.theme-dark) .theme-beta a.o1ov2mzLxTFAFP-O4Uv8I,
  :root:not(.theme-dark).theme-beta a.o1ov2mzLxTFAFP-O4Uv8I,
  .theme-light a.o1ov2mzLxTFAFP-O4Uv8I {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl button._1lDGFVGU9k2mi-4kjU95Rp,
  :root:not(.theme-dark).theme-rpl button._1lDGFVGU9k2mi-4kjU95Rp,
  :root:not(.theme-dark) .theme-beta button._1lDGFVGU9k2mi-4kjU95Rp,
  :root:not(.theme-dark).theme-beta button._1lDGFVGU9k2mi-4kjU95Rp,
  .theme-light button._1lDGFVGU9k2mi-4kjU95Rp {
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl a[role="button"][target="_blank"],
  :root:not(.theme-dark).theme-rpl a[role="button"][target="_blank"],
  :root:not(.theme-dark) .theme-beta a[role="button"][target="_blank"],
  :root:not(.theme-dark).theme-beta a[role="button"][target="_blank"],
  .theme-light a[role="button"][target="_blank"] {
    background: #4c4f69 !important;
    color: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[role="radio"]:hover,
  :root:not(.theme-dark).theme-rpl div[role="radio"]:hover,
  :root:not(.theme-dark) .theme-beta div[role="radio"]:hover,
  :root:not(.theme-dark).theme-beta div[role="radio"]:hover,
  .theme-light div[role="radio"]:hover,
  :root:not(.theme-dark) .theme-rpl div[role="radio"]:focus,
  :root:not(.theme-dark).theme-rpl div[role="radio"]:focus,
  :root:not(.theme-dark) .theme-beta div[role="radio"]:focus,
  :root:not(.theme-dark).theme-beta div[role="radio"]:focus,
  .theme-light div[role="radio"]:focus {
    background: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div[role="radio"] > svg,
  :root:not(.theme-dark).theme-rpl div[role="radio"] > svg,
  :root:not(.theme-dark) .theme-beta div[role="radio"] > svg,
  :root:not(.theme-dark).theme-beta div[role="radio"] > svg,
  .theme-light div[role="radio"] > svg,
  :root:not(.theme-dark) .theme-rpl div[role="radio"] > svg:active,
  :root:not(.theme-dark).theme-rpl div[role="radio"] > svg:active,
  :root:not(.theme-dark) .theme-beta div[role="radio"] > svg:active,
  :root:not(.theme-dark).theme-beta div[role="radio"] > svg:active,
  .theme-light div[role="radio"] > svg:active {
    fill: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl button[role="checkbox"],
  :root:not(.theme-dark).theme-rpl button[role="checkbox"],
  :root:not(.theme-dark) .theme-beta button[role="checkbox"],
  :root:not(.theme-dark).theme-beta button[role="checkbox"],
  .theme-light button[role="checkbox"] {
    fill: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl ._ZhON3a3vplThB8NFwuJn,
  :root:not(.theme-dark).theme-rpl ._ZhON3a3vplThB8NFwuJn,
  :root:not(.theme-dark) .theme-beta ._ZhON3a3vplThB8NFwuJn,
  :root:not(.theme-dark).theme-beta ._ZhON3a3vplThB8NFwuJn,
  .theme-light ._ZhON3a3vplThB8NFwuJn {
    background: #dce0e8 !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl img[alt="Subreddit Icon"][role="presentation"],
  :root:not(.theme-dark).theme-rpl img[alt="Subreddit Icon"][role="presentation"],
  :root:not(.theme-dark) .theme-beta img[alt="Subreddit Icon"][role="presentation"],
  :root:not(.theme-dark).theme-beta img[alt="Subreddit Icon"][role="presentation"],
  .theme-light img[alt="Subreddit Icon"][role="presentation"] {
    background: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  :root:not(.theme-dark).theme-rpl ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  :root:not(.theme-dark) .theme-beta ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  :root:not(.theme-dark).theme-beta ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  .theme-light ._1KrMye71CT332tKKKUWAj6:not(:last-of-type) {
    border-bottom-color: #ccd0da;
  }
  :root:not(.theme-dark) .theme-rpl .bg-neutral-background,
  :root:not(.theme-dark).theme-rpl .bg-neutral-background,
  :root:not(.theme-dark) .theme-beta .bg-neutral-background,
  :root:not(.theme-dark).theme-beta .bg-neutral-background,
  .theme-light .bg-neutral-background {
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl i.icon-community_fill,
  :root:not(.theme-dark).theme-rpl i.icon-community_fill,
  :root:not(.theme-dark) .theme-beta i.icon-community_fill,
  :root:not(.theme-dark).theme-beta i.icon-community_fill,
  .theme-light i.icon-community_fill {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._21RLQh5PvUhC6vOKoFeHUP::before,
  :root:not(.theme-dark).theme-rpl div._21RLQh5PvUhC6vOKoFeHUP::before,
  :root:not(.theme-dark) .theme-beta div._21RLQh5PvUhC6vOKoFeHUP::before,
  :root:not(.theme-dark).theme-beta div._21RLQh5PvUhC6vOKoFeHUP::before,
  .theme-light div._21RLQh5PvUhC6vOKoFeHUP::before {
    color: #40a02b !important;
  }
  :root:not(.theme-dark) .theme-rpl ._2v4IIjPhKL0PDaWaWtjJ1E,
  :root:not(.theme-dark).theme-rpl ._2v4IIjPhKL0PDaWaWtjJ1E,
  :root:not(.theme-dark) .theme-beta ._2v4IIjPhKL0PDaWaWtjJ1E,
  :root:not(.theme-dark).theme-beta ._2v4IIjPhKL0PDaWaWtjJ1E,
  .theme-light ._2v4IIjPhKL0PDaWaWtjJ1E {
    background: #ccd0da !important;
  }
  :root:not(.theme-dark) .theme-rpl span[id^="CommentTopMeta--Mod"],
  :root:not(.theme-dark).theme-rpl span[id^="CommentTopMeta--Mod"],
  :root:not(.theme-dark) .theme-beta span[id^="CommentTopMeta--Mod"],
  :root:not(.theme-dark).theme-beta span[id^="CommentTopMeta--Mod"],
  .theme-light span[id^="CommentTopMeta--Mod"] {
    color: #40a02b !important;
  }
  :root:not(.theme-dark) .theme-rpl span[id^="CommentTopMeta--OP"],
  :root:not(.theme-dark).theme-rpl span[id^="CommentTopMeta--OP"],
  :root:not(.theme-dark) .theme-beta span[id^="CommentTopMeta--OP"],
  :root:not(.theme-dark).theme-beta span[id^="CommentTopMeta--OP"],
  .theme-light span[id^="CommentTopMeta--OP"] {
    color: #1e66f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl div#overlayScrollContainer > div,
  :root:not(.theme-dark).theme-rpl div#overlayScrollContainer > div,
  :root:not(.theme-dark) .theme-beta div#overlayScrollContainer > div,
  :root:not(.theme-dark).theme-beta div#overlayScrollContainer > div,
  .theme-light div#overlayScrollContainer > div {
    background: #dce0e8 !important;
  }
  :root:not(.theme-dark) .theme-rpl div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  :root:not(.theme-dark).theme-rpl div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  :root:not(.theme-dark) .theme-beta div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  :root:not(.theme-dark).theme-beta div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  .theme-light div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR {
    background: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-dark).theme-rpl div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-dark) .theme-beta div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-dark).theme-beta div._2DJXORCrmcNpPTSq0LqL6i,
  .theme-light div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-dark) .theme-rpl div._1DK52RbaamLOWw5UPaht_S,
  :root:not(.theme-dark).theme-rpl div._1DK52RbaamLOWw5UPaht_S,
  :root:not(.theme-dark) .theme-beta div._1DK52RbaamLOWw5UPaht_S,
  :root:not(.theme-dark).theme-beta div._1DK52RbaamLOWw5UPaht_S,
  .theme-light div._1DK52RbaamLOWw5UPaht_S {
    background: rgba(220, 224, 232, 0.8) !important;
  }
  :root:not(.theme-dark) .theme-rpl div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  :root:not(.theme-dark).theme-rpl div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  :root:not(.theme-dark) .theme-beta div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  :root:not(.theme-dark).theme-beta div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  .theme-light div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"] {
    background: linear-gradient(188deg, #f9e2af1f 1.7%, #f9e2af00 46%, rgba(0, 0, 0, 0)) !important;
  }
  :root:not(.theme-dark) .theme-rpl a[title="Next"] > i,
  :root:not(.theme-dark).theme-rpl a[title="Next"] > i,
  :root:not(.theme-dark) .theme-beta a[title="Next"] > i,
  :root:not(.theme-dark).theme-beta a[title="Next"] > i,
  .theme-light a[title="Next"] > i,
  :root:not(.theme-dark) .theme-rpl a[title="Previous"] > i,
  :root:not(.theme-dark).theme-rpl a[title="Previous"] > i,
  :root:not(.theme-dark) .theme-beta a[title="Previous"] > i,
  :root:not(.theme-dark).theme-beta a[title="Previous"] > i,
  .theme-light a[title="Previous"] > i {
    background: #ccd0da !important;
  }
  :root:not(.theme-dark) .theme-rpl div._61i6grM3um1yuw4GrN97P,
  :root:not(.theme-dark).theme-rpl div._61i6grM3um1yuw4GrN97P,
  :root:not(.theme-dark) .theme-beta div._61i6grM3um1yuw4GrN97P,
  :root:not(.theme-dark).theme-beta div._61i6grM3um1yuw4GrN97P,
  .theme-light div._61i6grM3um1yuw4GrN97P {
    background: rgba(220, 224, 232, 0.8) !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl input#comment_search-bar,
  :root:not(.theme-dark).theme-rpl input#comment_search-bar,
  :root:not(.theme-dark) .theme-beta input#comment_search-bar,
  :root:not(.theme-dark).theme-beta input#comment_search-bar,
  .theme-light input#comment_search-bar {
    background: #eff1f5 !important;
  }
  :root:not(.theme-dark) .theme-rpl ._1gVVmSnHZpkUgVShsn7-ua,
  :root:not(.theme-dark).theme-rpl ._1gVVmSnHZpkUgVShsn7-ua,
  :root:not(.theme-dark) .theme-beta ._1gVVmSnHZpkUgVShsn7-ua,
  :root:not(.theme-dark).theme-beta ._1gVVmSnHZpkUgVShsn7-ua,
  .theme-light ._1gVVmSnHZpkUgVShsn7-ua {
    background: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl .bX6SqXfzfxpv4GQbuIYVZ,
  :root:not(.theme-dark).theme-rpl .bX6SqXfzfxpv4GQbuIYVZ,
  :root:not(.theme-dark) .theme-beta .bX6SqXfzfxpv4GQbuIYVZ,
  :root:not(.theme-dark).theme-beta .bX6SqXfzfxpv4GQbuIYVZ,
  .theme-light .bX6SqXfzfxpv4GQbuIYVZ {
    color: #d20f39 !important;
  }
  :root:not(.theme-dark) .theme-rpl div.HQ2VJViRjokXpRbJzPvvc,
  :root:not(.theme-dark).theme-rpl div.HQ2VJViRjokXpRbJzPvvc,
  :root:not(.theme-dark) .theme-beta div.HQ2VJViRjokXpRbJzPvvc,
  :root:not(.theme-dark).theme-beta div.HQ2VJViRjokXpRbJzPvvc,
  .theme-light div.HQ2VJViRjokXpRbJzPvvc {
    background: #e6e9ef !important;
    color: #4c4f69 !important;
  }
  :root:not(.theme-dark) .theme-rpl div.HQ2VJViRjokXpRbJzPvvc::after,
  :root:not(.theme-dark).theme-rpl div.HQ2VJViRjokXpRbJzPvvc::after,
  :root:not(.theme-dark) .theme-beta div.HQ2VJViRjokXpRbJzPvvc::after,
  :root:not(.theme-dark).theme-beta div.HQ2VJViRjokXpRbJzPvvc::after,
  .theme-light div.HQ2VJViRjokXpRbJzPvvc::after {
    border-top-color: #e6e9ef !important;
  }
  :root:not(.theme-dark) .theme-rpl .snoo-cls-1,
  :root:not(.theme-dark).theme-rpl .snoo-cls-1,
  :root:not(.theme-dark) .theme-beta .snoo-cls-1,
  :root:not(.theme-dark).theme-beta .snoo-cls-1,
  .theme-light .snoo-cls-1,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-2,
  :root:not(.theme-dark).theme-rpl .snoo-cls-2,
  :root:not(.theme-dark) .theme-beta .snoo-cls-2,
  :root:not(.theme-dark).theme-beta .snoo-cls-2,
  .theme-light .snoo-cls-2,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-3,
  :root:not(.theme-dark).theme-rpl .snoo-cls-3,
  :root:not(.theme-dark) .theme-beta .snoo-cls-3,
  :root:not(.theme-dark).theme-beta .snoo-cls-3,
  .theme-light .snoo-cls-3,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-6,
  :root:not(.theme-dark).theme-rpl .snoo-cls-6,
  :root:not(.theme-dark) .theme-beta .snoo-cls-6,
  :root:not(.theme-dark).theme-beta .snoo-cls-6,
  .theme-light .snoo-cls-6,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-8,
  :root:not(.theme-dark).theme-rpl .snoo-cls-8,
  :root:not(.theme-dark) .theme-beta .snoo-cls-8,
  :root:not(.theme-dark).theme-beta .snoo-cls-8,
  .theme-light .snoo-cls-8,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-9,
  :root:not(.theme-dark).theme-rpl .snoo-cls-9,
  :root:not(.theme-dark) .theme-beta .snoo-cls-9,
  :root:not(.theme-dark).theme-beta .snoo-cls-9,
  .theme-light .snoo-cls-9 {
    fill: #eff1f5;
  }
  :root:not(.theme-dark) .theme-rpl .snoo-cls-4,
  :root:not(.theme-dark).theme-rpl .snoo-cls-4,
  :root:not(.theme-dark) .theme-beta .snoo-cls-4,
  :root:not(.theme-dark).theme-beta .snoo-cls-4,
  .theme-light .snoo-cls-4,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-5,
  :root:not(.theme-dark).theme-rpl .snoo-cls-5,
  :root:not(.theme-dark) .theme-beta .snoo-cls-5,
  :root:not(.theme-dark).theme-beta .snoo-cls-5,
  .theme-light .snoo-cls-5,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-7,
  :root:not(.theme-dark).theme-rpl .snoo-cls-7,
  :root:not(.theme-dark) .theme-beta .snoo-cls-7,
  :root:not(.theme-dark).theme-beta .snoo-cls-7,
  .theme-light .snoo-cls-7,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-10,
  :root:not(.theme-dark).theme-rpl .snoo-cls-10,
  :root:not(.theme-dark) .theme-beta .snoo-cls-10,
  :root:not(.theme-dark).theme-beta .snoo-cls-10,
  .theme-light .snoo-cls-10,
  :root:not(.theme-dark) .theme-rpl .snoo-cls-11,
  :root:not(.theme-dark).theme-rpl .snoo-cls-11,
  :root:not(.theme-dark) .theme-beta .snoo-cls-11,
  :root:not(.theme-dark).theme-beta .snoo-cls-11,
  .theme-light .snoo-cls-11 {
    fill: #1e66f5;
  }
  :root:not(.theme-light) .theme-rpl,
  :root:not(.theme-light).theme-rpl,
  :root:not(.theme-light) .theme-beta,
  :root:not(.theme-light).theme-beta,
  .theme-dark {
    color-scheme: dark;
    /* BETA */
    --color-pizzaRed: #f38ba8 !important;
    --color-global-brand-orangered: #fab387 !important;
    --color-global-focus: #45475a !important;
    --color-interactive-content-disabled: #a6adc8 !important;
    --color-interactive-background-disabled: rgba(88, 91, 112, 0.7) !important;
    --color-interactive-pressed: #585b70 !important;
    --color-neutral-content: #cdd6f4 !important;
    --color-neutral-content-disabled: #a6adc8 !important;
    --color-neutral-content-weak: #a6adc8 !important;
    --color-neutral-content-strong: #cdd6f4 !important;
    --color-global-white: #11111b !important;
    --color-neutral-background: #1e1e2e !important;
    --color-neutral-background-selected: #313244 !important;
    --color-neutral-background-weak: #181825 !important;
    --color-neutral-background-medium: #1e1e2e !important;
    --color-neutral-background-strong: #11111b !important;
    --color-neutral-background-hover: #313244 !important;
    --color-neutral-border: #313244 !important;
    --color-neutral-border-medium: #313244 !important;
    --color-neutral-border-weak: #313244 !important;
    --color-neutral-border-strong: #585b70 !important;
    --color-primary: #89b4fa !important;
    --color-primary-hover: #bad3fc !important;
    --color-primary-visited: #b4befe !important;
    --color-primary-background: #89b4fa !important;
    --color-primary-background-hover: #71a4f9 !important;
    --color-primary-background-selected: #71a4f9 !important;
    --color-primary-onBackground: #1e1e2e !important;
    --color-primary-onBackground-selected: #11111b !important;
    --color-secondary: #a6adc8 !important;
    --color-secondary-hover: #bac2de !important;
    --color-secondary-weak: #a6adc8 !important;
    --color-secondary-onBackground: #cdd6f4 !important;
    --color-secondary-background: #181825 !important;
    --color-secondary-background-hover: #45475a !important;
    --color-secondary-background-selected: #45475a !important;
    --color-secondary-plain: #a6adc8 !important;
    --color-secondary-plain-hover: #bac2de !important;
    --color-danger-background: #f38ba8 !important;
    --color-danger-background-disabled: rgba(243, 139, 168, 0.2) !important;
    --color-danger-background-hover: rgba(243, 139, 168, 0.98) !important;
    --color-danger-onBackground: #cdd6f4 !important;
    --color-danger-content: #f38ba8 !important;
    --color-danger-content-default: #11111b;
    --color-danger-content-hover: #f282a1 !important;
    --color-success-content: #a6e3a1 !important;
    --color-success-hover: #9fe199 !important;
    --color-success-onBackground: #11111b;
    --color-success-background: #a6e3a1 !important;
    --color-success-background-hover: #9fe199 !important;
    --color-warning-content: #f9e2af !important;
    --color-warning-content-hover: #f8dfa6 !important;
    --color-warning-onBackground: #1e1e2e !important;
    --color-warning-background: #f9e2af !important;
    --color-warning-background-hover: #f8dfa6 !important;
    --color-upvote-content: #89b4fa !important;
    --color-upvote-disabled: #a6adc8 !important;
    --color-upvote-onBackground: #cdd6f4 !important;
    --color-upvote-background: #1e1e2e !important;
    --color-upvote-background-hover: #71a4f9 !important;
    --color-upvote-background-disabled: #1e1e2e !important;
    --color-downvote-content: #cdd6f4 !important;
    --color-downvote-content-weak: #cdd6f4 !important;
    --color-downvote-disabled: #a6adc8 !important;
    --color-downvote-onBackground: #cdd6f4 !important;
    --color-downvote-background: #1e1e2e !important;
    --color-downvote-background-hover: #71a4f9 !important;
    --color-downvote-background-disabled: #181825 !important;
    --color-tone-1: #cdd6f4 !important;
    --color-tone-2: #a6adc8 !important;
    --color-tone-3: #9399b2 !important;
    --color-tone-4: #313244 !important;
    --color-tone-5: #45475a !important;
    --color-tone-6: #585b70 !important;
    --color-tone-7: #1e1e2e !important;
    --color-avatar-gradient: #89b4fa !important;
    --color-transparent-background-hover: rgba(49, 50, 68, 0.3) !important;
    --color-opacity-50: rgba(30, 30, 46, 0.5) !important;
    --color-online: #89b4fa !important;
    --color-favorite: #89b4fa !important;
    --color-brand-background: #89b4fa !important;
    --color-brand-background-hover: #71a4f9 !important;
    --color-global-orangered: #89b4fa !important;
    --color-action-upvote: #89b4fa !important;
    --color-action-downvote: #89b4fa;
    --shreddit-color-wordmark: #89b4fa;
    /* normal stuff */
    /* reddit chat variables */
    /* site background */
    /* PROFILE MENU */
    /* karma count */
    /* profile button karma icon */
    /* menu headers */
    /* switches, should also apply sitewide */
    /* online status */
    /* PROFILE PAGE */
    /* create avatar button */
    /* cake day and followers icon */
    /* add social links button readability tweak */
    /* profile moderation and user settings page */
    /* Beta Badge */
    /* Delete Account */
    /* Delete Account Icon */
    /* blocked, muted input */
    /* fixes profile posts not being themed */
    /* NFT AVATAR VIEWER */
    /* modal background */
    /* Tag Color */
    /* mint status */
    /* carousel background */
    /* nft card back */
    /* external links */
    /* shop for avatars button */
    /* AVATAR CREATOR */
    /* SITE HEADER */
    /* reddit logo */
    /* Post title from notification */
    /* notification icon */
    /* advertise button */
    /* reddit now notification */
    /* search scope pill text */
    /* search popup title */
    /* safe search toggle */
    /* NAVIGATION SIDEBAR */
    /* close icon */
    /* item color */
    /* navigation sidebar header color */
    /* favorites */
    /* RIGHT FRONTPAGE SIDEBAR */
    /* reddit premium icon */
    /* reddit premium try now button */
    /* recent posts thumbnail borders */
    /* POSTS */
    /* post background for card style */
    /* post options (save, comment, etc.) */
    /* post title color */
    /*
         *  post op color and
         *  post date color
         */
    /* nsfw flair */
    /* pinned post icon */
    /* give award icon */
    /* locked post icon */
    /* post button divider */
    /* UPVOTES/DOWNVOTES */
    /* upvote/downvote background */
    /* inactive vote text color */
    /* active upvote color */
    /* active upvote text color */
    /* hover background for both upvotes and downvotes */
    /* active downvote color */
    /* active downvote text color */
    /* REPORT MODAL */
    /* SUBREDDIT PAGES */
    /* radio buttons (flair selector, etc.) */
    /* checkboxes */
    /* SUBREDDIT RIGHT SIDEBAR (some styles carry over from the homepage right sidebar section) */
    /* header background */
    /* subreddit image background */
    /* border between uela */
    /* follower color */
    /* default subreddit icon */
    /* online users */
    /* POST VIEWER */
    /* spoiler tags */
    /* mod comment tag */
    /* op comment tag */
    /* post overlay if you have "open in new tab" disabled */
    /* fixes comment section background not working when "open in new tab is disabled" */
    /* shade applied to background when clicking on a post with "open in new tab" disabled */
    /* gold award gradient */
    /* image gallery next/previous buttons */
    /* image gallery image count */
    /* comment search bar */
    /* tab bar below banner */
    /* MULTIREDDITS/CUSTOM FEEDS */
    /* delete custom feed button */
    /* TOOLTIPS */
    /* Recap Reddit Logo */
  }
  :root:not(.theme-light) .theme-rpl ::selection,
  :root:not(.theme-light).theme-rpl ::selection,
  :root:not(.theme-light) .theme-beta ::selection,
  :root:not(.theme-light).theme-beta ::selection,
  .theme-dark ::selection {
    background-color: rgba(137, 180, 250, 0.3);
  }
  :root:not(.theme-light) .theme-rpl input::placeholder,
  :root:not(.theme-light).theme-rpl input::placeholder,
  :root:not(.theme-light) .theme-beta input::placeholder,
  :root:not(.theme-light).theme-beta input::placeholder,
  .theme-dark input::placeholder,
  :root:not(.theme-light) .theme-rpl textarea::placeholder,
  :root:not(.theme-light).theme-rpl textarea::placeholder,
  :root:not(.theme-light) .theme-beta textarea::placeholder,
  :root:not(.theme-light).theme-beta textarea::placeholder,
  .theme-dark textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl #reddit-logo circle[fill="#FF4500"],
  :root:not(.theme-light).theme-rpl #reddit-logo circle[fill="#FF4500"],
  :root:not(.theme-light) .theme-beta #reddit-logo circle[fill="#FF4500"],
  :root:not(.theme-light).theme-beta #reddit-logo circle[fill="#FF4500"],
  .theme-dark #reddit-logo circle[fill="#FF4500"] {
    fill: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl #reddit-logo path[fill="#FFF"],
  :root:not(.theme-light).theme-rpl #reddit-logo path[fill="#FFF"],
  :root:not(.theme-light) .theme-beta #reddit-logo path[fill="#FFF"],
  :root:not(.theme-light).theme-beta #reddit-logo path[fill="#FFF"],
  .theme-dark #reddit-logo path[fill="#FFF"] {
    fill: #11111b !important;
  }
  :root:not(.theme-light) .theme-rpl,
  :root:not(.theme-light).theme-rpl,
  :root:not(.theme-light) .theme-beta,
  :root:not(.theme-light).theme-beta,
  .theme-dark,
  :root:not(.theme-light) .theme-rpl div[class^="subredditvars"],
  :root:not(.theme-light).theme-rpl div[class^="subredditvars"],
  :root:not(.theme-light) .theme-beta div[class^="subredditvars"],
  :root:not(.theme-light).theme-beta div[class^="subredditvars"],
  .theme-dark div[class^="subredditvars"] {
    --color-online: #a6e3a1 !important;
    --newCommunityTheme-actionIcon: #a6adc8 !important;
    --newCommunityTheme-actionIconAlpha20: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-actionIconAlpha50: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-actionIconShaded80: #a6adc8 !important;
    --newCommunityTheme-actionIconTinted80: #bac2de !important;
    --newCommunityTheme-active: #89b4fa !important;
    --newCommunityTheme-activeAlpha10: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-activeAlpha20: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-activeAlpha50: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-activeLight60: #89b4fa !important;
    --newCommunityTheme-activeShaded80: #89b4fa !important;
    --newCommunityTheme-activeShaded90: #89b4fa !important;
    --newCommunityTheme-activeTinted05: #cdd6f4 !important;
    --newCommunityTheme-banner-backgroundColor: #89b4fa !important;
    --newCommunityTheme-banner-iconColor: #89b4fa !important;
    --newCommunityTheme-body: #181825 !important;
    --newCommunityTheme-bodyAlpha50: #313244 !important;
    --newCommunityTheme-bodyAlpha70: #45475a !important;
    --newCommunityTheme-bodyAlpha80: #585b70 !important;
    --newCommunityTheme-bodyFade: #a6adc8 !important;
    --newCommunityTheme-bodyShaded80: #181825 !important;
    --newCommunityTheme-bodyText: #cdd6f4 !important;
    --newCommunityTheme-bodyTextAlpha03: #181825 !important;
    --newCommunityTheme-bodyTextAlpha20: #45475a !important;
    --newCommunityTheme-bodyTextShaded20: #313244 !important;
    --newCommunityTheme-bodyTextTinted20: #a6adc8 !important;
    --newCommunityTheme-bodyTinted50: #7f849c !important;
    --newCommunityTheme-bodyTinted80: #6c7086 !important;
    --newCommunityTheme-button: #cdd6f4 !important;
    --newCommunityTheme-buttonAlpha05: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-buttonAlpha10: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-buttonAlpha20: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-buttonAlpha40: #a6adc8 !important;
    --newCommunityTheme-buttonAlpha50: #bac2de !important;
    --newCommunityTheme-buttonAlpha80: #bac2de !important;
    --newCommunityTheme-buttonShaded80: #6c7086 !important;
    --newCommunityTheme-buttonTinted20: #89b4fa !important;
    --newCommunityTheme-buttonTinted50: #89b4fa !important;
    --newCommunityTheme-buttonTinted80: #89b4fa !important;
    --newCommunityTheme-canvas: #11111b !important;
    --newCommunityTheme-checkbox: #cdd6f4 !important;
    --newCommunityTheme-errorText: #f38ba8 !important;
    --newCommunityTheme-field: #313244 !important;
    --newCommunityTheme-fieldFade: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-flair: #89b4fa !important;
    --newCommunityTheme-highlight: #1e1e2e !important;
    --newCommunityTheme-inactive: #a6adc8 !important;
    --newCommunityTheme-lightText: #cdd6f4 !important;
    --newCommunityTheme-lightTextAlpha75: #bac2de !important;
    --newCommunityTheme-line: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-lineShaded80: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-lineShaded90: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-lineShadedNinety: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-linkText: #89b4fa !important;
    --newCommunityTheme-linkTextAlpha80: #89b4fa !important;
    --newCommunityTheme-linkTextShaded80: #89b4fa !important;
    --newCommunityTheme-linkTextTinted80: #89b4fa !important;
    --newCommunityTheme-linkTextWithBody: #89b4fa !important;
    --newCommunityTheme-menu: #181825 !important;
    --newCommunityTheme-menuActiveText: #cdd6f4 !important;
    --newCommunityTheme-menuButtonBackground-active: #1e1e2e !important;
    --newCommunityTheme-menuButtonBackground-focus: #1e1e2e !important;
    --newCommunityTheme-menuButtonBackground-hover: #1e1e2e !important;
    --newCommunityTheme-menuInactiveText: #cdd6f4 !important;
    --newCommunityTheme-metaText: #a6adc8 !important;
    --newCommunityTheme-metaTextAlpha50: #a6adc8 !important;
    --newCommunityTheme-metaTextShaded80: #a6adc8 !important;
    --newCommunityTheme-monospaceColor: #89b4fa !important;
    --newCommunityTheme-navBar-activeLink: #cdd6f4 !important;
    --newCommunityTheme-navBar-activeSubmenuCaret: #cdd6f4 !important;
    --newCommunityTheme-navBar-activeSubmenuLink: #cdd6f4 !important;
    --newCommunityTheme-navBar-backgroundColor: #181825 !important;
    --newCommunityTheme-navBar-hoverLink: #cdd6f4 !important;
    --newCommunityTheme-navBar-inactiveLink: #cdd6f4 !important;
    --newCommunityTheme-navBar-inactiveSubmenuCaret: #cdd6f4 !important;
    --newCommunityTheme-navBar-inactiveSubmenuLink: #cdd6f4 !important;
    --newCommunityTheme-navBar-submenuBackgroundColor: #181825 !important;
    --newCommunityTheme-navIcon: #cdd6f4 !important;
    /* upvote/downvote focus */
    --newCommunityTheme-navIconFaded10: rgba(17, 17, 27, 0.8) !important;
    --newCommunityTheme-nsfw: #f38ba8 !important;
    --newCommunityTheme-nsfwBlocking-bgcolor: #11111b !important;
    --newCommunityTheme-nsfwBlocking-color: #cdd6f4 !important;
    --newCommunityTheme-nsfwBlocking-contentTitleBgColor: #1e1e2e !important;
    --newCommunityTheme-nsfwBlocking-mainCtaBgColor: #181825 !important;
    --newCommunityTheme-pageHeader: #585b70 !important;
    --newCommunityTheme-placeholder: #313244 !important;
    --newCommunityTheme-post: #181825 !important;
    --newCommunityTheme-postError: #f38ba8 !important;
    --newCommunityTheme-postFlairText: #11111b !important;
    --newCommunityTheme-postIcon: #89b4fa !important;
    --newCommunityTheme-postLine: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-postLineShaded80: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-postLineShaded90: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-postTinted20: #1e1e2e !important;
    --newCommunityTheme-postTransparent20: #1e1e2e !important;
    --newCommunityTheme-primaryButtonShadedEighty: #7f849c !important;
    --newCommunityTheme-primaryButtonTintedEighty: #7f849c !important;
    --newCommunityTheme-primaryButtonTintedFifty: #6c7086 !important;
    --newCommunityTheme-primaryButtonTintedSixty: #6c7086 !important;
    --newCommunityTheme-quarantine: #f9e2af !important;
    --newCommunityTheme-report: #45475a !important;
    --newCommunityTheme-search-syntaxHighlightBackgroundColor: #89b4fa !important;
    --newCommunityTheme-search-syntaxHighlightColor: #1e1e2e !important;
    --newCommunityTheme-titleText: #cdd6f4 !important;
    --newCommunityTheme-upsell-appleIcon: #bac2de !important;
    --newCommunityTheme-upsell-ssoButtonBorderColor: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-upsell-ssoButtonTextColor: #cdd6f4 !important;
    --newCommunityTheme-voteText-base: #a6adc8 !important;
    --newCommunityTheme-voteText-downvote: #89b4fa !important;
    --newCommunityTheme-voteText-downvoteShaded80: #89b4fa !important;
    --newCommunityTheme-voteText-downvoteTinted80: #89b4fa !important;
    --newCommunityTheme-voteText-upvote: #f38ba8 !important;
    --newCommunityTheme-voteText-upvoteShaded80: #f38ba8 !important;
    --newCommunityTheme-voteText-upvoteTinted80: #f38ba8 !important;
    --newCommunityTheme-widgetColors-appleIcon: #6c7086 !important;
    --newCommunityTheme-widgetColors-lineColor: rgba(69, 71, 90, 0.7) !important;
    /* sidebar widgets */
    --newCommunityTheme-widgetColors-sidebarWidgetBackgroundColor: #181825 !important;
    --newCommunityTheme-widgetColors-sidebarWidgetBorderColor: rgba(69, 71, 90, 0.7) !important;
    --newCommunityTheme-widgetColors-sidebarWidgetHeaderColor: #11111b !important;
    --newCommunityTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: #181825 !important;
    --newCommunityTheme-widgetColors-sidebarWidgetTextColor: #cdd6f4 !important;
    --newCommunityTheme-widgetColors-sidebarWidgetTextColorShaded80: #bac2de !important;
    --newCommunityTheme-widgetColors-sidebarWidgetTitleColor: #cdd6f4 !important;
    --newRedditTheme-actionIcon: #a6adc8 !important;
    --newRedditTheme-actionIconAlpha20: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-actionIconAlpha50: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-actionIconShaded80: #a6adc8 !important;
    --newRedditTheme-actionIconTinted80: #bac2de !important;
    --newRedditTheme-active: #89b4fa !important;
    --newRedditTheme-activeAlpha10: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-activeAlpha20: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-activeAlpha50: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-activeLight60: #89b4fa !important;
    --newRedditTheme-activeShaded80: #89b4fa !important;
    --newRedditTheme-activeShaded90: #89b4fa !important;
    --newRedditTheme-activeTinted05: #cdd6f4 !important;
    --newRedditTheme-banner-backgroundColor: #89b4fa !important;
    --newRedditTheme-banner-iconColor: #89b4fa !important;
    --newRedditTheme-body: #181825 !important;
    --newRedditTheme-bodyAlpha50: #313244 !important;
    --newRedditTheme-bodyAlpha70: #45475a !important;
    --newRedditTheme-bodyAlpha80: #585b70 !important;
    --newRedditTheme-bodyFade: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-bodyShaded80: #181825 !important;
    --newRedditTheme-bodyText: #cdd6f4 !important;
    --newRedditTheme-bodyTextAlpha03: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-bodyTextAlpha20: #45475a !important;
    --newRedditTheme-bodyTextShaded20: #313244 !important;
    --newRedditTheme-bodyTextTinted20: #bac2de !important;
    --newRedditTheme-bodyTinted50: #6c7086 !important;
    --newRedditTheme-bodyTinted80: #7f849c !important;
    --newRedditTheme-button: #cdd6f4 !important;
    --newRedditTheme-buttonAlpha05: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-buttonAlpha10: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-buttonAlpha20: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-buttonAlpha40: #a6adc8 !important;
    --newRedditTheme-buttonAlpha50: #bac2de !important;
    --newRedditTheme-buttonAlpha80: #bac2de !important;
    --newRedditTheme-buttonShaded80: #6c7086 !important;
    --newRedditTheme-buttonTinted20: #89b4fa !important;
    --newRedditTheme-buttonTinted50: #89b4fa !important;
    --newRedditTheme-buttonTinted80: #89b4fa !important;
    --newRedditTheme-canvas: #11111b !important;
    --newRedditTheme-checkbox: #cdd6f4 !important;
    --newRedditTheme-errorText: #f38ba8 !important;
    --newRedditTheme-field: #1e1e2e !important;
    --newRedditTheme-fieldFade: #181825 !important;
    --newRedditTheme-flair: #89b4fa !important;
    /* controls menu, link, and other similar highlights. very important */
    --newRedditTheme-highlight: #1e1e2e !important;
    --newRedditTheme-inactive: #313244 !important;
    --newRedditTheme-lightText: #cdd6f4 !important;
    --newRedditTheme-lightTextAlpha75: #bac2de !important;
    --newRedditTheme-line: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-lineShaded80: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-lineShaded90: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-lineShadedNinety: rgba(69, 71, 90, 0.7) !important;
    /* links */
    --newRedditTheme-linkText: #89b4fa !important;
    --newRedditTheme-linkTextAlpha80: #89b4fa !important;
    --newRedditTheme-linkTextShaded80: #89b4fa !important;
    --newRedditTheme-linkTextTinted80: #89b4fa !important;
    --newRedditTheme-linkTextWithBody: #89b4fa !important;
    /* menus */
    --newRedditTheme-menu: #181825 !important;
    --newRedditTheme-menuActiveText: #cdd6f4 !important;
    --newRedditTheme-menuButtonBackground-active: #89b4fa !important;
    --newRedditTheme-menuButtonBackground-focus: #1e1e2e !important;
    --newRedditTheme-menuButtonBackground-hover: #1e1e2e !important;
    --newRedditTheme-menuInactiveText: #cdd6f4 !important;
    --newRedditTheme-metaText: #a6adc8 !important;
    --newRedditTheme-metaTextAlpha50: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-metaTextShaded80: #bac2de !important;
    --newRedditTheme-monospaceColor: #89b4fa !important;
    --newRedditTheme-navBar-activeLink: #cdd6f4 !important;
    --newRedditTheme-navBar-activeSubmenuCaret: #cdd6f4 !important;
    --newRedditTheme-navBar-activeSubmenuLink: #cdd6f4 !important;
    --newRedditTheme-navBar-backgroundColor: #181825 !important;
    --newRedditTheme-navBar-hoverLink: #cdd6f4 !important;
    --newRedditTheme-navBar-inactiveLink: #cdd6f4 !important;
    --newRedditTheme-navBar-inactiveSubmenuCaret: #cdd6f4 !important;
    --newRedditTheme-navBar-inactiveSubmenuLink: #cdd6f4 !important;
    --newRedditTheme-navBar-submenuBackgroundColor: #181825 !important;
    --newRedditTheme-navIcon: #cdd6f4 !important;
    --newRedditTheme-navIconFaded10: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-nsfw: #f38ba8 !important;
    --newRedditTheme-nsfwBlocking-bgcolor: #11111b !important;
    --newRedditTheme-nsfwBlocking-color: #cdd6f4 !important;
    --newRedditTheme-nsfwBlocking-contentTitleBgColor: #1e1e2e !important;
    --newRedditTheme-nsfwBlocking-mainCtaBgColor: #181825 !important;
    --newRedditTheme-pageHeader: #313244 !important;
    --newRedditTheme-placeholder: #45475a !important;
    --newRedditTheme-post: #181825 !important;
    --newRedditTheme-postError: #f38ba8 !important;
    --newRedditTheme-postFlairText: #cdd6f4 !important;
    --newRedditTheme-postIcon: #89b4fa !important;
    --newRedditTheme-postLine: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-postLineShaded80: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-postLineShaded90: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-postTinted20: #1e1e2e !important;
    --newRedditTheme-postTransparent20: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-primaryButtonShadedEighty: #45475a !important;
    --newRedditTheme-primaryButtonTintedEighty: #585b70 !important;
    --newRedditTheme-primaryButtonTintedFifty: #45475a !important;
    --newRedditTheme-primaryButtonTintedSixty: #45475a !important;
    --newRedditTheme-quarantine: #f9e2af !important;
    --newRedditTheme-report: #1e1e2e !important;
    --newRedditTheme-search-syntaxHighlightBackgroundColor: #89b4fa !important;
    --newRedditTheme-search-syntaxHighlightColor: #1e1e2e !important;
    --newRedditTheme-titleText: #cdd6f4 !important;
    --newRedditTheme-upsell-appleIcon: #6c7086 !important;
    --newRedditTheme-upsell-ssoButtonBorderColor: #cdd6f4 !important;
    --newRedditTheme-upsell-ssoButtonTextColor: #cdd6f4 !important;
    --newRedditTheme-voteText-base: #bac2de !important;
    --newRedditTheme-voteText-downvote: #89b4fa !important;
    --newRedditTheme-voteText-downvoteShaded80: #89b4fa !important;
    --newRedditTheme-voteText-downvoteTinted80: #89b4fa !important;
    --newRedditTheme-voteText-upvote: #f38ba8 !important;
    --newRedditTheme-voteText-upvoteShaded80: #f38ba8 !important;
    --newRedditTheme-voteText-upvoteTinted80: #f38ba8 !important;
    --newRedditTheme-widgetColors-appleIcon: #6c7086 !important;
    --newRedditTheme-widgetColors-lineColor: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-widgetColors-sidebarWidgetBackgroundColor: #181825 !important;
    --newRedditTheme-widgetColors-sidebarWidgetBorderColor: rgba(69, 71, 90, 0.7) !important;
    --newRedditTheme-widgetColors-sidebarWidgetHeaderColor: #11111b !important;
    --newRedditTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: rgba(17, 17, 27, 0.8) !important;
    --newRedditTheme-widgetColors-sidebarWidgetTextColor: #cdd6f4 !important;
    --newRedditTheme-widgetColors-sidebarWidgetTextColorShaded80: #bac2de !important;
    --newRedditTheme-widgetColors-sidebarWidgetTitleColor: #cdd6f4 !important;
    --tw-bg-opacity: #11111b !important;
    --vds-video-bg-color: #11111b !important;
  }
  :root:not(.theme-light) .theme-rpl :root,
  :root:not(.theme-light).theme-rpl :root,
  :root:not(.theme-light) .theme-beta :root,
  :root:not(.theme-light).theme-beta :root,
  .theme-dark :root {
    --activity-button-chatFilterColor: #313244 !important;
    --activity-button-newChatFilter-activeBg: #89b4fa !important;
    --activity-button-newChatFilter-activeText: #1e1e2e !important;
    --activity-button-newChatFilter-defaultBorder: #45475a !important;
    --activity-button-newChatFilter-defaultText: #cdd6f4 !important;
    --activity-button-primary: #89b4fa !important;
    --activity-button-secondary: #cdd6f4 !important;
    --activity-buttonPrimary-color: #89b4fa !important;
    --activity-buttonSecondary-active: #89b4fa !important;
    --activity-checkbox-checked: #89b4fa !important;
    --activity-checkbox-checkmark: #cdd6f4 !important;
    --activity-checkbox-unchecked: #1e1e2e !important;
    --activity-checkbox-uncheckedBorder: #45475a !important;
    --activity-icon-active: #89b4fa !important;
    --activity-icon-contrast: #45475a !important;
    --activity-icon-default: #a6adc8 !important;
    --activity-icon-disable: #585b70 !important;
    --activity-icon-hover: #585b70 !important;
    --activity-icon-nsfw-bg: #1e1e2e !important;
    --activity-icon-nsfw-text: #cdd6f4 !important;
    --activity-icon-subIcon-backgroundColor: #cdd6f4 !important;
    --activity-icon-toaster: #11111b !important;
    --activity-input-background: rgba(17, 17, 27, 0.8) !important;
    --activity-input-border: #45475a !important;
    --activity-input-channelRename: #a6adc8 !important;
    --activity-input-color: #bac2de !important;
    --activity-input-error: #f38ba8 !important;
    --activity-input-focusBg: #a6e3a1 !important;
    --activity-input-focusColor: #cdd6f4 !important;
    --activity-input-ownerBg: #313244 !important;
    --activity-link-hoverText: #f38ba8 !important;
    --activity-link-staticText: #89b4fa !important;
    --activity-link-staticUnderline: #89b4fa !important;
    --activity-minimizedPortal-backgroundColor-unreadFinal: #181825 !important;
    --activity-minimizedPortal-backgroundColor-unreadInitial: #89b4fa !important;
    --activity-minimizedPortal-color-unreadFinal: #cdd6f4 !important;
    --activity-minimizedPortal-color-unreadInitial: #cdd6f4 !important;
    --activity-send-disable: #313244 !important;
    --activity-send-hover: #89b4fa !important;
    --activity-text-active: #89b4fa !important;
    --activity-text-fade: #a6adc8 !important;
    --activity-text-highlight: #cdd6f4 !important;
    --activity-text-light: #a6adc8 !important;
    --activity-text-meta: #a6adc8 !important;
    --activity-text-regular: #cdd6f4 !important;
    --activity-text-success: #a6e3a1 !important;
    --activity-text-tutorial: #f5e0dc !important;
    --activity-text-warning: #f38ba8 !important;
    --addReaction-backgroundColor: #313244 !important;
    --addReaction-iconFill: #45475a !important;
    --boxShadow: rgba(17, 17, 27, 0.8) !important;
    --bubble-border: rgba(69, 71, 90, 0.7) !important;
    --bubble-channelsFilter-background: #11111b !important;
    --bubble-channelsFilter-selected: #6c7086 !important;
    --bubble-color: #cdd6f4 !important;
    --bubble-link-color: #89b4fa !important;
    --bubbleActions-hover: #313244 !important;
    --editName: #45475a !important;
    --layout-body: #181825 !important;
    --layout-colsBorder: rgba(69, 71, 90, 0.7) !important;
    --layout-controlsBorder: rgba(69, 71, 90, 0.7) !important;
    --layout-dropdown-border: rgba(69, 71, 90, 0.7) !important;
    --layout-header-counterBg: #f38ba8 !important;
    --layout-header-counterText: #cdd6f4 !important;
    --layout-overlayBackground: rgba(17, 17, 27, 0.8) !important;
    --layout-overlayReportFlow: rgba(17, 17, 27, 0.8) !important;
    --layout-scrollbar: #cdd6f4 !important;
    --layout-scrollbarHover: #89b4fa !important;
    --layout-timeStamp-tooltip-background: #313244 !important;
    --message-list-item-button: #45475a !important;
    --message-list-item-onlineIndicator: #a6e3a1 !important;
    --message-list-item-ownerBg: #45475a !important;
    --message-list-item-richItem: #6c7086 !important;
    --message-list-item-richItemBorder: rgba(69, 71, 90, 0.7) !important;
    --message-list-item-white: #cdd6f4 !important;
    --modal-buttonsBackground: #cdd6f4 !important;
    --modal-primaryButtonWarning: #f38ba8 !important;
    --modal-secondaryButton: #cdd6f4 !important;
    --newChat-inviteLink-borderColor: rgba(69, 71, 90, 0.7) !important;
    --overlay-backgroundColor: #181825 !important;
    --overlay-headerColor: #cdd6f4 !important;
    --overlay-inputBackground: #11111b !important;
    --overlay-searchBarBackground: #181825 !important;
    --prompt-tooltip-background: #89b4fa !important;
    --searchBar-backgroundColor: #181825 !important;
    --settings-color: #a6adc8 !important;
    --settings-dropdownItemHoverBackground: #11111b !important;
    --settings-panelBackground: #11111b !important;
    --settings-panelItemHoverBackground: #313244 !important;
    --settings-panelItemSelectedBackground: #45475a !important;
    --sidebar-background: rgba(69, 71, 90, 0.7) !important;
    --sidebar-basic-background-active: #89b4fa !important;
    --sidebar-basic-background-hover: #181825 !important;
    --sidebar-footer-background: #11111b !important;
    --sidebar-item-active: #45475a !important;
    --sidebar-item-hover: #313244 !important;
    --sidebar-item-selected: #585b70 !important;
    --sidebar-item-text-active: #cdd6f4 !important;
    --sidebar-subreddit-background-active: #89b4fa !important;
    --sidebar-subreddit-background-hover: #45475a !important;
    --sidebar-text-divider: #45475a !important;
    --skeleton-field: #585b70 !important;
    --skeleton-inactive: #313244 !important;
    --subreddit-iconBg: #89b4fa !important;
    --toast-error: #f38ba8 !important;
    --toast-pending: #11111b !important;
    --toast-success: #a6e3a1 !important;
    --uploads-progress-background: #a6adc8 !important;
    --uploads-progress-bar: #89b4fa !important;
    --videoModal-button-background: #cdd6f4 !important;
    --videoModal-button-color: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl div.ListingLayout-backgroundContainer::before,
  :root:not(.theme-light).theme-rpl div.ListingLayout-backgroundContainer::before,
  :root:not(.theme-light) .theme-beta div.ListingLayout-backgroundContainer::before,
  :root:not(.theme-light).theme-beta div.ListingLayout-backgroundContainer::before,
  .theme-dark div.ListingLayout-backgroundContainer::before {
    background: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  :root:not(.theme-light).theme-rpl span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  :root:not(.theme-light) .theme-beta span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  :root:not(.theme-light).theme-beta span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span,
  .theme-dark span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-karma_fill,
  :root:not(.theme-light).theme-rpl i.icon-karma_fill,
  :root:not(.theme-light) .theme-beta i.icon-karma_fill,
  :root:not(.theme-light).theme-beta i.icon-karma_fill,
  .theme-dark i.icon-karma_fill {
    color: #f38ba8 !important;
  }
  :root:not(.theme-light) .theme-rpl div[role="menu"] > div > div > span > span,
  :root:not(.theme-light).theme-rpl div[role="menu"] > div > div > span > span,
  :root:not(.theme-light) .theme-beta div[role="menu"] > div > div > span > span,
  :root:not(.theme-light).theme-beta div[role="menu"] > div > div > span > span,
  .theme-dark div[role="menu"] > div > div > span > span {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl button[role="switch"][aria-checked="false"],
  :root:not(.theme-light).theme-rpl button[role="switch"][aria-checked="false"],
  :root:not(.theme-light) .theme-beta button[role="switch"][aria-checked="false"],
  :root:not(.theme-light).theme-beta button[role="switch"][aria-checked="false"],
  .theme-dark button[role="switch"][aria-checked="false"] {
    background: #313244 !important;
  }
  :root:not(.theme-light) .theme-rpl button[role="switch"] > div,
  :root:not(.theme-light).theme-rpl button[role="switch"] > div,
  :root:not(.theme-light) .theme-beta button[role="switch"] > div,
  :root:not(.theme-light).theme-beta button[role="switch"] > div,
  .theme-dark button[role="switch"] > div {
    background: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl ._2dn5Ncenn0BSD4tCSmxQhA,
  :root:not(.theme-light).theme-rpl ._2dn5Ncenn0BSD4tCSmxQhA,
  :root:not(.theme-light) .theme-beta ._2dn5Ncenn0BSD4tCSmxQhA,
  :root:not(.theme-light).theme-beta ._2dn5Ncenn0BSD4tCSmxQhA,
  .theme-dark ._2dn5Ncenn0BSD4tCSmxQhA {
    fill: #a6e3a1 !important;
  }
  :root:not(.theme-light) .theme-rpl ._3SlBAJb2MbUHwgBZFH8eL7,
  :root:not(.theme-light).theme-rpl ._3SlBAJb2MbUHwgBZFH8eL7,
  :root:not(.theme-light) .theme-beta ._3SlBAJb2MbUHwgBZFH8eL7,
  :root:not(.theme-light).theme-beta ._3SlBAJb2MbUHwgBZFH8eL7,
  .theme-dark ._3SlBAJb2MbUHwgBZFH8eL7 {
    fill: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl button._3F1tNW0P4Ff182mO_CefIg,
  :root:not(.theme-light).theme-rpl button._3F1tNW0P4Ff182mO_CefIg,
  :root:not(.theme-light) .theme-beta button._3F1tNW0P4Ff182mO_CefIg,
  :root:not(.theme-light).theme-beta button._3F1tNW0P4Ff182mO_CefIg,
  .theme-dark button._3F1tNW0P4Ff182mO_CefIg {
    background: linear-gradient(90deg, #f38ba8, #fab387) !important;
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl button._3F1tNW0P4Ff182mO_CefIg > i,
  :root:not(.theme-light).theme-rpl button._3F1tNW0P4Ff182mO_CefIg > i,
  :root:not(.theme-light) .theme-beta button._3F1tNW0P4Ff182mO_CefIg > i,
  :root:not(.theme-light).theme-beta button._3F1tNW0P4Ff182mO_CefIg > i,
  .theme-dark button._3F1tNW0P4Ff182mO_CefIg > i {
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-cake_fill,
  :root:not(.theme-light).theme-rpl i.icon-cake_fill,
  :root:not(.theme-light) .theme-beta i.icon-cake_fill,
  :root:not(.theme-light).theme-beta i.icon-cake_fill,
  .theme-dark i.icon-cake_fill,
  :root:not(.theme-light) .theme-rpl i.icon-user_fill,
  :root:not(.theme-light).theme-rpl i.icon-user_fill,
  :root:not(.theme-light) .theme-beta i.icon-user_fill,
  :root:not(.theme-light).theme-beta i.icon-user_fill,
  .theme-dark i.icon-user_fill {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light).theme-rpl div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light) .theme-beta div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light).theme-beta div._3hew1NnzwygOKDNQDKp6R4,
  .theme-dark div._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light) .theme-rpl div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-light).theme-rpl div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-light) .theme-beta div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-light).theme-beta div._3hew1NnzwygOKDNQDKp6R4 > i,
  .theme-dark div._3hew1NnzwygOKDNQDKp6R4 > i,
  :root:not(.theme-light) .theme-rpl li._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light).theme-rpl li._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light) .theme-beta li._3hew1NnzwygOKDNQDKp6R4,
  :root:not(.theme-light).theme-beta li._3hew1NnzwygOKDNQDKp6R4,
  .theme-dark li._3hew1NnzwygOKDNQDKp6R4 {
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div._1VP69d9lk-Wk9zokOaylL,
  :root:not(.theme-light).theme-rpl div._1VP69d9lk-Wk9zokOaylL,
  :root:not(.theme-light) .theme-beta div._1VP69d9lk-Wk9zokOaylL,
  :root:not(.theme-light).theme-beta div._1VP69d9lk-Wk9zokOaylL,
  .theme-dark div._1VP69d9lk-Wk9zokOaylL {
    --background: #1e1e2e !important;
    --canvas: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl span._2KFJx8Dhh1o1u0Xb8e7NuD,
  :root:not(.theme-light).theme-rpl span._2KFJx8Dhh1o1u0Xb8e7NuD,
  :root:not(.theme-light) .theme-beta span._2KFJx8Dhh1o1u0Xb8e7NuD,
  :root:not(.theme-light).theme-beta span._2KFJx8Dhh1o1u0Xb8e7NuD,
  .theme-dark span._2KFJx8Dhh1o1u0Xb8e7NuD {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl button.EBd2MhBQlQeZ13YeP0K8a,
  :root:not(.theme-light).theme-rpl button.EBd2MhBQlQeZ13YeP0K8a,
  :root:not(.theme-light) .theme-beta button.EBd2MhBQlQeZ13YeP0K8a,
  :root:not(.theme-light).theme-beta button.EBd2MhBQlQeZ13YeP0K8a,
  .theme-dark button.EBd2MhBQlQeZ13YeP0K8a {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  :root:not(.theme-light).theme-rpl svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  :root:not(.theme-light) .theme-beta svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  :root:not(.theme-light).theme-beta svg._1Fa4RPHlhrfUZuNaXK2-eP > path,
  .theme-dark svg._1Fa4RPHlhrfUZuNaXK2-eP > path {
    fill: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl input._1Vnaj3fBuYrmHKEPQD_zWW,
  :root:not(.theme-light).theme-rpl input._1Vnaj3fBuYrmHKEPQD_zWW,
  :root:not(.theme-light) .theme-beta input._1Vnaj3fBuYrmHKEPQD_zWW,
  :root:not(.theme-light).theme-beta input._1Vnaj3fBuYrmHKEPQD_zWW,
  .theme-dark input._1Vnaj3fBuYrmHKEPQD_zWW {
    background-color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div.scrollerItem > div,
  :root:not(.theme-light).theme-rpl div.scrollerItem > div,
  :root:not(.theme-light) .theme-beta div.scrollerItem > div,
  :root:not(.theme-light).theme-beta div.scrollerItem > div,
  .theme-dark div.scrollerItem > div,
  :root:not(.theme-light) .theme-rpl div[data-testid="post-container"],
  :root:not(.theme-light).theme-rpl div[data-testid="post-container"],
  :root:not(.theme-light) .theme-beta div[data-testid="post-container"],
  :root:not(.theme-light).theme-beta div[data-testid="post-container"],
  .theme-dark div[data-testid="post-container"],
  :root:not(.theme-light) .theme-rpl div[style="background:#1A1A1B"],
  :root:not(.theme-light).theme-rpl div[style="background:#1A1A1B"],
  :root:not(.theme-light) .theme-beta div[style="background:#1A1A1B"],
  :root:not(.theme-light).theme-beta div[style="background:#1A1A1B"],
  .theme-dark div[style="background:#1A1A1B"],
  :root:not(.theme-light) .theme-rpl div._2otRz3OtuWajw1RleFDJ5P,
  :root:not(.theme-light).theme-rpl div._2otRz3OtuWajw1RleFDJ5P,
  :root:not(.theme-light) .theme-beta div._2otRz3OtuWajw1RleFDJ5P,
  :root:not(.theme-light).theme-beta div._2otRz3OtuWajw1RleFDJ5P,
  .theme-dark div._2otRz3OtuWajw1RleFDJ5P {
    background: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl div._productDetails_7kbcu_53,
  :root:not(.theme-light).theme-rpl div._productDetails_7kbcu_53,
  :root:not(.theme-light) .theme-beta div._productDetails_7kbcu_53,
  :root:not(.theme-light).theme-beta div._productDetails_7kbcu_53,
  .theme-dark div._productDetails_7kbcu_53 {
    background: #181825 !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl .RESUserTagImage::after,
  :root:not(.theme-light).theme-rpl .RESUserTagImage::after,
  :root:not(.theme-light) .theme-beta .RESUserTagImage::after,
  :root:not(.theme-light).theme-beta .RESUserTagImage::after,
  .theme-dark .RESUserTagImage::after {
    color: #89b4fa;
  }
  :root:not(.theme-light) .theme-rpl div._mintStatus_7kbcu_264,
  :root:not(.theme-light).theme-rpl div._mintStatus_7kbcu_264,
  :root:not(.theme-light) .theme-beta div._mintStatus_7kbcu_264,
  :root:not(.theme-light).theme-beta div._mintStatus_7kbcu_264,
  .theme-dark div._mintStatus_7kbcu_264 {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div._carousel_7kbcu_45,
  :root:not(.theme-light).theme-rpl div._carousel_7kbcu_45,
  :root:not(.theme-light) .theme-beta div._carousel_7kbcu_45,
  :root:not(.theme-light).theme-beta div._carousel_7kbcu_45,
  .theme-dark div._carousel_7kbcu_45 {
    background: linear-gradient(243.37deg, #1e1e2e 16.42%, #89b4fa 100%);
  }
  :root:not(.theme-light) .theme-rpl div._card_1ooes_1,
  :root:not(.theme-light).theme-rpl div._card_1ooes_1,
  :root:not(.theme-light) .theme-beta div._card_1ooes_1,
  :root:not(.theme-light).theme-beta div._card_1ooes_1,
  .theme-dark div._card_1ooes_1 {
    background: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl ol._container_1t62i_1,
  :root:not(.theme-light).theme-rpl ol._container_1t62i_1,
  :root:not(.theme-light) .theme-beta ol._container_1t62i_1,
  :root:not(.theme-light).theme-beta ol._container_1t62i_1,
  .theme-dark ol._container_1t62i_1 {
    border-color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl ol._container_1t62i_1 > li,
  :root:not(.theme-light).theme-rpl ol._container_1t62i_1 > li,
  :root:not(.theme-light) .theme-beta ol._container_1t62i_1 > li,
  :root:not(.theme-light).theme-beta ol._container_1t62i_1 > li,
  .theme-dark ol._container_1t62i_1 > li {
    border-color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl ol._container_1t62i_1 > li > div,
  :root:not(.theme-light).theme-rpl ol._container_1t62i_1 > li > div,
  :root:not(.theme-light) .theme-beta ol._container_1t62i_1 > li > div,
  :root:not(.theme-light).theme-beta ol._container_1t62i_1 > li > div,
  .theme-dark ol._container_1t62i_1 > li > div {
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div.MuiMobileStepper-dot,
  :root:not(.theme-light).theme-rpl div.MuiMobileStepper-dot,
  :root:not(.theme-light) .theme-beta div.MuiMobileStepper-dot,
  :root:not(.theme-light).theme-beta div.MuiMobileStepper-dot,
  .theme-dark div.MuiMobileStepper-dot {
    background: #313244 !important;
  }
  :root:not(.theme-light) .theme-rpl div.MuiMobileStepper-dotActive,
  :root:not(.theme-light).theme-rpl div.MuiMobileStepper-dotActive,
  :root:not(.theme-light) .theme-beta div.MuiMobileStepper-dotActive,
  :root:not(.theme-light).theme-beta div.MuiMobileStepper-dotActive,
  .theme-dark div.MuiMobileStepper-dotActive {
    background: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-light).theme-rpl div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-light) .theme-beta div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-light).theme-beta div._scrollContainer_7kbcu_104 > div > h3,
  .theme-dark div._scrollContainer_7kbcu_104 > div > h3,
  :root:not(.theme-light) .theme-rpl div._cardAuthor_7kbcu_79,
  :root:not(.theme-light).theme-rpl div._cardAuthor_7kbcu_79,
  :root:not(.theme-light) .theme-beta div._cardAuthor_7kbcu_79,
  :root:not(.theme-light).theme-beta div._cardAuthor_7kbcu_79,
  .theme-dark div._cardAuthor_7kbcu_79 {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl div._container_oikih_1,
  :root:not(.theme-light).theme-rpl div._container_oikih_1,
  :root:not(.theme-light) .theme-beta div._container_oikih_1,
  :root:not(.theme-light).theme-beta div._container_oikih_1,
  .theme-dark div._container_oikih_1 {
    background: #11111b !important;
    border-color: #45475a !important;
  }
  :root:not(.theme-light) .theme-rpl a._pill_7kbcu_280,
  :root:not(.theme-light).theme-rpl a._pill_7kbcu_280,
  :root:not(.theme-light) .theme-beta a._pill_7kbcu_280,
  :root:not(.theme-light).theme-beta a._pill_7kbcu_280,
  .theme-dark a._pill_7kbcu_280 {
    background: #11111b !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl button._shopForMoreButton_7kbcu_125,
  :root:not(.theme-light).theme-rpl button._shopForMoreButton_7kbcu_125,
  :root:not(.theme-light) .theme-beta button._shopForMoreButton_7kbcu_125,
  :root:not(.theme-light).theme-beta button._shopForMoreButton_7kbcu_125,
  .theme-dark button._shopForMoreButton_7kbcu_125 {
    background: linear-gradient(90deg, #f38ba8, #fab387) !important;
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div._wrapper_1upjl_7,
  :root:not(.theme-light).theme-rpl div._wrapper_1upjl_7,
  :root:not(.theme-light) .theme-beta div._wrapper_1upjl_7,
  :root:not(.theme-light).theme-beta div._wrapper_1upjl_7,
  .theme-dark div._wrapper_1upjl_7 {
    background: #1e1e2e !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl a[aria-label="Home"] > svg > g > circle,
  :root:not(.theme-light).theme-rpl a[aria-label="Home"] > svg > g > circle,
  :root:not(.theme-light) .theme-beta a[aria-label="Home"] > svg > g > circle,
  :root:not(.theme-light).theme-beta a[aria-label="Home"] > svg > g > circle,
  .theme-dark a[aria-label="Home"] > svg > g > circle {
    fill: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl a[aria-label="Home"] > svg:first-child > g > path,
  :root:not(.theme-light).theme-rpl a[aria-label="Home"] > svg:first-child > g > path,
  :root:not(.theme-light) .theme-beta a[aria-label="Home"] > svg:first-child > g > path,
  :root:not(.theme-light).theme-beta a[aria-label="Home"] > svg:first-child > g > path,
  .theme-dark a[aria-label="Home"] > svg:first-child > g > path {
    fill: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl a[aria-label="Home"] > svg:nth-child(2) > g > path,
  :root:not(.theme-light).theme-rpl a[aria-label="Home"] > svg:nth-child(2) > g > path,
  :root:not(.theme-light) .theme-beta a[aria-label="Home"] > svg:nth-child(2) > g > path,
  :root:not(.theme-light).theme-beta a[aria-label="Home"] > svg:nth-child(2) > g > path,
  .theme-dark a[aria-label="Home"] > svg:nth-child(2) > g > path {
    fill: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl h1._eYtD2XCVieq6emjKBH3m,
  :root:not(.theme-light).theme-rpl h1._eYtD2XCVieq6emjKBH3m,
  :root:not(.theme-light) .theme-beta h1._eYtD2XCVieq6emjKBH3m,
  :root:not(.theme-light).theme-beta h1._eYtD2XCVieq6emjKBH3m,
  .theme-dark h1._eYtD2XCVieq6emjKBH3m {
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl button[aria-label="Open notifications inbox"] > div > span,
  :root:not(.theme-light).theme-rpl button[aria-label="Open notifications inbox"] > div > span,
  :root:not(.theme-light) .theme-beta button[aria-label="Open notifications inbox"] > div > span,
  :root:not(.theme-light).theme-beta button[aria-label="Open notifications inbox"] > div > span,
  .theme-dark button[aria-label="Open notifications inbox"] > div > span {
    background: #89b4fa !important;
    color: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  :root:not(.theme-light).theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  :root:not(.theme-light) .theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  :root:not(.theme-light).theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a,
  .theme-dark #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a {
    background: #313244 !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  :root:not(.theme-light).theme-rpl #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  :root:not(.theme-light) .theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  :root:not(.theme-light).theme-beta #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i,
  .theme-dark #change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i {
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl a[href="/now"] > div,
  :root:not(.theme-light).theme-rpl a[href="/now"] > div,
  :root:not(.theme-light) .theme-beta a[href="/now"] > div,
  :root:not(.theme-light).theme-beta a[href="/now"] > div,
  .theme-dark a[href="/now"] > div {
    background: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div[data-testid="search-scope-pill-text"],
  :root:not(.theme-light).theme-rpl div[data-testid="search-scope-pill-text"],
  :root:not(.theme-light) .theme-beta div[data-testid="search-scope-pill-text"],
  :root:not(.theme-light).theme-beta div[data-testid="search-scope-pill-text"],
  .theme-dark div[data-testid="search-scope-pill-text"] {
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  :root:not(.theme-light).theme-rpl div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  :root:not(.theme-light) .theme-beta div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  :root:not(.theme-light).theme-beta div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"],
  .theme-dark div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"] {
    --posttitletextcolor: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl button#safe-search-toggle[aria-checked="true"],
  :root:not(.theme-light).theme-rpl button#safe-search-toggle[aria-checked="true"],
  :root:not(.theme-light) .theme-beta button#safe-search-toggle[aria-checked="true"],
  :root:not(.theme-light).theme-beta button#safe-search-toggle[aria-checked="true"],
  .theme-dark button#safe-search-toggle[aria-checked="true"] {
    background: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-close,
  :root:not(.theme-light).theme-rpl i.icon-close,
  :root:not(.theme-light) .theme-beta i.icon-close,
  :root:not(.theme-light).theme-beta i.icon-close,
  .theme-dark i.icon-close {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl a[role="menuitem"],
  :root:not(.theme-light).theme-rpl a[role="menuitem"],
  :root:not(.theme-light) .theme-beta a[role="menuitem"],
  :root:not(.theme-light).theme-beta a[role="menuitem"],
  .theme-dark a[role="menuitem"] {
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl div[role="menu"] > div[role="heading"],
  :root:not(.theme-light).theme-rpl div[role="menu"] > div[role="heading"],
  :root:not(.theme-light) .theme-beta div[role="menu"] > div[role="heading"],
  :root:not(.theme-light).theme-beta div[role="menu"] > div[role="heading"],
  .theme-dark div[role="menu"] > div[role="heading"] {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl a[role="menuitem"]:hover,
  :root:not(.theme-light).theme-rpl a[role="menuitem"]:hover,
  :root:not(.theme-light) .theme-beta a[role="menuitem"]:hover,
  :root:not(.theme-light).theme-beta a[role="menuitem"]:hover,
  .theme-dark a[role="menuitem"]:hover {
    background: #313244 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-star_fill,
  :root:not(.theme-light).theme-rpl i.icon-star_fill,
  :root:not(.theme-light) .theme-beta i.icon-star_fill,
  :root:not(.theme-light).theme-beta i.icon-star_fill,
  .theme-dark i.icon-star_fill {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-star,
  :root:not(.theme-light).theme-rpl i.icon-star,
  :root:not(.theme-light) .theme-beta i.icon-star,
  :root:not(.theme-light).theme-beta i.icon-star,
  .theme-dark i.icon-star {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-premium_fill,
  :root:not(.theme-light).theme-rpl i.icon-premium_fill,
  :root:not(.theme-light) .theme-beta i.icon-premium_fill,
  :root:not(.theme-light).theme-beta i.icon-premium_fill,
  .theme-dark i.icon-premium_fill {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  :root:not(.theme-light).theme-rpl button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  :root:not(.theme-light) .theme-beta button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  :root:not(.theme-light).theme-beta button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ-,
  .theme-dark button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ- {
    background: #89b4fa !important;
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  :root:not(.theme-light).theme-rpl div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  :root:not(.theme-light) .theme-beta div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  :root:not(.theme-light).theme-beta div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div,
  .theme-dark div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div {
    border-color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl div[data-adclicklocation="background"],
  :root:not(.theme-light).theme-rpl div[data-adclicklocation="background"],
  :root:not(.theme-light) .theme-beta div[data-adclicklocation="background"],
  :root:not(.theme-light).theme-beta div[data-adclicklocation="background"],
  .theme-dark div[data-adclicklocation="background"] {
    background: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-light).theme-rpl div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-light) .theme-beta div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-light).theme-beta div._3-miAEojrCvx_4FQ8x3P-s,
  .theme-dark div._3-miAEojrCvx_4FQ8x3P-s,
  :root:not(.theme-light) .theme-rpl i.icon-comment,
  :root:not(.theme-light).theme-rpl i.icon-comment,
  :root:not(.theme-light) .theme-beta i.icon-comment,
  :root:not(.theme-light).theme-beta i.icon-comment,
  .theme-dark i.icon-comment,
  :root:not(.theme-light) .theme-rpl i.icon-share,
  :root:not(.theme-light).theme-rpl i.icon-share,
  :root:not(.theme-light) .theme-beta i.icon-share,
  :root:not(.theme-light).theme-beta i.icon-share,
  .theme-dark i.icon-share,
  :root:not(.theme-light) .theme-rpl i.icon-save,
  :root:not(.theme-light).theme-rpl i.icon-save,
  :root:not(.theme-light) .theme-beta i.icon-save,
  :root:not(.theme-light).theme-beta i.icon-save,
  .theme-dark i.icon-save,
  :root:not(.theme-light) .theme-rpl i.icon-expand,
  :root:not(.theme-light).theme-rpl i.icon-expand,
  :root:not(.theme-light) .theme-beta i.icon-expand,
  :root:not(.theme-light).theme-beta i.icon-expand,
  .theme-dark i.icon-expand,
  :root:not(.theme-light) .theme-rpl i.icon-collapse,
  :root:not(.theme-light).theme-rpl i.icon-collapse,
  :root:not(.theme-light) .theme-beta i.icon-collapse,
  :root:not(.theme-light).theme-beta i.icon-collapse,
  .theme-dark i.icon-collapse,
  :root:not(.theme-light) .theme-rpl i.icon-text_post,
  :root:not(.theme-light).theme-rpl i.icon-text_post,
  :root:not(.theme-light) .theme-beta i.icon-text_post,
  :root:not(.theme-light).theme-beta i.icon-text_post,
  .theme-dark i.icon-text_post,
  :root:not(.theme-light) .theme-rpl i.icon-image_post,
  :root:not(.theme-light).theme-rpl i.icon-image_post,
  :root:not(.theme-light) .theme-beta i.icon-image_post,
  :root:not(.theme-light).theme-beta i.icon-image_post,
  .theme-dark i.icon-image_post,
  :root:not(.theme-light) .theme-rpl i.icon-media_gallery,
  :root:not(.theme-light).theme-rpl i.icon-media_gallery,
  :root:not(.theme-light) .theme-beta i.icon-media_gallery,
  :root:not(.theme-light).theme-beta i.icon-media_gallery,
  .theme-dark i.icon-media_gallery,
  :root:not(.theme-light) .theme-rpl i.icon-video_post,
  :root:not(.theme-light).theme-rpl i.icon-video_post,
  :root:not(.theme-light) .theme-beta i.icon-video_post,
  :root:not(.theme-light).theme-beta i.icon-video_post,
  .theme-dark i.icon-video_post,
  :root:not(.theme-light) .theme-rpl i.icon-gif_post,
  :root:not(.theme-light).theme-rpl i.icon-gif_post,
  :root:not(.theme-light) .theme-beta i.icon-gif_post,
  :root:not(.theme-light).theme-beta i.icon-gif_post,
  .theme-dark i.icon-gif_post,
  :root:not(.theme-light) .theme-rpl i.icon-embed,
  :root:not(.theme-light).theme-rpl i.icon-embed,
  :root:not(.theme-light) .theme-beta i.icon-embed,
  :root:not(.theme-light).theme-beta i.icon-embed,
  .theme-dark i.icon-embed,
  :root:not(.theme-light) .theme-rpl i.icon-external_link,
  :root:not(.theme-light).theme-rpl i.icon-external_link,
  :root:not(.theme-light) .theme-beta i.icon-external_link,
  :root:not(.theme-light).theme-beta i.icon-external_link,
  .theme-dark i.icon-external_link,
  :root:not(.theme-light) .theme-rpl i.icon-poll_post,
  :root:not(.theme-light).theme-rpl i.icon-poll_post,
  :root:not(.theme-light) .theme-beta i.icon-poll_post,
  :root:not(.theme-light).theme-beta i.icon-poll_post,
  .theme-dark i.icon-poll_post {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-light).theme-rpl div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-light) .theme-beta div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-light).theme-beta div[data-adclicklocation="title"] > div > a > div > h3,
  .theme-dark div[data-adclicklocation="title"] > div > a > div > h3,
  :root:not(.theme-light) .theme-rpl div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  :root:not(.theme-light).theme-rpl div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  :root:not(.theme-light) .theme-beta div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  :root:not(.theme-light).theme-beta div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child,
  .theme-dark div[data-adclicklocation="title"] > div:first-child > div:first-child > h1:first-child {
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-light).theme-rpl div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-light) .theme-beta div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-light).theme-beta div[data-adclicklocation="top_bar"] > span,
  .theme-dark div[data-adclicklocation="top_bar"] > span,
  :root:not(.theme-light) .theme-rpl a[data-testid="post_author_link"],
  :root:not(.theme-light).theme-rpl a[data-testid="post_author_link"],
  :root:not(.theme-light) .theme-beta a[data-testid="post_author_link"],
  :root:not(.theme-light).theme-beta a[data-testid="post_author_link"],
  .theme-dark a[data-testid="post_author_link"] {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl span._1wzhGvvafQFOWAyA157okr,
  :root:not(.theme-light).theme-rpl span._1wzhGvvafQFOWAyA157okr,
  :root:not(.theme-light) .theme-beta span._1wzhGvvafQFOWAyA157okr,
  :root:not(.theme-light).theme-beta span._1wzhGvvafQFOWAyA157okr,
  .theme-dark span._1wzhGvvafQFOWAyA157okr {
    border-color: #f38ba8 !important;
    color: #f38ba8 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-pin_fill,
  :root:not(.theme-light).theme-rpl i.icon-pin_fill,
  :root:not(.theme-light) .theme-beta i.icon-pin_fill,
  :root:not(.theme-light).theme-beta i.icon-pin_fill,
  .theme-dark i.icon-pin_fill {
    color: #a6e3a1 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-award,
  :root:not(.theme-light).theme-rpl i.icon-award,
  :root:not(.theme-light) .theme-beta i.icon-award,
  :root:not(.theme-light).theme-beta i.icon-award,
  .theme-dark i.icon-award {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-archived_fill,
  :root:not(.theme-light).theme-rpl i.icon-archived_fill,
  :root:not(.theme-light) .theme-beta i.icon-archived_fill,
  :root:not(.theme-light).theme-beta i.icon-archived_fill,
  .theme-dark i.icon-archived_fill,
  :root:not(.theme-light) .theme-rpl i.icon-lock_fill,
  :root:not(.theme-light).theme-rpl i.icon-lock_fill,
  :root:not(.theme-light) .theme-beta i.icon-lock_fill,
  :root:not(.theme-light).theme-beta i.icon-lock_fill,
  .theme-dark i.icon-lock_fill {
    color: #f9e2af !important;
  }
  :root:not(.theme-light) .theme-rpl div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  :root:not(.theme-light).theme-rpl div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  :root:not(.theme-light) .theme-beta div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  :root:not(.theme-light).theme-beta div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3),
  .theme-dark div[data-click-id="body"] > div:nth-child(3) > div:nth-child(3) {
    border-color: #45475a !important;
  }
  :root:not(.theme-light) .theme-rpl div.Post,
  :root:not(.theme-light).theme-rpl div.Post,
  :root:not(.theme-light) .theme-beta div.Post,
  :root:not(.theme-light).theme-beta div.Post,
  .theme-dark div.Post,
  :root:not(.theme-light) .theme-rpl div[data-click-id="media"],
  :root:not(.theme-light).theme-rpl div[data-click-id="media"],
  :root:not(.theme-light) .theme-beta div[data-click-id="media"],
  :root:not(.theme-light).theme-beta div[data-click-id="media"],
  .theme-dark div[data-click-id="media"] {
    background: #181825 !important;
    fill: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl div[id^="vote-arrows"] > div,
  :root:not(.theme-light).theme-rpl div[id^="vote-arrows"] > div,
  :root:not(.theme-light) .theme-beta div[id^="vote-arrows"] > div,
  :root:not(.theme-light).theme-beta div[id^="vote-arrows"] > div,
  .theme-dark div[id^="vote-arrows"] > div {
    color: #a6adc8 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-upvote_fill,
  :root:not(.theme-light).theme-rpl i.icon-upvote_fill,
  :root:not(.theme-light) .theme-beta i.icon-upvote_fill,
  :root:not(.theme-light).theme-beta i.icon-upvote_fill,
  .theme-dark i.icon-upvote_fill {
    color: #f38ba8 !important;
  }
  :root:not(.theme-light) .theme-rpl button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-light).theme-rpl button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-light) .theme-beta button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-light).theme-beta button[aria-label="upvote"][aria-pressed="false"] > span:hover > i,
  .theme-dark button[aria-label="upvote"][aria-pressed="false"] > span:hover > i {
    color: #f38ba8 !important;
  }
  :root:not(.theme-light) .theme-rpl button[aria-label="upvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-light).theme-rpl button[aria-label="upvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-light) .theme-beta button[aria-label="upvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-light).theme-beta button[aria-label="upvote"][aria-pressed="true"] ~ div,
  .theme-dark button[aria-label="upvote"][aria-pressed="true"] ~ div {
    color: #f38ba8 !important;
  }
  :root:not(.theme-light) .theme-rpl button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  :root:not(.theme-light).theme-rpl button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  :root:not(.theme-light) .theme-beta button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  :root:not(.theme-light).theme-beta button[aria-label="upvote"][aria-label="downvote"] > span:hover,
  .theme-dark button[aria-label="upvote"][aria-label="downvote"] > span:hover {
    background: #313244 !important;
  }
  :root:not(.theme-light) .theme-rpl .icon-downvote_fill,
  :root:not(.theme-light).theme-rpl .icon-downvote_fill,
  :root:not(.theme-light) .theme-beta .icon-downvote_fill,
  :root:not(.theme-light).theme-beta .icon-downvote_fill,
  .theme-dark .icon-downvote_fill {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl button[aria-label="downvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-light).theme-rpl button[aria-label="downvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-light) .theme-beta button[aria-label="downvote"][aria-pressed="true"] ~ div,
  :root:not(.theme-light).theme-beta button[aria-label="downvote"][aria-pressed="true"] ~ div,
  .theme-dark button[aria-label="downvote"][aria-pressed="true"] ~ div {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-light).theme-rpl button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-light) .theme-beta button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  :root:not(.theme-light).theme-beta button[aria-label="downvote"][aria-pressed="false"] > span:hover > i,
  .theme-dark button[aria-label="downvote"][aria-pressed="false"] > span:hover > i {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl a.o1ov2mzLxTFAFP-O4Uv8I,
  :root:not(.theme-light).theme-rpl a.o1ov2mzLxTFAFP-O4Uv8I,
  :root:not(.theme-light) .theme-beta a.o1ov2mzLxTFAFP-O4Uv8I,
  :root:not(.theme-light).theme-beta a.o1ov2mzLxTFAFP-O4Uv8I,
  .theme-dark a.o1ov2mzLxTFAFP-O4Uv8I {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl button._1lDGFVGU9k2mi-4kjU95Rp,
  :root:not(.theme-light).theme-rpl button._1lDGFVGU9k2mi-4kjU95Rp,
  :root:not(.theme-light) .theme-beta button._1lDGFVGU9k2mi-4kjU95Rp,
  :root:not(.theme-light).theme-beta button._1lDGFVGU9k2mi-4kjU95Rp,
  .theme-dark button._1lDGFVGU9k2mi-4kjU95Rp {
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl a[role="button"][target="_blank"],
  :root:not(.theme-light).theme-rpl a[role="button"][target="_blank"],
  :root:not(.theme-light) .theme-beta a[role="button"][target="_blank"],
  :root:not(.theme-light).theme-beta a[role="button"][target="_blank"],
  .theme-dark a[role="button"][target="_blank"] {
    background: #cdd6f4 !important;
    color: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl div[role="radio"]:hover,
  :root:not(.theme-light).theme-rpl div[role="radio"]:hover,
  :root:not(.theme-light) .theme-beta div[role="radio"]:hover,
  :root:not(.theme-light).theme-beta div[role="radio"]:hover,
  .theme-dark div[role="radio"]:hover,
  :root:not(.theme-light) .theme-rpl div[role="radio"]:focus,
  :root:not(.theme-light).theme-rpl div[role="radio"]:focus,
  :root:not(.theme-light) .theme-beta div[role="radio"]:focus,
  :root:not(.theme-light).theme-beta div[role="radio"]:focus,
  .theme-dark div[role="radio"]:focus {
    background: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div[role="radio"] > svg,
  :root:not(.theme-light).theme-rpl div[role="radio"] > svg,
  :root:not(.theme-light) .theme-beta div[role="radio"] > svg,
  :root:not(.theme-light).theme-beta div[role="radio"] > svg,
  .theme-dark div[role="radio"] > svg,
  :root:not(.theme-light) .theme-rpl div[role="radio"] > svg:active,
  :root:not(.theme-light).theme-rpl div[role="radio"] > svg:active,
  :root:not(.theme-light) .theme-beta div[role="radio"] > svg:active,
  :root:not(.theme-light).theme-beta div[role="radio"] > svg:active,
  .theme-dark div[role="radio"] > svg:active {
    fill: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl button[role="checkbox"],
  :root:not(.theme-light).theme-rpl button[role="checkbox"],
  :root:not(.theme-light) .theme-beta button[role="checkbox"],
  :root:not(.theme-light).theme-beta button[role="checkbox"],
  .theme-dark button[role="checkbox"] {
    fill: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl ._ZhON3a3vplThB8NFwuJn,
  :root:not(.theme-light).theme-rpl ._ZhON3a3vplThB8NFwuJn,
  :root:not(.theme-light) .theme-beta ._ZhON3a3vplThB8NFwuJn,
  :root:not(.theme-light).theme-beta ._ZhON3a3vplThB8NFwuJn,
  .theme-dark ._ZhON3a3vplThB8NFwuJn {
    background: #11111b !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl img[alt="Subreddit Icon"][role="presentation"],
  :root:not(.theme-light).theme-rpl img[alt="Subreddit Icon"][role="presentation"],
  :root:not(.theme-light) .theme-beta img[alt="Subreddit Icon"][role="presentation"],
  :root:not(.theme-light).theme-beta img[alt="Subreddit Icon"][role="presentation"],
  .theme-dark img[alt="Subreddit Icon"][role="presentation"] {
    background: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  :root:not(.theme-light).theme-rpl ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  :root:not(.theme-light) .theme-beta ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  :root:not(.theme-light).theme-beta ._1KrMye71CT332tKKKUWAj6:not(:last-of-type),
  .theme-dark ._1KrMye71CT332tKKKUWAj6:not(:last-of-type) {
    border-bottom-color: #313244;
  }
  :root:not(.theme-light) .theme-rpl .bg-neutral-background,
  :root:not(.theme-light).theme-rpl .bg-neutral-background,
  :root:not(.theme-light) .theme-beta .bg-neutral-background,
  :root:not(.theme-light).theme-beta .bg-neutral-background,
  .theme-dark .bg-neutral-background {
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl i.icon-community_fill,
  :root:not(.theme-light).theme-rpl i.icon-community_fill,
  :root:not(.theme-light) .theme-beta i.icon-community_fill,
  :root:not(.theme-light).theme-beta i.icon-community_fill,
  .theme-dark i.icon-community_fill {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div._21RLQh5PvUhC6vOKoFeHUP::before,
  :root:not(.theme-light).theme-rpl div._21RLQh5PvUhC6vOKoFeHUP::before,
  :root:not(.theme-light) .theme-beta div._21RLQh5PvUhC6vOKoFeHUP::before,
  :root:not(.theme-light).theme-beta div._21RLQh5PvUhC6vOKoFeHUP::before,
  .theme-dark div._21RLQh5PvUhC6vOKoFeHUP::before {
    color: #a6e3a1 !important;
  }
  :root:not(.theme-light) .theme-rpl ._2v4IIjPhKL0PDaWaWtjJ1E,
  :root:not(.theme-light).theme-rpl ._2v4IIjPhKL0PDaWaWtjJ1E,
  :root:not(.theme-light) .theme-beta ._2v4IIjPhKL0PDaWaWtjJ1E,
  :root:not(.theme-light).theme-beta ._2v4IIjPhKL0PDaWaWtjJ1E,
  .theme-dark ._2v4IIjPhKL0PDaWaWtjJ1E {
    background: #313244 !important;
  }
  :root:not(.theme-light) .theme-rpl span[id^="CommentTopMeta--Mod"],
  :root:not(.theme-light).theme-rpl span[id^="CommentTopMeta--Mod"],
  :root:not(.theme-light) .theme-beta span[id^="CommentTopMeta--Mod"],
  :root:not(.theme-light).theme-beta span[id^="CommentTopMeta--Mod"],
  .theme-dark span[id^="CommentTopMeta--Mod"] {
    color: #a6e3a1 !important;
  }
  :root:not(.theme-light) .theme-rpl span[id^="CommentTopMeta--OP"],
  :root:not(.theme-light).theme-rpl span[id^="CommentTopMeta--OP"],
  :root:not(.theme-light) .theme-beta span[id^="CommentTopMeta--OP"],
  :root:not(.theme-light).theme-beta span[id^="CommentTopMeta--OP"],
  .theme-dark span[id^="CommentTopMeta--OP"] {
    color: #89b4fa !important;
  }
  :root:not(.theme-light) .theme-rpl div#overlayScrollContainer > div,
  :root:not(.theme-light).theme-rpl div#overlayScrollContainer > div,
  :root:not(.theme-light) .theme-beta div#overlayScrollContainer > div,
  :root:not(.theme-light).theme-beta div#overlayScrollContainer > div,
  .theme-dark div#overlayScrollContainer > div {
    background: #11111b !important;
  }
  :root:not(.theme-light) .theme-rpl div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  :root:not(.theme-light).theme-rpl div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  :root:not(.theme-light) .theme-beta div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  :root:not(.theme-light).theme-beta div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR,
  .theme-dark div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR {
    background: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-light).theme-rpl div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-light) .theme-beta div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-light).theme-beta div._2DJXORCrmcNpPTSq0LqL6i,
  .theme-dark div._2DJXORCrmcNpPTSq0LqL6i,
  :root:not(.theme-light) .theme-rpl div._1DK52RbaamLOWw5UPaht_S,
  :root:not(.theme-light).theme-rpl div._1DK52RbaamLOWw5UPaht_S,
  :root:not(.theme-light) .theme-beta div._1DK52RbaamLOWw5UPaht_S,
  :root:not(.theme-light).theme-beta div._1DK52RbaamLOWw5UPaht_S,
  .theme-dark div._1DK52RbaamLOWw5UPaht_S {
    background: rgba(17, 17, 27, 0.8) !important;
  }
  :root:not(.theme-light) .theme-rpl div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  :root:not(.theme-light).theme-rpl div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  :root:not(.theme-light) .theme-beta div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  :root:not(.theme-light).theme-beta div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"],
  .theme-dark div.TmlaIdEplCzZ0F1aRGYQh[role="presentation"] {
    background: linear-gradient(188deg, #f9e2af1f 1.7%, #f9e2af00 46%, rgba(0, 0, 0, 0)) !important;
  }
  :root:not(.theme-light) .theme-rpl a[title="Next"] > i,
  :root:not(.theme-light).theme-rpl a[title="Next"] > i,
  :root:not(.theme-light) .theme-beta a[title="Next"] > i,
  :root:not(.theme-light).theme-beta a[title="Next"] > i,
  .theme-dark a[title="Next"] > i,
  :root:not(.theme-light) .theme-rpl a[title="Previous"] > i,
  :root:not(.theme-light).theme-rpl a[title="Previous"] > i,
  :root:not(.theme-light) .theme-beta a[title="Previous"] > i,
  :root:not(.theme-light).theme-beta a[title="Previous"] > i,
  .theme-dark a[title="Previous"] > i {
    background: #313244 !important;
  }
  :root:not(.theme-light) .theme-rpl div._61i6grM3um1yuw4GrN97P,
  :root:not(.theme-light).theme-rpl div._61i6grM3um1yuw4GrN97P,
  :root:not(.theme-light) .theme-beta div._61i6grM3um1yuw4GrN97P,
  :root:not(.theme-light).theme-beta div._61i6grM3um1yuw4GrN97P,
  .theme-dark div._61i6grM3um1yuw4GrN97P {
    background: rgba(17, 17, 27, 0.8) !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl input#comment_search-bar,
  :root:not(.theme-light).theme-rpl input#comment_search-bar,
  :root:not(.theme-light) .theme-beta input#comment_search-bar,
  :root:not(.theme-light).theme-beta input#comment_search-bar,
  .theme-dark input#comment_search-bar {
    background: #1e1e2e !important;
  }
  :root:not(.theme-light) .theme-rpl ._1gVVmSnHZpkUgVShsn7-ua,
  :root:not(.theme-light).theme-rpl ._1gVVmSnHZpkUgVShsn7-ua,
  :root:not(.theme-light) .theme-beta ._1gVVmSnHZpkUgVShsn7-ua,
  :root:not(.theme-light).theme-beta ._1gVVmSnHZpkUgVShsn7-ua,
  .theme-dark ._1gVVmSnHZpkUgVShsn7-ua {
    background: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl .bX6SqXfzfxpv4GQbuIYVZ,
  :root:not(.theme-light).theme-rpl .bX6SqXfzfxpv4GQbuIYVZ,
  :root:not(.theme-light) .theme-beta .bX6SqXfzfxpv4GQbuIYVZ,
  :root:not(.theme-light).theme-beta .bX6SqXfzfxpv4GQbuIYVZ,
  .theme-dark .bX6SqXfzfxpv4GQbuIYVZ {
    color: #f38ba8 !important;
  }
  :root:not(.theme-light) .theme-rpl div.HQ2VJViRjokXpRbJzPvvc,
  :root:not(.theme-light).theme-rpl div.HQ2VJViRjokXpRbJzPvvc,
  :root:not(.theme-light) .theme-beta div.HQ2VJViRjokXpRbJzPvvc,
  :root:not(.theme-light).theme-beta div.HQ2VJViRjokXpRbJzPvvc,
  .theme-dark div.HQ2VJViRjokXpRbJzPvvc {
    background: #181825 !important;
    color: #cdd6f4 !important;
  }
  :root:not(.theme-light) .theme-rpl div.HQ2VJViRjokXpRbJzPvvc::after,
  :root:not(.theme-light).theme-rpl div.HQ2VJViRjokXpRbJzPvvc::after,
  :root:not(.theme-light) .theme-beta div.HQ2VJViRjokXpRbJzPvvc::after,
  :root:not(.theme-light).theme-beta div.HQ2VJViRjokXpRbJzPvvc::after,
  .theme-dark div.HQ2VJViRjokXpRbJzPvvc::after {
    border-top-color: #181825 !important;
  }
  :root:not(.theme-light) .theme-rpl .snoo-cls-1,
  :root:not(.theme-light).theme-rpl .snoo-cls-1,
  :root:not(.theme-light) .theme-beta .snoo-cls-1,
  :root:not(.theme-light).theme-beta .snoo-cls-1,
  .theme-dark .snoo-cls-1,
  :root:not(.theme-light) .theme-rpl .snoo-cls-2,
  :root:not(.theme-light).theme-rpl .snoo-cls-2,
  :root:not(.theme-light) .theme-beta .snoo-cls-2,
  :root:not(.theme-light).theme-beta .snoo-cls-2,
  .theme-dark .snoo-cls-2,
  :root:not(.theme-light) .theme-rpl .snoo-cls-3,
  :root:not(.theme-light).theme-rpl .snoo-cls-3,
  :root:not(.theme-light) .theme-beta .snoo-cls-3,
  :root:not(.theme-light).theme-beta .snoo-cls-3,
  .theme-dark .snoo-cls-3,
  :root:not(.theme-light) .theme-rpl .snoo-cls-6,
  :root:not(.theme-light).theme-rpl .snoo-cls-6,
  :root:not(.theme-light) .theme-beta .snoo-cls-6,
  :root:not(.theme-light).theme-beta .snoo-cls-6,
  .theme-dark .snoo-cls-6,
  :root:not(.theme-light) .theme-rpl .snoo-cls-8,
  :root:not(.theme-light).theme-rpl .snoo-cls-8,
  :root:not(.theme-light) .theme-beta .snoo-cls-8,
  :root:not(.theme-light).theme-beta .snoo-cls-8,
  .theme-dark .snoo-cls-8,
  :root:not(.theme-light) .theme-rpl .snoo-cls-9,
  :root:not(.theme-light).theme-rpl .snoo-cls-9,
  :root:not(.theme-light) .theme-beta .snoo-cls-9,
  :root:not(.theme-light).theme-beta .snoo-cls-9,
  .theme-dark .snoo-cls-9 {
    fill: #1e1e2e;
  }
  :root:not(.theme-light) .theme-rpl .snoo-cls-4,
  :root:not(.theme-light).theme-rpl .snoo-cls-4,
  :root:not(.theme-light) .theme-beta .snoo-cls-4,
  :root:not(.theme-light).theme-beta .snoo-cls-4,
  .theme-dark .snoo-cls-4,
  :root:not(.theme-light) .theme-rpl .snoo-cls-5,
  :root:not(.theme-light).theme-rpl .snoo-cls-5,
  :root:not(.theme-light) .theme-beta .snoo-cls-5,
  :root:not(.theme-light).theme-beta .snoo-cls-5,
  .theme-dark .snoo-cls-5,
  :root:not(.theme-light) .theme-rpl .snoo-cls-7,
  :root:not(.theme-light).theme-rpl .snoo-cls-7,
  :root:not(.theme-light) .theme-beta .snoo-cls-7,
  :root:not(.theme-light).theme-beta .snoo-cls-7,
  .theme-dark .snoo-cls-7,
  :root:not(.theme-light) .theme-rpl .snoo-cls-10,
  :root:not(.theme-light).theme-rpl .snoo-cls-10,
  :root:not(.theme-light) .theme-beta .snoo-cls-10,
  :root:not(.theme-light).theme-beta .snoo-cls-10,
  .theme-dark .snoo-cls-10,
  :root:not(.theme-light) .theme-rpl .snoo-cls-11,
  :root:not(.theme-light).theme-rpl .snoo-cls-11,
  :root:not(.theme-light) .theme-beta .snoo-cls-11,
  :root:not(.theme-light).theme-beta .snoo-cls-11,
  .theme-dark .snoo-cls-11 {
    fill: #89b4fa;
  }
}
/* prettier-ignore */
`)