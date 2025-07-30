// import express from 'express';
// import expressHandlebars from 'express-handlebars';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import adminRoutes from './routes/admin.js'

// const { engine } = expressHandlebars;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 7000;

// // Configure Handlebars
// app.engine('handlebars', engine({
//   defaultLayout: 'main',
//   layoutsDir: path.join(__dirname, 'views/layouts')
// }));
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));


// // Configure Handlebars with helpers
// app.engine('handlebars', engine({
//   defaultLayout: 'main',
//   layoutsDir: path.join(__dirname, 'views/layouts'),
//   helpers: {
//     json: function(context) {
//       return JSON.stringify(context, null, 2); // Optional formatting
//     }
//   }
// }));

// // Serve static files
// // app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, 'public'), {
//   setHeaders: (res, filePath) => {
//     res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
//   }
// }));

// app.use("/admin", adminRoutes)

// // Routes
// app.get('/', (req, res) => {
//   const projects = [
//     {
//       id: 1,
//       title: 'Decent Homes Hardware Store',
//       description: 'Raising seed capital to multiply into building homes for families in need. This store will provide affordable building materials to our community.',
//       goal: 18500,
//       goalFormatted: '$18,500',
//       raised: 5200,
//       raisedFormatted: '$5,200',
//       percentage: 28,
//       image: '/images/decenthomes.jpg'
//     },
//     {
//       id: 2,
//       title: 'Fuller Dinner Program',
//       description: 'Creating a sustainable dinner program for global builders orientations, meals, and community meetings.',
//       goal: 7000,
//       goalFormatted: '$7,000',
//       raised: 2100,
//       raisedFormatted: '$2,100',
//       percentage: 30,
//       image: '/images/diner.jpg'
//     },
//     {
//       id: 3,
//       title: 'Fuller Washing Bay & Parking',
//       description: 'Developing a community washing bay and parking yard to serve local residents and generate income.',
//       goal: 1500,
//       goalFormatted: '$1,500',
//       raised: 750,
//       raisedFormatted: '$750',
//       percentage: 50,
//       image: '/images/washing.jpg'
//     },
//     {
//       id: 4,
//       title: 'Fuller Fitness Gyms',
//       description: 'Building community fitness facilities to promote health and wellness in our neighborhoods.',
//       goal: 3000,
//       goalFormatted: '$3,000',
//       raised: 900,
//       raisedFormatted: '$900',
//       percentage: 30,
//       image: '/images/gym.jpg'
//     },
//     {
//       id: 5,
//       title: 'Fuller Uganda Tours',
//       description: 'Developing sustainable tourism opportunities that showcase Uganda while supporting our housing mission.',
//       goal: 20000,
//       goalFormatted: '$20,000',
//       raised: 3500,
//       raisedFormatted: '$3,500',
//       percentage: 18,
//       image: '/images/tours.jpg'
//     }
//   ];

//   const aboutContent = {
//     title: 'About Fuller Center for Housing Uganda',
//     content: `Uganda is well-known for its biodiversity and abundance of wildlife, most notably its population of mountain gorillas. However, for all of its natural riches, about 40 percent of its 50 million people live on less than $2 per day. Mud huts remain the most common housing in Uganda — especially in the rural areas. The Fuller Center of Uganda is working hard to help families have safe, solid places to live. Not only will these homes help families have a more stable foundation for their future with the financial empowerment of homeownership, but studies have repeatedly shown that children who grow up in decent housing are happier, healthier and have better educational outcomes than those who do not.`,
//     image : "/images/family.jpg"
//   };

//   // Calculate total raised
//   const totalRaised = projects.reduce((sum, project) => sum + project.raised, 0);
//   const totalGoal = 50000;
//   const totalPercentage = Math.round((totalRaised / totalGoal) * 100);

//   res.render('home', {
//     title: 'Fuller Center for Housing Uganda',
//     totalGoal: '$50,000',
//     totalRaised: `${totalRaised.toLocaleString()}`,
//     totalPercentage: totalPercentage,
//     projects: projects,
//     about: aboutContent
//   });
// });

// // Donation route
// app.get('/donate/:projectId', (req, res) => {
//   const projectId = parseInt(req.params.projectId);
//   const projects = [
//     {
//       id: 1,
//       title: 'Decent Homes Hardware Store',
//       description: 'Raising seed capital to multiply into building homes for families in need. This store will provide affordable building materials to our community.',
//       goal: 18500,
//       goalFormatted: '$18,500',
//       raised: 5200,
//       raisedFormatted: '$5,200',
//       percentage: 28,
//       image: '/images/decenthomes.jpg'
//     },
//     {
//       id: 2,
//       title: 'Fuller Dinner Program',
//       description: 'Creating a sustainable dinner program for global builders orientations, meals, and community meetings.',
//       goal: 7000,
//       goalFormatted: '$7,000',
//       raised: 2100,
//       raisedFormatted: '$2,100',
//       percentage: 30,
//       image: '/images/diner.jpg'
//     },
//     {
//       id: 3,
//       title: 'Fuller Washing Bay & Parking',
//       description: 'Developing a community washing bay and parking yard to serve local residents and generate income.',
//       goal: 1500,
//       goalFormatted: '$1,500',
//       raised: 750,
//       raisedFormatted: '$750',
//       percentage: 50,
//       image: '/images/washing.jpg'
//     },
//     {
//       id: 4,
//       title: 'Fuller Fitness Gyms',
//       description: 'Building community fitness facilities to promote health and wellness in our neighborhoods.',
//       goal: 3000,
//       goalFormatted: '$3,000',
//       raised: 900,
//       raisedFormatted: '$900',
//       percentage: 30,
//       image: '/images/gym.jpg'
//     },
//     {
//       id: 5,
//       title: 'Fuller Uganda Tours',
//       description: 'Developing sustainable tourism opportunities that showcase Uganda while supporting our housing mission.',
//       goal: 20000,
//       goalFormatted: '$20,000',
//       raised: 3500,
//       raisedFormatted: '$3,500',
//       percentage: 18,
//       image: '/images/tours.jpg'
//     }
//   ];
  
//   const project = projects.find(p => p.id === projectId);
  
//   if (!project) {
//     return res.redirect('/');
//   }
  
//   res.render('donate', {
//     title: `Donate to ${project.title}`,
//     project: project
//   });
// });

// app.get('/about', (req, res) => {
//   res.render('about', {
//     title: 'About Us - Fuller Center for Housing Uganda'
//   });
// });


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import adminRoutes from './routes/admin.js'

const { engine } = expressHandlebars;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 7000;

// Enhanced project data with full descriptions
const projectsData = [
  {
    id: 1,
    title: 'Decent Homes Hardware Store',
    subtitle: 'A Hardware Store with a Heart',
    shortDescription: 'Raising seed capital to multiply into building homes for families in need. This store will provide affordable building materials to our community.',
    fullDescription: `Imagine a business that not only generates profits but also provides a sense of purpose. Our hardware store, by investing seed capital, you'll be supporting a unique venture that donates its profits to building homes for needy families.

Every hammer sold, every nail driven, and every paintbrush stroke will bring us closer to providing shelter for those who need it most. Our business model is simple: sell quality hardware products and donate a significant portion of our profits to affordable housing initiatives.

Your investment will yield more than just financial returns; it will bring hope and dignity to families in need. Join us in building a better future, one hammer at a time. Together, we can make a difference and create a lasting impact in our community.

By supporting "Building Hope," you'll be part of a movement that combines business acumen with social responsibility. We invite you to be a part of this journey, to invest in hope, and to help us build a brighter future for all.`,
    goal: 18500,
    goalFormatted: '$18,500',
    raised: 5200,
    raisedFormatted: '$5,200',
    percentage: 28,
    image: '/images/decenthomes.jpg',
    impact: 'Every dollar helps build 0.5 sqft of home',
    urgency: 'High',
    category: 'Business',
    keyPoints: [
      'Equip hardware store with quality products',
      'Generate sustainable revenue for housing',
      'Support local construction needs',
      'Create employment opportunities'
    ]
  },
    {
    id: 5,
    title: 'Fuller Uganda Tours',
    subtitle: 'Journey of Purpose: Explore Uganda, Build Homes',
    shortDescription: 'Developing sustainable tourism opportunities that showcase Uganda while supporting our housing mission.',
    fullDescription: `Imagine a journey that combines adventure, cultural immersion, and philanthropy. Our Tours and Travel initiative invites global guests to experience Uganda's breathtaking natural beauty while making a meaningful impact. We'll pick you up from the airport or hotel, drive you to stunning destinations, and take you on a unique journey, and your journey will contribute towards construction sites where homes for needy families are being built.

As you explore Uganda's wonders, you'll contribute to a noble cause. Our profits will go directly towards constructing homes for those in need. Your journey will support local communities through sustainable tourism, provide a platform for cultural exchange and understanding, and fund home construction for underprivileged families.

Join us on this journey of purpose, where every step takes you closer to making a difference. Invest in our Tours and Travel initiative and be part of a movement that brings people together while building a better future.

Come, discover Uganda's beauty, and help build homes for those who need them most. Let's travel with purpose and create lasting impact together!`,
    goal: 20000,
    goalFormatted: '$20,000',
    raised: 3500,
    raisedFormatted: '$3,500',
    percentage: 18,
    image: '/images/tours.jpg',
    impact: 'Each tour funds 1 complete home construction',
    urgency: 'High',
    category: 'Tourism',
    keyPoints: [
      'Showcase Uganda\'s breathtaking natural beauty',
      'Create cultural exchange opportunities',
      'Support sustainable tourism practices',
      'Direct profits to home construction',
      '$20,000 is gonna help us buy two tourism vehicles'
    ]
  },
  {
    id: 2,
    title: 'Fuller Dinner Program',
    subtitle: 'A Cup of Compassion: Brewing Hope One Meal at a Time',
    shortDescription: 'Creating a sustainable dinner program for global builders orientations, meals, and community meetings.',
    fullDescription: `Imagine a place where flavours from around the world come together, where global guests share stories, and local communities unite over delicious meals. Welcome to "Global Bites," a café where every cup of coffee, every bite, and every smile contributes to a greater purpose: building homes for those in need.

Our mission is simple: serve diverse, mouth-watering cuisine, foster cultural exchange, and use 100% of our profits to support affordable housing initiatives. From traditional local dishes to international favorites and yes, even junk food, every meal sold brings us closer to providing shelter for families in need.

Global Bites is more than just a restaurant – it's a gathering place where people from all walks of life can connect, share, and grow and hear amazing stories. Your investment will help us create a vibrant space that not only delights taste buds but also transforms lives.

Join us in serving up hope, one meal at a time. Invest in Global Bites and be part of a movement that combines good food, community spirit, and social responsibility. Together, let's build a brighter future – one home at a time.`,
    goal: 7000,
    goalFormatted: '$7,000',
    raised: 2100,
    raisedFormatted: '$2,100',
    percentage: 30,
    image: '/images/diner.jpg',
    impact: 'Each meal funds 1 day of construction work',
    urgency: 'Medium',
    category: 'Community',
    keyPoints: [
      'Create cultural exchange hub',
      'Serve diverse global cuisine',
      '100% profits go to housing',
      'Foster community connections'
    ]
  },
  {
    id: 3,
    title: 'Fuller Washing Bay & Parking',
    subtitle: 'The Washing Bay and Parking Yard Initiative',
    shortDescription: 'Developing a community washing bay and parking yard to serve local residents and generate income.',
    fullDescription: `In a small yet significant endeavour, our washing bay and parking yard initiative is poised to make a big impact. With your seed capital investment, we aim to transform this struggling venture into a thriving business, generating revenue that will directly support building homes for the needy.

Our plan is straightforward: utilize your investment to acquire a state-of-the-art car wash machine and install essential lighting in the yard. This will enable us to increase efficiency and capacity, enhance customer experience, and boost revenue through expanded services.

Every car washed, every vehicle parked, and every satisfied customer will bring us closer to our goal. Profits generated will be channelled towards constructing homes for those in need, providing shelter and dignity to families and individuals.

Your investment will shine a light on hope, illuminating a path towards a brighter future for those we serve. Join us in this worthy endeavour and help us spark positive change in our community.

Together, let's wash away struggles and pave the way for a better tomorrow. Invest in our initiative and be part of a movement that brings cleanliness, safety, and shelter to those who need it most.`,
    goal: 1500,
    goalFormatted: '$1,500',
    raised: 750,
    raisedFormatted: '$750',
    percentage: 50,
    image: '/images/washing.jpg',
    impact: 'Weekly revenue can build 1 room foundation',
    urgency: 'Low',
    category: 'Service',
    keyPoints: [
      'Install state-of-the-art car wash machine',
      'Add essential lighting for night operations',
      'Increase service capacity and efficiency',
      'Generate consistent revenue stream'
    ]
  },
  {
    id: 4,
    title: 'Fuller Fitness Gyms',
    subtitle: 'Fit for a Purpose: Strengthening Bodies, Building Homes',
    shortDescription: 'Building community fitness facilities to promote health and wellness in our neighborhoods.',
    fullDescription: `Imagine a gym that not only transforms bodies but also changes lives. Our community gym, perfectly located and poised for success, needs seed capital to equip itself with state-of-the-art fitness equipment. With your investment, we'll empower individuals to achieve their fitness goals while contributing to a noble cause.

Every workout session will bring us closer to our mission: building decent permanent homes for needy families. Profits from our gym will directly fund housing initiatives, providing shelter for those living in shacks, grass-thatched houses, or renting without hope of ownership.

Your investment will equip our gym with top-notch fitness machinery, support community health and wellness, and fund home construction for underprivileged families.

Join us in this venture, where sweat and dedication translate to tangible impact. Invest in "Fit for a Purpose" and help us build stronger bodies and better homes for our communities. Together, let's get fit and build hope!`,
    goal: 3000,
    goalFormatted: '$3,000',
    raised: 900,
    raisedFormatted: '$900',
    percentage: 30,
    image: '/images/gym.jpg',
    impact: 'Monthly memberships fund 2 families housing',
    urgency: 'Medium',
    category: 'Health',
    keyPoints: [
      'Equip gym with state-of-the-art fitness machinery',
      'Support community health and wellness',
      'Create sustainable revenue for housing',
      'Transform lives through fitness and purpose'
    ]
  }
];

// Configure Handlebars with helpers
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  helpers: {
    json: function(context) {
      return JSON.stringify(context, null, 2);
    },
    truncate: function(str, len) {
      if (str && str.length > len) {
        return str.substring(0, len) + '...';
      }
      return str;
    },
    eq: function(a, b) {
      return a === b;
    },
    formatNumber: function(num) {
      return num.toLocaleString();
    },
    split: function(str, delimiter) {
      if (typeof str === 'string') {
        return str.split(delimiter);
      }
      return [];
    }
  }
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files with caching
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
  }
}));

app.use("/admin", adminRoutes);

// Routes
app.get('/', (req, res) => {
  // Calculate total raised
  const totalRaised = projectsData.reduce((sum, project) => sum + project.raised, 0);
  const totalGoal = 50000;
  const totalPercentage = Math.round((totalRaised / totalGoal) * 100);

  const aboutContent = {
    title: 'About Fuller Center for Housing Uganda',
    content: `Uganda is well-known for its biodiversity and abundance of wildlife, most notably its population of mountain gorillas. However, for all of its natural riches, about 40 percent of its 50 million people live on less than $2 per day. Mud huts remain the most common housing in Uganda — especially in the rural areas. The Fuller Center of Uganda is working hard to help families have safe, solid places to live. Not only will these homes help families have a more stable foundation for their future with the financial empowerment of homeownership, but studies have repeatedly shown that children who grow up in decent housing are happier, healthier and have better educational outcomes than those who do not.`,
    image: "/images/family.jpg"
  };

  res.render('home', {
    title: 'Fuller Center for Housing Uganda',
    totalGoal: '$50,000',
    totalRaised: `$${totalRaised.toLocaleString()}`,
    totalPercentage: totalPercentage,
    projects: projectsData,
    about: aboutContent
  });
});

// Donation route
app.get('/donate/:projectId', (req, res) => {
  const projectId = parseInt(req.params.projectId);
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return res.redirect('/');
  }
  
  res.render('donate', {
    title: `Donate to ${project.title}`,
    project: project
  });
});

// Project detail route
app.get('/project/:projectId', (req, res) => {
  const projectId = parseInt(req.params.projectId);
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return res.redirect('/');
  }
  
  res.render('project-detail', {
    title: project.title,
    project: project
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us - Fuller Center for Housing Uganda'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});