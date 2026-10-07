import React from 'react';
import { Layers, Paintbrush, Droplet, MessageCircle, ArrowRight } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Ipsum feugiat et dolor',
    description: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    color: 'bg-teal-500',
  },
  {
    id: 2,
    title: 'Sed etiam lorem nulla',
    description: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Consequat et tempus',
    description: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    color: 'bg-cyan-500',
  },
  {
    id: 4,
    title: 'Blandit sed adipiscing',
    description: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    color: 'bg-indigo-500',
  },
  {
    id: 5,
    title: 'Etiam nisl consequat',
    description: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    color: 'bg-sky-500',
  },
  {
    id: 6,
    title: 'Dolore nisl feugiat',
    description: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    color: 'bg-blue-400',
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Magna tempus consequat',
    time: 'Posted 45 minutes ago',
    excerpt: 'Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.',
    comments: 33
  },
  {
    id: 2,
    title: 'Aptent veroeros aliquam',
    time: 'Posted 45 minutes ago',
    excerpt: 'Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.',
    comments: 33
  }
];

const HeroSection = () => (
  <section className="w-full">
    <div className="py-8 text-center bg-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Paintings</h1>
    </div>
    <div className="w-full h-64 md:h-96 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 flex items-center justify-center relative overflow-hidden">
      {/* Decorative abstract shapes to simulate a creative banner */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 C20,20 40,80 60,40 C80,0 100,60 100,50 L100,100 L0,100 Z" fill="currentColor" className="text-white" />
        </svg>
      </div>
      <span className="text-white text-xl md:text-3xl font-bold tracking-widest uppercase opacity-80 mix-blend-overlay">Creative Canvas Placeholder</span>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-16 text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
          <Paintbrush size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Ipsum consequat</h3>
        <p className="text-slate-600 leading-relaxed">Nisi amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
          <Layers size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Magna etiam dolor</h3>
        <p className="text-slate-600 leading-relaxed">Nisi amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-6">
          <Droplet size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Tempus adipiscing</h3>
        <p className="text-slate-600 leading-relaxed">Nisi amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
      </div>
    </div>
    
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded transition-colors w-full sm:w-auto">
        Get Started
      </button>
      <button className="px-8 py-3 border-2 border-slate-300 hover:border-teal-600 hover:text-teal-600 text-slate-600 font-semibold rounded transition-colors w-full sm:w-auto">
        Learn More
      </button>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section className="bg-slate-50 py-16 border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_ITEMS.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md">
            <div className={`h-48 w-full ${item.color} flex items-center justify-center`}>
               {/* Abstract doodle placeholder */}
               <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{item.description}</p>
              <button className="self-start px-5 py-2 text-sm font-semibold text-slate-600 border border-slate-300 rounded hover:border-teal-500 hover:text-teal-600 transition-colors">
                Find out more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section className="py-16 max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">The Blog</h2>
    <div className="space-y-12">
      {BLOG_POSTS.map((post) => (
        <article key={post.id} className="flex flex-col bg-white">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">{post.title}</h3>
          <p className="text-sm text-slate-400 mb-6 font-medium">{post.time}</p>
          <p className="text-slate-600 leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded transition-colors flex items-center gap-2">
              Continue Reading <ArrowRight size={16} />
            </button>
            <a href="#" className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium transition-colors text-sm">
              <MessageCircle size={16} /> {post.comments} comments
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-teal-200">
      
      {/* Main Content Area */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        
        <hr className="max-w-4xl mx-auto border-slate-200" />
        
        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 py-8 border-t border-slate-200 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Untitled. All rights reserved. Design: ALUNOS DE WEB
          </p>
        </div>
      </footer>
      
    </div>
  );
}