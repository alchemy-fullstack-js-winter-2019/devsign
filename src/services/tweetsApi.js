
export const getTweets = () => {
  // return fetch('http://localhost:7890/tweets')
  //   .then(res => res.json());
  return Promise.resolve([
    { _id: '1222', 
      text: 'my Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor... tweet', 
      user: { handle: 'DanTheMan', 
        profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1234', 
      text: 'Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.', 
      user: { handle: 'MissGloria', 
        profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1246', 
      text: 'Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.', 
      user: { handle: 'FabLife', 
        profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1264', 
      text: 'Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.', 
      user: { handle: 'CupcakesAndRainbow', 
        profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1224', 
      text: 'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.',
      user: { handle: 'MsHelloWorld', 
        profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1294', 
      text: 'Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower, omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?',
      user: { handle: 'MrRobot', 
        profileImg: 'http://i.pravatar.cc/1000' } },

  ]);
};
