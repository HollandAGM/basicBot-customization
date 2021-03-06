(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'pinkguy',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/0ccdx6C.png");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "B0ssBOT",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: true, // true or false
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 30,
        bouncerPlus: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: false,
        commandCooldown: 5,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["history", "This song is already played, see history. "],
            ["sound", "The song you played had no sound. "],
            ["nsfw", "The song you played contained NSFW visuals. "],
            ["length", "The song you played exceeds the maximum video length, which is 7 minutes. "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 50,
        afkRankCheck: "user",
        motdEnabled: false,
        motdInterval: 5,
        motd: null,
        filterChat: true,
        etaRestriction: true,
        welcome: false,
        opLink: null,
        rulesLink: "http://bit.ly/AGMrules",
        themeLink: "http://bit.ly/AGMrules",
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: ["[Automatic message] Please consider reading our rules: http://bit.ly/AGMrules", "[Automatic message] If you lost your place in the waitlist type !dc", "[Automatic message] If you are new to plug.dj these links might help http://bit.ly/1gzzokK / http://plugcubed.net/ / http://www.emoji-cheat-sheet.com/ / http://maxkunowski.com/plug/", "[Automatic message] As a reminder, this is an English only chat, thank you for your understanding", "[Automatic message] Are you enjoying your time in Anime | Games | Music? Help us grow by bringing a friend with you to this room!", "[Automatic message] Do you have any suggestions or complaints? http://bit.ly/SuggestionsOrComplaints"],
        messageInterval: 7,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://raw.githubusercontent.com/HollandAGM/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://raw.githubusercontent.com/HollandAGM/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
