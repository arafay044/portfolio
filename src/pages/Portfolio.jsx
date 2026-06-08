import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import About        from '../components/About'
import Experience   from '../components/Experience'
import Skills       from '../components/Skills'
import Project      from '../components/Project'
import Certificates from '../components/Certificates'
import Contact      from '../components/Contact'
import Footer       from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop    from '../components/BackToTop'

const Portfolio = () => {
  return (
    <div>
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio
