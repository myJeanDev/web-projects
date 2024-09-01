// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
//     if(changeInfo.status === "Loading"){
//         if(tab.url === "https://www.youtube.com/*"){
//             chrome.tabs.insertCSS(tabId,{
//                 file:"noShorts.css"
//             },()=>{
//                 console.log("No More Shorts!");
//             })
//         }
//     }
// });