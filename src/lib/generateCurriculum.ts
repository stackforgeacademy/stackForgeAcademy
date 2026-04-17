import { jsPDF } from 'jspdf';

const months = [
  {
    label: 'Month 1',
    title: 'Foundations & Web Essentials',
    color: '#2563eb',
    fullstack: [
      'HTML5 & CSS3 deep dive',
      'JavaScript ES6+ fundamentals',
      'Git, GitHub & terminal basics',
      'Responsive design with Flexbox & Grid',
    ],
    dsa: [
      'Big O Notation & complexity analysis',
      'Arrays & Strings',
      'Two Pointer technique',
      'Sliding Window pattern',
    ],
    outcome: 'Build & deploy your first full stack web app',
  },
  {
    label: 'Month 2',
    title: 'React & Frontend Engineering',
    color: '#7c3aed',
    fullstack: [
      'React.js core concepts & JSX',
      'Hooks: useState, useEffect, useRef',
      'Component architecture & reuse',
      'Tailwind CSS & UI libraries',
    ],
    dsa: [
      'Linked Lists (singly & doubly)',
      'Stacks & Queues',
      'Hashing & Hash Maps',
      'Fast & Slow Pointers',
    ],
    outcome: 'Ship a polished React SPA with real-world patterns',
  },
  {
    label: 'Month 3',
    title: 'Backend & Database Engineering',
    color: '#059669',
    fullstack: [
      'Node.js & Express fundamentals',
      'REST API design & best practices',
      'MongoDB & Mongoose ODM',
      'Environment config & middleware',
    ],
    dsa: [
      'Binary Trees & BST',
      'Tree traversals (BFS, DFS)',
      'Binary Search patterns',
      'Recursion & backtracking',
    ],
    outcome: 'Deliver a production-grade REST API with database',
  },
  {
    label: 'Month 4',
    title: 'Full Stack Integration & Auth',
    color: '#d97706',
    fullstack: [
      'JWT & session-based auth',
      'OAuth 2.0 (Google, GitHub)',
      'File uploads & cloud storage',
      'Full stack MERN project build',
    ],
    dsa: [
      'Graphs (directed & undirected)',
      'BFS & DFS on graphs',
      'Topological sort',
      'Union Find / Disjoint Sets',
    ],
    outcome: 'Complete authenticated full stack MERN application',
  },
  {
    label: 'Month 5',
    title: 'Generative AI Integration',
    color: '#0891b2',
    fullstack: [
      'OpenAI API & prompt engineering',
      'LangChain fundamentals',
      'RAG pipelines & vector databases',
      'AI-powered feature development',
    ],
    dsa: [
      'Dynamic Programming (1D & 2D)',
      'Memoization vs tabulation',
      'Knapsack & subsequence patterns',
      'Interval & greedy algorithms',
    ],
    outcome: 'Integrate a working AI feature into a live product',
  },
  {
    label: 'Month 6',
    title: 'System Design & Deployment',
    color: '#dc2626',
    fullstack: [
      'System design fundamentals',
      'Docker & containerisation',
      'AWS (EC2, S3, RDS) basics',
      'CI/CD with GitHub Actions',
    ],
    dsa: [
      'Heaps & Priority Queues',
      'Tries & advanced trees',
      'Segment Trees basics',
      'FAANG-level mock problems',
    ],
    outcome: 'Deploy a containerised app to cloud with CI/CD',
  },
  {
    label: 'Month 7',
    title: 'Interview Prep & Capstone',
    color: '#7c3aed',
    fullstack: [
      'Capstone project (end-to-end)',
      'ATS resume & LinkedIn optimisation',
      'Company playbooks: Google, Amazon, Meta',
      'Industry Demo Day presentation',
    ],
    dsa: [
      '85+ pattern revision sprint',
      'Live mock interviews',
      'Behavioural & system design rounds',
      'Offer negotiation strategies',
    ],
    outcome: 'Present capstone at Demo Day · Land your offer',
  },
];

/** Parse a 6-digit hex color into [r, g, b] integers 0-255 */
function hex2rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

/** Blend a color with white at a given opacity (0-1) to produce a solid tint */
function tint(hex: string, opacity: number): [number, number, number] {
  const [r, g, b] = hex2rgb(hex);
  return [
    Math.round(255 + (r - 255) * opacity),
    Math.round(255 + (g - 255) * opacity),
    Math.round(255 + (b - 255) * opacity),
  ];
}

/** Blend a color with a dark background at a given opacity */
function tintDark(hex: string, opacity: number, bg = 8): [number, number, number] {
  const [r, g, b] = hex2rgb(hex);
  return [
    Math.round(bg + (r - bg) * opacity),
    Math.round(bg + (g - bg) * opacity),
    Math.round(bg + (b - bg) * opacity),
  ];
}

export function generateCurriculum() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 40; // margin
  const contentW = W - M * 2;

  // ────────────────────────────────────────────────────────────
  // COVER PAGE
  // ────────────────────────────────────────────────────────────
  doc.setFillColor(8, 15, 30);
  doc.rect(0, 0, W, H, 'F');

  // Soft glow behind brand (solid tinted circle instead of opacity)
  const glowColor = tintDark('#2563eb', 0.12);
  doc.setFillColor(...glowColor);
  doc.circle(W / 2, 195, 200, 'F');

  // Top accent line
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, W, 4, 'F');

  // Brand name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(40);
  doc.setTextColor(255, 255, 255);
  doc.text('STACKFORGE', W / 2, 158, { align: 'center' });

  // Tagline
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139);
  doc.text("Forging India's Elite Developers", W / 2, 178, { align: 'center' });

  // Divider
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(1.5);
  doc.line(W / 2 - 50, 192, W / 2 + 50, 192);

  // Program title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text('7-Month Full Stack &', W / 2, 230, { align: 'center' });
  doc.text('DSA Mastery Program', W / 2, 258, { align: 'center' });

  // Batch label
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text('Curriculum Guide  ·  July 2026 Batch', W / 2, 278, { align: 'center' });

  // ── Stats row ──
  const stats = [
    { val: '7', sub: 'Months' },
    { val: '85+', sub: 'DSA Patterns' },
    { val: '6', sub: 'Live Projects' },
    { val: '100%', sub: 'Job Focused' },
  ];
  const statBoxW = contentW / stats.length;
  const statY = 330;

  stats.forEach((s, i) => {
    const bx = M + i * statBoxW + 6;
    const bw = statBoxW - 12;
    const cx = bx + bw / 2;

    doc.setFillColor(15, 25, 50);
    doc.setDrawColor(37, 69, 120);
    doc.setLineWidth(0.6);
    doc.roundedRect(bx, statY, bw, 52, 5, 5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(37, 99, 235);
    doc.text(s.val, cx, statY + 28, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(s.sub, cx, statY + 42, { align: 'center' });
  });

  // ── What you'll master ──
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text("WHAT YOU'LL MASTER", W / 2, 430, { align: 'center' });

  // Center pills row
  const pills = [
    'Full Stack (MERN)',
    'DSA & Algorithms',
    'System Design',
    'Generative AI',
    'Cloud Deployment',
    'Interview Prep',
  ];
  doc.setFontSize(9);
  const pillH = 20;
  const pillPadX = 10;
  const pillGap = 8;

  // Calculate total width to center the row
  const pillWidths = pills.map((p) => doc.getTextWidth(p) + pillPadX * 2);
  const totalPillW = pillWidths.reduce((a, b) => a + b, 0) + pillGap * (pills.length - 1);
  let pillX = (W - totalPillW) / 2;
  const pillY = 448;

  pills.forEach((p, i) => {
    const pw = pillWidths[i];
    doc.setFillColor(15, 25, 50);
    doc.setDrawColor(37, 69, 120);
    doc.setLineWidth(0.5);
    doc.roundedRect(pillX, pillY, pw, pillH, pillH / 2, pillH / 2, 'FD');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(147, 197, 253);
    doc.text(p, pillX + pw / 2, pillY + 13.5, { align: 'center' });
    pillX += pw + pillGap;
  });

  // ── Program timeline strip ──
  const timelineY = 510;
  doc.setFillColor(12, 22, 45);
  doc.roundedRect(M, timelineY, contentW, 140, 8, 8, 'F');
  doc.setDrawColor(37, 69, 120);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, timelineY, contentW, 140, 8, 8, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('PROGRAM TIMELINE', M + 16, timelineY + 18);

  const tlColors = ['#2563eb', '#7c3aed', '#059669', '#d97706', '#0891b2', '#dc2626', '#7c3aed'];
  const tlW = (contentW - 32) / 7;

  months.forEach((m, i) => {
    const [tr, tg, tb] = hex2rgb(tlColors[i]);
    const tx = M + 16 + i * tlW + tlW / 2;

    // dot
    doc.setFillColor(tr, tg, tb);
    doc.circle(tx, timelineY + 36, 5, 'F');

    // connecting line (not last)
    if (i < 6) {
      doc.setDrawColor(37, 69, 120);
      doc.setLineWidth(0.8);
      doc.line(tx + 5, timelineY + 36, tx + tlW - 5, timelineY + 36);
    }

    // month label
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(tr, tg, tb);
    doc.text(m.label, tx, timelineY + 52, { align: 'center' });

    // title (wrapped)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    const titleLines = doc.splitTextToSize(m.title, tlW - 4);
    doc.text(titleLines, tx, timelineY + 64, { align: 'center' });
  });

  // cover footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('stackforge.in  ·  Applications Open for July 2026 Batch', W / 2, H - 26, { align: 'center' });

  // ────────────────────────────────────────────────────────────
  // MONTH PAGES
  // ────────────────────────────────────────────────────────────
  months.forEach((month, idx) => {
    doc.addPage();

    // White page
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, W, H, 'F');

    const [mr, mg, mb] = hex2rgb(month.color);

    // Top accent bar
    doc.setFillColor(mr, mg, mb);
    doc.rect(0, 0, W, 5, 'F');

    // Left sidebar accent strip
    const [sideR, sideG, sideB] = tint(month.color, 0.06);
    doc.setFillColor(sideR, sideG, sideB);
    doc.rect(0, 5, 6, H - 5, 'F');
    doc.setFillColor(mr, mg, mb);
    doc.rect(0, 5, 6, 80, 'F');

    // Month badge
    doc.setFillColor(mr, mg, mb);
    doc.roundedRect(M, 18, 66, 20, 4, 4, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(month.label.toUpperCase(), M + 33, 32, { align: 'center' });

    // Page number
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text(`${idx + 1} of ${months.length}`, W - M, 30, { align: 'right' });

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(21);
    doc.setTextColor(mr, mg, mb);
    doc.text(month.title, M, 74);

    // Thin divider
    const [divR, divG, divB] = tint(month.color, 0.25);
    doc.setDrawColor(divR, divG, divB);
    doc.setLineWidth(0.6);
    doc.line(M, 84, W - M, 84);

    // ── Two columns ──
    const colW = (contentW - 24) / 2;
    const colRX = M + colW + 24;

    const drawColumn = (
      x: number,
      heading: string,
      accentRgb: [number, number, number],
      items: string[],
    ) => {
      const [ar, ag, ab] = accentRgb;
      const [bgR, bgG, bgB] = tint('#' +
        ar.toString(16).padStart(2, '0') +
        ag.toString(16).padStart(2, '0') +
        ab.toString(16).padStart(2, '0'),
        0.07,
      );

      // Heading background
      doc.setFillColor(bgR, bgG, bgB);
      doc.roundedRect(x, 96, colW, 24, 4, 4, 'F');

      // Left accent bar on heading
      doc.setFillColor(ar, ag, ab);
      doc.roundedRect(x, 98, 3, 20, 1, 1, 'F');

      // Heading text
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(ar, ag, ab);
      doc.text(heading, x + 11, 112);

      // Items
      let y = 142;
      items.forEach((item) => {
        // Bullet
        doc.setFillColor(ar, ag, ab);
        doc.circle(x + 6, y - 3, 2.5, 'F');

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59);
        const lines = doc.splitTextToSize(item, colW - 18);
        doc.text(lines, x + 15, y);
        y += lines.length * 14 + 7;
      });
    };

    drawColumn(M, 'Full Stack Development', [mr, mg, mb], month.fullstack);
    drawColumn(colRX, 'DSA & Problem Solving', [8, 145, 178], month.dsa);

    // ── Outcome banner ──
    const outY = H - 68;
    const [outBgR, outBgG, outBgB] = tint(month.color, 0.07);
    doc.setFillColor(outBgR, outBgG, outBgB);
    doc.roundedRect(M, outY, contentW, 34, 5, 5, 'F');
    doc.setDrawColor(divR, divG, divB);
    doc.setLineWidth(0.6);
    doc.roundedRect(M, outY, contentW, 34, 5, 5, 'S');

    // Left accent bar on outcome
    doc.setFillColor(mr, mg, mb);
    doc.roundedRect(M, outY, 3, 34, 1, 1, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(mr, mg, mb);
    doc.text('MONTH OUTCOME', M + 12, outY + 13);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text(month.outcome, M + 12, outY + 26);

    // Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('StackForge  ·  July 2026 Batch Curriculum', W / 2, H - 16, { align: 'center' });
  });

  doc.save('StackForge_Curriculum_July2026.pdf');
}
