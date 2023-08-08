---
title: 'MacOS'
summary: 'Good choices for a good operating system.'
---

Choosing an operating system is sort of like choosing 
a class or weapon in a video game: at the end of the day, 
you're going to be dealing damage to your enemies, but 
the ways you go about doing things and the abilities
you have at your disposal are going to be different. Of 
course, most people use the OS that comes with their device.

I happen to have a MacBook, and so the OS I use the most daily
is MacOS. And while most people might think of a coffeeshop writer
typing away on their Google Doc in a Starbucks when they hear the
word Mac, under the hood, MacOS is stil Unix, and this makes it 
powerful. 

I've tried Linux, and I found the lack of a "middle ground" of
compatibility and a constant need of maintenance to be rather
irritating. But I've taken what I liked from it (tiling window
managers, good terminal emulators, scripting, etc.) or what I 
learned how to do while using it and have ported stuff over 
to my Mac. So here's what I personally use, and recommend:

## Must Have Utilities
 - ``yabai`` and ``skhd``. These two pieces of software have been absolute life savers, making window management a BREEZE. Throwing windows, moving them, resizing them, deleting them, and floating them all without having to touch the mouse once. Easily scriptable, and ``skhd`` in particular is very very useful for having global hotkeys do whatever you want (because they call command line commands). 
 - A good terminal emulator. I use ``kitty``, which is also easily scriptable and provides its own internal tiling. 
 - A package manager. While it's not great (slow and annoying sometimes), ``brew`` is what gets the job done on Mac. 
 - Firefox. Doesn't drain your battery or eat your RAM, but also actually has extensions. Best middle ground. Use Vimium for a really good experience. 
 - ``gnucoreutils``! Install from ``brew``. MacOS (yielding to its heritage) comes with an old version of the BSD ``coreutils`` so that might trip some people up. 

## Terminal Software
I kind of live in the terminal sometimes. But it does make things a lot faster! 
 - ``neovim``. My favorite text editor of all time. Does one thing (text editing) and does it very very well. My full (documented) configuration is on GitHub if you want to look!
 - ``neomutt``. I like viewing my email in the terminal because it's way faster than opening GMail on the web. Also, I get to compose mails in ``neovim``! From a pure informational standpoint I also don't really like seeing aggressive CSS or HTML emails in general. 
 - ``ripgrep``. Better ``grep`` than the regular GNU one. 
 - ``lazygit``. Really good ``git`` TUI. Makes staging files really easy without having to open a whole other window. Has a ``neovim`` plugin as well. 
 - ``pandoc``. Converts many text / document file formats into others. Pretty useful.
 - ``oh-my-zsh``. Turns the borin regular ``zsh`` into one with syntax highlighting and themeing options. 
## Very Helpful Utilities
 - ``sketchybar``. Really nice statusbar for Mac, kind of like what ``polybar`` is on Linux. Extremely extensible through shell script. 
 - Hammerspoon. Can set powerful key remaps and input field controls. 
 - LibreOffice. Better than MS Suite because it boots up way faster and doesn't make you deal with all the licensing stuff. It's open source too. 
 - Raycast. Much more powerful version of Spotlight (the Mac search bar thing). The free version is more than powerful enough for anything I'm doing. Also provides a tiny scratch note you can toggle which is super helpful when writing or planning something out. 
 - ``zathura``. The best PDF viewer. Super lightweight and has ``vim``-style navigation bindings. 


## Stuff I Use
These are things that everyone might not need, but are really helpful if you do need them. 
- Anki! The best flashcard program out there period. I use it for language learning, but it's just such a good piece of software in general. 
- GNU FileZilla: FTP client. Works really well and isn't all in your face about anything. 
- OpenEmu: Great emulator aggregate for Mac that makes it very easy to just drag and drop ROMs. Kind of like RetroArch. 
- Goodnotes 5: This one's paid, but I use it on my iPad and having the notes sync to my Mac to look at on my computer is really helpful sometimes.
- Reaper: Really good DAW that's also free (unlimited trial). 
- Bonsai. Oriented towards researchers or people who constantly need to Google stuff and reference it back. Overlaid browser that toggles with a hotkey. Really useful. 
- Folx. Free torrent client. 
- IINA. A better version of ``mpv`` basically. 