"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Clock,
  DollarSign,
  Calendar,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-stone-600 rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-stone-200 rounded-sm relative">
                  <div className="absolute inset-1 border border-stone-200 rounded-sm"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-serif text-stone-100">
                  Dr. Serena Blake, PsyD
                </h1>
                <p className="text-sm text-stone-200">
                  Clinical Psychology Services
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-stone-100 hover:text-stone-200 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-stone-100 hover:text-stone-200 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-stone-100 hover:text-stone-200 transition-colors"
              >
                Services
              </a>
              <a
                href="#fees"
                className="text-stone-100 hover:text-stone-200 transition-colors"
              >
                Fees
              </a>
              <a
                href="#contact"
                className="text-stone-100 hover:text-stone-200 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-stone-100 hover:text-stone-200 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 p-4 bg-stone-800/90 rounded-lg">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-stone-100 hover:text-stone-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-stone-100 hover:text-stone-200 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-stone-100 hover:text-stone-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </a>
                <a
                  href="#fees"
                  className="text-stone-100 hover:text-stone-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Fees
                </a>
                <a
                  href="#contact"
                  className="text-stone-100 hover:text-stone-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/fallback-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/ocean-background.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-stone-900/50" />

        <div className="relative text-center text-white px-4 max-w-4xl mx-auto z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Compassionate Clinical Psychology
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
            Evidence-Based Care for Your Well-Being
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Dr. Serena Blake combines cognitive-behavioral therapy and
            mindfulness approaches to help you overcome anxiety, strengthen
            relationships, and heal from trauma in Los Angeles, CA
          </p>
          <Button
            size="lg"
            onClick={openContactForm}
            className="bg-stone-400/80 hover:bg-stone-500/90 text-stone-900 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-stone-50 to-stone-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-700 mb-8">
                About Dr. Serena Blake
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                  based in Los Angeles, CA, with eight years of experience and
                  over 500 client sessions. She blends evidence-based
                  approaches—like cognitive-behavioral therapy and
                  mindfulness—with compassionate, personalized care to help you
                  overcome anxiety, strengthen relationships, and heal from
                  trauma.
                </p>
                <p>
                  Whether you meet in her Maplewood Drive office or connect
                  virtually via Zoom, Dr. Blake is committed to creating a safe,
                  supportive space for you to thrive. Her approach integrates
                  proven therapeutic techniques with a deep understanding of
                  each client's unique needs and circumstances.
                </p>
                <p>
                  With extensive training in evidence-based treatments and a
                  passion for helping others achieve lasting change, Dr. Blake
                  provides both in-person and virtual sessions to accommodate
                  your preferences and schedule.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/dr-serena-blake.jpg"
                  alt="Dr. Serena Blake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-700 leading-tight mb-8">
              Creating a safe, supportive space where you can heal, grow, and
              thrive.
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Whether you're struggling with anxiety, relationship challenges,
              or trauma, you don't have to face it alone. Through evidence-based
              therapy and compassionate care, we'll work together toward your
              goals of healing and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-bl from-stone-50 via-white to-stone-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-700 text-center mb-16">
            Services & Specialties
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-stone-200">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src="/images/anxiety-stress.jpg"
                    alt="Anxiety and stress management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif text-stone-700 mb-4">
                  Anxiety & Stress Management
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Learn effective coping strategies and evidence-based
                  techniques to manage anxiety, reduce stress, and regain
                  control over your daily life through cognitive-behavioral
                  approaches and mindfulness practices.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-stone-200">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src="/images/relationship-counseling.jpg"
                    alt="Relationship counseling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif text-stone-700 mb-4">
                  Relationship Counseling
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Strengthen your relationships through improved communication,
                  conflict resolution, and deeper understanding. Available for
                  individuals and couples seeking to build healthier, more
                  fulfilling connections.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-stone-200">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src="/images/trauma-recovery.jpg"
                    alt="Trauma recovery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif text-stone-700 mb-4">
                  Trauma Recovery
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Heal from past traumatic experiences through specialized,
                  evidence-based trauma therapies in a safe and supportive
                  environment. Reclaim your sense of safety, control, and
                  well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours & Session Info */}
      <section className="py-20 bg-gradient-to-r from-stone-100 via-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-700 text-center mb-16">
              Office Hours & Sessions
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Office Hours */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-stone-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-stone-600 mr-3" />
                    <h3 className="text-2xl font-serif text-stone-700">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-700 mb-2">
                        In-Person Sessions
                      </h4>
                      <p className="text-stone-600">Tuesday & Thursday</p>
                      <p className="text-stone-600">10:00 AM – 6:00 PM</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-700 mb-2">
                        Virtual Sessions (Zoom)
                      </h4>
                      <p className="text-stone-600">
                        Monday, Wednesday & Friday
                      </p>
                      <p className="text-stone-600">1:00 PM – 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Session Experience */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-stone-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-stone-600 mr-3" />
                    <h3 className="text-2xl font-serif text-stone-700">
                      Experience
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-700 mb-2">
                        8 Years of Practice
                      </h4>
                      <p className="text-stone-600">
                        Licensed clinical psychologist with extensive experience
                        in evidence-based treatments
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-700 mb-2">
                        500+ Client Sessions
                      </h4>
                      <p className="text-stone-600">
                        Proven track record of helping clients achieve their
                        therapeutic goals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section
        id="fees"
        className="py-20 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-700 text-center mb-16">
              Session Fees & FAQ
            </h2>
            <div className="flex flex-col gap-5 md:gap-12">
              {/* Fees */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-stone-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <DollarSign className="w-8 h-8 text-stone-600 mr-3" />
                    <h3 className="text-2xl font-serif text-stone-700">
                      Session Fees
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-stone-50/80 rounded-lg">
                      <span className="font-semibold text-stone-700">
                        Individual Session
                      </span>
                      <span className="text-2xl font-serif text-stone-700">
                        $200
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-stone-50/80 rounded-lg">
                      <span className="font-semibold text-stone-700">
                        Couples Session
                      </span>
                      <span className="text-2xl font-serif text-stone-700">
                        $240
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-stone-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-stone-700 mb-6">
                    Frequently Asked Questions
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="insurance"
                      className="border-stone-200"
                    >
                      <AccordionTrigger className="text-left text-stone-700 hover:text-stone-900">
                        Do you accept insurance?
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600">
                        No, but a superbill is provided for self-submission to
                        your insurance provider for potential reimbursement.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="online-sessions"
                      className="border-stone-200"
                    >
                      <AccordionTrigger className="text-left text-stone-700 hover:text-stone-900">
                        Are online sessions available?
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600">
                        Yes—all virtual sessions are conducted via Zoom for your
                        convenience. Available Monday, Wednesday, and Friday
                        from 1:00 PM to 5:00 PM.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="cancellation"
                      className="border-stone-200"
                    >
                      <AccordionTrigger className="text-left text-stone-700 hover:text-stone-900">
                        What is your cancellation policy?
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600">
                        24-hour notice is required for all cancellations. Late
                        cancellations may be subject to a fee.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="session-length"
                      className="border-stone-200"
                    >
                      <AccordionTrigger className="text-left text-stone-700 hover:text-stone-900">
                        How long are therapy sessions?
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600">
                        Standard therapy sessions are 50 minutes long. Initial
                        consultations may run slightly longer to allow for
                        comprehensive assessment.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="payment" className="border-stone-200">
                      <AccordionTrigger className="text-left text-stone-700 hover:text-stone-900">
                        What payment methods do you accept?
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600">
                        We accept cash, check, and all major credit cards.
                        Payment is due at the time of service.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/contact-background.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-100 mb-8">
            Dr. Serena Blake, PsyD, Licensed Clinical Psychologist
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:serena@blakepsychology.com"
                className="underline hover:text-stone-200 transition-colors"
              >
                serena@blakepsychology.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>(323) 555-0192</span>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
            </div>
          </div>

          <Button
            onClick={openContactForm}
            size="lg"
            className="bg-stone-400/80 hover:bg-stone-500/90 text-stone-900 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 mb-8"
          >
            SCHEDULE A CONSULTATION
          </Button>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="#home"
              className="underline hover:text-stone-200 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="underline hover:text-stone-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="underline hover:text-stone-200 transition-colors"
            >
              Client Portal
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 text-stone-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Dr. Serena Blake, PsyD Clinical Psychology Services. All
            rights reserved.
          </p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
}
