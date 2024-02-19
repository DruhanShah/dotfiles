// ==UserScript==
// @name         YouTube AD Blocker
// @name:zh-CN   YouTube
// @name:zh-TW   YouTube
// @name:zh-HK   YouTube
// @name:zh-MO   YouTube
// @namespace    https://github.com/iamfugui/YouTubeADB
// @version      6.01
// @description  This is a script that removes ads on YouTube, it's lightweight and efficient, capable of smoothly removing interface and video ads, including 6s ads.
// @author       iamfugui
// @match        *://*.youtube.com/*
// @exclude      *://accounts.youtube.com/*
// @exclude      *://www.youtube.com/live_chat_replay*
// @exclude      *://www.youtube.com/persist_identity*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=YouTube.com
// @grant        none
// @license MIT
// ==/UserScript==
(function() {
    `use strict`;
 
    const cssSeletorArr = [
        `#masthead-ad`,
        `ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)`,
        `.video-ads.ytp-ad-module`,
        `tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)`,
        `ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]`,
        `#related #player-ads`,
        `#related ytd-ad-slot-renderer`,
        `ytd-ad-slot-renderer`,
        `yt-mealbar-promo-renderer`,
        `ad-slot-renderer`,
        `ytm-companion-ad-renderer`,
    ];
 
    window.dev=false;
 
    function moment(time) {
        
        let y = time.getFullYear()
        let m = (time.getMonth() + 1).toString().padStart(2, `0`)
        let d = time.getDate().toString().padStart(2, `0`)
        let h = time.getHours().toString().padStart(2, `0`)
        let min = time.getMinutes().toString().padStart(2, `0`)
        let s = time.getSeconds().toString().padStart(2, `0`)
        return `${y}-${m}-${d} ${h}:${min}:${s}`
    }
 
    function log(msg) {
        if(!window.dev){
            return false;
        }
        console.log(window.location.href);
        console.log(`${moment(new Date())}  ${msg}`);
    }
 
    function setRunFlag(name){
        let style = document.createElement(`style`);
        style.id = name;
        (document.querySelector(`head`) || document.querySelector(`body`)).appendChild(style);
    }
 
    function getRunFlag(name){
        return document.getElementById(name);
    }
 
    function checkRunFlag(name){
        if(getRunFlag(name)){
            return true;
        }else{
            setRunFlag(name)
            return false;
        }
    }
 
    function generateRemoveADHTMLElement(id) {
        if (checkRunFlag(id)) {
            return false
        }
 
        let style = document.createElement(`style`);
        (document.querySelector(`head`) || document.querySelector(`body`)).appendChild(style);
        style.appendChild(document.createTextNode(generateRemoveADCssText(cssSeletorArr)));
    }
 
    function generateRemoveADCssText(cssSeletorArr){
        cssSeletorArr.forEach((seletor,index)=>{
            cssSeletorArr[index]=`${seletor}{display:none!important}`;
        });
        return cssSeletorArr.join(` `);
    }
 
    function nativeTouch(){
        let touch = new Touch({
            identifier: Date.now(),
            target: this,
            clientX: 12,
            clientY: 34,
            radiusX: 56,
            radiusY: 78,
            rotationAngle: 0,
            force: 1
        });
 
        let touchStartEvent = new TouchEvent(`touchstart`, {
            bubbles: true,
            cancelable: true,
            view: window,
            touches: [touch],
            targetTouches: [touch],
            changedTouches: [touch]
        });
 
        this.dispatchEvent(touchStartEvent);
 
        let touchEndEvent = new TouchEvent(`touchend`, {
            bubbles: true,
            cancelable: true,
            view: window,
            touches: [],
            targetTouches: [],
            changedTouches: [touch]
        });
 
        this.dispatchEvent(touchEndEvent);
    }
 
    function skipAd(mutationsList, observer) {
        let video = document.querySelector(`.ad-showing video`) || document.querySelector(`video`);
        let skipButton = document.querySelector(`.ytp-ad-skip-button`) || document.querySelector(`.ytp-ad-skip-button-modern`);
        let shortAdMsg = document.querySelector(`.video-ads.ytp-ad-module .ytp-ad-player-overlay`);
 
        if(skipButton){
            if( window.location.href.indexOf("https://m.youtube.com/") === -1){
                video.muted = true;
            }
            if(video.currentTime>0.5){
                video.currentTime = video.duration;
                return;
            }
            skipButton.click();
            nativeTouch.call(skipButton);
        }else if(shortAdMsg){
            video.currentTime = video.duration;
        }
 
    }
 
    function removePlayerAD(id){
        if (checkRunFlag(id)) {
            return false
        }
        let observer;
        let timerID;
 
        function startObserve(){
            const targetNode = document.querySelector(`.video-ads.ytp-ad-module`);
            if(!targetNode){
                return false;
            }
            const config = {childList: true, subtree: true };
            observer = new MutationObserver(skipAd);
            observer.observe(targetNode, config);
            timerID=setInterval(skipAd, 500);
        }
 
        let startObserveID = setInterval(()=>{
            if(observer && timerID){
                clearInterval(startObserveID);
            }else{
                startObserve();
            }
        },16);
 
    }
