// 'use strict';

// import { Timer } from './timer';

// Change to 'true' to enable logging. 
// NOTE: this is manual because 
// limited chrome API is available for content script
// In future, we can use chrome.management to check the env
// and do message passing to set this flag
const DEBUG_MODE_ON = true;
if (!DEBUG_MODE_ON) {
    console = console || {};
    console.log = function () { };
}

function toggleTimer() {
    // console.log('Document hidden status: ' + document.hidden)
    if (document.visibilityState !== 'visible') {
        // stop timer
        console.log('Stopping timer')
    } else {
        // continue timer
        console.log('Resuming timer')
    }
}

// Handle all state mangement related to 
// visiblity change of the given page
// A page is 'hidden' whenever the browser window
// is minimised or the current tab is not in focus.
// Refer: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
function handleVisibilityChange() {
    toggleTimer()
}

// Main function which will be called from 'content_main.js'
// This separation is done to enable use of ES6 features such as 'import'.  
// Refer: https://medium.com/@otiai10/how-to-use-es6-import-wixth-chrome-extension-bd5217b9c978
export function main() {
    console.log('This is the content script and should be visible in the console..')
    
    // let t = Timer();
    // console.log('Successfully created new timer..')

    document.addEventListener('visibilitychange', handleVisibilityChange, false)
}
