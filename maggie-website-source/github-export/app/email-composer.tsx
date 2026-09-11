'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function useEmailComposer() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [subject, setSubject] = useState('Let’s connect');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState('');
  function openEmail(topic = 'Let’s connect') {
    setSubject(topic); setEmailStatus(''); setEmailOpen(true);
  }
  function continueEmail(provider: 'gmail' | 'app') {
    const body = `${message.trim()}\n\n${name.trim()}`;
    const params = new URLSearchParams({ to: 'maggieseipel@ebby.com', su: subject, body });
    if (provider === 'gmail') {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&${params}`, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:maggieseipel@ebby.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setEmailStatus('Your draft is ready to finish in your email account. Return here if you need to change it.');
  }

  const composer = (<Dialog open={emailOpen} onOpenChange={setEmailOpen}>
      <DialogContent className="email-dialog">
        <DialogTitle className="email-title">Email Maggie</DialogTitle>
        <DialogDescription>Write your message here, then choose Gmail or your email app to send it.</DialogDescription>
        <p className="email-recipient">To: maggieseipel@ebby.com</p>
        <form className="email-form" onSubmit={event=>{event.preventDefault(); continueEmail('gmail')}}>
          <label htmlFor="sender-name">Your name<input id="sender-name" autoComplete="name" required maxLength={120} value={name} onChange={event=>setName(event.target.value)}/></label>
          <label htmlFor="email-subject">Subject<input id="email-subject" required maxLength={200} value={subject} onChange={event=>setSubject(event.target.value)}/></label>
          <label htmlFor="email-message">Your message<textarea id="email-message" required maxLength={10000} rows={5} value={message} onChange={event=>setMessage(event.target.value)} placeholder="Tell Maggie what you have in mind…"/></label>
          <div className="email-actions"><button className="button email-primary" type="submit">CONTINUE IN GMAIL <ArrowUpRight size={18}/></button><button className="button email-secondary" type="button" onClick={event=>{if(event.currentTarget.form?.reportValidity()) continueEmail('app')}}>USE MY EMAIL APP</button></div>
          <p className="email-help">You’ll review and send from your own account. Nothing is sent by this website.</p>
          <p className="email-status" role="status">{emailStatus}</p>
        </form>
      </DialogContent>
    </Dialog>);
  return { openEmail, composer };
}
