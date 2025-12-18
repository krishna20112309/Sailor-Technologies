import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-services',
  standalone:true,
  imports: [CommonModule, FaqComponent,RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = [
    {
      title: 'Software Development',
      description: 'Custom, scalable, and secure software solutions.',
      icon: '🧩',
      slug: 'software-development'
    },
    {
      title: 'Website Development',
      description: 'High-performance websites with strong UX.',
      icon: '🌐',
      slug: 'website-development'
    },
    {
      title: 'Front-End Development',
      description: 'Interactive and user-focused UI development.',
      icon: '🎨',
      slug: 'frontend-development'
    },
    {
      title: 'Back-End Development',
      description: 'Robust backend systems built for scale.',
      icon: '⚙️',
      slug: 'backend-development'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud-native deployments and CI/CD pipelines.',
      icon: '☁️',
      slug: 'cloud-devops'
    }
  ];

  constructor(private router: Router) {}

  goToService(slug: string) {
    this.router.navigate(['/services', slug]);
  }
  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  cards = [
    {
      title: 'Strategy-Driven Solutions',
      description:
        'We align technology with your business goals through deep analysis, planning, and expert consulting to ensure long-term success.'
    },
    {
      title: 'Scalable Architecture',
      description:
        'Our solutions are built to grow with your business, ensuring performance, security, and flexibility at every stage.'
    },
    {
      title: 'Seamless User Experience',
      description:
        'We design intuitive, high-performance interfaces that enhance engagement and deliver exceptional user satisfaction.'
    },
    {
      title: 'Smart Automation & Efficiency',
      description:
        'We design intuitive, high-performance interfaces that enhance engagement and deliver exceptional user satisfaction.'
    },
    {
      title: 'Data-Driven Decisions',
      description:
        'Leverage analytics and insights to optimize performance, improve outcomes, and make informed business decisions.'
    }
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
offers = [
  {
    title: 'Software Consulting',
    description: 'Expert guidance to plan, architect, and scale software solutions.',
    icon: '🧠',
    slug: 'software-consulting'
  },
  {
    title: 'Web Development',
    description: 'High-performance, scalable web applications with modern UX.',
    icon: '🌐',
    slug: 'web-development'
  },
  {
    title: 'Mobile App Development',
    description: 'iOS & Android apps engineered for growth and engagement.',
    icon: '📱',
    slug: 'mobile-app-development'
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent AI-driven systems to automate and optimize operations.',
    icon: '🤖',
    slug: 'ai-solutions'
  },
  {
    title: 'ERP Software Development',
    description: 'Custom ERP solutions to unify, automate, and control business processes.',
    icon: '🏢',
    slug: 'erp-software-development'
  },
  {
    title: 'Product Development',
    description: 'End-to-end product development from idea to market launch.',
    icon: '🚀',
    slug: 'product-development'
  }
];


  steps = [
    {
      title: 'Discovery',
      description:
        'We understand your business goals, users, and technical needs to define the right strategy.'
    },
    {
      title: 'Planning',
      description:
        'We design architecture, timelines, and milestones to ensure clarity and predictability.'
    },
    {
      title: 'Design',
      description:
        'Our UX/UI experts craft intuitive, conversion-focused designs aligned with your brand.'
    },
    {
      title: 'Development',
      description:
        'Agile development with clean code, scalability, and continuous quality checks.'
    },
    {
      title: 'Testing',
      description:
        'Rigorous testing to ensure performance, security, and flawless user experience.'
    },
    {
      title: 'Delivery',
      description:
        'On-time deployment, support, and continuous optimization post-launch.'
    }
  ];
}
