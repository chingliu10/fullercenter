const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  const projects = [
    {
      title: 'Decent Homes Hardware Store',
      description: 'Raising seed capital to multiply into building homes for families in need. This store will provide affordable building materials to our community.',
      goal: '$18,500',
      image: '/images/house.png'
    },
    {
      title: 'Fuller Dinner Program',
      description: 'Creating a sustainable dinner program for global builders orientations, meals, and community meetings.',
      goal: '$7,000',
      image: 'dinner-program.jpg'
    },
    {
      title: 'Fuller Washing Bay & Parking',
      description: 'Developing a community washing bay and parking yard to serve local residents and generate income.',
      goal: '$1,500',
      image: 'washing-bay.jpg'
    },
    // {
    //   title: 'Fuller Fitness Gyms',
    //   description: 'Building community fitness facilities to promote health and wellness in our neighborhoods.',
    //   goal: '$3,000',
    //   image: 'fitness-gym.jpg'
    // },
    // {
    //   title: 'Fuller Uganda Tours',
    //   description: 'Developing sustainable tourism opportunities that showcase Uganda while supporting our housing mission.',
    //   goal: '$20,000',
    //   image: 'uganda-tours.jpg'
    // }
  ];

  res.render('home', {
    title: 'Fuller Center for Housing Uganda',
    totalGoal: '$50,000',
    projects: projects
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});