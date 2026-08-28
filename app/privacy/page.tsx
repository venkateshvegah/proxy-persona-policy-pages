"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Info, FileText, Database, Lock, Eye, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
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

  const lastUpdated = "August 28, 2026";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center z-10 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <ShieldCheck className="w-5 h-5 text-primary" />
          Proxy Persona Privacy
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-12 pb-24 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full flex flex-col space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: {lastUpdated}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground">
              Welcome to <strong>Proxy Persona</strong>. We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and associated web services (collectively, the "Services").
            </p>
          </motion.div>

          <hr className="border-border" />

          {/* 1. Information We Collect */}
          <PolicySection
            icon={<Database className="w-6 h-6 text-primary" />}
            title="1. Information We Collect"
            content={
              <ul className="space-y-4 mt-4 list-disc pl-6 text-muted-foreground">
                <li><strong>Account Information:</strong> When you sign up via Apple Sign-In, Google OAuth, or email, we collect your name, email address, and basic profile information.</li>
                <li><strong>Voice and Audio Data:</strong> Because Proxy Persona enables live AI voice calls and custom voice generation, we temporarily access and process your microphone audio to deliver the core service. We also store the voice samples you explicitly upload for custom persona creation.</li>
                <li><strong>Call Transcripts & History:</strong> We maintain a record of your call history, including text transcriptions of your interactions with AI avatars, to provide you with historical context.</li>
                <li><strong>Avatar Configuration:</strong> The instructions, personality traits, and custom prompts you create for your digital avatars are stored on our servers.</li>
                <li><strong>Billing Data:</strong> If you purchase credits or a subscription, transaction history is recorded. Payment processing is handled by secure third-party providers (e.g., Apple/Google App Stores) and we do not store full credit card details.</li>
                <li><strong>Device Information:</strong> We may collect device identifiers and push notification tokens to deliver necessary alerts.</li>
              </ul>
            }
          />

          {/* 2. How We Use Your Information */}
          <PolicySection
            icon={<FileText className="w-6 h-6 text-primary" />}
            title="2. How We Use Your Information"
            content={
              <ul className="space-y-4 mt-4 list-disc pl-6 text-muted-foreground">
                <li>To provide, operate, and maintain the Proxy Persona application.</li>
                <li>To process audio input and generate real-time AI responses during live interactions.</li>
                <li>To sync your personalized avatars, call histories, and settings across your devices.</li>
                <li>To process billing transactions and manage your credit balance.</li>
                <li>To send you technical notices, updates, security alerts, and administrative messages.</li>
              </ul>
            }
          />

          {/* 3. Third-Party Sharing */}
          <PolicySection
            icon={<Eye className="w-6 h-6 text-primary" />}
            title="3. Third-Party Sharing & APIs"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>We do not sell your personal data. We may share information with trusted third-party service providers only to the extent necessary to deliver our Services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>AI and Voice Synthesis Providers:</strong> To generate realistic voices and intelligent responses, portions of your prompts and audio data are securely processed via third-party AI APIs. These providers are bound by strict data processing agreements.</li>
                  <li><strong>Cloud Hosting & Storage:</strong> Your call history, avatar configurations, and authentication tokens are securely hosted on encrypted cloud infrastructure.</li>
                  <li><strong>Authentication Partners:</strong> Apple and Google, for facilitating secure log-ins via OAuth.</li>
                </ul>
              </div>
            }
          />

          {/* 4. Data Security & Storage */}
          <PolicySection
            icon={<Lock className="w-6 h-6 text-primary" />}
            title="4. Data Security"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. Authentication tokens are managed securely using JSON Web Tokens (JWT) and stored locally on your device via encrypted secure storage mechanisms (e.g., <code>expo-secure-store</code>). 
                </p>
                <p>
                  While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>
            }
          />

          {/* 5. Your Rights */}
          <PolicySection
            icon={<Info className="w-6 h-6 text-primary" />}
            title="5. Your Privacy Rights"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>Depending on your location, you may have the following rights regarding your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access and Portability:</strong> Request a copy of the data we hold about you.</li>
                  <li><strong>Correction:</strong> Correct inaccurate or incomplete information.</li>
                  <li><strong>Deletion:</strong> Request the deletion of your account, avatars, and call history.</li>
                </ul>
                <p>You can manage most of your data directly through the in-app Settings menu.</p>
              </div>
            }
          />

          {/* Contact */}
          <PolicySection
            icon={<Mail className="w-6 h-6 text-primary" />}
            title="6. Contact Us"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <a href="mailto:privacy@proxypersona.com" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  privacy@proxypersona.com
                </a>
              </div>
            }
          />
        </motion.div>
      </main>

      <footer className="w-full border-t border-border py-8 text-center text-muted-foreground flex flex-col items-center gap-4 bg-card/50 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} Proxy Persona. All rights reserved.</p>
      </footer>
    </div>
  );
}

function PolicySection({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <motion.section 
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring" as const, stiffness: 100 },
        },
      }}
      className="flex gap-4 md:gap-6"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        {content}
      </div>
    </motion.section>
  );
}
