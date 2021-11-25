# Wicked
[![wakatime](https://wakatime.com/badge/user/aee8792f-d01d-4fab-89d4-0b326512d9b2/project/c9187bb9-3a4b-402d-a309-0b33705436d1.svg)](https://wakatime.com/badge/user/aee8792f-d01d-4fab-89d4-0b326512d9b2/project/c9187bb9-3a4b-402d-a309-0b33705436d1)

A Work in Progress Multipurpose Discord Bot!

Requires Node 16.11.1 or higher.

## Features

### Owner
- [X] Eval
- [X] Restart

### Moderation
- [X] Kick
- [ ] Ban
- [ ] Mute

## Image
### SFW
- [X] Yui Hirasawa
- [ ] Inugami Korone
- [X] Rem
- [X] Yaoi
- [X] Catboy

### NSFW
- [X] Meru the Succubus
- [X] Yuri

## Action
- [X] Cuddle
- [X] Hug
- [X] Kiss
- [X] Lick
- [ ] Pat
- [ ] Slap
- [ ] Tickle

## Reaction
- [X] Smug
- [X] Clap
- [X] Nom
- [X] Stare

### Info
- [ ] Help
- [X] Invite
- [X] Server Info
- [ ] User Info

### Misc
- [X] Weather

### Util
- [X] Update Checker


## Steps:
1. Clone the project or download as zip
```bash
git clone git@github.com:JesseBots/Wicked.git
```

2. Go to the project directory
```bash
cd Wicked
```

3. Run `npm i`
```bash
npm i
```

4. Add your info into `slappey.json` or use .env
```json
{
  "name": "Wicked", // Auto-generated by Slappey.
  "language": "javascript", // Auto-generated by Slappey.
  "manager": "npm", // Auto-generated by Slappey.
  "token": "", // Your bot token.
  "prefix": "w ", // The prefix of the bot, e.g. w help
  
  "ownerID": "", // Your Discord ID.
  // You can get your Discord ID by enabling Developer mode on Discord,
  // Then right clicking on your name and clicking copy ID.
  "debug": true, // Enable/Disable extra debug info.
  // I recommend keeping this on true.
  "checkForUpdates": true // Enable/Disable checking for updates of the source.
}
```

5. Run the bot
```bash
npm run start # normal
npm run dev   # dev
```

## For Developers
Install [Slappey](https://github.com/stuyy/slappey) globally
```bash
npm install -g slappey
```

#### Adding commands with [Slappey](https://github.com/stuyy/slappey)
- You can type `slappey` and select **Generate** to generate a command, or use the `slappey gen` command.
- It will ask you for a name, and then a category. This will generate all commands in the `src/commands` folder, in the correct category.
- You can also generate a command by typing slappey gen command. This will prompt you for a command name and category.

#### Adding events with [Slappey](https://github.com/stuyy/slappey)
- You can generate events by running `slappey gen event`, this will prompt you to select which events you would like to generate.
- To select event(s), press space bar and use the up and down arrow keys to navigate. Hit enter when you're done and your event files will be generated in the `src/events` folder.

## Documentation
- [Slappey (Discord Bot Project Generator)](https://github.com/stuyy/slappey)

### API's
- [catboys.com](https://catboys.com/api) ([js wrapper](https://github.com/Catboys-Dev/catboys-js))
- [nekos.life]() ([js wrapper](https://github.com/Nekos-life/nekos-dot-life))
- [rra.ram.moe](https://rra.ram.moe/i/r?type=)
- [api.shashumga.club](https://api.shashumga.club/) ([js wrapper](https://github.com/JesseBots/shashumga-dot-club))