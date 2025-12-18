import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  activeIndex: number | null = 0;

  faqs = [
    {
      question: 'Do you use freelancers or is your team in-house?',
      answer:
        'We work exclusively with an in-house team of experienced developers, designers, and project managers to ensure consistent quality, security, and communication.'
    },
    {
      question: 'What information should I provide initially?',
      answer:
        'A brief project overview, key features, target audience, timeline expectations, and preferred technologies help us understand your needs quickly.'
    },
    {
      question: 'Do you sign an NDA?',
      answer:
        'Yes. Your ideas and business data are completely safe with us. We are happy to sign a Non-Disclosure Agreement before starting the project.'
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity, but we always provide a clear roadmap with milestones and delivery dates upfront.'
    }
  ];

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
