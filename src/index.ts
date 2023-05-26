import { Program } from './App'
import { MediaType } from './model/mediaType'
import { MediaScanner } from './modules/MediaScanner'
import Update from './modules/Update'
import { Modal } from './components/Modal'
import localize from './helpers/localize'
import { detect } from "detect-browser"
// Init browser detection
const browser = detect()

console.clear()

const program: Program = {
    VERSION: process.env.VERSION as string,

    browser: browser,

    hostname: window.location.hostname,
    path: window.location.pathname,

    regexHostname: /^instagram\.com/,
    regexRootPath: /^\/+$/,
    regexProfilePath: /^\/([A-Za-z0-9._]{2,3})+\/$/,
    regexPostPath: /^\/p\//,
    regexReelURI: /reel\/(.*)+/,
    regexReelsURI: /reels\/(.*)+/,
    regexStoriesURI: /stories\/(.*)+/,

    foundByModule: null
}

if (process.env.DEV) {
    console.info(['Developer Mode Caution!', program])

    if (program.browser) {
        console.info(['Browser Name', program.browser.name])
        console.info(['Browser Version', program.browser.version])
        console.info(['Browser OS', program.browser.os])
    }
}

/* ===============================
 =            Program            =
 ===============================*/
// verify if are running on instagram site
if (program.hostname == 'instagram.com' || program.hostname == 'www.instagram.com') {
    new MediaScanner().execute(program, function (scannerFound: boolean, foundMediaType: MediaType, foundMediaUrl: string, scannerProgram: Program) {
        program.foundByModule = scannerProgram.foundByModule

        //if (process.env.DEV) {
        console.log('scannerFound', scannerFound)
        console.log('foundByModule', program.foundByModule)
        //}

        if (scannerFound == false) {
            if (scannerProgram.regexProfilePath.test(scannerProgram.path)) {
                program.foundByModule = 'CUSTOM'

                new Modal({
                    heading: [
                        `<h5>[instantgram-light] ProfilePage downloader <span style="float:right">v${program.VERSION}</span></h5>`
                    ],
                    body: [
                        localize('index@profilepage_downloader_disabled')
                    ],
                    bodyStyle: 'text-align:center',
                    buttonList: [{
                        active: true,
                        text: 'Ok'
                    }]
                }).open()
            }
        } else {
            // Fix stuttering videos
            const updatedUrl = foundMediaUrl.replace(/\/\/[^/]+\.cdninstagram\.com/, "//scontent.cdninstagram.com")
            window.open(updatedUrl, '_blank')
        }

        if (program.foundByModule == undefined) {
            if (!process.env.DEV) {
                if (foundMediaType == MediaType.UNDEFINED) {
                    new Modal({
                        heading: [
                            `<h5>[instantgram-light] <span style="float:right">v${program.VERSION}</span></h5>`
                        ],
                        body: [
                            localize('index#program@alert_dontFound')
                        ],
                        bodyStyle: 'text-align:center',
                        buttonList: [{
                            active: true,
                            text: 'Ok'
                        }]
                    }).open()
                }
            }
        }
    })

    // Check everytime for an update on calling this
    if (!process.env.DEV) {
        Update(program.VERSION)
    }
} else {
    new Modal({
        heading: [
            `<h5>[instantgram-light] <span style="float:right">v${program.VERSION}</span></h5>`
        ],
        body: [
            localize('index@alert_onlyWorks')
        ],
        bodyStyle: 'text-align:center',
        buttonList: [{
            active: true,
            text: 'Ok'
        }]
    }).open()
}
/* =====  End of Program  ======*/