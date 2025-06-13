import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const { engine } = expressHandlebars;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 7000;

// Configure Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
  }
}));


// Routes
app.get('/', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'Decent Homes Hardware Store',
      description: 'Raising seed capital to multiply into building homes for families in need. This store will provide affordable building materials to our community.',
      goal: 18500,
      goalFormatted: '$18,500',
      raised: 5200,
      raisedFormatted: '$5,200',
      percentage: 28,
      image: '/images/decenthomes.jpg'
    },
    {
      id: 2,
      title: 'Fuller Dinner Program',
      description: 'Creating a sustainable dinner program for global builders orientations, meals, and community meetings.',
      goal: 7000,
      goalFormatted: '$7,000',
      raised: 2100,
      raisedFormatted: '$2,100',
      percentage: 30,
      image: '/images/diner.jpg'
    },
    {
      id: 3,
      title: 'Fuller Washing Bay & Parking',
      description: 'Developing a community washing bay and parking yard to serve local residents and generate income.',
      goal: 1500,
      goalFormatted: '$1,500',
      raised: 750,
      raisedFormatted: '$750',
      percentage: 50,
      image: '/images/washing.jpg'
    },
    {
      id: 4,
      title: 'Fuller Fitness Gyms',
      description: 'Building community fitness facilities to promote health and wellness in our neighborhoods.',
      goal: 3000,
      goalFormatted: '$3,000',
      raised: 900,
      raisedFormatted: '$900',
      percentage: 30,
      image: '/images/gym.jpg'
    },
    {
      id: 5,
      title: 'Fuller Uganda Tours',
      description: 'Developing sustainable tourism opportunities that showcase Uganda while supporting our housing mission.',
      goal: 20000,
      goalFormatted: '$20,000',
      raised: 3500,
      raisedFormatted: '$3,500',
      percentage: 18,
      image: '/images/tours.jpg'
    }
  ];

  const aboutContent = {
    title: 'About Fuller Center for Housing Uganda',
    content: `Uganda is well-known for its biodiversity and abundance of wildlife, most notably its population of mountain gorillas. However, for all of its natural riches, about 40 percent of its 50 million people live on less than $2 per day. Mud huts remain the most common housing in Uganda — especially in the rural areas. The Fuller Center of Uganda is working hard to help families have safe, solid places to live. Not only will these homes help families have a more stable foundation for their future with the financial empowerment of homeownership, but studies have repeatedly shown that children who grow up in decent housing are happier, healthier and have better educational outcomes than those who do not.`,
    image : "/images/family.jpg"
  };

  // Calculate total raised
  const totalRaised = projects.reduce((sum, project) => sum + project.raised, 0);
  const totalGoal = 50000;
  const totalPercentage = Math.round((totalRaised / totalGoal) * 100);

  res.render('home', {
    title: 'Fuller Center for Housing Uganda',
    totalGoal: '$50,000',
    totalRaised: `${totalRaised.toLocaleString()}`,
    totalPercentage: totalPercentage,
    projects: projects,
    about: aboutContent
  });
});

// Donation route
app.get('/donate/:projectId', (req, res) => {
  const projectId = parseInt(req.params.projectId);
  const projects = [
    {
      id: 1,
      title: 'Decent Homes Hardware Store',
      description: 'Raising seed capital to multiply into building homes for families in need. This store will provide affordable building materials to our community.',
      goal: 18500,
      goalFormatted: '$18,500',
      raised: 5200,
      raisedFormatted: '$5,200',
      percentage: 28,
      image: '/images/decenthomes.jpg'
    },
    {
      id: 2,
      title: 'Fuller Dinner Program',
      description: 'Creating a sustainable dinner program for global builders orientations, meals, and community meetings.',
      goal: 7000,
      goalFormatted: '$7,000',
      raised: 2100,
      raisedFormatted: '$2,100',
      percentage: 30,
      image: '/images/diner.jpg'
    },
    {
      id: 3,
      title: 'Fuller Washing Bay & Parking',
      description: 'Developing a community washing bay and parking yard to serve local residents and generate income.',
      goal: 1500,
      goalFormatted: '$1,500',
      raised: 750,
      raisedFormatted: '$750',
      percentage: 50,
      image: '/images/washing.jpg'
    },
    {
      id: 4,
      title: 'Fuller Fitness Gyms',
      description: 'Building community fitness facilities to promote health and wellness in our neighborhoods.',
      goal: 3000,
      goalFormatted: '$3,000',
      raised: 900,
      raisedFormatted: '$900',
      percentage: 30,
      image: '/images/gym.jpg'
    },
    {
      id: 5,
      title: 'Fuller Uganda Tours',
      description: 'Developing sustainable tourism opportunities that showcase Uganda while supporting our housing mission.',
      goal: 20000,
      goalFormatted: '$20,000',
      raised: 3500,
      raisedFormatted: '$3,500',
      percentage: 18,
      image: '/images/tours.jpg'
    }
  ];
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.redirect('/');
  }
  
  res.render('donate', {
    title: `Donate to ${project.title}`,
    project: project
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us - Fuller Center for Housing Uganda'
  });
});

app.get('/admin', (req, res) => {
  res.render('signin', {
    layout : false,
    title: 'Signin - Fuller Center for Housing Uganda'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});