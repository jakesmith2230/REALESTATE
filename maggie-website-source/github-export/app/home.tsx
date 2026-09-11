'use client';
import { ArrowUpRight, ArrowDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useEmailComposer } from './email-composer';
import FeaturedProperties from './featured-properties';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openEmail: composeEmail, composer } = useEmailComposer();
  function openEmail(topic = "Let’s connect") { setMenuOpen(false); composeEmail(topic); }
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.setAttribute('data-visible', 'true'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.about-copy, .portrait-wrap, .service-grid article, .lifestyle-copy, .contact-details').forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.setAttribute('data-reveal', 'true');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return <main>
    <a className="skip-link" href="#about">Skip to content</a>
    <section className="hero" id="home">
      <div className="hero-image"><img src="/home-exterior.jpg" alt="Contemporary home with a pool and warm evening light" fetchPriority="high" /></div>
      <div className="hero-shade" />
      <header className="site-header">
        <a className="brand" href="#home"><span className="monogram">MS</span><span>MAGGIE SEIPEL<small>SOUTHLAKE REAL ESTATE</small></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation" onClick={()=>setMenuOpen(false)} onKeyDown={event=>{if(event.key === 'Escape') setMenuOpen(false)}}><a href="#about">Meet Maggie</a><a href="#properties">Featured Properties</a><a href="#services">Buy & Sell</a><a href="#southlake">The Southlake Life</a></nav>
        <a className="header-contact" href="#contact">LET’S CONNECT <ArrowUpRight size={16}/></a>
      </header>
      <div className="hero-content"><p className="eyebrow"><span/> ROOTED IN SOUTHLAKE. FOCUSED ON YOU.</p><h1>More than a home.<br/>A place to <em>belong.</em></h1><p className="hero-intro">Thoughtful real estate guidance.<br/>From someone who calls Southlake home, too.</p><a className="button light" href="#services">FIND YOUR NEXT CHAPTER <ArrowUpRight size={19}/></a></div>
      <div className="hero-bottom"><a href="#about"><ArrowDown size={16}/> GET TO KNOW MAGGIE</a><span>SOUTHLAKE, TEXAS & THE SURROUNDING DFW AREA</span></div>
    </section>
    <div className="local-strip"><p>YOUR NEIGHBOR.<br/><strong>Your real estate guide.</strong></p><div><strong>15+</strong><span>YEARS CALLING<br/>SOUTHLAKE HOME</span></div><p>Local roots. Personal attention.<br/>A thoughtful approach to every move.</p></div>
    <section id="about" className="about section-pad"><div className="portrait-wrap"><img src="/maggie-seipel.png" alt="Maggie Seipel" width="750" height="927"/><div className="portrait-caption">LOCAL ROOTS. LASTING CONNECTIONS.</div></div><div className="about-copy"><p className="eyebrow">MEET MAGGIE SEIPEL</p><h2>A familiar face.<br/>A fresh <em>perspective.</em></h2><p>Home is more than an address. It’s the everyday moments, the familiar places, and the people who make a community feel like yours.</p><p>After 15+ years of living in Southlake, Maggie brings a neighbor’s perspective to your next move. Her focus spans residential homes, equestrian properties, and acreage throughout Southlake and the surrounding DFW area.</p><p>Whether you’re putting down roots or preparing for what’s next, start with a conversation about what matters to you.</p><a className="text-link" href="#contact">LET’S GET ACQUAINTED <ArrowUpRight size={19}/></a><div className="signature">Maggie Seipel</div><span className="broker-small">REALTOR® · EBBY HALLIDAY</span></div></section>
    <FeaturedProperties/>
    <section id="services" className="section-pad services"><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>A move that feels<br/><em>right for you.</em></h2><div className="service-grid">{[['01','Buying a home','Find the place that fits your life. Begin with your priorities, explore your options, and build a clear path toward your next home.','Let’s talk about buying'],['02','Selling your home','Make your next move with intention. Start a conversation about positioning your property and planning the steps ahead.','Let’s talk about selling'],['03','Equestrian & acreage','Room for a different way of life. Explore properties with space to grow, informed by Maggie’s background as a hunter/jumper horse trainer.','Let’s talk about acreage']].map(([n,title,copy,subject])=><article key={n}><span className="service-num">{n}</span><h3>{title}</h3><p>{copy}</p><button className="service-action" onClick={()=>openEmail(subject)}>START A CONVERSATION <ArrowUpRight size={18}/></button></article>)}</div></section>
    <section id="southlake" className="lifestyle"><div className="lifestyle-photo"><img src="/southlake-lifestyle.jpg" alt="Sunlit living room with white sofas, tall windows and a fireplace" width="1800" height="1200" loading="lazy"/></div><div className="lifestyle-copy"><p className="eyebrow">THE SOUTHLAKE LIFE</p><h2>Settle into<br/><em>something special.</em></h2><p>A home should fit the way you live. For Maggie, Southlake has been that place for more than 15 years. Let that local perspective help you explore what your own next chapter could look like.</p><button className="text-link" onClick={()=>openEmail("Let’s talk about Southlake")}>EXPLORE SOUTHLAKE WITH MAGGIE <ArrowUpRight size={18}/></button><div className="area-list">{["Southlake", "Westlake", "Trophy Club", "Keller", "Grapevine", "And beyond"].map(area=><button key={area} onClick={()=>openEmail(area === "And beyond" ? "Exploring the DFW area" : `Let’s talk about ${area}`)}>{area.toUpperCase()}</button>)}</div></div></section>
    <section id="contact" className="contact section-pad"><div><p className="eyebrow">LET’S MAKE YOUR NEXT MOVE PERSONAL</p><h2>Your next chapter<br/><em>starts here.</em></h2><p>Buying, selling, or simply exploring the possibilities?<br/>Maggie would love to hear what you have in mind.</p></div><div className="contact-details"><span className="eyebrow">CONNECT WITH MAGGIE</span><a className="contact-phone" href="tel:+16823581896">(682) 358-1896 <ArrowUpRight/></a><button className="contact-email" onClick={()=>openEmail()}>maggieseipel@ebby.com <ArrowUpRight size={18}/></button><p><a className="office-link" href="https://www.ebby.com/roster/offices/southlake/7" target="_blank" rel="noopener noreferrer">Ebby Halliday, REALTORS®</a><br/><a className="office-link" href="https://www.google.com/maps/search/?api=1&query=1575%20E%20Southlake%20Blvd%20Suite%20100%20Southlake%20TX%2076092" target="_blank" rel="noopener noreferrer">1575 E Southlake Blvd, Suite 100<br/>Southlake, TX 76092</a></p><button className="button light" onClick={()=>openEmail()}>EMAIL MAGGIE <ArrowUpRight size={18}/></button></div></section>
    <footer><div className="footer-top"><a className="brand dark-brand" href="#home"><span className="monogram">MS</span><span>MAGGIE SEIPEL<small>SOUTHLAKE REAL ESTATE</small></span></a><a className="broker-logo" href="https://www.ebby.com/roster/offices/southlake/7" target="_blank" rel="noopener noreferrer">Ebby Halliday<small>REALTORS®</small></a><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-notices"><a href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank" rel="noopener noreferrer">Texas Real Estate Commission Consumer Protection Notice ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Maggie Seipel. All rights reserved.</span><span>Equal Housing Opportunity</span></div><p className="image-note">Lifestyle photography is illustrative and does not represent available listings.</p></footer>
    {composer}
  </main>;
}

