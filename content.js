/* ==========================================================
   EDIT ONLY THIS FILE. Replace every [PLACEHOLDER] with your own words.
   - Keep the quotes "" around text and the commas between items.
   - Inside a text, press \n\n for a new paragraph (letters in "Open when").
   - To ADD an item: copy one whole line/block of an existing item and paste it below it.
   - Use ’ or ' carefully: if your text has a straight apostrophe, use ’ instead.
   ========================================================== */
const CONTENT = {
  name: "Princess",
  nickname: "Baby",
  greeting: "Happy Birthday",
  tagline: "Because you exist, my world is a little more beautiful",
  openButton: "Open your surprise ♡",

  message: { title: "Happy Birthday to the girl who became one of the most beautiful parts of my life ❤️", paragraphs: [
    "Kanak, if I could give you one thing for your birthday, it would be the ability to see yourself through my eyes, even for just a minute. You would see how beautiful your smile is, how special your heart is, how your little habits make me smile, and how much happiness your existence brings into my life.
",
    "So today, I made you this little world. Every page, every message, every tiny surprise has a little piece of my heart in it. Take your time exploring it, Princess. This is my way of reminding you that you are loved, appreciated, and celebrated — not just today, but on all the ordinary days too. 💗"
  ]},

  special: { title: "Why you are so special", sub: "[OPTIONAL SUBTITLE]", cards: [
    // [ "card title", "card text" ]
    ["[REASON 1 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 2 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 3 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 4 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 5 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 6 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 7 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 8 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 9 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 10 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 11 TITLE]", "[WRITE YOUR MESSAGE HERE]"],
    ["[REASON 12 TITLE]", "[WRITE YOUR MESSAGE HERE]"]
  ]},

  story: { title: "Our story", sub: "[OPTIONAL SUBTITLE]", items: [
    { date: "[ADD DATE HERE]", title: "[MEMORY TITLE]", text: "[WRITE YOUR LONG PARAGRAPH HERE]", note: "[OPTIONAL SHORT NOTE]" },
    { date: "[ADD DATE HERE]", title: "[MEMORY TITLE]", text: "[WRITE YOUR LONG PARAGRAPH HERE]", note: "[OPTIONAL SHORT NOTE]" },
    { date: "[ADD DATE HERE]", title: "[MEMORY TITLE]", text: "[WRITE YOUR LONG PARAGRAPH HERE]", note: "" },
    { date: "[ADD DATE HERE]", title: "[MEMORY TITLE]", text: "[WRITE YOUR LONG PARAGRAPH HERE]", note: "[OPTIONAL SHORT NOTE]" },
    { date: "[ADD DATE HERE]", title: "[MEMORY TITLE]", text: "[WRITE YOUR LONG PARAGRAPH HERE]", note: "" }
  ]},

  little: { title: "Little things I love about you", sub: "Tap a card to read more", items: [
    // [ "short teaser", "full message shown when tapped" ]
    ["[SHORT COMPLIMENT 1]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 2]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 3]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 4]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 5]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 6]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 7]", "[FULL MESSAGE HERE]"],
    ["[SHORT COMPLIMENT 8]", "[FULL MESSAGE HERE]"]
  ]},

  openWhen: { title: "Open when...", sub: "Tap an envelope whenever you need it", items: [
    // [ "envelope title", "long message (use \n\n for new paragraphs)" ]
    ["Open when you miss me", "[WRITE YOUR MESSAGE HERE]"],
    ["Open when you’re sad", "[WRITE YOUR MESSAGE HERE]"],
    ["Open when you need a smile", "[WRITE YOUR MESSAGE HERE]"],
    ["Open when you doubt yourself", "[WRITE YOUR MESSAGE HERE]"],
    ["Open when you want to feel loved", "[WRITE YOUR MESSAGE HERE]"],
    ["Open when you need a reminder of how special you are", "[WRITE YOUR MESSAGE HERE]"]
  ]},

  notes: { title: "A collection of little notes", sub: "[OPTIONAL SUBTITLE]", items: [
    "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]",
    "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]",
    "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]",
    "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]", "[WRITE A SHORT NOTE HERE]"
  ]},

  wishes: { title: "The things I wish for you", sub: "[OPTIONAL SUBTITLE]", paragraphs: [
    "[WRITE A BIRTHDAY WISH OR HOPE FOR HER FUTURE]",
    "[WRITE ANOTHER WISH]",
    "[WRITE ANOTHER WISH]"
  ]},

  cake: { title: "Make a wish", sub: "[OPTIONAL SUBTITLE]",
    wishButton: "Make a wish", wishText: "Close your eyes and make a wish…",
    blowButton: "Blow out the candles", doneText: "Happy birthday! May your wish come true.",
    relightButton: "Relight the candles" },

  letter: { title: "My birthday letter", sub: "[OPTIONAL SUBTITLE]",
    openButton: "Open my letter", closeButton: "Fold the letter",
    opening: "Dear [YOUR NICKNAME FOR HER],",
    paragraphs: [ // aim for 1,000-1,500 words in total; add as many paragraphs as you like
      "[WRITE YOUR LETTER PARAGRAPH 1 HERE]",
      "[WRITE YOUR LETTER PARAGRAPH 2 HERE]",
      "[WRITE YOUR LETTER PARAGRAPH 3 HERE]",
      "[WRITE YOUR LETTER PARAGRAPH 4 HERE]"
    ],
    closing: "[YOUR CLOSING LINE, e.g. Forever yours,]", signature: "[YOUR NAME]" },

  surprises: { title: "Little surprises", sub: "Tap to discover", items: [
    // type can be: gift, heart, shower, float, secret, more
    { type: "gift", button: "Open the gift", note: "[WRITE YOUR GIFT MESSAGE HERE]" },
    { type: "heart", button: "Touch the heart", note: "[WRITE YOUR HIDDEN NOTE HERE]" },
    { type: "shower", button: "Shower of hearts", note: "" },
    { type: "float", button: "A tiny message", note: "[WRITE A TINY MESSAGE HERE]" },
    { type: "secret", button: "Unlock a secret", note: "[WRITE YOUR SECRET MESSAGE HERE]" },
    { type: "more", button: "One more thing...", note: "[WRITE YOUR ONE MORE THING HERE]" }
  ]},

  finale: { title: "Happy Birthday",
    paragraphs: ["[WRITE YOUR FINAL CLOSING PARAGRAPH HERE]"],
    signoff: "[YOUR FINAL SIGN-OFF, e.g. Always yours, NAME]", replayButton: "Replay the celebration" }
};
