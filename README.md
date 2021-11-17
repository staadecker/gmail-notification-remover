# Gmail Notification Remover

![Before and After Picture](/docs/before_and_after.jpg)

This simple Firefox extension helps me avoid distractions by removing Gmail notifications
from the browser tab title. I built this after learning about my behaviours and habits from the book [*Tiny Habits* by BJ Fogg](https://tinyhabits.com/book/).

## Installation

If you are interested in using this extension, email me at [machstg@gmail.com](mailto:machstg@gmail.com)
and I'll publish it to the Firefox Add-Ons Store. Alternatively, you can install it for yourself as follows.

1. Download the files

2. Go to [about:debugging](about:debugging)

3. On the *This Firefox* tab, click *Load Temporary Add-on*.

4. Select the `manifest.json` file you downloaded.

## Privacy

The extension only runs on `mail.google.com` webpages, and
the ONLY thing it does is modify the browser title. 
No data is ever collected or stored. You can read [the code](remove_notifications.js) yourself, it's only 20 lines.
