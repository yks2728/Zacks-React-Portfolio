import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  let projects = [
    {
      name: 'BudgetTracker', link: 'https://zacks-budget-tracker.herokuapp.com/', repo: 'https://github.com/yks2728/Zacks-Innovative-Budget-Tracker', description: 'A budget tracker to track expenses'
    },
    {
      name: 'MyHealthChart', link: 'https://myhealth-chart.herokuapp.com/', repo: 'https://github.com/Jaswal1p/my-health-chart.git', description: 'A health chart app to keep track of all your medical tests'
    },
    {
      name: 'PasswordGenerator', link: 'https://yks2728.github.io/Password-Generator/', repo: 'https://github.com/yks2728/Password-Generator', description: 'A password generator used to generate random passwords with letters, numbers and symbols'
    },
    {
      name: 'Portfolio', link: 'https://yks2728.github.io/Zack-Greenfield-Portfolio/', repo: 'https://github.com/yks2728/Zack-Greenfield-Portfolio', description: 'A portfolio showcasing my work'
    },
    {
      name: 'ScreenTitleScanner', link: 'https://yks2728.github.io/Screen-Title-Scanner/', repo: 'https://github.com/yks2728/Screen-Title-Scanner', description: 'A search engine used to search for movies and tv shows'
    },
    {
      name: 'WorkdayScheduler', link: 'https://yks2728.github.io/Zack-Greenfields-Innovative-Work-Day-Scheduler/', repo: 'https://github.com/yks2728/Zack-Greenfields-Innovative-Work-Day-Scheduler', description: 'A scheduler used to enter hours'
    },
    {
      name: 'TMDBMovieSearch', link: 'https://stunning-mas-green-jas.herokuapp.com/', repo: 'https://github.com/Jaswal1p/stunning-mas-green-jas', description: 'A movie search app used to search for and save movies'
    }
  ]
  return (
    <div>
      <main>
        <Header></Header>
        <Navigation></Navigation>
        {projects.map(project => (<Project props={project}/>))}
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
