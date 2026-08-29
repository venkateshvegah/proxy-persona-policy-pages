"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserX, Mail, ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DeleteAccount() {
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
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center z-10 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <ShieldCheck className="w-5 h-5 text-primary" />
          Proxy Personas Support
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-12 pb-24 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full flex flex-col space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Account Deletion</h1>
            <p className="text-muted-foreground text-lg">
              Instructions for requesting deletion of your Proxy Personas account and data.
            </p>
          </motion.div>

          <hr className="border-border" />

          {/* Instructions */}
          <InstructionSection
            icon={<UserX className="w-6 h-6 text-primary" />}
            title="How to Delete Your Account (In-App)"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>The fastest and most secure way to delete your account is directly within the Proxy Personas mobile app:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the <strong>Proxy Personas</strong> app on your device.</li>
                  <li>Tap on the <strong>Settings</strong> icon on the bottom right.</li>
                  <li>Scroll to the bottom of the Settings page.</li>
                  <li>Tap the <strong>Delete Account</strong> button.</li>
                  <li>Confirm your choice in the prompt.</li>
                </ol>
                <p className="text-sm border-l-2 border-primary/50 pl-4 italic">
                  Note: This action is permanent. All your custom avatars, call history, and associated personal data will be irreversibly deleted from our servers.
                </p>
              </div>
            }
          />

          <InstructionSection
            icon={<Mail className="w-6 h-6 text-primary" />}
            title="Email Deletion Request"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>If you no longer have access to the mobile app or your device, you can request manual account deletion by contacting our support team.</p>
                <p>Please send an email to our support team <strong>using the email address associated with your account</strong>:</p>
                
                <div className="bg-card border border-border rounded-lg p-4 my-4">
                  <p><strong>To:</strong> <a href="mailto:Support@vegah.com" className="text-primary hover:underline">Support@vegah.com</a></p>
                  <p><strong>Subject:</strong> Account Deletion Request</p>
                  <p><strong>Body:</strong> Please delete my Proxy Personas account and all associated data.</p>
                </div>
                
                <p>We will process your request within 14 days and send you a confirmation once your data has been completely removed.</p>
              </div>
            }
          />
          
          <InstructionSection
            icon={<Trash2 className="w-6 h-6 text-primary" />}
            title="What Data is Deleted?"
            content={
              <div className="space-y-4 mt-4 text-muted-foreground">
                <p>When your account is deleted, we remove the following data from our active databases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal profile information (name, email, profile picture)</li>
                  <li>Custom AI avatars and their configurations</li>
                  <li>Your complete call history and transcripts</li>
                  <li>Voice samples used for persona generation</li>
                  <li>Authentication tokens and active sessions</li>
                </ul>
              </div>
            }
          />
        </motion.div>
      </main>

      <footer className="w-full border-t border-border py-8 text-center text-muted-foreground flex flex-col items-center gap-4 bg-card/50 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} Proxy Personas. All rights reserved.</p>
      </footer>
    </div>
  );
}

function InstructionSection({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
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
