export interface CharacterProfile {
  id: 'lucia' | 'jason';
  nameAr: string;
  nameEn: string;
  role: string;
  origin: string;
  image: string;
  quote: string;
  bio: string;
  vehicle: string;
  district: string;
  attributes: {
    label: string;
    value: number;
  }[];
}

export interface WorldRegion {
  id: string;
  index: string;
  nameAr: string;
  nameEn: string;
  tagline: string;
  coordinates: string;
  image: string;
  aspectClass: string;
  summary: string;
  highlights: string[];
  climate: string;
}

export interface GameEdition {
  id: 'standard' | 'deluxe' | 'collector';
  nameAr: string;
  nameEn: string;
  priceUsd: number;
  releaseWindow: string;
  summary: string;
  features: string[];
}

export interface TrailerChapter {
  id: string;
  timestamp: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

export const HERO_MEDIA = {
  image: '/src/assets/images/gta6_hero_vice_sunset_1795441495240.jpg',
  alt: 'منظر بانورامي غروب الشمس فوق مدينة فايس سيتي الساحلية وسيارة كلاسيكية على الطريق البحري',
};

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'lucia',
    nameAr: 'لوسيا',
    nameEn: 'Lucia',
    role: 'المخططة الاستراتيجية',
    origin: 'مقاطعة فايس ديل · ليونيدا',
    image: '/src/assets/images/gta6_char_lucia_1795441494043.jpg',
    quote: 'الحظ وحده لا يكفي هنا؛ كل خطوة تحتاج إلى حساب دقيق قبل أن تتحرك.',
    bio: 'بعد سنوات قضتها في شوارع فايس سيتي الساحلية، تخرج لوسيا برؤية حادة وقدرة استثنائية على إدارة عمليات السطو المعقدة والتفاوض تحت الضغط مع أخطر شبكات ولاية ليونيدا.',
    vehicle: 'شيفيل كلاسيك مكشوفة 1970',
    district: 'أوشن بيتش · فايس سيتي',
    attributes: [
      { label: 'التخطيط والتكتيك', value: 92 },
      { label: 'القيادة السريعة', value: 86 },
      { label: 'التخفي والاختراق', value: 88 },
      { label: 'الدقة القتالية', value: 84 },
    ],
  },
  {
    id: 'jason',
    nameAr: 'جيسون',
    nameEn: 'Jason',
    role: 'سائق الهروب والميدان',
    origin: 'بورت غيلهورن · الساحل الغربي',
    image: '/src/assets/images/gta6_char_jason_1795441491532.jpg',
    quote: 'الطرق الخلفية في ليونيدا تعرف أسرار الجميع، والمهم هو من يصل إلى الجسر أولاً.',
    bio: 'نشأ جيسون بين طرق المستنقعات والموانئ الصناعية، ما منحه خبرة فطرية في التعامل مع المركبات الوعرة، السفن السريعة، والمواجهات المباشرة حين تخرج الخطط عن مسارها.',
    vehicle: 'بيك أب دفع رباعي معدّل',
    district: 'غراس ريفرز · بورت غيلهورن',
    attributes: [
      { label: 'التخطيط والتكتيك', value: 80 },
      { label: 'القيادة السريعة', value: 95 },
      { label: 'التخفي والاختراق', value: 78 },
      { label: 'الدقة القتالية', value: 91 },
    ],
  },
];

export const WORLD_REGIONS: WorldRegion[] = [
  {
    id: 'vice-beach',
    index: '01',
    nameAr: 'أوشن فيو وفايس بيتش',
    nameEn: 'Vice City · Ocean Beach',
    tagline: 'واجهات آرت ديكو، أضواء الغسق، وحركة ليلية لا تتوقف',
    coordinates: '25.7617° N · 80.1918° W',
    image: '/src/assets/images/gta6_region_vice_beach_1795441492434.jpg',
    aspectClass: 'lg:col-span-2 aspect-[16/9]',
    summary:
      'القلب النابض لمدينة فايس سيتي؛ حيث تمتد الفنادق الكلاسيكية ذات الطراز المعماري العريق بمحاذاة المحيط الأطلسي، وتلتقي السيارات الخارقة مع صفقات الظل في المراسي الخاصة.',
    highlights: [
      'شارع أوشن درايف التاريخي ونواديه الليلية المفتوحة',
      'مرسى اليخوت الفاخرة وسباقات القوارب السريعة',
      'شبكة أنفاق ومتاجر فاخرة قابلة للاستكشاف الداخلي',
    ],
    climate: 'رطوبة ساحلية دافئة · غروب ذهبي ممتد',
  },
  {
    id: 'grassrivers',
    index: '02',
    nameAr: 'مستنقعات غراس ريفرز',
    nameEn: 'Grassrivers Wetlands',
    tagline: 'أهوار استوائية غامضة لا تصلها سوى الزوارق الهوائية',
    coordinates: '25.8600° N · 80.7800° W',
    image: '/src/assets/images/gta6_region_swamp_1795441491766.jpg',
    aspectClass: 'lg:col-span-1 aspect-[4/3]',
    summary:
      'مساحات شاسعة من أشجار المانغروف والضباب الكثيف تمتد غرب العاصمة، تتحول ليلاً إلى ملاذ لعمليات التهريب والمطاردات المائية وسط الحياة البرية الخطرة.',
    highlights: [
      'تنقل بالزوارق المروحية عبر القنوات الضيقة',
      'نظم بيئية تفاعلية وتغير ديناميكي لمستوى المياه',
      'معسكرات مخفية ومهابط طائرات زراعية مهجورة',
    ],
    climate: 'ضباب صباحي كثيف · أمطار استوائية مفاجئة',
  },
  {
    id: 'leonida-keys',
    index: '03',
    nameAr: 'أرخبيل ليونيدا كيز',
    nameEn: 'Leonida Keys',
    tagline: 'جسور بحرية شاهقة تربط جزر الفيروز المفتوحة',
    coordinates: '24.5551° N · 81.7800° W',
    image: '/src/assets/images/gta6_region_keys_1795441494388.jpg',
    aspectClass: 'lg:col-span-1 aspect-[4/3]',
    summary:
      'سلسلة جزر مرجانية متصلة بطريق سريع يمتد فوق المياه الفيروزية، مثالية لرحلات التهريب البحري، الغوص لاستكشاف الحطام، والهروب عبر الجسور المعلقة.',
    highlights: [
      'جسر السبعة أميال البحري ومطاردات المروحيات',
      'مرافئ صيد هادئة ومطارات بحرية للطائرات البرمائية',
      'أعماق مرجانية وحطام سفن غارقة قابلة للغوص',
    ],
    climate: 'نسيم بحري صافٍ · عواصف مدارية موسمية',
  },
  {
    id: 'vice-metro',
    index: '04',
    nameAr: 'وسط فايس سيتي والميناء',
    nameEn: 'Downtown Vice & Port',
    tagline: 'ناطحات سحاب زجاجية وطرق سريعة متعددة المستويات',
    coordinates: '25.7743° N · 80.1937° W',
    image: '/src/assets/images/gta6_hero_vice_sunset_1795441495240.jpg',
    aspectClass: 'lg:col-span-2 aspect-[16/9]',
    summary:
      'المركز التجاري والمالي لولاية ليونيدا؛ يجمع بين أبراج المال الحديثة وميناء الشحن العملاق الذي يعبره آلاف الحاويات يومياً.',
    highlights: [
      'عمليات سطو كبرى على خزائن البنوك المركزية',
      'ميناء الحاويات والرافعات الثقيلة للمواجهات الواسعة',
      'شبكة مترو معلقة وجسور متحركة فوق القناة الرئيسية',
    ],
    climate: 'سماء صافية نهاراً · انعكاسات ليلية على الزجاج',
  },
];

export const EDITIONS: GameEdition[] = [
  {
    id: 'standard',
    nameAr: 'الإصدار القياسي',
    nameEn: 'Standard Edition',
    priceUsd: 69.99,
    releaseWindow: 'خريف 2026',
    summary: 'التجربة الكاملة لقصة لوسيا وجيسون مع الوصول الكامل لعالم ليونيدا المفتوح.',
    features: [
      'النسخة الكاملة من طور القصة الفردي في ولاية ليونيدا',
      'إتاحة الدخول إلى الطور الجماعي عند الإطلاق الرسمي',
      'حزمة المركبات الكلاسيكية للطلب المسبق',
    ],
  },
  {
    id: 'deluxe',
    nameAr: 'الإصدار الفاخر',
    nameEn: 'Deluxe Edition',
    priceUsd: 89.99,
    releaseWindow: 'وصول مبكر 72 ساعة',
    summary: 'مخصص لعشاق التخصيص والسرعة مع محتوى إضافي داخل فايس سيتي ووصول مبكر قبل الإطلاق العام.',
    features: [
      'كل محتويات الإصدار القياسي مع وصول مبكر لمدة 72 ساعة',
      'مجموعة سيارات رياضية حصرية مطلية بألوان غروب فايس',
      'عقار ساحلي مبدئي ومرآب يتسع لعشر مركبات في الطور الجماعي',
      'حزمة أزياء وإكسسوارات أوشن بيتش لكل من لوسيا وجيسون',
    ],
  },
  {
    id: 'collector',
    nameAr: 'نسخة المقتنين',
    nameEn: 'Collector’s Box',
    priceUsd: 149.99,
    releaseWindow: 'كمية محدودة · خريف 2026',
    summary: 'إصدار مادي ورقمي فاخر لهواة الاقتناء يتضمن خريطة ليونيدا المطبوعة وكتيب الرسوم الفنية.',
    features: [
      'كل مزايا الإصدار الفاخر مع رموز رقمية حصرية',
      'خريطة ولاية ليونيدا مطبوعة على قماش عالي الكثافة (60×90 سم)',
      'كتاب الأعمال الفنية المجلد من 160 صفحة مع رسومات تطوير العالم',
      'حافظة معدنية منقوشة بشعار GTA VI وميدالية مفاتيح أوشن فيو',
    ],
  },
];

export const TRAILER_CHAPTERS: TrailerChapter[] = [
  {
    id: 'ch1',
    timestamp: '00:00',
    title: 'شروق الشمس على ليونيدا',
    location: 'أفق فايس سيتي',
    description: 'لقطة افتتاحية تستعرض الكثافة الحضرية الجديدة، انعكاسات المياه الفيزيائية، وحركة المرور الحية عبر الطريق البحري.',
    image: '/src/assets/images/gta6_hero_vice_sunset_1795441495240.jpg',
  },
  {
    id: 'ch2',
    timestamp: '00:34',
    title: 'بداية التحالف',
    location: 'أوشن بيتش',
    description: 'لقاء لوسيا وجيسون عند الغسق وبداية التخطيط لسلسلة عمليات عالية المخاطر عبر الولاية.',
    image: '/src/assets/images/gta6_char_lucia_1795441494043.jpg',
  },
  {
    id: 'ch3',
    timestamp: '01:02',
    title: 'العبور في المستنقعات',
    location: 'غراس ريفرز',
    description: 'مطاردة بالزوارق المروحية وسط الضباب الكثيف وأشجار السرو في جنوب ليونيدا.',
    image: '/src/assets/images/gta6_region_swamp_1795441491766.jpg',
  },
  {
    id: 'ch4',
    timestamp: '01:28',
    title: 'الهروب عبر الجسر البحري',
    location: 'ليونيدا كيز',
    description: 'سباق سريع أسفل الجسور الفيروزية بينما تغرب الشمس خلف أرخبيل الجزر المرجانية.',
    image: '/src/assets/images/gta6_region_keys_1795441494388.jpg',
  },
];
