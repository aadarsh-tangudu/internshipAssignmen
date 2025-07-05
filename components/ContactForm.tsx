"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Calendar, Clock, Mail, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredTime: string;
  concerns: string;
  previousTherapy: string;
  urgency: string;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredTime: '',
    concerns: '',
    previousTherapy: '',
    urgency: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.sessionType) newErrors.sessionType = 'Please select a session type';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select your preferred time';
    if (!formData.concerns.trim()) newErrors.concerns = 'Please describe your concerns';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          sessionType: '',
          preferredTime: '',
          concerns: '',
          previousTherapy: '',
          urgency: ''
        });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-white">
          <div className="flex flex-col items-center text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
            <DialogTitle className="text-2xl font-serif text-stone-700 mb-2">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-stone-600 mb-4">
              Your consultation request has been received. Dr. Blake will contact you within 24 hours to schedule your appointment.
            </DialogDescription>
            <p className="text-sm text-stone-500">
              Please check your email for confirmation details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-stone-700 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Schedule a Consultation
          </DialogTitle>
          <DialogDescription className="text-stone-600">
            Please fill out this form to request a consultation with Dr. Serena Blake. All information is confidential.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-700 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-stone-700">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`border-stone-300 focus:border-stone-500 ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-stone-700">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`border-stone-300 focus:border-stone-500 ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-stone-700 flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`border-stone-300 focus:border-stone-500 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-stone-700 flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`border-stone-300 focus:border-stone-500 ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="(323) 555-0192"
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Session Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-700 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Session Preferences
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-stone-700">Session Type *</Label>
                <Select value={formData.sessionType} onValueChange={(value) => handleInputChange('sessionType', value)}>
                  <SelectTrigger className={`border-stone-300 focus:border-stone-500 ${errors.sessionType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select session type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Session ($200)</SelectItem>
                    <SelectItem value="couples">Couples Session ($240)</SelectItem>
                    <SelectItem value="consultation">Initial Consultation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sessionType && <p className="text-sm text-red-600">{errors.sessionType}</p>}
              </div>
              
              <div className="space-y-2">
                <Label className="text-stone-700">Preferred Time *</Label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger className={`border-stone-300 focus:border-stone-500 ${errors.preferredTime ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person-tue">In-Person: Tuesday (10 AM - 6 PM)</SelectItem>
                    <SelectItem value="in-person-thu">In-Person: Thursday (10 AM - 6 PM)</SelectItem>
                    <SelectItem value="virtual-mon">Virtual: Monday (1 PM - 5 PM)</SelectItem>
                    <SelectItem value="virtual-wed">Virtual: Wednesday (1 PM - 5 PM)</SelectItem>
                    <SelectItem value="virtual-fri">Virtual: Friday (1 PM - 5 PM)</SelectItem>
                    <SelectItem value="flexible">Flexible - Any available time</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredTime && <p className="text-sm text-red-600">{errors.preferredTime}</p>}
              </div>
            </div>
          </div>

          {/* Clinical Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-700 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Clinical Information
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="concerns" className="text-stone-700">
                What brings you to therapy? Please describe your main concerns. *
              </Label>
              <Textarea
                id="concerns"
                value={formData.concerns}
                onChange={(e) => handleInputChange('concerns', e.target.value)}
                className={`border-stone-300 focus:border-stone-500 min-h-[100px] ${errors.concerns ? 'border-red-500' : ''}`}
                placeholder="Please share what you'd like to work on in therapy..."
              />
              {errors.concerns && <p className="text-sm text-red-600">{errors.concerns}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-stone-700">Previous Therapy Experience</Label>
                <Select value={formData.previousTherapy} onValueChange={(value) => handleInputChange('previousTherapy', value)}>
                  <SelectTrigger className="border-stone-300 focus:border-stone-500">
                    <SelectValue placeholder="Select your experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No previous therapy</SelectItem>
                    <SelectItem value="some">Some previous therapy</SelectItem>
                    <SelectItem value="extensive">Extensive therapy experience</SelectItem>
                    <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-stone-700">How urgent is your need for support?</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger className="border-stone-300 focus:border-stone-500">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait 1-2 weeks</SelectItem>
                    <SelectItem value="moderate">Moderate - Within a week</SelectItem>
                    <SelectItem value="high">High - Within a few days</SelectItem>
                    <SelectItem value="crisis">Crisis - Immediate support needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Crisis Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <strong>Crisis Support:</strong> If you're experiencing a mental health crisis or having thoughts of self-harm, 
              please contact the 988 Suicide & Crisis Lifeline (call or text 988) or go to your nearest emergency room immediately.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-stone-600 hover:bg-stone-700 text-white"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}