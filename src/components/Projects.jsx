

const projects = [

  {
    title:"College Chatbot",
    desc:"AI based college chatbot with admin panel."
  },

  {
    title:"Book Store",
    desc:"Responsive bookstore website."
  },

  {
    title:"E-Commerce",
    desc:"Shopping cart and wishlist."
  }

];

function Projects(){

return(

<section id="projects" className="projects">

<h1>Projects</h1>

<div className="projectGrid">

{

projects.map((project,index)=>(

<div key={index} className="projectCard">

<h2>{project.title}</h2>

<p>{project.desc}</p>

<button>Github</button>

</div>

))

}

</div>

</section>

)

}

export default Projects;