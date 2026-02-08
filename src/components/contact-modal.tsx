"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

export function ContactModal({ isOpen, onClose, productName }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: productName ? `I'm interested in the ${productName}. Please provide more details.` : "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
            onClose();
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {isSubmitted ? (
                    /* Success State */
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                        <p className="text-neutral-600">
                            We&apos;ve received your inquiry. Our team will get back to you within 24 hours.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="p-6 pb-0">
                            <h2 className="text-2xl font-bold text-neutral-900">Contact Us</h2>
                            <p className="text-neutral-600 mt-1">
                                Get in touch with our team for inquiries, quotes, or custom orders.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="px-6 py-4">
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Phone className="w-4 h-4" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Mail className="w-4 h-4" />
                                    <span>info@stallionstainless.com</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-600 text-sm mt-2">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>123 Industrial Area, Rajkot, Gujarat, India</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                                    Full Name *
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="h-11"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                                        Email *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="h-11"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                                        Phone
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 12345 67890"
                                        className="h-11"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                                    Message *
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    rows={4}
                                    className="resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-neutral-900 text-white hover:bg-neutral-800"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </span>
                                )}
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
