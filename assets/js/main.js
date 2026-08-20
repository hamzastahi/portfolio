(() => {
  const root = document.documentElement;
  const isFr = root.lang.toLowerCase().startsWith('fr');
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const themeBtn = document.querySelector('.theme-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ui = isFr ? {
    openNav: 'Ouvrir la navigation',
    closeNav: 'Fermer la navigation',
    terminal: [
      ['command', '❯ whoami'],
      ['plain', 'Hamza STAHI'],
      ['plain', 'Ingénieur Senior DevOps & Cloud'],
      ['blank', ''],
      ['command', '❯ cat expertise.txt'],
      ['plain', '☁  Plateformes : OpenShift, Kubernetes, Rancher'],
      ['plain', '⚙  Cloud       : AWS, Azure, GCP'],
      ['plain', '▣  Environnements : On-Premise, Déconnectés'],
      ['plain', '◇  Automation  : Ansible, Terraform, Helm'],
      ['plain', '⌁  CI/CD       : GitLab CI, GitHub Actions, Jenkins'],
      ['plain', '↻  GitOps      : Argo CD'],
      ['plain', '◈  Sécurité    : Vault, RBAC, Keycloak'],
      ['plain', '◉  Monitoring  : Prometheus, Grafana, ELK'],
      ['blank', ''],
      ['command', '❯ uptime'],
      ['plain', '6+ ans à construire et exploiter des plateformes cloud native'],
    ],
    formNotConfigured: 'Configure ton identifiant Formspree dans fr/index.html avant publication.',
    sending: 'Envoi en cours…',
    sent: 'Message envoyé avec succès. Merci !',
    sendError: 'Le message n’a pas pu être envoyé. Utilise le lien email à la place.',
    projectData: {
      openshift: {
        title: 'Plateforme OpenShift d’entreprise', type: 'Étude de cas entreprise · Anonymisée',
        summary: 'Administration, automatisation et résilience autour d’une plateforme OpenShift d’entreprise.',
        context: 'Environnement OpenShift 4.x d’entreprise avec plusieurs opérateurs de plateforme et de fortes exigences d’exploitation Day-2.',
        role: 'Opérations cluster, upgrades, troubleshooting, capacity planning, stockage/réseau, cycle de vie des opérateurs, automatisation et coordination transverse.',
        focus: 'OpenShift, ODF, ACM, OADP, Keycloak, Kafka, Ansible, Terraform, Helm et GitLab CI/CD.',
        outcome: 'Amélioration de la cohérence opérationnelle, de la répétabilité, de la résilience et du troubleshooting, sans exposer d’architecture confidentielle.',
        tags: ['OpenShift', 'ODF', 'ACM', 'OADP', 'Ansible', 'Terraform']
      },
      cloud: {
        title: 'Plateforme Cloud Engineering', type: 'Étude de cas entreprise · Anonymisée',
        summary: 'Plateforme d’ingénierie couvrant Azure et GCP avec infrastructure, delivery et outils de plateforme automatisés.',
        context: 'Environnement cloud engineering supportant des équipes applicatives et des capacités CI/CD partagées.',
        role: 'Amélioration CI/CD, Infrastructure as Code, automatisation des runners et politiques Vault, composants Helm, GitOps et support plateforme.',
        focus: 'Azure, GCP, Terraform, GitHub Actions, GitLab CI, Vault, Helm, Argo CD et Kubernetes.',
        outcome: 'Modernisation des workflows de livraison, meilleure répétabilité et opérations de plateforme davantage orientées coûts.',
        tags: ['Azure', 'GCP', 'Terraform', 'GitHub Actions', 'GitLab CI', 'Argo CD']
      },
      migration: {
        title: 'Migration Rancher vers OpenShift', type: 'Étude de cas entreprise · Anonymisée',
        summary: 'Migration et transition opérationnelle de Kubernetes managé par Rancher vers Red Hat OpenShift.',
        context: 'Des workloads Kubernetes existants et des équipes projets devaient migrer de manière contrôlée vers une plateforme OpenShift d’entreprise.',
        role: 'Installation/administration OpenShift, RBAC, operators, intégration GitLab CI et accompagnement des équipes applicatives.',
        focus: 'Rancher, Kubernetes, OpenShift, GitLab CI et opérations de plateforme.',
        outcome: 'Mise en place d’un modèle d’exploitation OpenShift d’entreprise tout en accompagnant les équipes projets pendant la transition.',
        tags: ['Rancher', 'Kubernetes', 'OpenShift', 'GitLab CI']
      },
      devsecops: {
        title: 'Plateforme CI/CD DevSecOps', type: 'Étude de cas entreprise · Anonymisée',
        summary: 'Ingénierie CI/CD avec contrôles de sécurité intégrés, runners partagés et scans automatisés.',
        context: 'Les chaînes de livraison nécessitaient davantage d’automatisation, des runners standardisés et des boucles de feedback sécurité.',
        role: 'Ingénierie des pipelines, infrastructure runners, automatisation des scans de vulnérabilités et support plateforme.',
        focus: 'GitLab CI, Jenkins, Vault, SAST, DAST, Sonar et outils de sécurité.',
        outcome: 'Intégration des contrôles sécurité dans les workflows de livraison et amélioration de la cohérence de l’infrastructure CI.',
        tags: ['GitLab CI', 'SAST', 'DAST', 'Vault', 'Sonar']
      },
      ucpe: {
        title: 'Automatisation d’une plateforme uCPE', type: 'Étude de cas entreprise · Anonymisée',
        summary: 'Automatisation du déploiement, du cycle de vie et des tests d’une plateforme uCPE virtualisée.',
        context: 'Plateforme de virtualisation combinant fonctions réseau et IT avec des besoins de release et de cycle de vie en production.',
        role: 'Coordination technique, pipelines CI/CD, tests automatisés et automatisation du cycle de vie.',
        focus: 'Ansible, AWX, Kubernetes, Rancher, KVM, vSphere, Cloud-Init, Prometheus et AlertManager.',
        outcome: 'Amélioration de la répétabilité du déploiement et des tests de plateforme, avec support à la coordination des releases.',
        tags: ['Ansible', 'AWX', 'Kubernetes', 'vSphere', 'Prometheus']
      },
      lab: {
        title: 'OpenShift Microservices Lab', type: 'Lab personnel',
        summary: 'Environnement OpenShift local pour expérimenter microservices et observabilité.',
        context: 'Lab personnel créé pour pratiquer les déploiements OpenShift, les Operators et l’observabilité applicative.',
        role: 'Conception et déploiement de l’environnement et des workloads de bout en bout.',
        focus: 'CRC, OpenShift, manifests YAML, Operators, Prometheus et Grafana.',
        outcome: 'Environnement réutilisable pour la pratique continue et l’expérimentation OpenShift.',
        tags: ['CRC', 'OpenShift', 'Operators', 'Prometheus', 'Grafana']
      }
    }
  } : {
    openNav: 'Open navigation', closeNav: 'Close navigation',
    terminal: [
      ['command', '❯ whoami'], ['plain', 'Hamza STAHI'], ['plain', 'Senior DevOps & Cloud Engineer'], ['blank', ''],
      ['command', '❯ cat expertise.txt'], ['plain', '☁  Platforms   : OpenShift, Kubernetes, Rancher'],
      ['plain', '⚙  Cloud       : AWS, Azure, GCP'], ['plain', '▣  Environments: On-Premise, Disconnected'], ['plain', '◇  Automation  : Ansible, Terraform, Helm'],
      ['plain', '⌁  CI/CD       : GitLab CI, GitHub Actions, Jenkins'], ['plain', '↻  GitOps      : Argo CD'],
      ['plain', '◈  Security    : Vault, RBAC, Keycloak'], ['plain', '◉  Monitoring  : Prometheus, Grafana, ELK'],
      ['blank', ''], ['command', '❯ uptime'], ['plain', '6+ years building and operating cloud-native platforms']
    ],
    formNotConfigured: 'Configure your free Formspree form ID in index.html before publishing.',
    sending: 'Sending…', sent: 'Message sent successfully. Thank you!',
    sendError: 'Message could not be sent. Please use the email link instead.',
    projectData: {
      openshift: {
        title: 'Enterprise OpenShift Platform', type: 'Enterprise Case Study · Anonymized',
        summary: 'Administration, automation and resilience work across an enterprise OpenShift platform.',
        context: 'Enterprise OpenShift 4.x environment with multiple platform operators and strong Day-2 operational requirements.',
        role: 'Cluster operations, upgrades, troubleshooting, capacity planning, storage/networking, operator lifecycle, automation and cross-team coordination.',
        focus: 'OpenShift, ODF, ACM, OADP, Keycloak, Kafka, Ansible, Terraform, Helm and GitLab CI/CD.',
        outcome: 'Improved operational consistency, repeatability, resilience and troubleshooting capability without exposing confidential customer architecture.',
        tags: ['OpenShift', 'ODF', 'ACM', 'OADP', 'Ansible', 'Terraform']
      },
      cloud: {
        title: 'Cloud Engineering Platform', type: 'Enterprise Case Study · Anonymized',
        summary: 'Engineering platform spanning Azure and GCP with automated infrastructure, delivery and platform tooling.',
        context: 'Cloud engineering environment supporting application teams and shared CI/CD capabilities.',
        role: 'CI/CD improvements, Infrastructure as Code, runner automation, Vault policy automation, Helm components, GitOps and platform support.',
        focus: 'Azure, GCP, Terraform, GitHub Actions, GitLab CI, Vault, Helm, Argo CD and Kubernetes.',
        outcome: 'Modernized delivery workflows, improved repeatability and strengthened cost-conscious platform operations.',
        tags: ['Azure', 'GCP', 'Terraform', 'GitHub Actions', 'GitLab CI', 'Argo CD']
      },
      migration: {
        title: 'Rancher to OpenShift Migration', type: 'Enterprise Case Study · Anonymized',
        summary: 'Migration and operational transition from Rancher-managed Kubernetes toward Red Hat OpenShift.',
        context: 'Existing Kubernetes workloads and project teams required a controlled move to an enterprise OpenShift platform.',
        role: 'OpenShift installation/administration, RBAC, operators, GitLab CI integration and application team onboarding.',
        focus: 'Rancher, Kubernetes, OpenShift, GitLab CI and platform operations.',
        outcome: 'Established an enterprise OpenShift operating model while supporting project teams through the transition.',
        tags: ['Rancher', 'Kubernetes', 'OpenShift', 'GitLab CI']
      },
      devsecops: {
        title: 'DevSecOps CI/CD Platform', type: 'Enterprise Case Study · Anonymized',
        summary: 'CI/CD engineering with integrated security controls, shared runners and automated scanning.',
        context: 'Delivery pipelines needed stronger automation, standardized runners and security feedback loops.',
        role: 'Pipeline engineering, runner infrastructure, vulnerability scanning automation and platform support.',
        focus: 'GitLab CI, Jenkins, Vault, SAST, DAST, Sonar and security tooling.',
        outcome: 'Integrated security checks into delivery workflows and improved consistency of CI infrastructure.',
        tags: ['GitLab CI', 'SAST', 'DAST', 'Vault', 'Sonar']
      },
      ucpe: {
        title: 'uCPE Platform Automation', type: 'Enterprise Case Study · Anonymized',
        summary: 'Automation of deployment, lifecycle and testing for a virtualized uCPE platform.',
        context: 'Virtualization platform combining network and IT functions with release and production lifecycle needs.',
        role: 'Technical coordination, CI/CD pipelines, automated testing and lifecycle automation.',
        focus: 'Ansible, AWX, Kubernetes, Rancher, KVM, vSphere, Cloud-Init, Prometheus and AlertManager.',
        outcome: 'Improved repeatability of platform deployment and testing while supporting release coordination.',
        tags: ['Ansible', 'AWX', 'Kubernetes', 'vSphere', 'Prometheus']
      },
      lab: {
        title: 'OpenShift Microservices Lab', type: 'Personal Lab',
        summary: 'Hands-on local OpenShift environment for microservices and observability experimentation.',
        context: 'Personal lab created to practice OpenShift deployments, operators and application observability.',
        role: 'Designed and deployed the environment and workloads end to end.',
        focus: 'CRC, OpenShift, YAML manifests, Operators, Prometheus and Grafana.',
        outcome: 'Reusable environment for continuous hands-on practice and OpenShift experimentation.',
        tags: ['CRC', 'OpenShift', 'Operators', 'Prometheus', 'Grafana']
      }
    }
  };

  // Theme
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) root.dataset.theme = savedTheme;
  const themeIcon = themeBtn.querySelector('span');
  const syncThemeIcon = () => {
    const light = root.dataset.theme === 'light';
    themeIcon.textContent = light ? '☀' : '☾';
    themeBtn.setAttribute('title', light ? (isFr ? 'Mode clair' : 'Light mode') : (isFr ? 'Mode sombre' : 'Dark mode'));
  };
  syncThemeIcon();
  themeBtn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    syncThemeIcon();
  });

  // Never leave an empty icon tile if an external logo/badge fails to load.
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    const showFallback = () => {
      if (img.dataset.fallbackApplied === '1') return;
      img.dataset.fallbackApplied = '1';
      const fallback = document.createElement('span');
      fallback.className = 'icon-fallback';
      fallback.textContent = img.dataset.fallback || '•';
      img.replaceWith(fallback);
    };
    img.addEventListener('error', showFallback, { once: true });
    if (img.complete && img.naturalWidth === 0) showFallback();
  });

  // Mobile menu
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? ui.closeNav : ui.openNav);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', ui.openNav);
  }));

  // Reveal
  const reveals = document.querySelectorAll('.reveal');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // Active nav link
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(section => navObserver.observe(section));

  // Skills filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
      skillItems.forEach(item => item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter));
    });
  });

  // Terminal animation
  const terminal = document.getElementById('terminal-output');
  const replay = document.querySelector('.terminal-replay');
  let terminalTimers = [];
  function clearTimers() { terminalTimers.forEach(clearTimeout); terminalTimers = []; }
  function appendLine(type, text) {
    const line = document.createElement('div');
    if (type === 'command') line.className = 'term-command';
    else if (type === 'plain') line.className = 'term-muted';
    line.textContent = text || ' ';
    terminal.appendChild(line);
  }
  function runTerminal() {
    clearTimers(); terminal.innerHTML = '';
    if (reducedMotion) {
      ui.terminal.forEach(([type, text]) => appendLine(type, text));
      const prompt = document.createElement('div');
      prompt.innerHTML = '<span class="term-command">hamza@portfolio:~$</span><span class="cursor"></span>';
      terminal.appendChild(prompt); return;
    }
    ui.terminal.forEach(([type, text], index) => {
      terminalTimers.push(setTimeout(() => appendLine(type, text), index * 190));
    });
    terminalTimers.push(setTimeout(() => {
      const prompt = document.createElement('div');
      prompt.innerHTML = '<span class="term-command">hamza@portfolio:~$</span><span class="cursor"></span>';
      terminal.appendChild(prompt);
    }, ui.terminal.length * 190 + 150));
  }
  replay.addEventListener('click', runTerminal); runTerminal();

  // Project dialog
  const dialog = document.getElementById('project-dialog');
  const dialogClose = dialog.querySelector('.dialog-close');
  document.querySelectorAll('.project-open').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.closest('.project-card').dataset.project;
      const data = ui.projectData[key];
      document.getElementById('dialog-title').textContent = data.title;
      document.getElementById('dialog-type').textContent = data.type;
      document.getElementById('dialog-summary').textContent = data.summary;
      document.getElementById('dialog-context').textContent = data.context;
      document.getElementById('dialog-role').textContent = data.role;
      document.getElementById('dialog-focus').textContent = data.focus;
      document.getElementById('dialog-outcome').textContent = data.outcome;
      const tags = document.getElementById('dialog-tags'); tags.innerHTML = '';
      data.tags.forEach(tag => { const el = document.createElement('span'); el.textContent = tag; tags.appendChild(el); });
      dialog.showModal();
    });
  });
  dialogClose.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async event => {
    if (form.action.includes('YOUR_FORM_ID')) {
      event.preventDefault(); status.className = 'form-status error'; status.textContent = ui.formNotConfigured; return;
    }
    event.preventDefault(); status.className = 'form-status'; status.textContent = ui.sending;
    const submitButton = form.querySelector('button[type="submit"]'); submitButton.disabled = true;
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Submission failed');
      form.reset(); status.className = 'form-status success'; status.textContent = ui.sent;
    } catch (error) {
      status.className = 'form-status error'; status.textContent = ui.sendError;
    } finally { submitButton.disabled = false; }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
