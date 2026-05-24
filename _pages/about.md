---
permalink: /
title: "Welcome!"
description: "Welcome to the website I've created. I love learning new things and you can find some of the cool concepts I've explored in the navigation above."
author_profile: true
excerpt: "Welcome to the website I've created. I love learning new things and you can find some of the cool concepts I've explored in the navigation above."
header:
  overlay_image: img/labpic.jpg
  overlay_filter: 0.35
---

<p class="page-intro">I love learning new things. This site collects derivations, lab reports, data analysis projects, and electrical engineering work.</p>

{% assign lab_report_count = site.publications | where: "category", "lab-reports" | size %}
{% assign physics_notes_count = site.publications | size | minus: lab_report_count %}
{% assign project_count = site.portfolio | size %}
{% assign pdf_count = 0 %}
{% for asset in site.static_files %}
  {% if asset.path contains '/files/' and asset.extname == '.pdf' %}
    {% assign pdf_count = pdf_count | plus: 1 %}
  {% endif %}
{% endfor %}

<section class="home-metrics" aria-label="Site metrics">
  <ul class="home-metrics__list">
    <li class="home-metrics__item">
      <span class="home-metrics__value">{{ physics_notes_count }}</span>
      <span class="home-metrics__label">Physics Notes</span>
    </li>
    <li class="home-metrics__item">
      <span class="home-metrics__value">{{ lab_report_count }}</span>
      <span class="home-metrics__label">Lab Reports</span>
    </li>
    <li class="home-metrics__item">
      <span class="home-metrics__value">{{ project_count }}</span>
      <span class="home-metrics__label">Projects</span>
    </li>
    <li class="home-metrics__item">
      <span class="home-metrics__value">{{ pdf_count }}+</span>
      <span class="home-metrics__label">PDFs</span>
    </li>
  </ul>
</section>

<section class="home-timeline" aria-label="Experience timeline">
  <h2 class="home-timeline__heading">Experience</h2>
  <ol class="home-timeline__list">
    <li class="home-timeline__item">
      <div class="home-timeline__year">2026</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Submitted QBC paper to journal</h3>
        <p class="home-timeline__desc">Submitted my quantum backscatter communication paper to a journal in May 2026.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2026</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Electrical Engineering (Honours) and Physics, UNSW</h3>
        <p class="home-timeline__desc">Honours in Electrical Engineering and a Bachelor of Science in Physics at UNSW.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2024</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Head Tutor: Quantum Physics</h3>
        <p class="home-timeline__desc">Ran tutorials for PHYS2111 Quantum Physics, designed tutorial questions and learning resources.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2024</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Lab Demonstrator: Quantum Mechanics and Classical Mechanics/Special Relativity</h3>
        <p class="home-timeline__desc">Taught PHYS3111 and PHYS2113 laboratory classes and marked student reports.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2023</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Silicon Quantum Dot Qubit Research Project</h3>
        <p class="home-timeline__desc">Simulated silicon quantum dot qubits using NEMO3D, Gadi, Python, and MATLAB.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2023</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Physics Teaching Assistant and Lab Demonstrator</h3>
        <p class="home-timeline__desc">Taught and marked first-year physics tutorials and laboratories.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2023–2024</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Student Fellow at UNSW Hall</h3>
        <p class="home-timeline__desc">Mentored residents, supported college events, and helped coordinate residential community life.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2021–2022</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Operations and Communications Director, UNSW Hall</h3>
        <p class="home-timeline__desc">Organised events, created multimedia advertisements, and managed social platforms.</p>
      </article>
    </li>
    <li class="home-timeline__item">
      <div class="home-timeline__year">2017–2022</div>
      <article class="home-timeline__card">
        <h3 class="home-timeline__title">Piano Teacher</h3>
        <p class="home-timeline__desc">Gave weekly piano lessons to students aged 7 to 27.</p>
      </article>
    </li>
  </ol>
</section>
