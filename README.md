# <img style="float: left; vertical-align: bottom; " width="35" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"> [instantgram] v2023.06.01 :kiss: Complete New
![GitHub release](https://img.shields.io/badge/release-v2023.06.01-green)

![badge](https://img.shields.io/badge/for-instagram-yellow.svg?style=flat-square)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

[Versão em Português =)](http://thinkbig-company.github.io/instantgram/lang/pt-br)

[instantgram] is a bookmarklet with the purpose of downloading Instagram images. It is tiny, simple, and doesn't require extensions or downloads. Just access [this link][1] and drag the [instantgram] button to the bookmark bar of your browser, navigate to instagram.com (web), open an Instagram post (photo) and click on the bookmarklet. That's all it takes!

### [:arrow_right: Bookmarklet][1]

![gif demo](img/demo.gif)

:bulb: We have completely rewritten instantgram. \
With this version we support all modern browsers that have ECMAScript 2015 (es6) support.

## Compatibility

|       Browser        |     Compatible?    |
| -------------------- | -------------------|
| Google Chrome        | :white_check_mark: |
| Mozilla Firefox*     | :white_check_mark: |
| Edge on chromium >=80 | :white_check_mark: |
| Edge**                | :warning:          |
| Internet Explorer 11 | :x: |
*_ Supported again on [instantgram] version >= 10.0.0
**_ apparently Edge doesn't allow you to drag a button to the bookmark bar


## Roadmap

- ~~a way of notify updates in [instantgram]~~ :heavy_check_mark: in v2.0.0
- ~~make a gif explaining the [instantgram]~~ :heavy_check_mark:
- ~~video :smirk_cat:~~ :heavy_check_mark: in v2.2.0

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for more information. :heart:

## Changelog
- v2023.06.01 - [instangram] Complete rewrite of instantgram changed the way this software detects images/videos.\
No more problems if Instagram changes their frontend!\
Added for every post/story a modal to easier select the needed image/video.\
Also it is now possible to click on download and it will starts donwloading instead of open a new tab.\
In the future, options will be introduced with which one can make personal settings that will be taken into account at the next call.
- v2023.04.12 - [instangram] Fixed issue #29 [Sound getting stripped from some videos]. \
Have done some spring cleaning.
- v2022.12.10 - [instangram] Fixed issue #27 [Stories completely nonfunctional]. \
Fixed some other bugs.
- v2022.10.28 - [instangram] Support for the latest backend version of instagram. \
New versioning.
Fixed stories video detection. #23
Fixed wrong order capturing. #24
- v12.1.0 - [instangram] Support for the latest backend version of instagram.
- v12.0.0 - [instangram] Rewrite of instantgram to support last backend of insta. \
Profile page bulk downloader dropped because insta deleted all api around them.
Maybe there is a possibility in the future but unfortunately not now.
- v11.1.0 - [instangram] Added default faster video detection, rewrite fallback blob video detection, fixed most bugs.
- v11.0.0 - [instangram] Now compatible with new Instagram layout/design. \
Bulk profile page downloader disabled because of instagram changed APIs, searching in future releases for a hot fix.
- v10.1.3 - [instangram] Fix saving videos on some post types.
- v10.1.2 - [instangram] Fix issue #17 can't save most types of videos anymore.
- v10.1.1 - [instangram] Fix profile page downloading doesn't work anymore.
- v10.1.0 - [instangram] New image detection algorithm. Image with highest percent in feed and visible in viewport will be grabed by the scanner.
- v10.0.6 - [instangram] Fix #15 Instantgram often grabs avatars/profile pics
- v10.0.5 - [instangram] Fix carousel not working
- v10.0.4 - [instangram] Fix reels not working.
- v10.0.3 - [instangram] Fix profile page downloading/compression calculation.
- v10.0.2 - [instangram] Complete rewrite of the Project to support Firefox again. \
By rewriting, we were also able to increase the speed noticeably. \
Fixed bug on profile page modal showed twice.
Fixed bug on some pages where nothing happens.
- v10.0.1 - [instangram] Complete rewrite of the Project to support Firefox again. \
By rewriting, we were also able to increase the speed noticeably. \
Fixed bug on some pages where nothing happens.
- v10.0.0 - [instangram] Complete rewrite of the Project to support Firefox again. \
By rewriting, we were also able to increase the speed noticeably.
- v9.0.0 - [instangram] Now you can download a whole user profile. \
But with limits it only works in Chrome, Opera, Safari. Firefox currently are not supported.  
- v8.1.1 - [instangram] Fix video are not downloadable in feed in due of commented out variable.
- v8.1.0 - [instangram] Re-designed video downloader to handle encrypted videos.
- v8.0.2 - [instangram] Fixed updater that had displayed an old version.
- v8.0.1 - [instangram] Added spanish language.
- v8.0.0 - [instangram] Migrate to typescript which has fixed many bugs.
- v7.1.2 - [instangram] Fix update dialog styling.
- v7.1.1 - [instangram] Fix video download on some situations.
- v7.1.0 - [instangram] Re-design update dialog.
- v7.0.1 - [instangram] Fix update handler.
- v7.0.0 - [instangram] Fix get highest image on every post or story.
- v6.0.0 - [instangram] Biggest Update ever! \
Added support for blob videos, means all videos can be downloaded again. \
Supports the new and old story layout. \
Replaced native browser dialog with own for nicer display. \
The removed update checker in version 4.0 is available again. \
This version should now work properly and display all errors in the console correctly.
- v5.2.0 - [instangram] Refactor Languages.
- v5.1.1 - [instangram] Fix set language: undefined in dev console.
- v5.1.0 - [instangram] Instagram changed their stories design to a new one. And this update adress this new design and make it compatible again.
- v5.0.0 - [instangram] We have completely rewritten instantgram. \
With this version we support all modern browsers that have ECMAScript 2015 (es6) support. 
- v4.0.0 - [instangram] now working again with full support of all media types also recognizes canvas images.\
Also it has now support for multiple images videos in any site feed or post with modal. 
- v2.4.0 - [instangram] now supports Stories.
- v2.3.0 - [instangram] now supports localization, both app and website. Initially it has en-US and pt-BR. You can help us translate [instantgram] for your language! Cool? Read [contributing](CONTRIBUTING.md) for more information.
- v2.2.0 - [instantgram] now supports video too! :movie_camera:
- After v2.0.0, [instantgram] has your data saved in `localStorage` and can be accessed entering `localStorage.getItem('instantgram')` in console inside instagram.com. If you can't access this item, you may be using a version before v2.0.0.


[1]:http://thinkbig-company.github.io/instantgram