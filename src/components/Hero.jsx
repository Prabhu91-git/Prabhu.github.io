import "../styles/hero.css";

function Hero(){

    return(

<section id= "hero" className="hero section">

     <div className="hero-content">

<p className="tagline">

UNITY • UNREAL ENGINE • OPENXR

</p>

<h1>

R. Prabhu
</h1>

<h2>

Senior VR/XR Developer

</h2>

<p className="hero-description">
Building immersive VR, AR, and XR applications using Unity and Unreal Engine for enterprise training, architectural visualization, product configurators, and interactive 3D experiences.

</p>

<div className="hero-buttons">

    <a href="#projects" className="primary">
        View Projects
    </a>

    <a
        href="/resume/P_Ragu_Resume.pdf"
        className="secondary"
        download >
        Download Resume
    </a>

</div>

<div className="hero-stats">

<div>

    <h3>10</h3>

    <p>Years Experience</p>

</div>

<div>

    <h3>20+</h3>

    <p>Projects Delivered</p>

</div>

<div>

    <h3>3</h3>

    <p>Developers Mentored</p>

</div>

</div>
</div>
</section>

    )

}

export default Hero;