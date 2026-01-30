const users = [
  {
    id: 1,
    email: 'demo@strongmoms.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Sarah Johnson',
    role: 'member',
    joinDate: '2024-01-15',
    goals: ['strength', 'community', 'mindset'],
    currentProgram: 'CrossFit for Moms',
    progress: {
      workoutsCompleted: 45,
      currentStreak: 12,
      totalWorkouts: 67,
      weightLifted: 25000,
      milesHiked: 23
    },
    achievements: [
      'First Pull-up',
      '30-Day Streak',
      'Community Leader',
      'Mindset Master'
    ],
    stats: {
      memberSince: '3 months',
      programsCompleted: 2,
      challengesWon: 3,
      communityPosts: 15
    }
  }
];

const findUserByEmail = (email) => users.find((user) => user.email === email);
const findUserById = (id) => users.find((user) => user.id === id);

const createUser = ({ id, email, password, name, goals }) => ({
  id,
  email,
  password,
  name,
  role: 'member',
  joinDate: new Date().toISOString().split('T')[0],
  goals: Array.isArray(goals) ? goals : [],
  currentProgram: 'Getting Started',
  progress: {
    workoutsCompleted: 0,
    currentStreak: 0,
    totalWorkouts: 0,
    weightLifted: 0,
    milesHiked: 0
  },
  achievements: [],
  stats: {
    memberSince: 'New',
    programsCompleted: 0,
    challengesWon: 0,
    communityPosts: 0
  }
});

module.exports = {
  users,
  findUserByEmail,
  findUserById,
  createUser
};
