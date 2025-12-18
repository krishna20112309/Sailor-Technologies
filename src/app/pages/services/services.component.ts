import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-services',
  standalone:true,
  imports: [CommonModule, FooterComponent, FaqComponent],
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
      title: 'Customized Dining',
      description:
        'AI delivers personalized menus, dynamic pricing, and tailored offers for customers.'
    },
    {
      title: 'Streamlined Operations',
      description:
        'Automated inventory, smart reordering, and staff optimization reduce waste.'
    },
    {
      title: 'Customer Support',
      description:
        'AI chatbots provide instant help while sentiment analysis improves service.'
    },
    {
      title: 'Predictive Solutions',
      description:
        'AI forecasts demand, prevents downtime, and controls operational costs.'
    },
    {
      title: 'Data-Driven Insights',
      description:
        'Advanced analytics help owners make faster and smarter decisions.'
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
      icon: '⚙️',
      title: 'Custom Software Development',
      description:
        'Tailored software solutions built to match your business goals and scale effortlessly.'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description:
        'Cloud-native architectures, CI/CD pipelines, and performance optimization.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Human-centered design that improves usability, engagement, and conversions.'
    },
    {
      icon: '🧠',
      title: 'AI & Data Analytics',
      description:
        'Intelligent systems powered by machine learning and real-time analytics.'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description:
        'Enterprise-grade security, audits, and compliance-ready systems.'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description:
        'Ongoing support, monitoring, and continuous improvement for long-term success.'
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
