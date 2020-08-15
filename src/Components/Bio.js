import React from 'react';
import '../App.css';

function Bio() {
  return (
    <div>
      <div id="about-element">
        <div className="jumbotron-about" background-size="cover">
          <div className="row about-para">
            
            <h1 className="about-header">
            How I Got Here</h1>
            <h3 className="about-text">
I'm a Chicago-based developer working in React, Ruby/Rails, JavaScript, VueJS, PostgreSQL, and HTML/CSS/Bootstrap. 
</h3>
<h3 className="about-text">
I came to tech through language arts, and my prior experience includes proposal development, research, writing, translating, and international volunteering. As a communications specialist, and more recently as a developer, I have found it most rewarding to assist people in securing the resources they need. I believe that effective design increases access and enhances value. I google as much as any working dev, and I benefit from resources that package information in clear, accessible formats. 
</h3>
<h3 className="about-text">
My most recent job pre-bootcamp was as an immigration paralegal on "expert researcher" visa petitions, which include persuasive writing and extensive supporting documentation. Our clients were cutting-edge STEM scientists, and my role was explaining the value of their work in plain language, minimizing jargon and highlighting critical information. I developed guides and templates to help clients better understand our petition process so that they could partner more effectively with us. I was glad to make a difficult process more efficient and less stressful. 
</h3>
<h3 className="about-text">
I chose my bootcamp, <a href="https://anyonecanlearntocode.com/"> Actualize</a>, for its emphasis on instruction and collaborative learning. Their "post grad" program has been invaluable during quarantine. I graduated as lockdown started in Chicago, and I've spent the past four months on independent and pair programming as well as intensive coursework in a number of new frameworks. 
</h3>
<h3 className="about-text">
I’ve built several solo projects and led several group projects in Ruby/Rails, Vue.js, JavaScript, and React. These ongoing collaborations have given me experience in teambuilding, project management, and multitasking. All of our work is conducted through Github, Slack, and Zoom, so I've learned how to coordinate with a remote team on short-term and long-term projects. 
</h3>
<h3 className="about-text">
I’m also interning with <a href="https://www.mirachicago.org/"> MIRA</a>, a nonprofit serving refugees in the Chicago area. My first solo project was a grantwriting app for smaller nonprofits lacking fundraising resources. I'm implementing my app at MIRA, consulting with staff at all levels to ensure that the final product is useful to everyone. I started coding because I wanted to use my skills to help people navigate unfamiliar terrain, and this project represents the realization of that goal. 
                </h3>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Bio;