import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  service!: any;

  services: any = {

  /* ================= SOFTWARE CONSULTING ================= */
  'software-consulting': {
    title: 'Software Consulting Services',
    subtitle:
      'Strategic software consulting to help you make the right technology decisions and build scalable digital solutions.',
    cta: 'Talk to Software Experts',

    heroPoints: [
      'Technology Strategy & Roadmapping',
      'System Architecture Consulting',
      'Digital Transformation Advisory'
    ],

    offers: [
      {
        title: 'Technology Strategy',
        desc: 'Align your business objectives with the right technology stack and roadmap.'
      },
      {
        title: 'Architecture Design',
        desc: 'Design secure, scalable, and high-performance system architectures.'
      },
      {
        title: 'Process Optimization',
        desc: 'Improve efficiency, reduce risk, and accelerate delivery.'
      },
      {
        title: 'Legacy Modernization',
        desc: 'Upgrade outdated systems into modern, cloud-ready platforms.'
      }
    ],

    process: [
      'Discovery & Requirement Analysis',
      'Technical Assessment',
      'Strategy & Roadmap',
      'Execution Guidance',
      'Continuous Optimization'
    ],

    faqs: [
      {
        q: 'What is software consulting?',
        a: 'Software consulting helps businesses choose, design, and implement the right technology solutions aligned with their goals.'
      },
      {
        q: 'Do you provide implementation support?',
        a: 'Yes, we support both strategy and execution phases.'
      }
    ]
  },

  /* ================= WEB DEVELOPMENT ================= */
  'web-development': {
    title: 'Web Development Services',
    subtitle:
      'Custom web applications built for performance, security, and scalability.',
    cta: 'Build My Website',

    heroPoints: [
      'Responsive & Modern UI',
      'SEO Optimized Architecture',
      'High Performance & Security'
    ],

    offers: [
      {
        title: 'Custom Web Applications',
        desc: 'Tailored web solutions built to meet unique business needs.'
      },
      {
        title: 'E-commerce Development',
        desc: 'Scalable and secure online stores with seamless user experience.'
      },
      {
        title: 'Frontend Engineering',
        desc: 'Fast, interactive, and conversion-focused user interfaces.'
      },
      {
        title: 'Backend Development',
        desc: 'Robust APIs and server-side systems for scalable growth.'
      }
    ],

    process: [
      'Requirement Gathering',
      'UI/UX Design',
      'Development',
      'Testing & Optimization',
      'Launch & Support'
    ]
  },

  /* ================= MOBILE APP DEVELOPMENT ================= */
  'mobile-app-development': {
    title: 'Mobile App Development Services',
    subtitle:
      'High-quality mobile applications that deliver seamless user experiences across devices.',
    cta: 'Start My App Project',

    heroPoints: [
      'iOS & Android Development',
      'User-Centric Design',
      'Scalable & Secure Apps'
    ],

    offers: [
      {
        title: 'Native App Development',
        desc: 'High-performance native apps for iOS and Android.'
      },
      {
        title: 'Cross-Platform Apps',
        desc: 'Cost-effective apps using modern cross-platform frameworks.'
      },
      {
        title: 'App UI/UX Design',
        desc: 'Intuitive and engaging mobile user interfaces.'
      },
      {
        title: 'App Maintenance',
        desc: 'Ongoing support, updates, and performance optimization.'
      }
    ],

    process: [
      'Concept & Planning',
      'Design',
      'Development',
      'Testing',
      'Deployment & Maintenance'
    ]
  },

  /* ================= AI SOLUTIONS ================= */
  'ai-solutions': {
    title: 'AI Solutions & Automation',
    subtitle:
      'AI-powered systems that automate processes and unlock data-driven insights.',
    cta: 'Explore AI Solutions',

    heroPoints: [
      'AI Automation',
      'Predictive Analytics',
      'Intelligent Decision Systems'
    ],

    offers: [
      {
        title: 'Machine Learning Models',
        desc: 'Custom ML models trained for your business needs.'
      },
      {
        title: 'AI Automation',
        desc: 'Automate repetitive tasks and improve efficiency.'
      },
      {
        title: 'Data Analytics',
        desc: 'Advanced insights using AI-driven analytics.'
      },
      {
        title: 'Chatbots & Assistants',
        desc: 'Smart conversational AI for customer engagement.'
      }
    ],

    process: [
      'Data Analysis',
      'Model Design',
      'Training & Validation',
      'Deployment',
      'Monitoring & Optimization'
    ]
  },

  /* ================= ERP SOFTWARE DEVELOPMENT ================= */
  'erp-software-development': {
    title: 'ERP Software Development',
    subtitle:
      'Custom ERP systems to streamline operations, improve visibility, and drive business efficiency.',
    cta: 'Build My ERP',

    heroPoints: [
      'Centralized Business Management',
      'Custom ERP Modules',
      'Scalable & Secure Systems'
    ],

    offers: [
      {
        title: 'Custom ERP Development',
        desc: 'ERP systems tailored to your unique workflows.'
      },
      {
        title: 'Module Integration',
        desc: 'Finance, HR, Inventory, CRM, and Operations modules.'
      },
      {
        title: 'ERP Modernization',
        desc: 'Upgrade legacy ERP systems with modern technologies.'
      },
      {
        title: 'ERP Support & Maintenance',
        desc: 'Continuous improvements and long-term support.'
      }
    ],

    process: [
      'Business Analysis',
      'ERP Architecture Design',
      'Development & Integration',
      'Testing & Training',
      'Deployment & Support'
    ]
  },

  /* ================= PRODUCT DEVELOPMENT ================= */
  'product-development': {
    title: 'Product Development Services',
    subtitle:
      'End-to-end product development turning ideas into successful digital products.',
    cta: 'Build My Product',

    heroPoints: [
      'MVP to Full-Scale Products',
      'Agile & Lean Development',
      'Market-Ready Solutions'
    ],

    offers: [
      {
        title: 'Product Strategy',
        desc: 'Idea validation, roadmap planning, and MVP strategy.'
      },
      {
        title: 'UI/UX Design',
        desc: 'Design experiences users love.'
      },
      {
        title: 'Full-Stack Development',
        desc: 'End-to-end product engineering.'
      },
      {
        title: 'Scaling & Growth',
        desc: 'Optimize and scale products post-launch.'
      }
    ],

    process: [
      'Ideation & Validation',
      'Design & Prototyping',
      'Development',
      'Launch',
      'Growth & Optimization'
    ]
  }
};


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.service = this.services[slug!];
  }
}
