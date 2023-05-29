function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
( function() {
    var skipLinkTarget = document.querySelector( 'main' ),
        sibling,
        skipLinkTargetID,
        skipLink;

    // Early exit if a skip-link target can't be located.
    if ( ! skipLinkTarget ) {
        return;
    }

    // Get the site wrapper.
    // The skip-link will be injected in the beginning of it.
    sibling = document.querySelector( '.wp-site-blocks' );

    // Early exit if the root element was not found.
    if ( ! sibling ) {
        return;
    }

    // Get the skip-link target's ID, and generate one if it doesn't exist.
    skipLinkTargetID = skipLinkTarget.id;
    if ( ! skipLinkTargetID ) {
        skipLinkTargetID = 'wp--skip-link--target';
        skipLinkTarget.id = skipLinkTargetID;
    }

    // Create the skip link.
    skipLink = document.createElement( 'a' );
    skipLink.classList.add( 'skip-link', 'screen-reader-text' );
    skipLink.href = '#' + skipLinkTargetID;
    skipLink.innerHTML = 'İçeriğe geç';

    // Inject the skip link.
    sibling.parentElement.insertBefore( skipLink, sibling );
}() );
// Initialize and attach hovercards to all gravatars
( function() {
    function init() {
        if ( typeof Gravatar === 'undefined' ) {
            return;
        }

        if ( typeof Gravatar.init !== 'function' ) {
            return;
        }

        Gravatar.profile_cb = function ( hash, id ) {
            WPGroHo.syncProfileData( hash, id );
        };

        Gravatar.my_hash = WPGroHo.my_hash;
        Gravatar.init( 'body', '#wp-admin-bar-my-account' );
    }

    if ( document.readyState !== 'loading' ) {
        init();
    } else {
        document.addEventListener( 'DOMContentLoaded', init );
    }
} )();
window.addEventListener( "load", function( event ) {
    var link = document.createElement( "link" );
    link.href = "https://s0.wp.com/wp-content/mu-plugins/actionbar/actionbar.css?v=20210915";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild( link );

    var script = document.createElement( "script" );
    script.src = "https://s0.wp.com/wp-content/mu-plugins/actionbar/actionbar.js?v=20220329";
    script.defer = true;
    document.body.appendChild( script );
} );
if ( 'object' === typeof wpcom_mobile_user_agent_info ) {

    wpcom_mobile_user_agent_info.init();
    var mobileStatsQueryString = "";

    if( false !== wpcom_mobile_user_agent_info.matchedPlatformName )
        mobileStatsQueryString += "&x_" + 'mobile_platforms' + '=' + wpcom_mobile_user_agent_info.matchedPlatformName;

    if( false !== wpcom_mobile_user_agent_info.matchedUserAgentName )
        mobileStatsQueryString += "&x_" + 'mobile_devices' + '=' + wpcom_mobile_user_agent_info.matchedUserAgentName;

    if( wpcom_mobile_user_agent_info.isIPad() )
        mobileStatsQueryString += "&x_" + 'ipad_views' + '=' + 'views';

    if( "" != mobileStatsQueryString ) {
        new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv' + mobileStatsQueryString + '&baba=' + Math.random();
    }

}
window._wpemojiSettings = {"baseUrl":"https:\/\/s0.wp.com\/wp-content\/mu-plugins\/wpcom-smileys\/twemoji\/2\/72x72\/","ext":".png","svgUrl":"https:\/\/s0.wp.com\/wp-content\/mu-plugins\/wpcom-smileys\/twemoji\/2\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/s0.wp.com\/wp-includes\/js\/wp-emoji-release.min.js?m=1677072837h&ver=6.2.1-RC1-55769"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){p.clearRect(0,0,i.width,i.height),p.fillText(e,0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(t,0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!s("\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);