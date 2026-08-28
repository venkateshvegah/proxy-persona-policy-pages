"use client";

import { motion } from "framer-motion";
import { Scale, CheckCircle, AlertTriangle, Copyright, CreditCard, Ban, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TermsAndConditions() {
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
          <Scale className="w-5 h-5 text-primary" />
          Proxy Persona Terms
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: {lastUpdated}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground">
              These Terms of Service ("Terms") govern your use of the <strong>Proxy Persona</strong> application and associated services (collectively, the "Services") provided by Vegah LLC ("we", "us", or "our"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
          </motion.div>

          <hr className="border-border" />

          {/* 1. Acceptance & Eligibility */}
          <PolicySection
            icon={<CheckCircle className="w-6 h-6 text-primary" />}
            title="1. Eligibility and Acceptance"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>By creating an account, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding contract. If you do not agree to these Terms, you may not use the Services.</p>
              </div>
            }
          />

          {/* 2. User Conduct & AI Usage Rules */}
          <PolicySection
            icon={<AlertTriangle className="w-6 h-6 text-primary" />}
            title="2. Acceptable Use of AI Features"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>Proxy Persona provides powerful AI tools to generate voice avatars and participate in live calls. You are strictly prohibited from using our Services to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Generate audio or avatars that impersonate real, living individuals without their explicit, written consent (deepfakes).</li>
                  <li>Create or distribute content that is defamatory, hateful, abusive, illegal, or harassing.</li>
                  <li>Use the AI avatars for fraudulent activities, phishing, or scamming third parties.</li>
                  <li>Bypass or attempt to bypass safety filters implemented within the AI models.</li>
                </ul>
                <p>Violation of these rules will result in immediate termination of your account without a refund.</p>
              </div>
            }
          />

          {/* 3. Intellectual Property */}
          <PolicySection
            icon={<Copyright className="w-6 h-6 text-primary" />}
            title="3. Intellectual Property Rights"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p><strong>Our Rights:</strong> We retain all rights, title, and interest in and to the Proxy Persona application, the underlying AI models, and the generated voice synthesis technology.</p>
                <p><strong>Your Rights:</strong> You retain ownership over the original text prompts and specific avatar identity configurations you submit. You are granted a limited, non-exclusive license to use the generated audio for personal, non-commercial purposes, unless specified otherwise in a commercial subscription plan.</p>
              </div>
            }
          />

          {/* 4. Billing, Credits, and Refunds */}
          <PolicySection
            icon={<CreditCard className="w-6 h-6 text-primary" />}
            title="4. Billing, Credits, and Refunds"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p><strong>Subscriptions and Credits:</strong> Subscriptions provide access to our platform and include a specified allocation of credits for using our services. Credits are usage units that enable access to certain features of the platform; they are not cash and have no cash value. Monthly credits expire at the end of each billing cycle and do not roll over. Unused credits are not cash-refundable upon subscription cancellation.</p>
                
                <p><strong>Refund Policy:</strong> Subscription payments are generally non-refundable once the billing period has started. However, refund requests may be considered within 7 days of the original purchase, provided that less than 10% of the allocated credits have been consumed.</p>

                <p><strong>Consumed Credits:</strong> Credits that have already been consumed through actions such as AI generation, voice synthesis, live calling, or other billable operations are strictly non-refundable. If a service fails due to a technical issue on our side and the requested operation is not successfully completed, the credits consumed for that operation may be automatically restored to your account.</p>

                <p><strong>Cancellations:</strong> Cancelling a subscription prevents future renewals but does not automatically provide a refund for the current billing period. You may continue using eligible subscription benefits and remaining credits until the end of your current billing cycle.</p>
              </div>
            }
          />

          {/* 5. Account Termination */}
          <PolicySection
            icon={<Ban className="w-6 h-6 text-primary" />}
            title="5. Termination"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>We reserve the right to suspend or terminate your access to the Services at any time, for any reason, including without limitation, a breach of these Terms. Upon termination, your right to use the Services will immediately cease, and we may delete your stored avatars and call histories.</p>
              </div>
            }
          />

          {/* 6. Limitation of Liability & Contact */}
          <PolicySection
            icon={<Scale className="w-6 h-6 text-primary" />}
            title="6. Limitation of Liability, Governing Law & Contact"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p><strong>Limitation of Liability:</strong> The Services are provided "as is". Vegah LLC shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the AI-generated content.</p>
                <p><strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Austin, Texas.</p>
                <p>For legal inquiries, please contact us at:</p>
                <a href="mailto:support@vegah.com" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  support@vegah.com
                </a>
              </div>
            }
          />
        </motion.div>
      </main>

      <footer className="w-full border-t border-border py-8 text-center text-muted-foreground flex flex-col items-center gap-4 bg-card/50 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} Vegah LLC. All rights reserved.</p>
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
