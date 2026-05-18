export const womenPrograms = [
  {
    title: "Qur'an Programs",
    items: [
      { title: "Qa'idah", slug: "qaidah" },
      { title: "Tajweed Level 1", slug: "tajweed-level-1" },
      { title: "Tajweed Level 2", slug: "tajweed-level-2" },
      { title: "Tajweed Level 3", slug: "tajweed-level-3" },
      { title: "Quran Recitation", slug: "quran-recitation" },
      { title: "Quran Khatmah", slug: "quran-khatmah" },
    ],
  },
  {
    title: "Memorization Programs",
    items: [
      { title: "30th Juz Memorization", slug: "30th-juz-memorization" },
      {
        title: "Special Surahs & Selected Ayahs from the Qur'an",
        slug: "special-surahs-selected-ayahs",
      },
      { title: "Muqaddimat al-Jazariyyah", slug: "muqaddimat-al-jazariyyah" },
      { title: "Tohfatul Atfaal", slug: "tohfatul-atfaal" },
    ],
  },
  {
    title: "Islamic Learning (Certified by Alhuda US)",
    items: [
      { title: "Alhuda Outreach", slug: "alhuda-outreach" },
      { title: "Tafheem ul Qur'an Diploma", slug: "tafheem-ul-quran-diploma" },
      { title: "Tafheem ul Qur'an Certificate", slug: "tafheem-ul-quran-certificate" },
      { title: "Hadith Course", slug: "hadith-course" },
    ],
  },
  {
    title: "Self-Transformation & Leadership",
    items: [
      { title: "Personal Growth Journey", slug: "personal-growth-journey" },
      { title: "Leadership Programs", slug: "leadership-programs" },
      { title: "Muslimah Leadership Training", slug: "muslimah-leadership-training" },
      { title: "Confidence & Communication", slug: "confidence-communication" },
      { title: "Community Development Initiatives", slug: "community-development-initiatives" },
    ],
  },
  {
    title: "Parenting & Tarbiyah",
    items: [
      { title: "Weekly Parenting Sessions", slug: "weekly-parenting-sessions" },
      { title: "Women's Club", slug: "womens-club" },
      { title: "Motherhood Workshops", slug: "motherhood-workshops" },
    ],
  },
  {
    title: "Workshops & Events",
    items: [
      { title: "Ramadan Programs", slug: "ramadan-programs" },
      { title: "Maqra'ah Sessions", slug: "maqraah-sessions" },
      { title: "Janazah Training Program", slug: "janazah-training-program" },
      { title: "Book Reading Circle", slug: "book-reading-circle" },
      { title: "Special Talks & Guest Sessions", slug: "special-talks-guest-sessions" },
    ],
  },
];

export function getWomenCoursesFlat() {
  return womenPrograms.flatMap((group) =>
    group.items.map((item) => ({ ...item, group: group.title }))
  );
}

export function findWomenCourse(slug) {
  return getWomenCoursesFlat().find((c) => c.slug === slug);
}

export const courses = {
  kids: [
    { title: "Kids Hifz", slug: "hifz" },
    { title: "Qa'ida to Quran Journey", slug: "qaida-to-quran-journey" },
    { title: "Weekend Classes", slug: "sunday-classes" },
  ],
  teens: [
    { title: "Counselling", slug: "counselling" },
    { title: "Workshops", slug: "workshops" },
  ],
  women: getWomenCoursesFlat(),
};
