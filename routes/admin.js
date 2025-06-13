import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  res.render('signin', {
    layout : false,
    title: 'Signin - Fuller Center for Housing Uganda'
  });
});

// Add these additional routes to your app.js file
router.get('/dashboard', async (req, res) => {
  // Dummy data for illustration; in real case, fetch from DB
  const totalRaised = 12500;
  const totalDonors = 100;
  const activeProjects = 3;
  const completedProjects = 5;
  const averageDonation = (totalRaised / totalDonors).toFixed(2);
  const totalGoal = 25000;
  const overallProgress = ((totalRaised / totalGoal) * 100).toFixed(1);

  const projects = [
    {
      id: 1,
      title: 'Decent Homes Hardware Store',
      description: 'Raising seed capital to multiply into building homes for families in need.',
      goal: 18500,
      goalFormatted: '$18,500',
      raised: 5200,
      raisedFormatted: '$5,200',
      percentage: 28,
      image: '/images/decenthomes.jpg',
      status: 'active',
      donors: 47,
    },
    {
      id: 2,
      title: 'Fuller Dinner Program',
      description: 'Creating a sustainable dinner program for global builders and meetings.',
      goal: 7000,
      goalFormatted: '$7,000',
      raised: 2100,
      raisedFormatted: '$2,100',
      percentage: 30,
      image: '/images/diner.jpg',
      status: 'active',
      donors: 23,
    }
  ];

  const recentDonations = [
    { donor: 'Alice', project: 'Decent Homes', amount: 100, date: '2025-06-10', time: '08:00' },
    { donor: 'Bob', project: 'Fuller Dinner Program', amount: 150, date: '2025-06-11', time: '13:00' }
  ];

  const monthlyStats = [
    { month: 'Jan', donations: 2000, donors: 10 },
    { month: 'Feb', donations: 3000, donors: 15 },
    { month: 'Mar', donations: 4000, donors: 20 },
    { month: 'Apr', donations: 1000, donors: 5 },
    { month: 'May', donations: 2500, donors: 12 },
    { month: 'Jun', donations: 1000, donors: 8 }
  ];

  res.render('dashboard', {
    layout: 'admin',
    title: 'Dashboard - Fuller Center for Housing Uganda',
    totalRaised,
    totalDonors,
    activeProjects,
    completedProjects,
    averageDonation,
    totalGoal,
    overallProgress,
    projects,
    recentDonations,
    monthlyStats: JSON.stringify(monthlyStats) // Handlebars triple-stash `{{{}}}` expects a JSON string
  });
});

// Admin Projects Management
router.get('/projects', (req, res) => {
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
      image: '/images/decenthomes.jpg',
      status: 'active',
      donors: 47,
      lastDonation: '2025-06-10',
      createdDate: '2025-01-15',
      category: 'Infrastructure'
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
      image: '/images/diner.jpg',
      status: 'active',
      donors: 23,
      lastDonation: '2025-06-12',
      createdDate: '2025-02-01',
      category: 'Community'
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
      image: '/images/washing.jpg',
      status: 'active',
      donors: 12,
      lastDonation: '2025-06-11',
      createdDate: '2025-03-10',
      category: 'Infrastructure'
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
      image: '/images/gym.jpg',
      status: 'active',
      donors: 18,
      lastDonation: '2025-06-09',
      createdDate: '2025-04-05',
      category: 'Health'
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
      image: '/images/tours.jpg',
      status: 'active',
      donors: 31,
      lastDonation: '2025-06-13',
      createdDate: '2025-05-20',
      category: 'Tourism'
    }
  ];

  res.render('admin-projects', {
    layout: 'admin',
    title: 'Project Management - Fuller Center Admin',
    projects
  });
});

// Admin Donations Management
router.get('/donations', (req, res) => {
  const donations = [
    { id: 1, donor: 'Anonymous', email: 'donor1@email.com', amount: 250, project: 'Decent Homes Hardware Store', date: '2025-06-13', time: '10:30 AM', status: 'completed', paymentMethod: 'Credit Card' },
    { id: 2, donor: 'John Smith', email: 'john@email.com', amount: 100, project: 'Fuller Dinner Program', date: '2025-06-12', time: '3:45 PM', status: 'completed', paymentMethod: 'PayPal' },
    { id: 3, donor: 'Sarah Johnson', email: 'sarah@email.com', amount: 500, project: 'Fuller Uganda Tours', date: '2025-06-12', time: '11:20 AM', status: 'completed', paymentMethod: 'Bank Transfer' },
    { id: 4, donor: 'Anonymous', email: 'donor2@email.com', amount: 75, project: 'Fuller Washing Bay & Parking', date: '2025-06-11', time: '9:15 AM', status: 'completed', paymentMethod: 'Credit Card' },
    { id: 5, donor: 'Michael Brown', email: 'michael@email.com', amount: 200, project: 'Fuller Fitness Gyms', date: '2025-06-09', time: '2:30 PM', status: 'completed', paymentMethod: 'Credit Card' },
    { id: 6, donor: 'Emma Wilson', email: 'emma@email.com', amount: 150, project: 'Decent Homes Hardware Store', date: '2025-06-08', time: '4:00 PM', status: 'pending', paymentMethod: 'Bank Transfer' },
    { id: 7, donor: 'David Lee', email: 'david@email.com', amount: 300, project: 'Fuller Uganda Tours', date: '2025-06-07', time: '1:15 PM', status: 'completed', paymentMethod: 'PayPal' }
  ];

  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);
  const completedDonations = donations.filter(d => d.status === 'completed').length;
  const pendingDonations = donations.filter(d => d.status === 'pending').length;

  res.render('admin-donations', {
    layout: 'admin',
    title: 'Donation Management - Fuller Center Admin',
    donations,
    totalDonations: totalDonations.toLocaleString(),
    completedDonations,
    pendingDonations,
    totalCount: donations.length
  });
});

// Admin Settings
router.get('/settings', (req, res) => {
  res.render('admin-settings', {
    layout: 'admin',
    title: 'Settings - Fuller Center Admin'
  });
});

// Logout route
router.get('/logout', (req, res) => {
  // In a real app, you'd destroy the session here
  res.redirect('/admin');
});

export default router;