"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, UserCog, Radio, ChevronRight, Shield } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 w-1/3"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-card shadow-sm border border-border flex items-center justify-center p-1">
             <Image src="/proxy-persona-logo.png" alt="Proxy Personas Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight">Proxy Personas</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium"
        >
           <Link href="/delete-account" className="text-muted-foreground hover:text-primary transition-colors">
            Account Deletion
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-end w-1/3"
        >
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-2 rounded-full font-medium transition-colors text-sm">
            Sign In
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-24 relative">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center text-center space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Available in Early Access
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Create and Call Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              AI Voice Avatars
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Build custom personas with configurable voices, tailored instructions, and distinct identities. Initiate live calls and interact naturally with your digital avatars.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
              Start Creating Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-card border border-border text-foreground hover:bg-accent px-8 py-4 rounded-full font-semibold transition-all">
              Download App
            </button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-32"
        >
          <FeatureCard 
            icon={<UserCog className="w-8 h-8 text-primary" />}
            title="Custom Identities"
            description="Sculpt unique personalities. Define their background, tone, and conversational style."
          />
          <FeatureCard 
            icon={<Mic className="w-8 h-8 text-primary" />}
            title="Configurable Voices"
            description="Select from a vast library of ultra-realistic AI voices tailored to your persona."
          />
          <FeatureCard 
            icon={<Radio className="w-8 h-8 text-primary" />}
            title="Live Interactions"
            description="Initiate real-time voice calls. Speak naturally and get immediate, lifelike responses."
          />
        </motion.div>
      </main>

      <footer className="w-full border-t border-border py-8 text-center text-muted-foreground flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
           <Shield className="w-4 h-4" />
           <span>Privacy First. Your personas are securely stored.</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Proxy Personas. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
