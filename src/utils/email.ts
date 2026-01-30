// Email service using EmailJS
export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Using mailto for now - you can integrate EmailJS later
    const mailtoLink = `mailto:meeravanathi259@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    
    window.open(mailtoLink, '_blank');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const quickContact = () => {
  const mailtoLink = `mailto:meeravanathi259@gmail.com?subject=Portfolio Inquiry&body=Hi Meera,%0D%0A%0D%0AI'm interested in discussing potential opportunities.%0D%0A%0D%0ABest regards,`;
  window.open(mailtoLink, '_blank');
};