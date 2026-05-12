/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Star, 
  ArrowRight, 
  MessageSquare, 
  ChevronDown, 
  Plus, 
  Minus,
  Instagram,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pricing Constants
const RETAIL_PRICE = 129.00;
const SALE_PRICE = 59.99;
const WHATSAPP_NUMBER = "+256754922136";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [scrolled, setScrolled] = useState(false);
  
  // Ref for intersection observer (Scroll animations)
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = () => {
    // Analytics/Redirect to Checkout simulation
    const message = encodeURIComponent(`Hi! I'm interested in the Aura Sculpt device. I'd like to order ${quantity} unit(s).`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-obsidian text-sand font-sans selection:bg-gold/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-obsidian/80 backdrop-blur-md py-3 shadow-xl border-b border-white/5' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sand">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-white/5 rounded-full lg:hidden"
            id="mobile-menu-btn"
          >
            <Menu size={24} />
          </button>
          
          <div className="text-2xl font-serif tracking-[0.2em] font-light">
            AURA<span className="font-bold text-gold">SCULPT</span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            <a href="#benefits" className="hover:text-gold transition-colors">Benefits</a>
            <a href="#results" className="hover:text-gold transition-colors">Results</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
          </div>

          <button 
            onClick={addToCart}
            className="p-2 relative hover:bg-white/5 rounded-full transition-colors"
            id="cart-btn"
          >
            <ShoppingBag size={24} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-gold text-black text-[9px] font-bold flex items-center justify-center rounded-full">
              {quantity}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[60] bg-obsidian p-10 flex flex-col items-center justify-center gap-12 text-sand"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 left-8 p-2 text-gold"
            >
              <X size={32} />
            </button>
            <div className="text-4xl font-serif tracking-[0.2em] italic mb-10 text-gold">Aura Sculpt</div>
            <div className="flex flex-col items-center gap-8 text-xl font-light tracking-[0.3em] uppercase">
              <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">Benefits</a>
              <a href="#results" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">Results</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">FAQ</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-obsidian">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfad4595fd?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Skincare Background" 
              className="w-full h-full object-cover opacity-30 grayscale saturate-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian"></div>
          </div>

          <div className="relative z-10 max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-6 py-2 border border-gold/30 rounded-full text-[10px] uppercase tracking-[0.4em] font-black text-gold mb-8 glass shadow-xl shadow-gold/5">
                The Viral Beauty Standard
              </span>
              <h1 className="text-6xl md:text-9xl font-serif font-light mb-8 leading-[1] tracking-tight text-sand">
                Redefine Your <br />
                <span className="italic font-normal text-gold">Radiance.</span>
              </h1>
              <p className="text-lg md:text-xl font-light text-sand/60 max-w-xl mx-auto mb-12 leading-relaxed">
                Experience clinical-grade facial sculpting from home. Lift, tone, and illuminate with the 4-in-1 Aura Sculptor.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={addToCart}
                  className="w-full sm:w-auto gold-gradient text-black px-12 py-6 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95 group font-bold tracking-widest uppercase text-xs"
                >
                  SHOP NOW — ${SALE_PRICE}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-xs font-bold text-sand/40 px-4 tracking-widest uppercase">
                  <div className="flex -space-x-2 mr-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-obsidian overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span>12K+ Users</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
            <ChevronDown className="animate-bounce" size={20} />
          </motion.div>
        </section>

        {/* Product Highlights Grid */}
        <section id="benefits" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Smartphone className="text-gold" />}
              title="4-in-1 Therapy"
              desc="Microcurrent, Red LED, Facial Massage, & Soothing Warmth."
            />
            <FeatureCard 
              icon={<Truck className="text-gold" />}
              title="Global Shipping"
              desc="Free tracked shipping to over 50 countries worldwide."
            />
            <FeatureCard 
              icon={<Clock className="text-gold" />}
              title="5-Min Daily"
              desc="Get noticeable results in just 5 minutes of daily use."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-gold" />}
              title="60-Day Guarantee"
              desc="Love your results or get a full refund. Risk-free."
            />
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="bg-deep-gray text-sand py-32 overflow-hidden relative border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-black mb-6 block">The Science of Lift</span>
              <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 leading-tight">
                Stop covering up. <br />
                <span className="italic text-gold">Start Sculpting.</span>
              </h2>
              <div className="space-y-12">
                <TimelineItem 
                  number="01" 
                  title="Targeted Microcurrent" 
                  text="Mirror-mimics the body's natural current to tone facial muscles and reduce puffiness instantly." 
                />
                <TimelineItem 
                  number="02" 
                  title="Therapeutic Warmth" 
                  text="Warms to 42°C to enhance blood flow and improve product absorption for that deeper glow." 
                />
                <TimelineItem 
                  number="03" 
                  title="NASA Red Light Tech" 
                  text="Deep penetrating red LED light stimulates collagen production and smooths fine lines." 
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative group shadow-2xl shadow-black">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Product in use" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#C5A059" className="text-gold" />)}
                  </div>
                  <p className="text-xl font-serif italic font-light leading-relaxed mb-6">
                    "I saw my jawline reappear after just one week. It's my secret weapon before filming TikToks!"
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">— Sarah J., Verified User</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Product Showcase */}
        <section id="results" className="py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:items-start">
            {/* Image Gallery */}
            <div className="w-full lg:w-3/5 space-y-8">
               <div className="aspect-square bg-deep-gray rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000" 
                    alt="Facial Sculptor Main" 
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="grid grid-cols-3 gap-8">
                  {[
                    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400"
                  ].map((src, i) => (
                    <div key={i} className="aspect-square bg-deep-gray rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold transition-all">
                      <img src={src} alt="Product Detail" className="w-full h-full object-cover brightness-75" referrerPolicy="no-referrer" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Buying Info */}
            <div className="w-full lg:w-2/5 sticky top-32">
              <div className="p-1 border border-gold/30 rounded-full inline-flex items-center px-6 py-2 mb-8 glass text-gold font-black text-[10px] uppercase tracking-[0.3em]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                Extremely Limited Stock
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 text-sand leading-tight">The Aura <br /><span className="italic font-normal">Sculptor™</span></h1>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-10 font-black">Professional Facial Architecture</p>
              
              <div className="flex items-end gap-4 mb-12">
                <span className="text-5xl font-serif font-bold text-sand">${SALE_PRICE}</span>
                <span className="text-xl text-sand/30 line-through mb-1">${RETAIL_PRICE}</span>
                <span className="bg-gold/10 text-gold text-[10px] uppercase font-black px-3 py-1.5 rounded-full mb-1 ml-4 border border-gold/20">SAVE 55%</span>
              </div>

              <div className="space-y-10 mb-12">
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-sand/40">Select Aesthetic</label>
                  <div className="flex gap-6">
                    <button className="w-12 h-12 rounded-full border-2 border-gold bg-obsidian transition-all ring-4 ring-gold/5"></button>
                    <button className="w-12 h-12 rounded-full border border-white/10 bg-sand/10 hover:border-gold transition-all"></button>
                    <button className="w-12 h-12 rounded-full border border-white/10 bg-black hover:border-gold transition-all"></button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                   <label className="text-[10px] uppercase tracking-[0.3em] font-black text-sand/40">Desired Quantity</label>
                   <div className="flex items-center border border-white/10 rounded-full w-min p-1 glass">
                      <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-4 hover:bg-white/5 rounded-full transition-colors text-sand"><Minus size={18} /></button>
                      <span className="px-8 font-serif font-bold text-2xl text-sand">{quantity}</span>
                      <button onClick={() => setQuantity(q => q+1)} className="p-4 hover:bg-white/5 rounded-full transition-colors text-sand"><Plus size={18} /></button>
                   </div>
                </div>
              </div>

              <button 
                onClick={addToCart}
                className="w-full gold-gradient text-black py-7 rounded-full text-sm uppercase tracking-[0.3em] font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-gold/20"
              >
                Add to cart — ${ (SALE_PRICE * quantity).toFixed(2) }
              </button>

              <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={18} className="text-gold" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sand/40">Authorized Retail</span>
                </div>
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShieldCheck size={18} className="text-gold" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sand/40">Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section (TikTok Style) */}
        <section className="bg-obsidian py-32 px-6 overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 italic font-light text-sand"><span className="text-gold">Viral</span> Awareness.</h2>
            <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-10 overflow-x-auto pb-12 scrollbar-hide">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="min-w-[300px] aspect-[9/16] bg-black rounded-[2.5rem] relative overflow-hidden group border border-white/5 shadow-2xl">
                  <img 
                    src={`https://picsum.photos/seed/sculpt${i}/400/800`} 
                    alt={`Viral video ${i}`} 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full glass border border-gold/40 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-gold border-b-[10px] border-b-transparent ml-1.5"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                       <span className="text-sand/60 text-[10px] font-black uppercase tracking-[0.2em]">Live Results</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 px-6 bg-obsidian border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif font-light text-center mb-20 text-sand">Informed <span className="italic text-gold">Beauty.</span></h2>
            <div className="space-y-6">
              <AccordionItem 
                question="How soon will I see results?" 
                answer="Most users report a visible 'lifted' effect and reduced puffiness after the very first 5-minute session. Sustainable improvements in fine lines and skin texture typically appear within 4-6 weeks of consistent daily use." 
              />
              <AccordionItem 
                question="Is the microcurrent safe?" 
                answer="Yes, absolutely. The Aura Sculptor uses low-level microcurrent that mimics your body's natural electrical impulses. It is painless and safe for all skin types. Most people feel a gentle, pleasant warming sensation." 
              />
              <AccordionItem 
                question="Can I use it with my favorite serum?" 
                answer="Actually, we recommend it! The therapeutic warmth and vibration are designed to push your serums deeper into the skin layers, making your current skincare products work even harder for you." 
              />
              <AccordionItem 
                question="Do you ship to my country?" 
                answer="We offer free tracked shipping to the USA, Canada, UK, Australia, EU, and most major worldwide destinations. Delivery typically takes 7-12 business days depending on your location." 
              />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="bg-deep-gray rounded-[3rem] p-16 md:p-32 text-center text-sand relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-8xl font-serif font-light mb-12 italic leading-tight">Your New <br /><span className="text-gold font-normal">Aura Awaits.</span></h2>
              <p className="text-xl font-light text-sand/60 mb-16 max-w-lg mx-auto">Join thousands of women redefining their beauty standards with Aura Sculpt.</p>
              <button 
                onClick={addToCart}
                className="gold-gradient text-black px-16 py-8 rounded-full text-sm uppercase tracking-[0.4em] font-black hover:scale-[1.05] transition-all active:scale-[0.98] shadow-3xl shadow-gold/20"
              >
                CLAIM 55% OFF NOW
              </button>
              <div className="mt-12 flex items-center justify-center gap-10 text-[10px] uppercase tracking-[0.3em] font-black text-sand/40">
                 <span className="flex items-center gap-3"><Truck size={16} /> WORLDWIDE SHIPPING</span>
                 <span className="flex items-center gap-3"><ShieldCheck size={16} /> SECURE PLATFROM</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-obsidian text-sand/30 py-32 px-6 mt-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 border-b border-white/5 pb-24">
          <div className="col-span-1 md:col-span-1">
             <div className="text-2xl font-serif tracking-[0.2em] font-light text-sand mb-8">AURA<span className="font-bold text-gold">SCULPT</span></div>
             <p className="text-sm border-l-2 border-gold pl-6 leading-relaxed mb-10 italic">
               Revolutionary beauty technology designed for the modern woman. 
               Experience the luxury of clinical results from your bedroom.
             </p>
             <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all"><Instagram size={20} /></a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all"><MessageSquare size={20} /></a>
             </div>
          </div>
          
          <div>
            <h4 className="text-sand text-[10px] uppercase tracking-[0.4em] font-black mb-10">Collections</h4>
            <ul className="text-xs space-y-6 uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-gold transition-all">Aura Sculptor™</a></li>
              <li><a href="#" className="hover:text-gold transition-all">Attachments</a></li>
              <li><a href="#" className="hover:text-gold transition-all">Luxe Serums</a></li>
              <li><a href="#" className="hover:text-gold transition-all">Gifting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sand text-[10px] uppercase tracking-[0.4em] font-black mb-10">Concierge</h4>
            <ul className="text-xs space-y-6 uppercase tracking-widest font-bold">
              <li><a href="#faq" className="hover:text-gold transition-all">Assistance</a></li>
              <li><a href="#" className="hover:text-gold transition-all">Deliveries</a></li>
              <li><a href="#" className="hover:text-gold transition-all">Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-all">Guarantee</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sand text-[10px] uppercase tracking-[0.4em] font-black mb-10">Connectivity</h4>
            <p className="text-xs mb-8 uppercase tracking-widest leading-loose">Questions? Our experts are available 24/7 via mobile messaging.</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
              className="inline-flex items-center gap-4 text-gold border-b-2 border-gold/20 pb-2 hover:border-gold transition-all text-[11px] font-black tracking-widest"
            >
              CHAT ON WHATSAPP <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black opacity-40">
           <p>© 2026 Aura Sculpt Beauty Lab. Worldwide.</p>
           <div className="flex gap-12">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Legal</a>
           </div>
        </div>
      </footer>

      {/* Sticky Bottom Add To Cart (Mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-6 glass border-t border-white/10 z-50 flex items-center justify-between gap-6">
         <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] font-black text-sand/40">Aura Sculptor</span>
            <span className="text-2xl font-serif font-black italic text-sand">${SALE_PRICE}</span>
         </div>
         <button 
           onClick={addToCart}
           className="gold-gradient text-black px-10 py-5 rounded-full flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-gold/20"
         >
           ORDER <ArrowRight size={16} />
         </button>
      </div>
    </div>
  );
}

// Subcomponents
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-deep-gray border border-white/5 rounded-[2.5rem] hover:border-gold/30 hover:-translate-y-2 transition-all group">
      <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-4 text-sand">{title}</h3>
      <p className="text-sm font-light text-sand/40 leading-relaxed uppercase tracking-widest text-[10px] font-black">{desc}</p>
    </div>
  );
}

function TimelineItem({ number, title, text }: { number: string, title: string, text: string }) {
  return (
    <div className="flex gap-8 group">
      <div className="text-5xl font-serif font-light text-gold opacity-20 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">{number}</div>
      <div className="pt-2">
        <h4 className="text-2xl mb-3 font-medium text-sand">{title}</h4>
        <p className="text-sm font-light text-sand/40 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 bg-deep-gray rounded-3xl overflow-hidden shadow-2xl">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-serif text-xl text-sand">{question}</span>
        <Plus className={`transition-transform duration-500 text-gold ${isOpen ? 'rotate-45' : ''}`} size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-sm font-light leading-relaxed text-sand/60">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
