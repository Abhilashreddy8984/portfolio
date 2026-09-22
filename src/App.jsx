import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Experience      from './components/Experience'
import Hackathons      from './components/Hackathons'
import Education       from './components/Education'
import CurrentlyLearning from './components/CurrentlyLearning'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Education />
        <CurrentlyLearning />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
