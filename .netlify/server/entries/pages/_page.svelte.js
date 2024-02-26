import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
const global = "";
const mazeSwapImg = "/_app/immutable/assets/mazeswap.488b50ec.png";
const projects = [
  {
    title: "This Portfolio site",
    date: "04 sep. 2023",
    discription: "The site you are currently visiting is version 3 of my personalized portfolio website. I had the design already sitting for years, and I always like to improve on my already nice portfolio site. This was the first time using Svelte to make something and it realy suprized me how much details and animation are now at my fingertips that where not possible without! Like the keyframing of the earth and moon on the top of this page took me ages but looks so nice now!",
    comment: "Version 3",
    languages: ["CSS", "TS", "Svelte"],
    fakeFileName: "Portfolio",
    url: "github.com/Twan-Reijinga/portfolio-site",
    cardType: "full"
  },
  {
    title: "Metis GameJam 2023",
    date: "14 jul. 2023",
    discription: "...",
    languages: ["JS", "P5"],
    fakeFileName: "MetisJam",
    url: "https://github.com/roembol2000/coderclass-gamejam-2023",
    cardType: "full"
  },
  {
    title: "MazeSwap",
    date: "09 jul. 2023",
    discription: "MazeSwap is a game made for the GMTK GameJam by Twan and Eliott. The GMTK GameJam is a online event where programmer all over the world build cool games in the span of 48 hours. The theme on the 2023 GMTK GameJam was ROLES REVERSED. MazeSwap is a game played by two people on the same keyboard. In MazeSwap you either have the role of hunter or runner. As the Runner you must get to the other side of the maze and press the button to locate the exit. Stay out of the way of the Hunter, or they will take your place. As the Hunter you must get close to the Runner and swap roles with them, thus becoming the Runner and turning the Runner into the Hunter.",
    comment: "GMTK GameJam 2023",
    languages: ["JS", "P5"],
    fakeFileName: "MazeSwap",
    img: mazeSwapImg,
    url: "github.com/Twan-Reijinga/MazeSwap",
    cardType: "full"
  },
  {
    title: "Slidify",
    date: "05 jul. 2023",
    discription: "The Slidify is a device meant to easily control music wirelessly from a mac/linux computer. This solves a number of problems. First, you never have to keep Spotify (or other music apps) open on your computer again, because all the info can be read right from the Slidify's display. This can be handy to save screen space. Another function is to control music while your monitor is off, for when you want to work focused without distraction from your computer, for example.",
    comment: "Raspberry Pi music control!",
    languages: ["Python"],
    fakeFileName: "Slidify",
    url: "github.com/Twan-Reijinga/slidify",
    cardType: "full"
  },
  {
    title: "UvA Quatum Masterclass",
    date: "14 feb. 2023",
    cardType: "small"
  },
  {
    title: "App for Novanta",
    date: "10 feb. 2023",
    discription: "Novata is a Hotel in the Casentino Hills in Italy. In a group of three we made an app that solves two big problems for the hotel. Firstly, there are minibars all over the village owned by Novanta where people could take drinks from. In the app you could register which item you took on you name so that you can get the bill later. Secondly, the app functioned as a sign up for experiences the hotel provided, like getting a massage or renting a bike.",
    languages: ["React Native", "Docker", "TS", "Postgress"],
    fakeFileName: "Slidify",
    url: "none",
    cardType: "full"
  },
  {
    title: "Orbital Assist Game",
    date: "08 jul. 2022",
    discription: "Orbital Assist is a game made by Adam, Roemer, Thijs and Twan for the GameJam of the Coderclass at Metis Montessori Lyceum 2022. On 8 July, everyone had seven hours to make a game that fits the theme 30 seconds. This game won in the category originality.",
    comment: "1st for originality at the Metis Gamejam 2022",
    languages: ["JS", "P5"],
    fakeFileName: "OrbitalAssist",
    url: "github.com/Twan-Reijinga/orbital-assist-game",
    cardType: "full"
  },
  {
    title: "Multiplayer pixelnary",
    date: "07 jul. 2022",
    discription: "...",
    languages: ["JS", "P5"],
    fakeFileName: "Slidify",
    url: "github.com/Twan-Reijinga/multiplayer-pixelnary",
    cardType: "full"
  },
  {
    title: "AI learns to drive",
    date: "22 jun. 2022",
    discription: "I made my own machine learning algorithm with reinforcement learning in JavaScript to let the AI drive a car in your own custom build circuit. With this project I learned how to create a network with nodes and worked with weights and biases that can mutate depending on a feedforward algorithm.",
    comment: "First AI project!",
    languages: ["JS", "P5"],
    fakeFileName: "AiLearnsToDrive",
    url: "github.com/Twan-Reijinga/AI-learns-to-drive",
    cardType: "full"
  },
  {
    title: "VU full C++ course",
    comment: "Univerity course finished 3 years in advance",
    date: "16 dec. 2021",
    cardType: "small"
  },
  {
    title: "Coderclass basic certificate",
    comment: "finished in 2.5 years",
    date: "23 jun. 2022",
    cardType: "small"
  },
  {
    title: "Problem Solving badge",
    date: "19 feb. 2021",
    discription: "...",
    languages: ["Python"],
    fakeFileName: "ProblemSolving",
    url: "github.com/Twan-Reijinga/problem-solving",
    cardType: "full"
  },
  {
    title: "Shopinglist telegram bot",
    date: "28 jan. 2021",
    discription: "...",
    languages: ["Python"],
    fakeFileName: "ProblemSolving",
    url: "github.com/Twan-Reijinga/shared-shoppinglist-bot-telegram",
    cardType: "full"
  },
  {
    title: "Internship Grafitiy",
    date: "15 dec. 2021",
    discription: "On my sniff internship I was able to develop an error dashboard for web and app development agency Grafity, who helped the development of sites like Bol.com. With this program I made, the server can send a post request if there is a problem with the server. The user will then receive a push notification on his phone, an email with the error and can view the dashboard for more information.",
    comment: "first internship!",
    languages: ["JS"],
    fakeFileName: "ErrorDashboard",
    url: "github.com/Twan-Reijinga/Error-dashboard",
    cardType: "full"
  },
  {
    title: "Snake game",
    date: "09 nov. 2020",
    discription: "...",
    comment: "first Browser Game!",
    languages: ["JS", "P5"],
    fakeFileName: "Snake",
    url: "github.com/Twan-Reijinga/snake-game",
    cardType: "full"
  },
  {
    title: "Smart Light Simon Says",
    date: "21 jan. 2020",
    discription: "A game made on behalf of game development agency Q42 with 5 philips hue lights that are controlled with a browser program that plays tones and light up lamps. As a player, you need to press the right button combination. Each time you finish correctly one tone will be added. This project was made in a group of three and was meant for a school with death and blind childeren to play with.",
    languages: ["JS"],
    fakeFileName: "SimonSays",
    url: "github.com/Twan-Reijinga/simon-says-with-smart-lights",
    cardType: "full"
  },
  {
    title: "Unity Roll a Ball",
    date: "21 oct. 2020",
    discription: "First unity game where you control a ball that has to roll through a parcour of abstacles. Later that year I followed up with a plane flying game in unity.",
    languages: ["Unity"],
    fakeFileName: "RollABall",
    url: "github.com/Twan-Reijinga/unity-roll-a-ball-game",
    cardType: "full"
  },
  {
    title: "First Portfolio Website",
    date: "23 dec. 2019",
    discription: "My first version of a portfolio website.",
    languages: ["CSS", "JS"],
    fakeFileName: "Portfolio",
    url: "github.com/Twan-Reijinga/portfolio",
    cardType: "full"
  }
  // {
  // 	title: 'slidify',
  // 	date: '20 jul. 2025',
  // 	discription:
  // 		"The Slidify is a device meant to easily control music wirelessly from a mac/linux computer. This solves a number of problems. First, you never have to keep spotify (or other music apps) open on your computer again, because all the info can be read right from the Slidify's display. This can be handy to save screen space. Another function is to control music while your monitor is off, for when you want to work focused without distraction from your computer, for example.",
  // 	fakeFileName: 'Slidify',
  // 	cardType: 'full'
  // }
];
const languages = [
  { text: "TS", color: "#007acc", textColor: "#fff" },
  { text: "JS", color: "#f0db4f", textColor: "#000" },
  { text: "P5", color: "#ed225d", textColor: "#fff" },
  { text: "Python", color: "#0db7ed", textColor: "#000" },
  { text: "C++", color: "#007acc", textColor: "#fff" },
  { text: "React Native", color: "#61dbfb", textColor: "#000" },
  { text: "Docker", color: "#0db7ed", textColor: "#000" },
  { text: "Postgress", color: "#316192", textColor: "#fff" },
  { text: "MongoDB", color: "#00694A", textColor: "#fff" },
  { text: "Svelte", color: "#FF3E00", textColor: "#fff" },
  // { text: 'C#', color: '#984D94', textColor: '#fff' },
  { text: "CSS", color: "#006EB6", textColor: "#fff" },
  { text: "ELM", color: "#5C6278", textColor: "#fff" },
  { text: "Unity", color: "#6D6D6D", textColor: "#fff" },
  { text: "R", color: "#1F63B6", textColor: "#fff" }
];
const SpaceObjects_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".world.svelte-a75fpi,.moon.svelte-a75fpi{position:fixed;display:block;background-size:contain;background-repeat:no-repeat;z-index:-1}.world.svelte-a75fpi{background-image:url('$lib/assets/images/world.gif')}.moon.svelte-a75fpi{background-image:url('$lib/assets/images/moon.gif')}",
  map: null
};
const SpaceObjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return ` ${``}`;
});
const SpaceBackground_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".dots.svelte-azkzah .svelte-azkzah,.circles.svelte-azkzah .svelte-azkzah,.halfCircles.svelte-azkzah .svelte-azkzah{animation:svelte-azkzah-shapes 1}.dots.svelte-azkzah .svelte-azkzah{background-color:#fff}.dots.svelte-azkzah .small.svelte-azkzah{padding:0.3vh 0.3vh 0 0}.dots.svelte-azkzah .medium.svelte-azkzah{padding:0.6vh 0.6vh 0 0}.dots.svelte-azkzah .large.svelte-azkzah{padding:0.9vh 0.9vh 0 0}.circles.svelte-azkzah .small.svelte-azkzah{border:1vh solid #06cb79;width:5vh;height:5vh}.circles.svelte-azkzah .medium.svelte-azkzah{border:1.3vh solid #06cb79;width:7vh;height:7vh}.halfCircles.svelte-azkzah .svelte-azkzah{background-image:url('$lib/assets/images/halfCircle.svg')}.halfCircles.svelte-azkzah .small.svelte-azkzah{width:5vh;height:5vh}.halfCircles.svelte-azkzah .medium.svelte-azkzah{width:7vh;height:7vh}.small.svelte-azkzah.svelte-azkzah,.medium.svelte-azkzah.svelte-azkzah,.large.svelte-azkzah.svelte-azkzah{position:fixed;z-index:-1;border-radius:50%}@keyframes svelte-azkzah-shapes{0%{top:-100vh;transform:rotate(1080deg)}85%{top:0vh}}",
  map: null
};
const SpaceBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `${``} ${validate_component(SpaceObjects, "SpaceObjects").$$render($$result, {}, {}, {})}`;
});
const textStyles = "";
const TitleSubtitles_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".fixedBox.svelte-1iobs23{position:fixed;width:40%;max-width:800px}.titleBox.svelte-1iobs23{margin-right:15%;padding:0 2%;background-color:#06cb79;text-align:center}h1.svelte-1iobs23,h2.svelte-1iobs23,h4.svelte-1iobs23{white-space:nowrap}h2.svelte-1iobs23{padding-right:12%;text-align:right}h4.svelte-1iobs23{text-align:right;width:100%}@media screen and (max-width: 750px){.fixedBox.svelte-1iobs23{background-color:#162632;width:100%;padding:0 20% 10px 20%}}",
  map: null
};
const TitleSubtitles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle = "" } = $$props;
  let { comment = "" } = $$props;
  let { fontSize } = $$props;
  let { minY = -1 } = $$props;
  let { maxY = Infinity } = $$props;
  let { subtitleAfterDot = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.minY === void 0 && $$bindings.minY && minY !== void 0)
    $$bindings.minY(minY);
  if ($$props.maxY === void 0 && $$bindings.maxY && maxY !== void 0)
    $$bindings.maxY(maxY);
  if ($$props.subtitleAfterDot === void 0 && $$bindings.subtitleAfterDot && subtitleAfterDot !== void 0)
    $$bindings.subtitleAfterDot(subtitleAfterDot);
  $$result.css.add(css$a);
  return ` ${``}`;
});
const ScrollText_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".textBox.svelte-16ae9yn{position:fixed;bottom:5vh;left:50%;transform:translate(-50%)}",
  map: null
};
const ScrollText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fontSize } = $$props;
  let { opacity } = $$props;
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  $$result.css.add(css$9);
  return `<div class="textBox svelte-16ae9yn" style="${"opacity:" + escape(opacity, true)}"><h4 style="${"font-size: " + escape(fontSize / 3, true) + "px"}">// Scroll to explore</h4> </div>`;
});
const Subject_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".horizontal.svelte-s5jeed.svelte-s5jeed{display:flex;justify-content:right}.imageHolder.svelte-s5jeed.svelte-s5jeed{background-image:var(--image);background-color:#fff;border-radius:20%;transform:rotate(45deg)}.horizontal.svelte-s5jeed h3.svelte-s5jeed{padding-left:5%;line-height:1.5}.image.svelte-s5jeed.svelte-s5jeed{background-position:center center;width:100%;height:100%;background-size:contain;background-repeat:no-repeat;transform:rotate(-45deg)}.programming.svelte-s5jeed.svelte-s5jeed{background-image:url('$lib/assets/images/programming.png')}.experience.svelte-s5jeed.svelte-s5jeed{background-size:70%;background-image:url('$lib/assets/images/experience.png')}",
  map: null
};
const Subject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { image } = $$props;
  let { fontSize } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  $$result.css.add(css$8);
  return `  <div class="horizontal svelte-s5jeed"><div class="imageHolder svelte-s5jeed" style="${"width: " + escape(fontSize * 1.5, true) + "px; height: " + escape(fontSize * 1.5, true) + "px; box-shadow: " + escape(fontSize / 4, true) + "px " + escape(-fontSize / 4, true) + "px #00000099;"}"><div class="${"image " + escape(image, true) + " svelte-s5jeed"}"></div></div> <h3 style="${"font-size: " + escape(fontSize, true) + "px;"}" class="svelte-s5jeed">${escape(text)}</h3></div> `;
});
const Language_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".card.svelte-josd25{padding:1% 5%;margin:0.5% 0.5%;background-color:#000;border-radius:100em}h1.svelte-josd25{color:#fff;text-align:right}",
  map: null
};
const Language = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { color } = $$props;
  let { textColor } = $$props;
  let { fontSize } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  $$result.css.add(css$7);
  return `<div class="card svelte-josd25" style="${"background-color: " + escape(color, true) + "; box-shadow: " + escape(fontSize / 3, true) + "px " + escape(fontSize / 3, true) + "px 10px #00000040;"}"><h1 style="${"color: " + escape(textColor, true) + "; font-size: " + escape(fontSize, true) + "px;"}" class="svelte-josd25">${escape(text)}</h1> </div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".aboutBox.svelte-1wh8h9o.svelte-1wh8h9o{padding:5%;top:0}.aboutBox.svelte-1wh8h9o h3.svelte-1wh8h9o{top:0;text-align:right}.languageCards.svelte-1wh8h9o.svelte-1wh8h9o{margin-top:2vh;display:flex;flex-wrap:wrap;justify-content:right}h3.svelte-1wh8h9o.svelte-1wh8h9o{padding-bottom:5vh}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fontSize } = $$props;
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  $$result.css.add(css$6);
  return ` <div class="aboutBox svelte-1wh8h9o"><h3 style="${"font-size: " + escape(fontSize / 2.2, true) + "px"}" class="svelte-1wh8h9o"><span data-svelte-h="svelte-li9x7h">Programming</span> is, apart from <span data-svelte-h="svelte-1eooep1">skiing</span>,<br>
		the greatest thing there is.<br>
		Besides programming, you can find<br>
		me <span data-svelte-h="svelte-vfoid6">rowing</span> on the Amstel River or<br>
		help kids make <span data-svelte-h="svelte-1c048dr">robots</span> at NewTechKids.<br></h3> ${validate_component(Subject, "Subject").$$render(
    $$result,
    {
      text: "Most used languages",
      fontSize: fontSize / 2.2,
      image: "programming"
    },
    {},
    {}
  )}  <div class="languageCards svelte-1wh8h9o">${each(languages, (language) => {
    return `${validate_component(Language, "Language").$$render(
      $$result,
      {
        text: language.text,
        color: language.color,
        textColor: language.textColor,
        fontSize: fontSize / 3
      },
      {},
      {}
    )}`;
  })}</div>  </div>`;
});
const GithubButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".buttonBox.svelte-1obo5yz.svelte-1obo5yz{cursor:pointer;text-decoration:none;transition:all 0.2s}.button.svelte-1obo5yz.svelte-1obo5yz{transform:skew(-30deg);border:1px solid #fff;padding:5px 20px;margin-top:-38px;background-color:#ffffff00;z-index:1;transform-style:preserve-3d;transition:all 0.2s}.shadow.svelte-1obo5yz.svelte-1obo5yz{width:100%;height:34px;margin-top:4px;margin-left:10px;background-color:#06cb79;transform:skew(-30deg);z-index:-1;transition:all 0.2s}.buttonBox.svelte-1obo5yz.svelte-1obo5yz:hover{margin:4px -10px -4px 10px}.buttonBox.svelte-1obo5yz:hover .shadow.svelte-1obo5yz{transform:skew(-30deg);margin:0}.buttonBox.svelte-1obo5yz:hover .button.svelte-1obo5yz{margin-top:-34px}h4.svelte-1obo5yz.svelte-1obo5yz{white-space:nowrap;transform:skew(30deg)}",
  map: null
};
const GithubButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$5);
  return `<a class="buttonBox svelte-1obo5yz"${add_attribute("href", url, 0)} target="_blank"><div class="shadow svelte-1obo5yz"></div> <div class="button svelte-1obo5yz" data-svelte-h="svelte-u3ogdv"><h4 class="svelte-1obo5yz">// View Github</h4></div> </a>`;
});
const TimelineCard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".card.svelte-11teyrp.svelte-11teyrp{display:flex;flex-direction:row-reverse}article.svelte-11teyrp.svelte-11teyrp{width:100%;max-width:900px;background-color:#121e28;border:2px solid #fff;margin-top:1vh;padding:0.5vh 2.5%}.line.svelte-11teyrp.svelte-11teyrp{position:absolute;margin-top:calc(1.5vh + 15px);margin-right:calc(-1.2% - 1.25vh - 3px);width:calc(1.2% + 1.25vh + 3px);height:2px;background-color:#fff}.dot.svelte-11teyrp.svelte-11teyrp{position:absolute;border-radius:50%;width:1.5vh;height:1.5vh;background-color:#162632;box-shadow:inset 0 0 0 0.3vh #06cb79;margin-top:calc(1vh + 14px);margin-right:calc(-1.2% - 1.25vh - 0.75vh - 3px);z-index:2}.activated.svelte-11teyrp.svelte-11teyrp{background-color:#06cb79}.header.svelte-11teyrp.svelte-11teyrp{display:flex;align-items:center;padding:0.25vh 1%;border-bottom:2px solid #fff}.minimized.svelte-11teyrp.svelte-11teyrp{border:none}.minimized.svelte-11teyrp h3.svelte-11teyrp{text-align:right}.main.svelte-11teyrp.svelte-11teyrp{padding:5%}.x.svelte-11teyrp.svelte-11teyrp{width:20px;height:20px;background-image:url('$lib/assets/images/x.svg');background-position:center center;background-size:contain;filter:invert(100%)}.grid.svelte-11teyrp.svelte-11teyrp{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));grid-gap:30px;margin-top:15px}.projectImg.svelte-11teyrp.svelte-11teyrp{min-width:90px;min-height:100px;background-position:center center;background-repeat:no-repeat;background-size:contain;width:100%}h3.svelte-11teyrp.svelte-11teyrp{text-align:center;width:100%}.out.svelte-11teyrp.svelte-11teyrp{color:#06cb79}.footer.svelte-11teyrp.svelte-11teyrp{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;align-items:center;padding-top:20px}.date.svelte-11teyrp.svelte-11teyrp{white-space:nowrap}",
  map: null
};
const TimelineCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  let { discription = "" } = $$props;
  let { fakeFileName = "" } = $$props;
  let { img = "" } = $$props;
  let { url } = $$props;
  let { activated } = $$props;
  let { cardType } = $$props;
  let cardState = "maximized";
  let { clientHeight = 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.discription === void 0 && $$bindings.discription && discription !== void 0)
    $$bindings.discription(discription);
  if ($$props.fakeFileName === void 0 && $$bindings.fakeFileName && fakeFileName !== void 0)
    $$bindings.fakeFileName(fakeFileName);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.activated === void 0 && $$bindings.activated && activated !== void 0)
    $$bindings.activated(activated);
  if ($$props.cardType === void 0 && $$bindings.cardType && cardType !== void 0)
    $$bindings.cardType(cardType);
  if ($$props.clientHeight === void 0 && $$bindings.clientHeight && clientHeight !== void 0)
    $$bindings.clientHeight(clientHeight);
  $$result.css.add(css$4);
  return `<div class="card svelte-11teyrp"><div class="${["dot svelte-11teyrp", activated ? "activated" : ""].join(" ").trim()}"></div> <div class="line svelte-11teyrp"></div> <article class="svelte-11teyrp">${cardType == "full" && cardState == "maximized" ? `<div class="header svelte-11teyrp"><button class="x svelte-11teyrp"></button> <h3 class="svelte-11teyrp">${escape(title)}</h3></div> <div class="main svelte-11teyrp"><h5 class="command">[twan@arch]$ head ${escape(fakeFileName)}.md</h5> <div class="grid svelte-11teyrp"><h5 class="out svelte-11teyrp">${escape(discription)}</h5> ${img !== "" ? `<div class="projectImg svelte-11teyrp" style="${"background-image: url(" + escape(img, true) + ")"}"></div> ` : ``}</div> <div class="footer svelte-11teyrp"><h4 class="date svelte-11teyrp">// ${escape(date)}</h4> ${url !== "none" ? `${validate_component(GithubButton, "GithubButton").$$render($$result, { url: "https://" + url }, {}, {})}` : ``}</div></div>` : `${cardType == "small" || cardState == "minimized" ? `<div class="header minimized svelte-11teyrp"><h4 class="date svelte-11teyrp">// ${escape(date)}</h4> <h3 class="svelte-11teyrp">${escape(title)}</h3></div>` : ``}`}</article> </div>`;
});
const TimelineLine_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".center.svelte-8ibm6w{display:flex;flex-direction:column;padding:0 3%}.line.svelte-8ibm6w{position:relative;width:2px;background-color:#fff;margin:0 calc(50% - 1px)}.circle.svelte-8ibm6w{border:0.5vh solid #06cb79;background-color:#162632;border-radius:50%;width:2.5vh;height:2.5vh;z-index:1}.dot.svelte-8ibm6w{background-color:#fff;position:absolute;margin:0 0.75vh;padding:0.5vh;border-radius:50%}",
  map: null
};
const TimelineLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fontSize } = $$props;
  let { height } = $$props;
  let { minH } = $$props;
  let { maxH } = $$props;
  let y;
  let h;
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.minH === void 0 && $$bindings.minH && minH !== void 0)
    $$bindings.minH(minH);
  if ($$props.maxH === void 0 && $$bindings.maxH && maxH !== void 0)
    $$bindings.maxH(maxH);
  $$result.css.add(css$3);
  return ` <div class="center svelte-8ibm6w">${y > minH && y < maxH ? `<span class="dot svelte-8ibm6w" style="${"margin-top: " + escape(fontSize - h * 75e-4 + y - h * 1.25, true) + "px"}"></span>` : ``} <span class="circle svelte-8ibm6w" style="${"margin-top: " + escape(fontSize - h * 0.0125, true) + "px"}"></span> <div class="line svelte-8ibm6w" style="${"height: " + escape(height, true) + "px"}"></div> <span class="circle svelte-8ibm6w"></span> </div>`;
});
const Timeline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1js5ehq{display:flex;padding:5%;top:0}.projectsBox.svelte-1js5ehq{width:100%}.cards.svelte-1js5ehq{display:flex;flex-direction:column;margin-top:2vh}",
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fontSize } = $$props;
  let { minH } = $$props;
  let { lastScrolledItem = 0 } = $$props;
  let { clientHeight } = $$props;
  let clientHeights = Array(3);
  let maxH;
  let y;
  let h;
  function getScrollDistanceToDot(item) {
    let distance = minH + h * 0.045 + 30;
    for (let i = 0; i < item; i++) {
      distance += clientHeights[i] + h * 0.01 + 4;
    }
    return distance;
  }
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.minH === void 0 && $$bindings.minH && minH !== void 0)
    $$bindings.minH(minH);
  if ($$props.lastScrolledItem === void 0 && $$bindings.lastScrolledItem && lastScrolledItem !== void 0)
    $$bindings.lastScrolledItem(lastScrolledItem);
  if ($$props.clientHeight === void 0 && $$bindings.clientHeight && clientHeight !== void 0)
    $$bindings.clientHeight(clientHeight);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = ` <div class="container svelte-1js5ehq"><div class="projectsBox svelte-1js5ehq">${validate_component(Subject, "Subject").$$render(
      $$result,
      {
        text: "Projects & Expience",
        image: "experience",
        fontSize: fontSize / 2.2
      },
      {},
      {}
    )} <div class="cards svelte-1js5ehq">${each(projects, (project, i) => {
      return `${validate_component(TimelineCard, "TimelineCard").$$render(
        $$result,
        {
          title: project.title,
          date: project.date,
          discription: project.discription,
          fakeFileName: project.fakeFileName,
          img: project.img,
          url: project.url,
          cardType: project.cardType,
          activated: y > getScrollDistanceToDot(i),
          clientHeight: clientHeights[i]
        },
        {
          clientHeight: ($$value) => {
            clientHeights[i] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div></div> ${validate_component(TimelineLine, "TimelineLine").$$render(
      $$result,
      {
        fontSize: fontSize * (15 / 44),
        height: clientHeight,
        minH,
        maxH
      },
      {
        height: ($$value) => {
          clientHeight = $$value;
          $$settled = false;
        },
        minH: ($$value) => {
          minH = $$value;
          $$settled = false;
        },
        maxH: ($$value) => {
          maxH = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".socialContainer.svelte-1gujpkl{position:fixed;top:60vh;right:10%}.social.svelte-1gujpkl{margin-bottom:20px;display:flex}.linkedInLogo.svelte-1gujpkl,.githubLogo.svelte-1gujpkl{background-position:center center;width:100%;height:100%;background-size:contain;background-repeat:no-repeat;width:75px;aspect-ratio:1}.linkedInLogo.svelte-1gujpkl{background-image:url('$lib/assets/images/LinkedIn.png')}.githubLogo.svelte-1gujpkl{background-image:url('$lib/assets/images/Github.svg')}h4.svelte-1gujpkl{font-weight:500;margin-left:20px;line-height:75px}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { minY } = $$props;
  if ($$props.minY === void 0 && $$bindings.minY && minY !== void 0)
    $$bindings.minY(minY);
  $$result.css.add(css$1);
  return ` ${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".centered.svelte-1klloww.svelte-1klloww{display:flex;flex-direction:column;justify-content:center;align-items:center}.left.svelte-1klloww.svelte-1klloww{height:100vh}.right.svelte-1klloww.svelte-1klloww{margin-left:50%}.timeline.svelte-1klloww.svelte-1klloww{height:100vh}.projLangs.svelte-1klloww.svelte-1klloww{position:fixed;display:flex;justify-content:right;flex-wrap:wrap;width:30%}@media screen and (max-width: 750px){.centered.svelte-1klloww.svelte-1klloww{justify-content:start;top:0}.centered.svelte-1klloww .svelte-1klloww{z-index:3}.left.svelte-1klloww.svelte-1klloww{height:100vh;width:100%}.right.svelte-1klloww.svelte-1klloww{margin-left:0;width:100%}.projLangs.svelte-1klloww.svelte-1klloww{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loadTitleSubtitles = false;
  let y = 0;
  let h = 0;
  let projectIndex = 0;
  let fontSize;
  let timelineHeight;
  setTimeout(
    () => {
      loadTitleSubtitles = true;
    },
    2400
  );
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17a3x4h_START -->${$$result.title = `<title>Twan Reijinga | Portfolio</title>`, ""}<!-- HEAD_svelte-17a3x4h_END -->`, ""}  ${validate_component(SpaceBackground, "SpaceBackground").$$render($$result, {}, {}, {})} <section class="left centered svelte-1klloww">${loadTitleSubtitles ? `<div class="centered svelte-1klloww">${validate_component(TitleSubtitles, "TitleSubtitle").$$render(
      $$result,
      {
        title: "Hello World!",
        subtitle: "I'm Twan",
        comment: "17 year old programming enthusiast",
        fontSize,
        maxY: h / 2
      },
      {},
      {}
    )} ${validate_component(TitleSubtitles, "TitleSubtitle").$$render(
      $$result,
      {
        title: "AboutMe()",
        subtitle: "I'm Twan",
        comment: "Amsterdam",
        fontSize,
        minY: h / 2,
        maxY: h * 2.5 / 2
      },
      {},
      {}
    )} ${validate_component(TitleSubtitles, "TitleSubtitle").$$render(
      $$result,
      {
        title: "Timeline()",
        subtitle: projects[projectIndex].title,
        comment: projects[projectIndex].comment,
        fontSize,
        minY: h * 2.5 / 2,
        maxY: h * 2.5 / 2 + timelineHeight
      },
      {},
      {}
    )} ${``} ${validate_component(TitleSubtitles, "TitleSubtitle").$$render(
      $$result,
      {
        title: "ContactMe()",
        subtitle: "Reijinga@tuta",
        subtitleAfterDot: "io",
        comment: "Metis Montessori Lyceum",
        fontSize,
        minY: h * 2.5 / 2 + timelineHeight
      },
      {},
      {}
    )}</div>` : ``}</section> ${`${validate_component(ScrollText, "ScrollText").$$render($$result, { fontSize, opacity: 100 / y }, {}, {})}`} <section class="right svelte-1klloww"> ${validate_component(About, "About").$$render($$result, { fontSize }, {}, {})} </section> <section class="right timeline svelte-1klloww"> ${validate_component(Timeline, "Timeline").$$render(
      $$result,
      {
        fontSize,
        minH: h * 1.25,
        lastScrolledItem: projectIndex,
        clientHeight: timelineHeight
      },
      {
        lastScrolledItem: ($$value) => {
          projectIndex = $$value;
          $$settled = false;
        },
        clientHeight: ($$value) => {
          timelineHeight = $$value;
          $$settled = false;
        }
      },
      {}
    )} </section> <section class="right svelte-1klloww" style="${"height: " + escape(timelineHeight, true) + "px"}">${validate_component(Contact, "Contact").$$render($$result, { minY: h * 2.5 / 2 + timelineHeight }, {}, {})} </section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
