// 'use strict';

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


// Main function which will be called from 'content_main.js'
// this separation is done to enable use of ES6 'import' feature.  
// Refer: https://medium.com/@otiai10/how-to-use-es6-import-with-chrome-extension-bd5217b9c978
export function main() {
    console.log('This is the content script and should be visible in the console..')
}
